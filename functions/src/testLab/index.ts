import * as functions from "firebase-functions";

export const onComplete = functions.testLab
  .testMatrix()
  .onComplete((testMatrix, _context) => {
    // do anything
    console.log(`${testMatrix.testMatrixId} is complete`);
  });
