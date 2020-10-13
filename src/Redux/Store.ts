import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, AppModel } from "../Redux";

export const store = init({
  redux: {},
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<AppModel>;
export type iAppState = RematchRootState<AppModel>;


export const { dispatch } = store

