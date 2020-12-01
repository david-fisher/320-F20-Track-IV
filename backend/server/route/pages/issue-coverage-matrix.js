const router = require("express").Router();
const { httpStatusCode, pageOrder } = require("../../constant");
const { auth, headers } = require("../../middleware");
const db = require("../../db");
const { createInvalidResponse } = require("../../utils");

router.get(
  "/",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { simulation_id: scenarioID } = req.params;
    let page, conversationTask, stakeholders, scoresOfStakeholders, matrix;

    // get plain page of scenario whose order is conversation
    try {
      page = await db.pages.getPagesBy({
        scenarioID,
        order: pageOrder.CONVERSATION,
      })[0];
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    // get conversationTask page
    try {
      conversationTask = await db.conversationTask.getConversationTask(page.id);
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    // get stakeholders of scenario
    try {
      stakeholders = await db.stakeholders.getStakeholdersBy({
        scenarioID,
        convTaskID: conversationTask.id,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    // get scores of each stakeholder
    try {
      scoresOfStakeholders = await Promise.all(
        stakeholders.map((stakeholder) => ({
          stakeholder,
          scores: db.score.getScoresBy({ stakeholderID: stakeholder.id }),
        }))
      );
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    // get issues of each score and create matrix
    try {
      matrix = (
        await Promise.all(
          scoresOfStakeholders.map((scoresOfStakeholder) => ({
            stakeholder: scoresOfStakeholder.stakeholder,
            issues: scoresOfStakeholder.scores.map((score) => ({
              score,
              issue: db.issues.getIssue(score.issue_id),
            })),
          }))
        )
      ).reduce((acc, el) => {
        acc[el.stakeholder] = el.issues.reduce((acc, el) => {
          acc[el.issue] = el.score;
          return acc;
        }, {});
        return acc;
      }, {});

      res.status(httpStatusCode.success.OK);
      res.json({
        matrix,
        success: true,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }
  }
);

router.post(
  "/stakeholder",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { simulation_id: scenarioID } = req.params;
    const { name = null, description = null, conversation = null } = req.body;
    let page, conversationTask;

    // get plain page of scenario whose order is conversation
    try {
      page = await db.pages.getPagesBy({
        scenarioID,
        order: pageOrder.CONVERSATION,
      })[0];
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    // get conversationTask page
    try {
      conversationTask = await db.conversationTask.getConversationTask(page.id);
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    // create stakeholder of scenario
    try {
      const stakeholder = await db.stakeholders.createStakeholder(
        scenarioID,
        conversationTask.id,
        name,
        description,
        conversation
      );
      res.status(httpStatusCode.success.CREATED);
      res.json({
        stakeholder,
        success: true,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }
  }
);

router.post(
  "/issue-score",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const {
      issue: { name, description } = null,
      issue_id: issueID = null,
      stakeholder_id: stakeholderID = null,
      score: scoreValue = null,
    } = req.body;
    let issue;

    if (!scoreValue) {
      res.status(httpStatusCode.failed.BAD_REQUEST);
      return res.json(createInvalidResponse("'score' is not defined"));
    }

    // get stakeholder
    try {
      await db.stakeholders.getStakeholder(stakeholderID);
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      return res.json(createInvalidResponse(error.message));
    }

    // create issue (if not exists)
    if (issueID !== null) {
      try {
        issue = await db.issues.getIssue(issueID);
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        return res.json(createInvalidResponse(error.message));
      }
    } else if (issue !== null) {
      try {
        issue = await db.issues.createIssue(name, description);
      } catch (error) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(createInvalidResponse(error.message));
      }
    } else {
      res.status(httpStatusCode.failed.BAD_REQUEST);
      return res.json(
        createInvalidResponse("Either 'issue_id' or 'issue' is not defined")
      );
    }

    // create score
    try {
      if (!(await db.score.getScore(stakeholderID, issue.id))) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        return res.json(
          createInvalidResponse(
            "Score of stakeholder and issue already exists."
          )
        );
      }

      const score = db.score.createScore(stakeholderID, issue.id, scoreValue);
      res.status(httpStatusCode.success.CREATED);
      res.json({
        success: true,
        score,
        issue,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.BAD_REQUEST);
      return res.json(createInvalidResponse(error.message));
    }
  }
);

module.exports = router;
