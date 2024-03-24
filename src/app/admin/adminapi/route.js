import axios from "axios";
import { MAIN_URL } from "../common/urls";

export const get_user_data = async () => {
  const userId = localStorage.getItem("user_id");
  console.log("user_id stored in local storage" , userId)
  try {
    const response = await axios.get(`${MAIN_URL}user/get-user-data/${userId}/`);
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.log("Error fetching user data:", error);
    return null;
  }
};
