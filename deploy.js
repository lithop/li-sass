require("dotenv").config()
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  localRoot: __dirname + "/dist/css",
  remoteRoot: process.env.FTP_REMOTE_ROOT,
  include: ["*.css"],
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy.deploy(config);
ftpDeploy.on("uploading", function (data) {
  console.log("Uploading: " + data.filename);
});
ftpDeploy.on("uploaded", function () {
  console.log("\x1b[32m✔︎ \x1b[0mUpload successful!");
});
ftpDeploy.on("upload-error", function (data) {
  console.log(data.err);
});