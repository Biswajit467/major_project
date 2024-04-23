import React from "react";
import { GiLaurelsTrophy, GiTrophy, GiDiamondTrophy } from "react-icons/gi";

const ListCard = (props) => {
  const handleCompareClick = () => {
    props.handleCompareClick();
    props.studentTobeCompared(props.data);
  };

  console.log("this is  props from listCard", props);
  return (
    <div>
      {props?.data?.student_details.admin ? null : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            background:
              " linear-gradient(153deg, rgba(3,4,57,1) 0%, rgba(32,33,96,1) 51%, rgba(3,4,57,1) 100%)",
            margin: "0.3%",
            width: "100%", // Update width to match parent component
            height: "10%",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ width: "10%", textAlign: "left" }}>
            {props.rank == 1 ? (
              <GiDiamondTrophy
                style={{
                  color: "#F0F8FF",
                  height: "42px",
                  width: "42px",
                  marginLeft: "-27px",
                }}
              />
            ) : props.rank == 2 ? (
              <GiLaurelsTrophy
                style={{
                  color: "red",
                  height: "40px",
                  width: "40px",
                  marginLeft: "-27px",
                }}
              />
            ) : props.rank == 3 ? (
              <GiTrophy
                style={{
                  color: "green",
                  height: "40px",
                  width: "40px",
                  marginLeft: "-27px",
                }}
              />
            ) : (
              props.rank
            )}
          </div>
          <div
            style={{
              textAlign: "center",
              width: "20%",
              // backgroundColor: "#FF6B6B",
              borderRadius: "8px",
              padding: "8px",
              paddingRight: "5%",
            }}
          >
            {props?.data.student_details.name}
          </div>
          <div
            style={{
              textAlign: "center",
              width: "15%",
              // backgroundColor: "#6BFFA4",
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            {props?.data.student_details.branch}
          </div>
          <div
            style={{
              textAlign: "center",
              width: "15%",
              // backgroundColor: "#A4FF6B",
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            {props?.data.student_details.sem}
          </div>
          <div
            style={{
              textAlign: "center",
              width: "18%", // Adjusted width to match parent component
              // backgroundColor: "#6B8CFF", // Added background color
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            {props?.data.overall}
          </div>

          <button
            style={{
              backgroundColor: "#8C6BFF",
              color: "#FFFFFF",
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "8px 16px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#6B8CFF")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8C6BFF")}
            onClick={handleCompareClick}
          >
            Compare
          </button>
        </div>
      )}
    </div>
  );
};

export default ListCard;
