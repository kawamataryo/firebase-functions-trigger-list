import * as functions from "firebase-functions";

export const onArchive = functions.storage
  .object()
  .onArchive((_objectMetadata, _context) => {
    // do anything
    console.log("storage archived");
  });

export const onDelete = functions.storage
  .object()
  .onDelete((_objectMetadata, _context) => {
    // do anything
    console.log("storage deleted");
  });

export const onFinalize = functions.storage
  .object()
  .onFinalize((_objectMetadata, _context) => {
    // do anything
    console.log("storage finalized");
  });

export const onMetadataUpdate = functions.storage
  .object()
  .onMetadataUpdate((_objectMetadata, _context) => {
    // do anything
    console.log("storage metadata updated");
  });
