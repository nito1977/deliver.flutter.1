const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "deploy@fspatin.com",
    // Password optional, prompted if none given
    password: "d3Pl0y215",
    host: "c1110355.ferozo.com",
    port: 21,
    localRoot: __dirname + "/www/",
    remoteRoot: "/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*", "**/*", ".htaccess", "assets/**/*", "assets/video/video.mp4", "api/**/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
    // Timeout in milliseconds (default: 30000)
    timeout: 120000
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));