const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");

const getSummaryPageGroup = async function (scenarioID) {
  return {
    [pageType.PLAIN]: await pages.getPagesBy({
      scenarioID,
      order: pageOrder.SUMMARY,
    })[0],
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

const createSummaryPageGroup = async function (scenarioID, text) {
  return {
    [pageType.PLAIN]: await pages.createPage(
      pageOrder.SUMMARY,
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
  createSummaryPageGroup,
};
