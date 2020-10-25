import { createModel } from "@rematch/core";



export type AuthenModel = {
  isAuthenticated?: boolean;
  jwt?: any;
};

const initState = {
  isAuthenticated: false,
};

export const authen = createModel<AuthenModel>({
  state: initState,
  reducers: {
    fetchData(state: AuthenModel, data: any = {}) {
      console.log(state);
      console.log(data)

      state = {
        ...state,
        ...data,
      };
      return state;
    },
  },
  effects: (dispatch: any) => ({
    test(value: string, state : any ) {
      
        dispatch.authen.fetchData("authen");
    }
  }),
});
