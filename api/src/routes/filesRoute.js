const { Router } = require("express");
const { getFilesData, getFiles } = require("../controllers/filesController");
const { fileDataParamValidations } = require("../middlewares/files");

const router = Router();

router.get("/data", fileDataParamValidations, getFilesData);
router.get("/list", getFiles);

module.exports = router;
