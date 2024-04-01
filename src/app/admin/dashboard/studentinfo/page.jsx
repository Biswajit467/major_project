"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  update_student_info,
  update_user_scores,
} from "../../adminapi/route";

const Page = ({ searchParams }) => {
  let student_personal_details = null;
  if (searchParams) {
    student_personal_details = JSON.parse(searchParams.student_details);
  }
  console.log("in student details page", student_personal_details);

  const [studentInfoUpdation, setStudentInfoUpdation] = useState(false);
  const [updateScores, setUpdateScores] = useState(false);
  const [ban, setBan] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");
  const [showbanpopup, setShowBanPopup] = useState(false);

  const [name, setName] = useState("");
  const [redgNo, setRedgno] = useState("");
  const [sem, setSem] = useState(student_personal_details.sem);
  const [password, setPassword] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [tech, setTech] = useState(null);
  const [etc, setEtc] = useState(null);
  const [art, setArt] = useState(null);
  const [sports, setSports] = useState(null);
  const [academic, setAcademic] = useState(null);

  useEffect(() => {
    const updateData = async () => {
      try {
        const studentData = {
          // name: name,
          // sem : sem,
          // password : password,
          // registration_number : redgNo,
          // student_id: student_id,
          // email: email,
          // branch : branch
          name: "haribol",
          sem: "4",
          password: "haribol@1234",
          registration_number: "200122534",
          student_id: "haribol",
          email: "haribol@gmail.com",
          branch: "civil",
        };
        const response = await update_student_info(
          student_personal_details.id,
          studentData
        );
        setResponseMessage(response);
      } catch (error) {
        console.log("error update_student_info from student info page", error);
      }
    };

    if (studentInfoUpdation) {
      updateData();
    }
  }, [studentInfoUpdation]);

  useEffect(() => {
    const ban_Student = async () => {
      try {
        console.log("api call happening");
        const response = await update_student_info(
          student_personal_details.id,
          {
            ban: ban,
          }
        );
        setResponseMessage(response);
      } catch (error) {
        console.log(
          "error update_student_info from ban student info page",
          error
        );
      }
    };
    if (ban) {
      ban_Student();
    }
  }, [ban]);

  useEffect(() => {
    const update_student_score_values = async () => {
      try {
        const new_score_values = {
          "student_id": student_personal_details.id,
          "semester": sem,
          //   tech: tech,
          //   etc: etc,
          //   art: art,
          //   sports: sports,
          //   academic: academic,
          "tech": 30,
          "etc": 50,
          "art": 55,
          "sports": 90,
          "academic": 55,
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

  const handleBanClick = () => {
    // setBan(true);
    // setStudentInfoUpdation(true);
    setUpdateScores(true);
  };

  return (
    <div>
      <button
        onClick={handleBanClick}
        style={{
          backgroundColor: "#ff5c5c",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Ban
      </button>
    </div>
  );
};

export default Page;
