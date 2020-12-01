const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");

const getConclusionPageGroup = async function (scenarioID) {
  return {
    [pageType.PLAIN]: await pages.getPagesBy({
      scenarioID,
      order: pageOrder.CONCLUSION,
    })[0],
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

const createConclusionPageGroup = async function (scenarioID, text) {
  return {
    [pageType.PLAIN]: await pages.createPage(
      pageOrder.CONCLUSION,
      pageType.PLAIN,
      text,
      scenarioID
    ),
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

module.exports = {
  createConclusionPageGroup,
  getConclusionPageGroup,
};
