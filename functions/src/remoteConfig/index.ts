import * as functions from "firebase-functions";

export const onUpdate = functions.remoteConfig.onUpdate(
  (templateVersion, _context) => {
    // do anything
    console.log(`Remote config updated to ${templateVersion.versionNumber}`);
  }
);
