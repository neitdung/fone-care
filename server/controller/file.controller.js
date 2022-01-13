const multer = require("multer");
const DEST_ASSETS = "assets/images";
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DEST_ASSETS);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + Math.round(Math.random() * 1e9)
    );
  },
});
var upload = multer({
  storage: storage,
}).fields([{ name: "image", maxCount: 4 }]);

exports.uploadImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({
        error: true,
        message: `Cannot upload files. Error is ${err}`,
      });
    } else {
      res.status(200).json({ error: false, path: req.files });
    }
  });
};
