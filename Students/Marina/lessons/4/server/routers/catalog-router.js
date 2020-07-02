let express = require("express");
let fs = require("fs");
let writer = require("../Utils/writer");
let catalogServices = require("../Services/catalog");
let { load } = require("../controllers/catalog_controller");

let router = express.Router();
router.get("/", load);

router.post("/", (req, res) => {
  fs.readFile("./server/db/catalog.json", "utf-8", (err, data) => {
    if (!err) {
      let { newCatalog, idNewItem } = catalogServices.add(
        JSON.parse(data),
        req.body
      );
      writer("./server/db/catalog.json", newCatalog).then((status) => {
        if (status) {
          res.json({ id: idNewItem });
        } else {
          res.sendStatus(500);
        }
      });
    }
  });
});

module.exports = router;
