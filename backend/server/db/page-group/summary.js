const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");

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
