"use client";
import React, { useState, useEffect } from "react";
import {
  update_student_info,
  update_user_scores,
  get_user_sem_marks,
  get_user_scores,
} from "../../adminapi/route";
import { FaEdit } from "react-icons/fa";
import dynamic from "next/dynamic";
const SemResults = dynamic(() => import("../../adminComponents/SemResults"), {
  ssr: false,
});
const ScoreUpdation = dynamic(
  () => import("../../adminComponents/ScoreUpdation"),
  {
    ssr: false,
  }
);

const Page = ({ searchParams }) => {
  let student_personal_details = null;
  if (searchParams) {
    student_personal_details = JSON.parse(searchParams.student_details);
  }

  const [studentInfo, setStudentInfo] = useState(student_personal_details);
  const [studentInfoUpdation, setStudentInfoUpdation] = useState(false);
  // const [updateScores, setUpdateScores] = useState(false);
  const [userScores, setUserScores] = useState(null);
  const [ban, setBan] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");
  const [showBanPopup, setShowBanPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [scoreRefresh, setScoreRefresh] = useState(0);

  const [editedInfo, setEditedInfo] = useState({});

  const {
    id,
    name,
    student_id,
    email,
    branch,

    registration_number,
    password,

    sem,
    ban: isBanned,
  } = studentInfo;

  useEffect(() => {
    setStudentInfo(student_personal_details);
  }, []);

  useEffect(() => {
    const get_user_scores_data = async () => {
      try {
        const response = await get_user_scores(id, sem);
        setUserScores(response);
      } catch (error) {
        console.log("error occured in getUserSCores", error);
      }
    };
    if (studentInfo != null) {
      console.log("inside if block");
      get_user_scores_data();
    }
  }, [studentInfo, scoreRefresh]);

  const [semMarks, setSemMarks] = useState(null);
  useEffect(() => {
    const sem_results = async () => {
      try {
        const fetch_sem__marks = await get_user_sem_marks(id);
        setSemMarks(fetch_sem__marks);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (id) {
      sem_results();
    }
  }, [refresh]);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#030439",
    color: "white",
    fontFamily: "'Roboto', sans-serif",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "1rem",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#00ff00",
    alignSelf: "flex-start",
  };

  const studentDetailsStyle = {
    fontSize: "0.9rem",
    color: "#00ff00",
    alignSelf: "flex-start",
  };

  const buttonContainerStyle = {
    display: "flex",

    gap: "1rem",
  };

  const contentStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  };

  const dangerZoneStyle = {
    width: "30%",
    backgroundColor: "black",
    border: "2px solid #e53e3e",
    color: "white",
    textAlign: "center",
    padding: "2rem",
    marginBottom: "2rem",
    borderRadius: "5px",
    fontFamily: "'Roboto', sans-serif",
  };

  const popupStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    color: "black",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
  };
  const x = {
    position: "fixed",

    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    color: "black",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
  };

  const popupContentStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "0.5rem",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    color: "white",
    width: "110%", // Changed width
    maxWidth: "550px", // Added max width
    fontFamily: "'Roboto', sans-serif",
    background:
      "linear-gradient(153deg, rgba(3,4,57,1) 0%, rgba(32,33,96,1) 51%, rgba(3,4,57,1) 100%) ",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: "#e53e3e",
    color: "white",
    padding: "0.7rem 1.5rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition:
      "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
    border: "none",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const handleBanClick = () => {
    setShowBanPopup(true);
  };

  const handleEditClick = () => {
    setShowEditPopup(true);
  };

  const confirmBan = async () => {
    try {
      const response = await update_student_info(id, { ban: true });
      setResponseMessage(response);
      setBan(true);
      setShowBanPopup(false);
      alert(`${name} is banned from the site.`);
    } catch (error) {
      console.log("Error updating student info:", error);
    }
  };

  const handleEditSuccess = () => {
    alert("Changes saved successfully!");
  };

  const handleEditSubmit = async () => {
    try {
      const response = await update_student_info(id, editedInfo);
      setResponseMessage(response);
      setStudentInfo({ ...studentInfo, ...editedInfo });
      setShowEditPopup(false);
      handleEditSuccess();
    } catch (error) {
      console.log("Error updating student info:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div>
          <h2 style={titleStyle}>{name}</h2>
          <p style={studentDetailsStyle}>
            {student_id} | {email} | {branch} | {sem}
          </p>
        </div>
        <div style={buttonContainerStyle}>
          <button
            style={{ ...buttonStyle, backgroundColor: "green" }}
            onClick={handleEditClick}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#00ff00")}
          >
            Edit Info
          </button>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "5%",
        }}
      >
        <div
          style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "1%" }}
        >
          Current Scores
        </div>
        <ScoreUpdation
          data={userScores}
          student_id={id}
          sem={sem}
          refresh={setScoreRefresh}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "0rem",
          textAlign: "center",
        }}
      >
        {" "}
        {name}'s Semester Results
      </div>
      {semMarks != null &&
        semMarks.records.map((item, index) => (
          <SemResults
            data={item}
            id={id}
            branch={branch}
            dorefresh={setRefresh}
          />
        ))}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "70%",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2%",
          border: "1px solid white",
          padding: "2%",
          borderRadius:'10px'
        }}
      >
        <div style={{ color: "white", fontSize: "30px" }}>
          Do you want to ban {name}?
        </div>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{ ...buttonStyle, backgroundColor: "#e53e3e" }}
            onClick={handleBanClick}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#c53030")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#e53e3e")}
          >
            Yes
          </button>
        </div>
      </div>
      {showBanPopup && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <div>Are you sure you want to ban {name}?</div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                style={{ ...buttonStyle, backgroundColor: "#e53e3e" }}
                onClick={confirmBan}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#c53030")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#e53e3e")}
              >
                Yes
              </button>
              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#718096",
                  marginLeft: "0.5rem",
                }}
                onClick={() => setShowBanPopup(false)}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a6b7d")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#718096")}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {showEditPopup && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <p style={{ color: "white", marginBottom: "1rem" }}>
              Edit student info:
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              <input
                type="text"
                placeholder="Original Name"
                value={name}
                readOnly
                style={{
                  flex: "1",
                  marginRight: "1rem",
                  padding: "0.5rem",
                  color: "black",
                }}
              />
              <input
                type="text"
                placeholder="New Name"
                value={editedInfo.name || ""}
                onChange={(e) =>
                  setEditedInfo({ ...editedInfo, name: e.target.value })
                }
                style={{ flex: "1", padding: "0.5rem", color: "black" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              <input
                type="text"
                placeholder="Original Email"
                value={email}
                readOnly
                style={{ flex: "1", marginRight: "1rem", padding: "0.5rem" }}
              />
              <input
                type="text"
                placeholder="New Email"
                value={editedInfo.email || ""}
                onChange={(e) =>
                  setEditedInfo({ ...editedInfo, email: e.target.value })
                }
                style={{ flex: "1", padding: "0.5rem", color: "black" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              <input
                type="text"
                placeholder="Original Branch"
                value={branch}
                readOnly
                style={{ flex: "1", marginRight: "1rem", padding: "0.5rem" }}
              />
              <input
                type="text"
                placeholder="New Branch"
                value={editedInfo.branch || ""}
                onChange={(e) =>
                  setEditedInfo({ ...editedInfo, branch: e.target.value })
                }
                style={{ flex: "1", padding: "0.5rem" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              <input
                type="text"
                placeholder="Original Semester"
                value={sem}
                readOnly
                style={{ flex: "1", marginRight: "1rem", padding: "0.5rem" }}
              />
              <input
                type="text"
                placeholder="New Semester"
                value={editedInfo.sem || ""}
                onChange={(e) =>
                  setEditedInfo({ ...editedInfo, sem: e.target.value })
                }
                style={{ flex: "1", padding: "0.5rem" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              <input
                type="text"
                placeholder="Original Semester"
                value={registration_number}
                readOnly
                style={{ flex: "1", marginRight: "1rem", padding: "0.5rem" }}
              />
              <input
                type="text"
                placeholder="New Reg.no"
                value={editedInfo.registration_number || ""}
                onChange={(e) =>
                  setEditedInfo({
                    ...editedInfo,
                    registration_number: e.target.value,
                  })
                }
                style={{ flex: "1", padding: "0.5rem" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              <input
                type="text"
                placeholder="old-password-hidden"
                value={null}
                readOnly
                style={{ flex: "1", marginRight: "1rem", padding: "0.5rem" }}
              />
              <input
                type="text"
                placeholder="New Password"
                value={editedInfo.password || ""}
                onChange={(e) =>
                  setEditedInfo({ ...editedInfo, password: e.target.value })
                }
                style={{ flex: "1", padding: "0.5rem" }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#38a169",
                  marginTop: "1rem",
                  marginRight: "1rem",
                }}
                onClick={handleEditSubmit}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2d8e61")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#38a169")}
              >
                Save Changes
              </button>
              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#718096",
                  marginTop: "1rem",
                }}
                onClick={() => setShowEditPopup(false)}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#5a6b7d")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#718096")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
