const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");
const promptPages = require("../prompt");
const mcqPages = require("../mcq");
const question = require("../question");
const mcqOption = require("../mcq_option");

const getFinalActionPageGroup = async function (scenarioID) {
  const page = await pages.getPagesBy({
    scenarioID,
    order: pageOrder.FINAL_ACTION,
  })[0];
  const mcq = await mcqPages.getMcq(page.id);
  const quest = await question.getQuestionsBy({ mcqID: mcq.id })[0];
  const mcqOptions = await mcqOption.getMcqOptionsBy({ questionID: quest.id });

  return {
    [pageType.PLAIN]: page,
    [pageType.PROMPT]: await promptPages.getPromptsBy({ pageID: page.id }),
    [pageType.MCQ]: {
      mcq,
      question: quest,
      mcqOptions,
    },
    [pageType.CONV]: null,
  };
};

const createFinalActionPageGroup = async function (
  scenarioID,
  text,
  prompts,
  mcqContent,
  questionContent,
  mcqOptionContents
) {
  const page = await pages.createPage(
    pageOrder.FINAL_ACTION,
    pageType.MCQ,
    text,
    scenarioID
  );
  const mcq = await mcqPages.createMcq(page.id, mcqContent);
  const quest = await question.createQuestion(mcq.id, questionContent);
  const mcqOptions = await Promise.all(
    mcqOptionContents.map((option) =>
      mcqOption.createMcqOption(quest.id, option)
    )
  );

  return {
    [pageType.PLAIN]: page,
    [pageType.PROMPT]: await Promise.all(
      prompts.map((prompt) => promptPages.createPrompt(page.id, prompt))
    ),
    [pageType.MCQ]: {
      mcq,
      question: quest,
      mcqOptions,
    },
    [pageType.CONV]: null,
  };
};

module.exports = {
  getFinalActionPageGroup,
  createFinalActionPageGroup,
};
