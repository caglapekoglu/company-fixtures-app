import axios from "axios";

export const _getToken = async () => {
  try {
    const value = await localStorage.getItem("@authToken");
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

export const _setToken = async (token) => {
  try {
    await localStorage.setItem("@authToken", token);
  } catch (error) {
    console.log(error);
  }
};


export function nameValidator(name) {
  if (!name) return "Name can't be empty.";
  return "";
}
export function passwordValidator(password) {
  if (!password) return "Password can't be empty.";
  if (password.length < 5)
    return "Password must be at least 5 characters long.";
  return "";
}
export const UtcDateFormat = (date) => {
  var dateString = date.toISOString();
  const _date = new Date(dateString);
  const returnDate = new Date(
    _date.getTime() - _date.getTimezoneOffset() * 60000
  ).toJSON();
  return returnDate;
};


export const deleteImage = async (image) => {

  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/upload/delete",
      image,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return "";
  }
};


export const uploadImage = async (selectedImage) => {
  let formData = new FormData();
  formData.append("image", selectedImage);
  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return "";
  }
};


export const uploadImages = async (formData) => {

  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/upload/images",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return "";
  }
};
