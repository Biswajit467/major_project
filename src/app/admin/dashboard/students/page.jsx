"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { get_users_by_branch } from "../../adminapi/route";
import StudentCard from "../../adminComponents/StudentCard";
import CurrentSemMarkPopUP from "../../adminComponents/CurrentSemMarkPopUP";

const page = ({ searchParams }) => {
  // const router = useRouter();
  const [allstudents, setAllstudents] = useState(null);
  const [clickedstudentData, setClickedStudentData] = useState(null);
  const [currentSemMarksClicked, setCurrentSemMarksClicked] = useState(false);

  console.log("clickedstudentData", clickedstudentData);

  useEffect(() => {
    const fetch_students_by_branch = async () => {
      try {
        const students = await get_users_by_branch(
          searchParams.branch,
          searchParams.sem
        );
        setAllstudents(students);
      } catch (error) {
        console.log("error from all students", error);
      }
    };
    fetch_students_by_branch();
  }, []);

  const closePopup = () => {
    setCurrentSemMarksClicked(false);
  };

  return (
    <div>
      {currentSemMarksClicked ? (
        <CurrentSemMarkPopUP data={clickedstudentData} onClose={closePopup} />
      ) : null}
      {allstudents &&
        allstudents.map((item) => {
          return (
            <StudentCard
              data={item}
              currentStudentsData={setClickedStudentData}
              currentsemclicked={setCurrentSemMarksClicked}
            />
          );
        })}
    </div>
  );
};

export default page;
