import axios from "axios";
// import {baseUrl} from '../../../data'
//import { _getToken } from '../../../Helper/Helper'

export function questionAdd(data) {
  //   'Authorization': 'Bearer ' +getUserByToken() ,

  var config = {
    method: "post",
    url: "http://20.234.16.80:61171/api/v1/ContactForm/Add",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}
export function userIdentityAction(data) {
  var config = {
    method: "post",
    url: "http://20.234.16.80:61171/api/v1/User/Login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

export function login(data) {
  var config = {
    method: "post",
    url: "http://localhost:8080/api/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data:data,
  };
  return axios(config);
}
// export function userLog(token, data) {
//   var config = {
//     method: 'post',
//     url: baseUrl + '/auth/login',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: data,
//   }
//   return axios(config)
// }

export function register(data) {
  var config = {
    method: "post",
    url: "http://localhost:8080/api/auth/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return axios(config);
}

export function getUpdatedUser(id) {
  var config = {
    method: "get",
    url: `http://localhost:8080/api/user/${id}`,
    headers: {
      token: `Bearer ${getUserByToken()}`,
    },
  };
  return axios(config);
}

export function logout() {
  var config = {
    method: "get",
    url: "http://localhost:8080/api/auth/logout",
  };
  return axios(config);
}

export function getInfos() {
  var config = {
    method: "get",
    url: "http://localhost:8080/api/info/",
  };
  return axios(config);
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return localStorage.getItem("@authToken");
}
