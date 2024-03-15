"use client";
// pages/LoginPage.js
import React, { useEffect, useState } from "react";
import { loginUser, registerUser } from "../auth_api/route";
import "./login.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/navigation";

const LoginPage = ({ searchParams }) => {
  // console.log("searchParams", searchParams.isAdmin);
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user_id, setUser_id] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBanned, setIsBanned] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      const userData = {
        student_id: studentId,
        password: password,
      };
      const response = await loginUser(userData);
      setUser_id(response?.data?.user?.id);
      setIsAdmin(response?.data?.user?.is_admin);
      setIsBanned(response?.data?.user?.is_banned);
      setStudentId("");
      setPassword("");
      console.log(
        "This is login response from LoginPage component : ",
        response
      );
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.error);

      setTimeout(() => {
        setMessage("");
      }, 4000);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const sendUserData = () => {
    if (user_id && !isBanned) {
      if (isAdmin) {
        console.log("isadmin value",isAdmin)
        router.push("admin/dashboard/home");
      } else {
        router.push("user/dashboard/home");
      }
    }
  };
  useEffect(() => {
    sendUserData();
  }, [user_id, isAdmin]);


  return (
    <div>
      <div id="c">
        <div id="k">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            width={"100%"}
          >
            <div>
              <img
                className=" h-screen"
                src="https://plus.unsplash.com/premium_photo-1683887034491-f58b4c4fca72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <button class="absolute bottom-0 left-0 mb-4 ml-9 border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                <p class="z-10">Discover More</p>
              </button>
            </div>
            <div>
              <img
                className=" h-screen"
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <button class="absolute bottom-0 left-0 mb-4 ml-4 border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                <p class="z-10">Discover More</p>
              </button>
            </div>
          </Carousel>
        </div>
        <div class="relative py-3  sm:max-w-xl sm:mx-auto ">
          <div
            id="b"
            class="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10 mt-12"
          >
            <div class="max-w-md mx-auto text-white ">
              <div class="flex items-center space-x-5 justify-center">
                <h1
                  id="n"
                  className="text-4xl font-inter font-extrabold text-white py-4  transform transition duration-300 ease-out hover:scale-105 hover:animate-shake"
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
                  class="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
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
              <div>
                {isBanned ? (
                  <div className="text-red-600 font-bold">
                    Sorry you can't Log-in. You are Banned From Using This
                    Application.
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
