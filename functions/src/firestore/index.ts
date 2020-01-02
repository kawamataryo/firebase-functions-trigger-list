import * as functions from "firebase-functions";

export const onCreate = functions.firestore
  .document("/users/{userId}")
  .onCreate(async (snapshot, context) => {
    // do anything
    console.log(`user ${context.params.userId} created.`);
  });

export const onUpdate = functions.firestore
  .document("/users/{userId}")
  .onUpdate(async (snapshot, context) => {
    // do anything
    console.log(`user ${context.params.userId} updated.`);
  });

export const onDelete = functions.firestore
  .document("/users/{userId}")
  .onDelete(async (snapshot, context) => {
    // do anything
    console.log(`user ${context.params.userId} deleted.`);
  });

export const onWrite = functions.firestore
  .document("/users/{userId}")
  .onUpdate(async (snapshot, context) => {
    // do anything
    console.log(`user ${context.params.userId} wrote.`);
  });
