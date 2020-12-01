const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router.get(
  "/response/:response_id",
  headers.areHeadersValid,
  auth.isAuthenticated,
  async (req, res) => {
    const { response_id: responseID } = req.params;

    try {
      const response = await db.response.getResponse(responseID);
      res.status(httpStatusCode.success.OK);
      res.json({
        success: true,
        ...response,
      });
    } catch (error) {
      res.status(httpStatusCode.failed.NOT_FOUND);
      res.json(createInvalidResponse(error.message));
    }
  }
);

module.exports = router;
