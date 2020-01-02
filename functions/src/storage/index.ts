import * as functions from "firebase-functions";

export const onChange = functions.storage
  .bucket("samaple")
  .object()
  .onChange(_handler => {
    // do anything
    console.log("storage changed");
  });

export const onArchive = functions.storage
  .bucket("samaple")
  .object()
  .onArchive(_handler => {
    // do anything
    console.log("storage archived");
  });

export const onDelete = functions.storage
  .bucket("samaple")
  .object()
  .onDelete(_handler => {
    // do anything
    console.log("storage deleted");
  });

export const onFinalize = functions.storage
  .bucket("samaple")
  .object()
  .onFinalize(_handler => {
    // do anything
    console.log("storage finalized");
  });

export const onMetadataUpdate = functions.storage
  .bucket("samaple")
  .object()
  .onMetadataUpdate(_handler => {
    // do anything
    console.log("storage metadata updated");
  });
