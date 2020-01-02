import * as functions from "firebase-functions";

export const sampleEvent = functions.analytics
  .event("sample_event")
  .onLog((analyticsEvent, context) => {
    // do anything
    console.log(`Trigger ${analyticsEvent.name}.`);
  });
