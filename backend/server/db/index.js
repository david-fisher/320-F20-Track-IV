const scenario = require("./scenario");
const pages = require("./pages");
const partof = require("./partof");
const prompt = require("./prompt");
const conversationTask = require("./conversation_task");
const stakeholders = require("./stakeholders");
const issues = require("./issues");
const score = require("./score");
const mcq = require("./mcq");
const question = require("./question");
const mcqOption = require("./mcq_option");
const users = require("./users");
const courses = require("./courses");
const instructs = require("./instructs");
const enrolled = require("./enrolled");
const submissions = require("./submissions");
const response = require("./response");
const conversationChoices = require("./conversation_choices");
const mcqResponse = require("./mcq_response");
const promptResponse = require("./prompt_response");
const pageGroup = require("./page-group");

module.exports = {
  scenario,
  pages,
  partof,
  prompt,
  conversationTask,
  stakeholders,
  issues,
  score,
  mcq,
  question,
  mcqOption,
  users,
  courses,
  instructs,
  enrolled,
  submissions,
  response,
  conversationChoices,
  mcqResponse,
  promptResponse,
  pageGroup
};
