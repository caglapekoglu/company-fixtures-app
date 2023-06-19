import * as requestFromServer from "./itemCrud";

import { Slice, callTypes } from "./itemSlice";
const { actions } = Slice;


export const getItems = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getItems()
    .then((response) => {
      dispatch(actions.updateAll(response.data.items))
      return response.data;
    })
    .catch((error) => {
      let err = error.response.data.message
      dispatch(actions.catchError({ err, callType: callTypes.list }));
      return false
    });
};
 

export const createItem = (data) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  return requestFromServer
    .createItem(data)
    .then((response) => {
      if (response && response.data) {
        dispatch(actions.createItem(response.data));
        return response.data;
      } else {
        throw new Error("Invalid server response");
      }
    })
    .catch((error) => {
      let err = error.response?.data?.message || error.message || "Unknown error";
      dispatch(actions.catchError({ err, callType: callTypes.list }));
      return false;
    });
};

export const getItem = () => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return requestFromServer
      .getItems()
      .then((response) => {
       
        return response.data;
      })
      .catch((error) => {
        let err = error.response.data.message
        dispatch(actions.catchError({ err, callType: callTypes.list }));
        return false
      });
  };
  export const getItemRej = () => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return requestFromServer
      .getItems()
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        let err = error.response.data.message
        dispatch(actions.catchError({ err, callType: callTypes.list }));
        return false
      });
  };
  export const update = (data) => (dispatch) => {
    debugger
    dispatch(actions.startCall({ callType: callTypes.list }));
    console.log(data)
    return requestFromServer
      .updateItem(data)
      .then((response) => {
        debugger
        if(response.data.state){
          dispatch(actions.update(data));
        }
        return response.data.state;
      })
      .catch((error) => {
        debugger
        let err = error.response.data.message
        dispatch(actions.catchError({ err, callType: callTypes.list }));
        return false
      });
  };
  export const deleteItem = (data) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    console.log(data)
    return requestFromServer
      .deleteItem(data)
      .then((response) => {
        if(response.data.state){
          dispatch(actions.update(data));
        }
        return response.data.state;
      })
      .catch((error) => {
        let err = error.response.data.message
        dispatch(actions.catchError({ err, callType: callTypes.list }));
        return false
      });
  };
  export const addItem = (data) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    if (data) {
      dispatch(actions.add(data))
      return data
    }
  
  }