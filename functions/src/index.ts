import * as FirestoreTrigger from "./firestore/index";
import * as RemoteConfigTrigger from "./firestore/index";
import * as AuthenticationTrigger from "./authentication/index";
import * as AnalyticsTrigger from "./analytics/index";
import * as StorageTrigger from "./storage/index";
import * as CrashlyticsTrigger from "./crashlytics/index";
import * as TestLabTrigger from "./testLab/index";

export const firestoreTrigger = { ...FirestoreTrigger };
export const remoteConfigTrigger = { ...RemoteConfigTrigger };
export const authenticationTrigger = { ...AuthenticationTrigger };
export const analyticsTrigger = { ...AnalyticsTrigger };
export const storageTrigger = { ...StorageTrigger };
export const crashlyticsTrigger = { ...CrashlyticsTrigger };
export const testLab = { ...TestLabTrigger };
