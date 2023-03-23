process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  port: process.env.PORT ? process.env.PORT : 8080,
  api: {
    prefix: "",
  },
  log: {
    level: process.env.NODE_ENV === "production" ? "error" : "silly",
  },
  swagger: {
    path: "/documentation",
  },
  secretFilesApi: {
    token: "aSuperSecretKey",
    basePath: "https://echo-serv.tbxnet.com/v1/secret",
  },
};
