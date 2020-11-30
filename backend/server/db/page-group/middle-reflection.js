const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");
const promptPages = require("../prompt");

const getMiddleReflectionPageGroup = async function (scenarioID) {
  const page = await pages.getPagesBy({
    scenarioID,
    order: pageOrder.MIDDLE_REFLECTION,
  })[0];

  return {
    [pageType.PLAIN]: page,
    [pageType.PROMPT]: await promptPages.getPromptsBy({ pageID: page.id }),
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

const createMiddleReflectionPageGroup = async function (
  scenarioID,
  text,
  prompts
) {
  const page = await pages.createPage(
    pageOrder.MIDDLE_REFLECTION,
    pageType.PROMPT,
    text,
    scenarioID
  );

  return {
    [pageType.PLAIN]: page,
    [pageType.PROMPT]: await Promise.all(
      prompts.map((prompt) => promptPages.createPrompt(page.id, prompt))
    ),
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

module.exports = {
  getMiddleReflectionPageGroup,
  createMiddleReflectionPageGroup,
};
