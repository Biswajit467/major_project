"use client";
import React, { useEffect, useState } from "react";
import { loginUser } from "../auth_api/route";
import "./login.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from ".././images/a.jpg";

import Loading from "../user/userComponents/Loading";

const LoginPage = ({ searchParams }) => {
  // console.log("searchParams", searchParams.isAdmin);
  // const [studentId, setStudentId] = useState("");
  // const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");
  // const [user_id, setUser_id] = useState(null);
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [isBanned, setIsBanned] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const router = useRouter();
  // const handleSubmit = async (e) => {
  //   try {
  //     setLoading(true);
  //     const userData = {
  //       student_id: studentId,
  //       password: password,
  //     };
  //     const response = await loginUser(userData);
  //     setUser_id(response?.data?.user?.id);
  //     setIsAdmin(response?.data?.user?.is_admin);
  //     setIsBanned(response?.data?.user?.is_banned);
  //     setStudentId("");
  //     setPassword("");
  //     console.log(
  //       "This is login response from LoginPage component : ",
  //       response
  //     );
  //   } catch (error) {
  //     setLoading(false);
  //     setMessage(error.response?.data?.error);

  //     setTimeout(() => {
  //       setMessage("");
  //     }, 4000);
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const sendUserData = () => {
  //   if (user_id && !isBanned) {
  //     if (isAdmin) {
  //       console.log("isadmin value", isAdmin);
  //       router.push("admin/dashboard/home");
  //     } else {
  //       router.push("user/dashboard/home");
  //     }
  //   }
  // };
  // useEffect(() => {
  //   sendUserData();
  // }, [user_id, isAdmin]);

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userData = {
        student_id: studentId,
        password: password,
      };
      const response = await loginUser(userData);
      const { id, is_admin, is_banned } = response?.data?.user || {};
      if (id && !is_banned) {
        if (is_admin) {
          router.push("/admin/dashboard/home");
        } else {
          router.push("/user/dashboard/home");
        }
      } else if (is_banned) {
        setMessage(
          "Sorry you can't Log-in. You are Banned From Using This Application."
        );
      }
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  // console.log("user_id and isbanned", user_id, isBanned);

  return (
    <div>
      {/* {loading && <Loading />} */}
      <div id="c">
        <div style={{ height: "100vh", width: "80rem", backgroundColor: "" }}>
          <Image
            alt="logo"
            style={{ height: "100vh", width: "100%", objectFit: "cover" }}
            src={Logo}
          />
        </div>
        <div class="relative py-3  sm:max-w-xl sm:mx-auto ">
          <div
            id="b"
            class="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10 mt-12"
          >
            <div class="max-w-md mx-auto text-white ">
              <div class="flex items-center space-x-5 justify-center">
                <h1
                  style={{
                    fontFamily: "serif",
                    backgroundImage:
                      'url("/moon.jpg"), linear-gradient(to bottom, #FFFFFF, #3B82F6)',
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontSize: "2.75rem",
                  }}
                >
                  CampusCanvas
                </h1>
              </div>
              <div class="mt-5">
                <label
                  class="font-semibold text-sm text-gray-400 pb-1 block"
                  for="login"
                >
                  {searchParams.is_Admin === "true" ? "Admin-id" : "student-id"}
                </label>
                <input
                  id="student-id"
                  name="student-id"
                  type="text"
                  autoComplete="student-id"
                  required
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
                <label
                  class="font-semibold text-sm text-gray-400 pb-1 block"
                  for="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                />
              </div>

              <div class="flex justify-center items-center">
                <div></div>
              </div>
              <div id="bb" class="mt-5 flrx align-center">
                <button
                  onClick={handleSubmit}
                  className="overflow-hidden w-32 h-12 bg-gradient-to-b from-blue-400 to-blue-900 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                  Login
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                  <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                  <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                    {searchParams.is_Admin === "true" ? "Admin ?" : "Student ?"}
                  </span>
                </button>
              </div>

              <div className="text-red-600 mt-4 font-bold text-center">
                {message && <h3>{message}</h3>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
