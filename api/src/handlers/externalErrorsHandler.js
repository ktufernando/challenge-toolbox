const AppError = require("../errors/appError");

const handleError = (err, data) => {
  let msj = JSON.stringify(err);
  if (msj.includes("code 500")) {
    throw new AppError("External api response with error.", 502, data);
  } else if (msj.includes("code 400")) {
    throw new AppError("External api requested with bad request.", 502, data);
  } else if (msj.includes("code 401")) {
    throw new AppError(
      "External api requested with bad credentials.",
      504,
      data
    );
  } else if (msj.includes("code 404")) {
    throw new AppError("External api requested not found.", 504, data);
  } else {
    throw new AppError("External api is offline.", 504, data);
  }
};

module.exports = {
  handleError,
};
