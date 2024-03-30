import { useState } from "react";
import axios from "axios";
import { MAIN_URL } from "@/app/common/urls";
import { MdNotificationAdd } from "react-icons/md";

const CreateNotificationForm = () => {
  const [notification, setNotification] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("student_id_token");
      const user_id = localStorage.getItem("user_id");
      if (!token) {
        // Handle case where user is not authenticated
        console.error("User not authenticated");
        return;
      }

      const response = await axios.post(
        `${MAIN_URL}admins/create-notification/`,
        { notification, user_id },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("Notification created:", response.data);
      // You can perform additional actions after successful notification creation, such as showing a success message or redirecting the user.
    } catch (error) {
      console.error("Error creating notification:", error);
      // Handle error scenarios, such as displaying an error message to the user.
    }
  };

  const handleChange = (e) => {
    setNotification(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          width: "60%",
          height: "60%",
          // maxWidth: "600px",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.3)",
          fontFamily: "sans-serif",
          letterSpacing: "2px",
          wordSpacing: "0.5px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label
            htmlFor="notification"
            style={{
              marginBottom: "10px",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
            }}
          >
            Notification:
          </label>
          <textarea
            id="notification"
            name="notification"
            value={notification}
            onChange={handleChange}
            required
            style={{
              height: "35vh",
              resize: "none",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "16px",
              lineHeight: "1.5",
              color: "white",
              // background:"red",
              backgroundColor: "rgba(15, 23, 42, 0.75)",
            }}
            placeholder="Type your notification here..."
          />

          <button
            className="flex items-center justify-center p-4 bg-blue-600 text-white rounded border-none cursor-pointer font-bold text-lg transition-colors duration-300 mt-8 hover:bg-blue-700 hover:bg-opacity-50"
            type="submit"
          >
            <span className="ml-2">
              <MdNotificationAdd className="text-lg size-8 mr-2 " />
            </span>
            <span>Create Notification</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNotificationForm;
