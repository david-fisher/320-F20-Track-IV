const pages = require(".pages");
const promptPages = require(".prompt");
const mcqPages = require(".mcq");
const question = require(".question");
const mcqOption = require(".mcq_option");
const conversationTaskPages = require(".conversation_task");

let constIdx = 1;
const INTRO = constIdx++;
const TASK = constIdx++;
const INITIAL_REFLECTION = constIdx++;
const INIT_ACTION = constIdx++;
const INIT_ACTION_SUBSEQUENT = constIdx++;
const CONVERSATION = constIdx++;
const MIDDLE_REFLECTION = constIdx++;
const FINAL_ACTION = constIdx++;
const SUMMARY = constIdx++;
const FEEDBACK = constIdx++;
const FINAL_REFLECTION = constIdx++;
const CONCLUSION = constIdx++;

const PLAIN = "PLAIN";
const PROMPT = "PRMPT";
const MCQ = "MCQ";
const CONV = "CONV";

const pageOrder = {
  INTRO,
  TASK,
  INITIAL_REFLECTION,
  INIT_ACTION,
  INIT_ACTION_SUBSEQUENT,
  CONVERSATION,
  MIDDLE_REFLECTION,
  FINAL_ACTION,
  SUMMARY,
  FEEDBACK,
  FINAL_REFLECTION,
  CONCLUSION,
};

const pageType = {
  PLAIN,
  PROMPT,
  MCQ,
  CONV,
};

const createIntroPageGroup = async function (scenarioID, text) {
  return {
    PLAIN: await pages.createPage(
      pageOrder.INTRO,
      pageType.PLAIN,
      text,
      scenarioID
    ),
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

const createTaskPageGroup = async function (scenarioID, text) {
  // TODO: finish this
  return {
    PLAIN: null,
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

const createInitialReflectionPageGroup = async function (
  scenarioID,
  text,
  prompts
) {
  const page = await pages.createPage(
    pageOrder.INITIAL_REFLECTION,
    pageType.PROMPT,
    text,
    scenarioID
  );

  return {
    PLAIN: page,
    PROMPT: await Promise.all(
      prompts.map((prompt) => promptPages.createPrompt(page.id, prompt))
    ),
    MCQ: null,
    CONV: null,
  };
};

const createInitActionPageGroup = async function (
  scenarioID,
  text,
  prompts,
  mcqContent,
  questionContent,
  mcqOptionContents
) {
  const page = await pages.createPage(
    pageOrder.INIT_ACTION,
    pageType.MCQ,
    text,
    scenarioID
  );
  const mcq = await mcqPages.createMcq(page.id, mcqContent);
  const quest = await question.createQuestion(mcq.id, questionContent);
  const mcqOptions = await Promise.all(
    mcqOptionContents.map((option) =>
      mcqOption.createMcqOption(quest.id, option)
    )
  );

  return {
    PLAIN: page,
    PROMPT: await Promise.all(
      prompts.map((prompt) => promptPages.createPrompt(page.id, prompt))
    ),
    MCQ: {
      mcq,
      question: quest,
      mcqOptions,
    },
    CONV: null,
  };
};

const createInitActionSubsequentPageGroup = async function (scenarioID, text) {
  // TODO: figure out what this is.
};

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
    PLAIN: page,
    PROMPT: null,
    MCQ: null,
    CONV: convTask,
  };
};

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
    PLAIN: page,
    PROMPT: await Promise.all(
      prompts.map((prompt) => promptPages.createPrompt(page.id, prompt))
    ),
    MCQ: null,
    CONV: null,
  };
};

const createFinalActionPageGroup = async function (
  scenarioID,
  text,
  prompts,
  mcqContent,
  questionContent,
  mcqOptionContents
) {
  const page = await pages.createPage(
    pageOrder.FINAL_ACTION,
    pageType.MCQ,
    text,
    scenarioID
  );
  const mcq = await mcqPages.createMcq(page.id, mcqContent);
  const quest = await question.createQuestion(mcq.id, questionContent);
  const mcqOptions = await Promise.all(
    mcqOptionContents.map((option) =>
      mcqOption.createMcqOption(quest.id, option)
    )
  );

  return {
    PLAIN: page,
    PROMPT: await Promise.all(
      prompts.map((prompt) => promptPages.createPrompt(page.id, prompt))
    ),
    MCQ: {
      mcq,
      question: quest,
      mcqOptions,
    },
    CONV: null,
  };
};

const createSummaryPageGroup = async function (scenarioID, text) {
  return {
    PLAIN: await pages.createPage(
      pageOrder.SUMMARY,
      pageType.PLAIN,
      text,
      scenarioID
    ),
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

const createFeedbackPageGroup = async function (scenarioID, text) {
  return {
    PLAIN: await pages.createPage(
      pageOrder.FEEDBACK,
      pageType.PLAIN,
      text,
      scenarioID
    ),
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

const createFinalReflectionPageGroup = async function (
  scenarioID,
  text,
  prompts
) {
  const page = await pages.createPage(
    pageOrder.FINAL_REFLECTION,
    pageType.PROMPT,
    text,
    scenarioID
  );

  return {
    PLAIN: page,
    PROMPT: await Promise.all(
      prompts.map((prompt) => promptPages.createPrompt(page.id, prompt))
    ),
    MCQ: null,
    CONV: null,
  };
};

const createConclusionPageGroup = async function (scenarioID, text) {
  return {
    PLAIN: await pages.createPage(
      pageOrder.CONCLUSION,
      pageType.PLAIN,
      text,
      scenarioID
    ),
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

module.exports = {
  pageOrder,
  pageType,
  createIntroPageGroup,
  createTaskPageGroup,
  createInitialReflectionPageGroup,
  createInitActionPageGroup,
  createInitActionSubsequentPageGroup,
  createConversationPageGroup,
  createMiddleReflectionPageGroup,
  createFinalActionPageGroup,
  createSummaryPageGroup,
  createFeedbackPageGroup,
  createFinalReflectionPageGroup,
  createConclusionPageGroup,
};
