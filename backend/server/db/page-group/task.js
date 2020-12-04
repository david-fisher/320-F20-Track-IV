const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");

const getTaskPageGroup = async function (scenarioID, text) {
  return {
    [pageType.PLAIN]: (await pages.getPagesBy({
      scenarioID,
      order: pageOrder.TASK,
    }))[0],
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

const createTaskPageGroup = async function (scenarioID, text) {
  return {
    [pageType.PLAIN]: await pages.createPage(
      pageOrder.TASK,
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
  getTaskPageGroup,
  createTaskPageGroup,
};
