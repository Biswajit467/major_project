import axios from "axios";
import { MAIN_URL } from "../common/urls";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${MAIN_URL}create-user/`, userData);

    if (response.status !== 200) {
      throw new Error("Failed to register user");
    }

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const FD = new FormData();
    for (const key in userData) {
      FD.append(key, userData[key]);
    }

    const response = await axios.post(`${MAIN_URL}login/`, FD, {
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw new Error("Failed to login user");
    }

    console.log("data from login function", response);

    // const jsonResponse = await response.json();
    // console.log("this is jsonResopnse ",jsonResponse)

    const token = response.data.student_id_token;
    console.log("this is token", token);
    localStorage.setItem("student_id_token", token);

    return { data: response.data };
  } catch (error) {
    console.error("Error logging in user:", error.message);
    throw error;
  }
};

export const addPost = async (postData, token) => {
  console.log("this is postData", postData);
  try {
    const response = await axios.post(`${MAIN_URL}add-post/`, postData, {
      headers: {
        Authorization: token,
      },
    });

    console.log("this is response from backend after addpost: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    // Handle authentication errors here, e.g., redirect the user to login page
    if (error.response.status === 401) {
      // Redirect to login page or show an error message
      // Example:
      // history.push("/login");
      // or
      // setError("Unauthorized access. Please log in.");
    }
    throw error; // Rethrow the error to handle it in the component
  }
};
