"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { get_users_by_branch } from "../../adminapi/route";
import StudentCard from "../../adminComponents/StudentCard";

const page = ({ searchParams }) => {
  // const router = useRouter();
  const [allstudents, setAllstudents] = useState(null);

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

  return (
    <div>
      {allstudents &&
        allstudents.map((item) => {
          return <StudentCard data={item}  />;
        })}
    </div>
  );
};

export default page;
