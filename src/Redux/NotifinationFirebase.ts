import { createModel } from "@rematch/core";

export type Notifination ={ 
  nationality: string;
  title: string;
  time: Date;
}
export type NotifinationFirebase = {
  nationality: Notifination[];
  new: boolean;
};

const initState = {
  nationality: [],
  new : true
};

export const NotifinationFirebase = createModel<NotifinationFirebase>({
  state: initState,
  reducers: {
    fetchData(state: NotifinationFirebase, data: any = {}) {

      state = {
        ...state,
        ...data,
      };
      return state;
    },
  },
  effects: (dispatch: any) => ({
    readed(value :boolean, state : any){
        dispatch.message.fetchData({new : false});
    },
    newNotification(value : any, state : any ){
      let params = {
        new: true,
        nationality: value.content,
        title: value.title,
        time : value.time,
      }
      let list = state.NotifinationFirebase.nationality.unshift(params);
      let updateState = {
          ...state.NotifinationFirebase,
        list
      }
      
      dispatch.NotifinationFirebase.fetchData(updateState);
    },

  }),
});
