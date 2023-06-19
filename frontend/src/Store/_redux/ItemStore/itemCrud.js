import axios from "axios"
// import { _getToken } from "../../../Helper/Helper"


export function getItems() {
    var config = {
        method: 'get',
        url: 'http://localhost:8080/api/item'
    }
    return axios(config)
}

export function getItem(id) {
    var config = {
        method: 'get',
        url: `http://localhost:8080/api/item/${id}`
    }
    return axios(config)
}
export function createItem(data) {
    var config = {
        method: 'post',
        url: `http://localhost:8080/api/item`,
        data: data
    }
    return axios(config)
}
export function updateItem(data) {
    var config = {
      method: "put",
      url: 'http://localhost:8080/api/item/'+data._id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    debugger
    return axios(config);
  }

  export function deleteItem(data) {
    var config = {
      method: "delete",
      url: 'http://localhost:8080/api/item/'+data._id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    debugger
    return axios(config);
  }
export function getUserByToken() {
    // Authorization head should be fulfilled in interceptor.
    return localStorage.getItem('@authToken')
}

