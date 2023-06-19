// import { Alert } from "react-native";
import { _setToken } from "../../../Helper/Helper";
import * as requestFromServer from "./authCrud";
import { Slice, callTypes } from "./authSlice";
const { actions } = Slice;


export const addQuestions = (data, setAlertField) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .questionAdd(data)
    .then((response) => {
      if (response.data.success) {
        setAlertField({
          title: "Success",
          text: "",
          show: true,
          color: "green",
        });
        return response.data.message;
      } else {
        setAlertField({
          title: "Error",
          text: response.data.message,
          show: true,
          color: "red",
        });
        return response.data.message;
      }
    })
    .catch((error) => {
      //error
      console.log(error);

      // dispatch(actions.catchError({ error, callType: callTypes.list }));
      // return false
    });
};

export const userStoreIdentitiyAction = (data) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .userIdentityAction(data)
    .then((response) => {
      if (response.data.success) {
        _setToken(response.data.data.token);
        //dispatch(actions.loginIdentity(response.data.data.token));
        return response.data;
      } else {
        return response.data;
      }
    })
    .catch((error) => {
      //error
      console.log(error);

      // dispatch(actions.catchError({ error, callType: callTypes.list }));
      // return false
    });
};

export const userLogin = (data) => (dispatch) => {
  // dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .login(data)
    .then((response) => {
      
      dispatch(actions.login(response.data.user));
      dispatch(actions.setToken(response.data.token))
      console.log(response.data.token)
      if(response.status === 200){
        return true;
      }
      else{
        return false
      }
    })
    .catch((error) => {
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
};

export const userUpdate = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getUpdatedUser(id)
    .then((response) => {
      dispatch(actions.updatedUser(response.data));
      return response.data;
    })
    .catch((error) => {

      let err = error.response.data.message
      dispatch(actions.catchError({ err, callType: callTypes.list }));
      return false
    });
};

export const userRegister = (data) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .register(data)
    .then((response) => {
      dispatch(actions.registerUser(response.data));
      return response.data;
    })
    .catch((error) => {
      let err = error.response.data.message
      dispatch(actions.catchError({ err, callType: callTypes.list }));
      return false
    });
};

export const userLogout = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .logout()
    .then((response) => {
      dispatch(actions.logOut(response.data));
      return response.data;
    })
    .catch((error) => {
      let err = error.response.data.message
      dispatch(actions.catchError({ err, callType: callTypes.list }));
      return false
    });
};

export const getInfos = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getInfos()
    .then((response) => {
      dispatch(actions.getInfos(response.data));
      return response.data;
    })
    .catch((error) => {
      let err = error.response.data.message;
      dispatch(actions.catchError({ err, callType: callTypes.list }));
      return false;
    });
};
