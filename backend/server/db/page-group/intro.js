const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");

const getIntroPageGroup = async function (scenarioID) {
  return {
    [pageType.PLAIN]: await pages.getPagesBy({
      scenarioID,
      order: pageOrder.INTRO,
    })[0],
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

const createIntroPageGroup = async function (scenarioID, text) {
  return {
    [pageType.PLAIN]: await pages.createPage(
      pageOrder.INTRO,
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
  getIntroPageGroup,
  createIntroPageGroup,
};
