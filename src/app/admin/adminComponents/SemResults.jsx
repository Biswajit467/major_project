import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import dynamic from "next/dynamic";
const UpdateSemResults = dynamic(
  () => import("../adminComponents/UpdateSemResults"),
  { ssr: false }
);

const SemResults = (props) => {
  const { data, id, branch } = props;
//   console.log("props from sem resulst", props);

  const [editSemMarks, setEditSemMarks] = useState(false);

  const handleEditClick = () => {
    setEditSemMarks(true);
  };
  const closePopup = () => {
    setEditSemMarks(false);
  };

  const [tobeInserted, setTobeInserted] = useState({
    student_id: id,
    sem: data.sem,
    branch: branch,
    exam_type: data.exam_type,
    subject_marks: data.subject_marks,
  });

  console.log("to be inserted data",tobeInserted)

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        width: "49%",
        borderRadius: "5px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#121212",
      }}
    >
      {editSemMarks ? (
        <UpdateSemResults data={tobeInserted} onClose={closePopup} dorefresh = {props.dorefresh} />
      ) : null}
      <div>
        {data && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <div
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Semester :
              <span style={{ fontWeight: "bold", color: "orange" }}>
                {" "}
                {data.sem}
              </span>{" "}
              , {"     "}
              Exam Type :{" "}
              <span style={{ fontWeight: "bold", color: "orange" }}>
                {" "}
                {data.exam_type}
              </span>
            </div>
            <button onClick={handleEditClick}>
              {" "}
              <TiEdit style={{ color: "#00ff00" , fontSize:'25px' }} />
            </button>
          </div>
        )}

        {data && data.subject_marks != null ? (
          <div>
            {Object.entries(data.subject_marks).map(([key, value]) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "5px",
                }}
              >
                <div style={{ flex: 1 }}>{key}</div>
                <div style={{ flex: 1, textAlign: "right" }}>{value}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SemResults;
