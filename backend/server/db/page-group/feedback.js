const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");

const createFeedbackPageGroup = async function (scenarioID, text) {
  return {
    [pageType.PLAIN]: await pages.createPage(
      pageOrder.FEEDBACK,
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
  createFeedbackPageGroup,
};
