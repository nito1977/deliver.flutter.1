var path = require("path");
// Los  datos del jdk y certificado están en keypass
var fs = require("fs");
require('child_process').execSync("cordova build android --release ", {
  cwd: __dirname,
  stdio: [0, 1, 2]
});

require('child_process')
  .execSync("\"%ANDROID_HOME%/build-tools/28.0.3/zipalign\" -v -f -p 4  \"platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk\" \"releases/output/android-unsigned-aligned.apk\"", {

    cwd: __dirname,
    stdio: [0, 1, 2]
  });

require('child_process')
  .execSync("\"%ANDROID_HOME%/build-tools/28.0.3/apksigner\" sign --ks \"releases/android.keystore.jks\" --ks-pass pass:ams2018 --out \"releases/output/android-signed-aligned.apk\" \"releases/output/android-unsigned-aligned.apk\"", {
    cwd: __dirname,
    stdio: [0, 1, 2]
  });
