const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");

const createTaskPageGroup = async function (scenarioID, text) {
  // TODO: finish this
  return {
    [pageType.PLAIN]: null,
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

module.exports = {
  createTaskPageGroup,
};
