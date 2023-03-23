const logger = require("../loaders/logger");
const {
  getAllFiles,
  getFileByName,
} = require("../repositories/secretFilesRepository");

const getFilesData = async (fileName) => {
  try {
    logger.silly("Files Service - getFilesData: called...");
    if (fileName) {
      const fileData = await _getFileData(fileName);
      return [fileData];
    } else {
      const filesData = await _getAllFilesData();
      return filesData;
    }
  } catch (error) {
    throw error;
  }
};

const _getFileData = async (fileName) => {
  try {
    const fileData = await getFileByName(fileName);
    const lines = fileData
      .trim()
      .split("\n")
      .slice(1)
      .map((line) => line.trim().split(","))
      .filter(([_, text, number, hex]) => text && !isNaN(number) && hex)
      .map(([_, text, number, hex]) => ({
        text,
        number: parseInt(number),
        hex,
      }));
    return { file: fileName, lines };
  } catch (error) {
    throw error;
  }
};

const _getAllFilesData = async () => {
  try {
    const { files } = await getAllFiles();
    const filesData = await Promise.all(
      files.map(async (fileName) => {
        try {
          return await _getFileData(fileName);
        } catch (error) {}
      })
    );
    return filesData.filter((e) => e && e.lines.length);
  } catch (error) {
    throw error;
  }
};

const getFiles = async () => {
  logger.silly("Files Service - getFiles: called...");
  try {
    const { files } = await getAllFiles();
    return files;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getFilesData,
  getFiles,
};
