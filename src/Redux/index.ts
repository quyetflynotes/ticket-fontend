import { authen } from "./Authen";
import {message } from "./Message"

export type AppModel = {
  authen: typeof authen,
  message: typeof message
};

export const models: AppModel = {
  authen: authen,
  message : message
};

