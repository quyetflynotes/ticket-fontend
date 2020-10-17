import { createModel } from "@rematch/core";

export enum typeMessenge{
  error = "Error",
  network = "Network",
  success = "Success",
};

export type message = {
  type?: typeMessenge;
  message ?: string;
  show ?: boolean;
};

const initState = {
  type : typeMessenge.error,
  message : "Nguyễn Văn Lương",
  show : true
};

export const message = createModel<message>({
  state: initState,
  reducers: {
    fetchData(state: message, data: any = {}) {
      state = {
        ...state,
        ...data,
      };
      return state;
    },
  },
  effects: (dispatch: any) => ({
    test(value: string, state : any ) {

        dispatch.authen.fetchData("fdafdsaf");
    }
  }),
});
