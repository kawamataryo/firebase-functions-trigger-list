import * as FirestoreTrigger from "./firestore/index";
import * as RemoteConfigTrigger from "./firestore/index";

export const firestoreTrigger = { ...FirestoreTrigger };
export const remoteConfigTrigger = { ...RemoteConfigTrigger};
