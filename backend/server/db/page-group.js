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

exports.pageOrder = {
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

exports.pageType = {
  PLAIN,
  PROMPT,
  MCQ,
  CONV,
};

exports.createIntroPageGroup = async function (scenarioID, text) {
  return {
    PLAIN: await pages.createPage(
      exports.pageOrder.INTRO,
      exports.pageType.PLAIN,
      text,
      scenarioID
    ),
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

exports.createTaskPageGroup = async function (scenarioID, text) {
  // TODO: finish this
  return {
    PLAIN: null,
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

exports.createInitialReflectionPageGroup = async function (
  scenarioID,
  text,
  prompts
) {
  const page = await pages.createPage(
    exports.pageOrder.INITIAL_REFLECTION,
    exports.pageType.PROMPT,
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

exports.createInitActionPageGroup = async function (
  scenarioID,
  text,
  prompts,
  mcqContent,
  questionContent,
  mcqOptionContents
) {
  const page = await pages.createPage(
    exports.pageOrder.INIT_ACTION,
    exports.pageType.MCQ,
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

exports.createInitActionSubsequentPageGroup = async function (
  scenarioID,
  text
) {
  // TODO: figure out what this is.
};

exports.createConversationPageGroup = async function (
  scenarioID,
  text,
  convTaskContent
) {
  const page = await pages.createPage(
    exports.pageOrder.CONVERSATION,
    exports.pageType.CONV,
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

exports.createMiddleReflectionPageGroup = async function (
  scenarioID,
  text,
  prompts
) {
  const page = await pages.createPage(
    exports.pageOrder.MIDDLE_REFLECTION,
    exports.pageType.PROMPT,
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

exports.createFinalActionPageGroup = async function (
  scenarioID,
  text,
  prompts,
  mcqContent,
  questionContent,
  mcqOptionContents
) {
  const page = await pages.createPage(
    exports.pageOrder.FINAL_ACTION,
    exports.pageType.MCQ,
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

exports.createSummaryPageGroup = async function (scenarioID, text) {
  return {
    PLAIN: await exports.createPage(
      exports.pageOrder.SUMMARY,
      exports.pageType.PLAIN,
      text,
      scenarioID
    ),
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

exports.createFeedbackPageGroup = async function (scenarioID, text) {
  return {
    PLAIN: await exports.createPage(
      exports.pageOrder.FEEDBACK,
      exports.pageType.PLAIN,
      text,
      scenarioID
    ),
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};

exports.createFinalReflectionPageGroup = async function (
  scenarioID,
  text,
  prompts
) {
  const page = await pages.createPage(
    exports.pageOrder.FINAL_REFLECTION,
    exports.pageType.PROMPT,
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

exports.createConclusionPageGroup = async function (scenarioID, text) {
  return {
    PLAIN: await exports.createPage(
      exports.pageOrder.CONCLUSION,
      exports.pageType.PLAIN,
      text,
      scenarioID
    ),
    PROMPT: null,
    MCQ: null,
    CONV: null,
  };
};
