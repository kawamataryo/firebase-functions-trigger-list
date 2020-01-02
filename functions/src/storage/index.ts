import * as functions from "firebase-functions";

export const onArchive = functions.storage
  .bucket("samaple")
  .object()
  .onArchive((_objectMetadata, _context) => {
    // do anything
    console.log("storage archived");
  });

export const onDelete = functions.storage
  .bucket("samaple")
  .object()
  .onDelete((_objectMetadata, _context) => {
    // do anything
    console.log("storage deleted");
  });

export const onFinalize = functions.storage
  .bucket("samaple")
  .object()
  .onFinalize((_objectMetadata, _context) => {
    // do anything
    console.log("storage finalized");
  });

export const onMetadataUpdate = functions.storage
  .bucket("samaple")
  .object()
  .onMetadataUpdate((_objectMetadata, _context) => {
    // do anything
    console.log("storage metadata updated");
  });
