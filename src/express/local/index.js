const express = require("express");

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.send();
  } else {
    res
      .status(303)
      .location(
        "/auth/login?redirectUrl=" + encodeURIComponent(req.originalUrl),
      )
      .send();
  }
});

module.exports = router;
