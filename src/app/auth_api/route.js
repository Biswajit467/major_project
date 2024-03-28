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
  console.log("THIS IS USER DATA:-" ,userData)
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

    const token = response.data.student_id_token;
    console.log("this is token", token);
    localStorage.setItem("student_id_token", token);
    localStorage.setItem('user_id',response.data?.user.id);

    return { data: response.data };
  } catch (error) {
    console.error("Error logging in user:", error.message);
    throw error;
  }
};

export const addPost = async (postData) => {
  console.log("this is postData", postData);
  try {
    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("img", postData.img); // Append the image file
    formData.append("desc", postData.desc);
    formData.append("category", postData.category);
    formData.append("token", postData.token);
    formData.append("uid", postData.uid);

    console.log("THIS IS FROMDATA FROM ADDPOST ROUTE : ", formData);

    const response = await axios.post(`${MAIN_URL}add-post/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: postData.token,
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
