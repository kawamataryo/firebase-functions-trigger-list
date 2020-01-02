import * as functions from "firebase-functions";

exports.showConfigDiff = functions.remoteConfig.onUpdate(
  (templateVersion, _context) => {
    // do anything
    console.log(`Remote config updated to ${templateVersion.versionNumber}`);
  }
);
