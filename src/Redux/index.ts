import { authen } from "./Authen";

export type AppModel = {
  authen: typeof authen;
};

export const models: AppModel = {
  authen: authen,
};
