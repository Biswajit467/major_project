import React from "react";

const SemResults = (props) => {
  const { data } = props;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        width: "49%",
        borderRadius: "5px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        background:
          " linear-gradient(153deg, rgba(3,4,57,1) 0%, rgba(32,33,96,1) 51%, rgba(3,4,57,1) 100%)",
      }}
    >
      {data && (
        <div
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Semester :
          <span style={{ fontWeight: "bold", color: "#00ff00" }}>
            {" "}
            {data.sem}
          </span>{" "}
          , {"     "}
          Exam Type :{" "}
          <span style={{ fontWeight: "bold", color: "#00ff00" }}>
            {" "}
            {data.exam_type}
          </span>
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
  );
};

export default SemResults;
