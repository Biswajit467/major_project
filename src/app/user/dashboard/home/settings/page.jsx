"use client";
import { useState } from "react";
import axios from "axios";
import { MAIN_URL } from "../../../../common/urls";

const UpdatePersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    img: "",
  });

  const userId = localStorage.getItem("user_id");
  console.log("this is userId", userId);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    if (e.target.name === "img") {
      setFormData({ ...formData, img: e.target.files[0] }); // Update the img field with the selected file
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value }); // Update other fields as usual
    }
  };
  console.log("this is form data", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const FD = new FormData();
      FD.append("name", formData.name);
      FD.append("email", formData.email);
      FD.append("password", formData.password);
      FD.append("img", formData.img); // Append the file object

      console.log("chiga bhuuurrr", formData);
      console.log("bala", FD);

      const response = await axios.patch(
        `${MAIN_URL}user/update-personal-info/${userId}/`,
        FD, // Send FormData instead of JSON
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure correct content type
          },
        }
      );
      console.log("Updated personal info:", response.data);
      // Handle success, maybe show a success message or redirect
    } catch (error) {
      console.error("Error updating personal info:", error);
      // Handle error, maybe show an error message
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.patch(
  //       `${MAIN_URL}user/update-personal-info/${userId}/`,
  //       formData
  //     );
  //     console.log("Updated personal info:", response.data);
  //     // Handle success, maybe show a success message or redirect
  //   } catch (error) {
  //     console.error("Error updating personal info:", error);
  //     // Handle error, maybe show an error message
  //   }
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "black",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "80%",
          maxWidth: "400px",
          padding: "20px",
          background: "#292929",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Update Profile
        </h2>
        <label
          style={{ display: "block", marginBottom: "10px", color: "#ffffff" }}
        >
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              color: "black",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #666",
            }}
          />
        </label>
        <label
          style={{ display: "block", marginBottom: "10px", color: "#ffffff" }}
        >
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              color: "black",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #666",
            }}
          />
        </label>
        <label
          style={{ display: "block", marginBottom: "10px", color: "#ffffff" }}
        >
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              color: "black",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #666",
            }}
          />
        </label>
        <label
          style={{ display: "block", marginBottom: "10px", color: "#ffffff" }}
        >
          Image:
          <input
            type="file"
            accept="image/*"
            name="img"
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #666",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePersonalInfoForm;
