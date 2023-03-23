const filesService = require("../services/filesService");
const logger = require("../loaders/logger");
const { request, response } = require("express");

const getFilesData = async (req = request, res = response, next) => {
  logger.silly("Files Controller - getFilesData: called...");
  try {
    res.json(await filesService.getFilesData(req.query.fileName));
  } catch (error) {
    next(error);
  }
};

const getFiles = async (req = request, res = response, next) => {
  logger.silly("Files Controller - getFiles: called...");
  try {
    res.json(await filesService.getFiles());
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFilesData,
  getFiles,
};
