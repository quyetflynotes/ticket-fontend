import { createModel } from "@rematch/core";
import { Staff } from "../share/base-ticket/base-carOwner/Staff";



export type AuthenModel = {
  isAuthenticated?: boolean;
  jwt?: any;
  info?: Staff;
};

const initState = {
  isAuthenticated: true,
};

export const authen = createModel<AuthenModel>({
  state: initState,
  reducers: {
    fetchData(state: any, data: any) {

      console.log(state)

      state = {
        ...state,
        ...data,
      };

      return state
    },
  },
  effects: (dispatch: any) => ({
    login(value: string, state: any) {
      dispatch.authen.fetchData({ isAuthenticated: true, info: value });
    },
    logout(value: string, state: any) {
      dispatch.authen.fetchData({ isAuthenticated: false });
      localStorage.removeItem("jwt");
    },
  }),
});
