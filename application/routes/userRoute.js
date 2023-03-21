const router = require("express").Router();

router.get("/", (req, res) => {
  const props = {
    name: "dzaki",
    age: 24,
  };

  res.render("pages/index", {
    layout: "layouts/main-layout",
    ...props,
  });
});

module.exports = router;
