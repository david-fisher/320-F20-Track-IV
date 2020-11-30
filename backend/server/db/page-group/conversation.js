const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");
const conversationTaskPages = require("../conversation_task");

const createConversationPageGroup = async function (
  scenarioID,
  text,
  convTaskContent
) {
  const page = await pages.createPage(
    pageOrder.CONVERSATION,
    pageType.CONV,
    text,
    scenarioID
  );
  const convTask = await conversationTaskPages.createConversationTask(
    page.id,
    convTaskContent
  );
  return {
    [pageType.PLAIN]: page,
    [pageType.PROMPT]: null,
    [pageType.MCQ]: null,
    [pageType.CONV]: convTask,
  };
};

module.exports = {
  createConversationPageGroup,
};
