const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/pages/:page_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { page_id: pageID } = req.params;
      try {
        const page = await db.pages.getPage(pageID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...page,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/pages/:page_id",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { page_id: pageID } = req.params;
      let { body_text = null } = req.body;

      try {
        const page = await db.pages.getPage(pageID);
        body_text = body_text || page.body_text;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.pages.updatePage(pageID, body_text);
        res.status(httpStatusCode.success.UPDATED);
        res.json({
          success: true,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        res.json(createInvalidResponse(error.message));
      }
    }
  );

module.exports = router;
