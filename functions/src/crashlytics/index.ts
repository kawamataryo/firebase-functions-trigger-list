import * as functions from "firebase-functions";

export const onNew = functions.crashlytics
  .issue()
  .onNew(async (issue, _context) => {
    // do anything
    console.log(`New issue has occurred. ${issue.issueTitle}`);
  });

export const onRegressed = functions.crashlytics
  .issue()
  .onRegressed(async (issue, _context) => {
    // do anything
    console.log(`Regressed has occurred. ${issue.issueTitle}`);
  });

export const onVelocityAlert = functions.crashlytics
  .issue()
  .onVelocityAlert(async (issue, _context) => {
    // do anything
    console.log(`Velocity alert. ${issue.issueTitle}`);
  });
