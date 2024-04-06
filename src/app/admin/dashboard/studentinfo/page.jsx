"use client";
import React, { useState, useEffect } from "react";
import {
  update_student_info,
  update_user_scores,
  get_user_sem_marks,
} from "../../adminapi/route"; // in this we will only call the api in which we can see and update semister marks of previous semister
import { FaEdit } from "react-icons/fa";
import SemResults from "../../adminComponents/SemResults";

const Page = ({ searchParams }) => {
  let student_personal_details = null;
  if (searchParams) {
    student_personal_details = JSON.parse(searchParams.student_details);
  }

  const [studentInfo, setStudentInfo] = useState(student_personal_details);
  const [studentInfoUpdation, setStudentInfoUpdation] = useState(false);
  const [updateScores, setUpdateScores] = useState(false);
  const [ban, setBan] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");
  const [showBanPopup, setShowBanPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const [editedInfo, setEditedInfo] = useState({});

  const {
    id,
    name,
    student_id,
    email,
    branch,
    sem,
    ban: isBanned,
  } = studentInfo;

  useEffect(() => {
    setStudentInfo(student_personal_details);
  }, []);
  useEffect(() => {
    const update_student_score_values = async () => {
      try {
        const new_score_values = {
          student_id: student_personal_details.id,
          semester: sem,
          //   tech: tech,
          //   etc: etc,
          //   art: art,
          //   sports: sports,
          //   academic: academic,
          tech: 30,
          etc: 50,
          art: 55,
          sports: 90,
          academic: 55,
        };
        const response = await update_user_scores(new_score_values);
        setResponseMessage(response);
      } catch (error) {
        console.log("error update_student_info from student info page", error);
      }
    };
    if (updateScores) {
      update_student_score_values();
    }
  }, [updateScores]);

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
  }, []);
  console.log("sem marks", semMarks);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
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
    color: "#61dafb",
    alignSelf: "flex-start",
  };

  const studentDetailsStyle = {
    fontSize: "0.9rem",
    color: "#61dafb",
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

  const popupContentStyle = {
    backgroundColor: "#1a1a1a",
    borderRadius: "0.5rem",
    padding: "3rem",
    width: "110%", // Changed width
    maxWidth: "550px", // Added max width
    fontFamily: "'Roboto', sans-serif",
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

  console.log(student_personal_details);

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
            style={{ ...buttonStyle, backgroundColor: "#3182ce" }}
            onClick={handleEditClick}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3182ce")}
          >
            Edit Info
          </button>
        </div>
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
        semMarks.records.map((item, index) => <SemResults data={item} />)}
      <div style={dangerZoneStyle}>
        <p>Do you want to ban {name}?</p>
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
            <p>Are you sure you want to ban {name}?</p>
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
              }}
            >
              <input
                type="text"
                placeholder="Original Name"
                value={name}
                readOnly
                style={{ flex: "1", marginRight: "1rem", padding: "0.5rem" }}
              />
              <input
                type="text"
                placeholder="New Name"
                value={editedInfo.name || ""}
                onChange={(e) =>
                  setEditedInfo({ ...editedInfo, name: e.target.value })
                }
                style={{ flex: "1", padding: "0.5rem" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
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
                style={{ flex: "1", padding: "0.5rem" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
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
