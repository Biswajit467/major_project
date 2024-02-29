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
    return { data: response.data };
  } catch (error) {
    console.error("Error logging in user:", error.message);
    throw error;
  }
};
