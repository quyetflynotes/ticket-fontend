import { createModel } from "@rematch/core";

export enum typeMessenge{
  error = "Error",
  warning = "Warning",
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
  show : false
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
    close(value :boolean, state : any){
        dispatch.message.fetchData({show : value});
    },
    showError(value : any, state : any ){
      let params = {
        show : true,
        message: value,
        type : typeMessenge.error
      }
      dispatch.message.fetchData(params);
    },

    showWarning(value : any, state : any ){
      let params = {
        show : true,
        message: value,
        type : typeMessenge.warning
      }
      dispatch.message.fetchData(params);
    }

  }),
});
