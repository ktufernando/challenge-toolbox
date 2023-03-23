const logger = require("../logger");
const axios = require("axios");
const config = require("../../config");

const REQUEST_TIMEOUT = 4 * 60 * 1000;
const defaultOptions = {
  method: "GET",
  timeout: REQUEST_TIMEOUT,
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
};

axios.interceptors.request.use((axiosConfig) => {
  logger.silly(`[HttpClient]: Making request to URL ${axiosConfig.url}`);
  axiosConfig.headers[
    "Authorization"
  ] = `Bearer ${config.secretFilesApi.token}`;
  logger.silly(
    `[HttpClient]: Request config ${JSON.stringify(axiosConfig, null, 2)}`
  );
  return axiosConfig;
});

axios.interceptors.response.use(
  (response) => {
    logger.silly(
      `[HttpClient]: Response success with data: ${JSON.stringify(
        response.data,
        null,
        2
      )}`
    );
    return response;
  },
  (error) => {
    logger.error(
      `[HttpClient]: Getting the following error: ${JSON.stringify(
        error,
        null,
        2
      )}`
    );
    return Promise.reject(error);
  }
);

fetch = async (url, options) => {
  options = { ...defaultOptions, ...options };
  let id = null;
  try {
    const abort = axios.CancelToken.source();
    const timeout = options.timeout || REQUEST_TIMEOUT;
    id = setTimeout(() => abort.cancel(`Timeout of ${timeout}ms.`), timeout);
    const { data } = await axios.request({
      ...options,
      url,
    });
    clearTimeout(id);
    return data;
  } catch (err) {
    if (err.response) {
      logger.error(
        `[HttpClient]: Getting the following error response: ${JSON.stringify(
          err.response.data,
          null,
          2
        )}`
      );
    }
    if (id) clearTimeout(id);
    throw err;
  }
};

module.exports = {
  fetch,
};
