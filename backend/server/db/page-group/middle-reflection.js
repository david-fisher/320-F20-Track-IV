const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");
const promptPages = require("../prompt");

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
  createMiddleReflectionPageGroup,
};
