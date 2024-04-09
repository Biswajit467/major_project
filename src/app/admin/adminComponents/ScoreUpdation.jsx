import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { update_user_scores } from "../adminapi/route";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdSmsFailed } from "react-icons/md";
const ScoreUpdation = (props) => {
  console.log("props from score updation", props);
  const [updateScores, setUpdateScores] = useState(false);
  const [scoreValues, setScoreValues] = useState(null);
  const [tech, setTech] = useState(0);
  const [art, setArt] = useState(0);
  const [etc, setEtc] = useState(0);
  const [academic, setAcademic] = useState(0);
  const [sports, setSports] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setScoreValues(props?.data?.scores[props.sem - 1]);
  }, [props]);

  const onUpdateScores = () => {
    setUpdateScores(true);
  };
  const onUpdateTech = () => {
    setTech(tech + 10);
  };
  const onUpdateArt = () => {
    setArt(art + 10);
  };
  const onUpdateSports = () => {
    setSports(sports + 10);
  };
  const onUpdateEtc = () => {
    setEtc(etc + 10);
  };
  const onUpdateAcademic = () => {
    setAcademic(academic + 10);
  };

  useEffect(() => {
    const update_student_score_values = async () => {
      try {
        const new_score_values = {
          student_id: props.student_id,
          semester: props.sem,
          tech: tech,
          etc: etc,
          art: art,
          sports: sports,
          academic: academic,
        };
        const response = await update_user_scores(new_score_values);

        props.refresh((prev) => prev + 1);
        setTech(0);
        setArt(0);
        setEtc(0);
        setAcademic(0);
        setSports(0);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          setUpdateScores(false);
        }, 3000);
        setSuccessMessage(response.data.message);
        console.log(" response messaage", response);
      } catch (error) {
        console.log("error update_student_info from student info page", error);
        setErrorMessage("somthing went wrong please try after some time");
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          setErrorMessage("");
          setUpdateScores(false);
        }, 3000);
      }
    };
    if (updateScores) {
      update_student_score_values();
    }
  }, [updateScores]);

  return (
    <>
      {showMessage ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 shadow-lg p-4 rounded-lg z-50 ">
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {successMessage ? (
              <IoMdCheckmarkCircle
                style={{ fontSize: "100px", color: "#00ff00" }}
              />
            ) : (
              <MdSmsFailed style={{ fontSize: "100px", color: "red" }} />
            )}
          </div>

          <p className="text-center text-white">
            {successMessage || errorMessage}
          </p>
        </div>
      ) : (
        <div
          style={{
            width: "90%",
            border: "1px solid white",
            padding: "2%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {scoreValues ? (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: "10px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ flex: 1 }}>Tech</div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  {scoreValues.tech}
                </div>
                <div
                  style={{
                    marginLeft: "5px",
                    cursor: "pointer",
                    backgroundColor: "#706cda",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={onUpdateTech}
                >
                  <FaPlusCircle />
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>
                  {scoreValues.tech + tech}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginBottom: "5px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "5px",
                }}
              >
                <div style={{ flex: 1 }}>Extra curicular Activities</div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  {scoreValues.etc}
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#706cda",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={onUpdateEtc}
                >
                  <FaPlusCircle />
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>
                  {scoreValues.etc + etc}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginBottom: "5px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "5px",
                }}
              >
                <div style={{ flex: 1 }}>Sports</div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  {scoreValues.sports}
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#706cda",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={onUpdateSports}
                >
                  <FaPlusCircle />
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>
                  {scoreValues.sports + sports}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginBottom: "5px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "5px",
                }}
              >
                <div style={{ flex: 1 }}>Arts</div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  {scoreValues.art}
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#706cda",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={onUpdateArt}
                >
                  <FaPlusCircle />
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>
                  {scoreValues.art + art}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginBottom: "5px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "5px",
                }}
              >
                <div style={{ flex: 1 }}>Academic</div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  {scoreValues.academic}
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#706cda",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={onUpdateAcademic}
                >
                  <FaPlusCircle />
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>
                  {scoreValues.academic + academic}
                </div>
              </div>
            </div>
          ) : null}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center w-100 m-2"
            onClick={onUpdateScores}
          >
            Update Scores
          </button>
        </div>
      )}
    </>
  );
};

export default ScoreUpdation;
