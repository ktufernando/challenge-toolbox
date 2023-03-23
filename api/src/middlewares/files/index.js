const { check } = require("express-validator");
const { query } = require("express-validator");
const { validationResult } = require("../commons");

const _fileNameValid = query("fileName", "fileName is invalid")
  .isString()
  .custom((value) => {
    if (!value.endsWith(".csv")) {
      throw new Error('fileName must end with "csv"');
    }
    return true;
  });

const fileDataParamValidations = [_fileNameValid];
module.exports = {
  fileDataParamValidations,
};
