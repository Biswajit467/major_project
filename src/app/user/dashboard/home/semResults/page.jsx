import React from "react";
import dynamic from "next/dynamic";

const SemResults = dynamic(() => import("../../../userComponents/SemResults"), {
  ssr: false,
});

const Page = ({ searchParams }) => {
  let semMarks = null;
  if (searchParams) {
    semMarks = JSON.parse(searchParams.semester_results);
  }
  console.log("semMarks", semMarks);
  return (
    <div style={{ width: "90%" }}>
      <div
        style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            background: "linear-gradient(to bottom, #FFFFFF, #3B82F6)",
            marginTop: "0rem",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center",
        }}
      >
        {" "}
        See Your Semester Results
      </div>
      {semMarks != null &&
        semMarks.records.map((item, index) => (
          <div
            key={item.id}
            style={{
              marginBottom: item.exam_type === "final" ? "20px" : "10px",
            }}
          >
            {item.exam_type === "internal1" &&
            index + 1 < semMarks.records.length &&
            semMarks.records[index + 1].exam_type === "internal2" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "sapce-evenly",
                }}
              >
                <SemResults data={item} />
                <SemResults data={semMarks.records[index + 1]} />
              </div>
            ) : item.exam_type === "final" ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <SemResults data={item} />
              </div>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default Page;
