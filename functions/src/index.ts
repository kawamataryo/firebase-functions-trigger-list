import * as FirestoreTrigger from "./firestore/index";
import * as RemoteConfigTrigger from "./firestore/index";
import * as AuthenticationTrigger from "./authentication/index";

export const firestoreTrigger = { ...FirestoreTrigger };
export const remoteConfigTrigger = { ...RemoteConfigTrigger };
export const authenticationTrigger = { ...AuthenticationTrigger };
