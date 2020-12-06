const { pageOrder, pageType } = require("../../constant");
const pages = require("../pages");

const getIntroPageGroup = async function (scenarioID) {
  console.log(scenarioID);
  console.log(pageOrder.INTRO);
  return {
    [pageType.PLAIN]: (await pages.getPagesBy({
      scenarioID,
      order: pageOrder.INTRO,
    }))[0],
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

const updateIntroBodyText = async function ( scenarioID, text ) {
  const page = (await pages.getPagesBy({
    scenarioID,
    order: pageOrder.INTRO
  }))[0];
  const updatedPage = await pages.updatePage(page.id, text);
}
// const updatePage = async function (pageID, bodyText) {
//   const query = "UPDATE pages SET body_text = $2 WHERE id = $1  RETURNING *";
//   const { rows } = await pool.query(query, [pageID, bodyText]);
//   return rows.length > 0 ? rows[0] : null;
// };

module.exports = {
  getIntroPageGroup,
  createIntroPageGroup,
  updateIntroBodyText
};
