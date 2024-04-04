import React from "react";
import axios from "axios";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      // Call the logout API endpoint
      const response = await axios.post(`${MAIN_URL}logout/`);
      console.log(response.data.message); // Log success message
      // Clear local storage or perform any other client-side logout actions
      localStorage.removeItem("student_id_token");
      localStorage.removeItem("user_id");
      // Redirect or update UI as needed after logout
      // For example, you can redirect the user to the login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out user:", error.message);
      // Handle errors if needed
    }
  };
};

export default LogoutButton;
