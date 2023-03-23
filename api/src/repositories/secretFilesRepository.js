const config = require("../config");
const logger = require("../loaders/logger");
const { fetch } = require("../loaders/fetch");
const { handleError } = require("../handlers/externalErrorsHandler");

const getAllFiles = async () => {
  logger.silly("External Files Repository - getFiles: called...");

  try {
    const url = `${config.secretFilesApi.basePath}/files`;
    return await fetch(url);
  } catch (err) {
    handleError(err, err.response.data);
  }
};

const getFileByName = async (name) => {
  logger.silly("External Files Repository - getFileByName: called...");

  try {
    const url = `${config.secretFilesApi.basePath}/file/${name}`;
    return await fetch(url);
  } catch (err) {
    handleError(err, err.response.data);
  }
};

module.exports = {
  getAllFiles,
  getFileByName,
};
