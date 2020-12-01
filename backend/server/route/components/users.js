const router = require("express").Router();
const db = require("../../db");

const { auth, headers } = require("../../middleware");
const { httpStatusCode } = require("../../constant");
const { createInvalidResponse } = require("../../utils");

router
  .get(
    "/users",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { userID } = req.user;

      try {
        const user = await db.users.getUser(userID);
        res.status(httpStatusCode.success.OK);
        res.json({
          success: true,
          ...user,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }
    }
  )
  .put(
    "/users",
    headers.areHeadersValid,
    auth.isAuthenticated,
    async (req, res) => {
      const { userID } = req.user;
      let {
        full_name: fullName = null,
        email = null,
        demographics = null,
      } = req.body;

      try {
        const user = await db.users.getUser(userID);
        fullName = fullName || user.full_name;
        email = email || user.email;
        demographics = demographics || user.demographics;
      } catch (error) {
        res.status(httpStatusCode.failed.NOT_FOUND);
        res.json(createInvalidResponse(error.message));
      }

      try {
        await db.users.updateUser(userID, fullName, email, demographics);
        res.status(httpStatusCode.success.UPDATED);
        res.json({
          success: true,
        });
      } catch (error) {
        res.status(httpStatusCode.failed.BAD_REQUEST);
        res.json(createInvalidResponse(error.message));
      }
    }
  );

module.exports = router;
