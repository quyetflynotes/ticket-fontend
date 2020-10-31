import { authen } from "./Authen";
import { message } from "./Message"
import {NotifinationFirebase} from "./NotifinationFirebase"

export type AppModel = {
  authen: typeof authen,
  message: typeof message,
  NotifinationFirebase : typeof NotifinationFirebase
};

export const models: AppModel = {
  authen: authen,
  message: message,
  NotifinationFirebase : NotifinationFirebase
};

