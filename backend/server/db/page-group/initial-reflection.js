const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");
const promptPages = require("../prompt");

const getInitialReflectionPageGroup = async function (scenarioID) {
  const page = (await pages.getPagesBy({
    scenarioID,
    order: pageOrder.INITIAL_REFLECTION,
  }))[0];

  return {
    [pageType.PLAIN]: page,
    [pageType.PROMPT]: await promptPages.getPromptsBy({ pageID: page.id }),
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

const createInitialReflectionPageGroup = async function (
  scenarioID,
  text,
  prompts
) {
  const page = await pages.createPage(
    pageOrder.INITIAL_REFLECTION,
    pageType.PROMPT,
    text,
    scenarioID
  );

  return {
    [pageType.PLAIN]: page,
    [pageType.PROMPT]: await Promise.all(
      prompts.map((prompt, ind) => promptPages.createPrompt(page.id, prompt, ind+1))
    ),
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

module.exports = {
  getInitialReflectionPageGroup,
  createInitialReflectionPageGroup,
};
