import React from "react";

const Branches = ({ branchName, quantity }) => {
  const branch_name = {
    cse: "Computer Science & Engineering",
    me: "Mechanical Engineering",
    ee: "Electrical Engineering",
    civil: "Civil Engineering",
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        width: "300px",
        height: "175px",
        border: "2px solid #4A4A59",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        background: "rgb(0,0,0)",
        background: "linear-gradient(90deg, rgba(5,2,56,1) 0%, rgba(13,34,154,1) 50%, rgba(2,0,43,1) 100%)"    
          // background:
        //   "linear-gradient(90deg, rgba(12,12,12,1) 6%, rgba(54,54,54,1) 50%, rgba(18,18,18,1) 100%)",
      }}
      className="branch-card"
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: "0", fontSize: "1.5rem" }}>{branchName}</h2>
        <p style={{ margin: "0", fontSize: "1em" }}>
          ({branch_name[`${branchName}`]})
        </p>
        <h2 style={{ margin: "0", fontSize: "1.5rem" }}>{quantity}</h2>
      </div>
    </div>
  );
};

export default Branches;
