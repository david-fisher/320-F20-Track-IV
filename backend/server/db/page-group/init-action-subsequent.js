const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");
const promptPages = require("../prompt");
const mcqPages = require("../mcq");
const question = require("../question");
const mcqOption = require("../mcq_option");

const getInitActionSubsequentPageGroup = async function (scenarioID, text) {
  return {
    [pageType.PLAIN]: null,
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

const createInitActionSubsequentPageGroup = async function (scenarioID, text) {
  return {
    [pageType.PLAIN]: null,
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: null,
  };
};

module.exports = {
  getInitActionSubsequentPageGroup,
  createInitActionSubsequentPageGroup,
};
