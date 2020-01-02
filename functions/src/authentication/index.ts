import * as functions from "firebase-functions";

export const onCreate = functions.auth
  .user()
  .onCreate((userRecord, _context) => {
    // do anything
    console.log(`user ${userRecord.uid} created.`);
  });

export const onDelete = functions.auth
  .user()
  .onDelete((userRecord, _context) => {
    // do anything
    console.log(`user ${userRecord.uid} deleted.`);
  });
