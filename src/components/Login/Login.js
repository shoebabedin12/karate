import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginUser } from "../../features/users/userSlice";
import { login } from "../../validation";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState()

  // const localURL = process.env.REACT_APP_LOCAL;
  // const dynamicURL = process.env.REACT_APP_DYNAMIC;
  const apiKey = process.env.REACT_APP_API_KEY;

  console.log(apiKey);

  const initialValues = {
    email: "",
    password: ""
  };
  const signin = async () => {
    try {
      let { data } = await axios.post(
        `${apiKey}/auth/login`,
        {
          email: formik.values.email,
          password: formik.values.password
        }
      );
      console.log(data);
      setLoading(true)
      toast(data.error);
      toast(data.success);
      if (data.otp) {
        toast(data.otp);
        navigate("/verify");
      }
      if (data.success) {
        navigate("/");
        localStorage.setItem("User", JSON.stringify(data));
        dispatch(LoginUser(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: login,
    onSubmit: async (data) => {
      signin();
    }
  });
  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Bangladesh Young King Karate Center(BYKKC)
            </h1>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={formik.handleSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="email"
                placeholder="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm font-normal text-gray-600">
                {formik.errors.email}
              </p>
            ) : null}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm font-normal text-gray-600">
                {formik.errors.password}
              </p>
            ) : null}
            <button
              type="submit"
              className="block w-full bg-indigo-600 py-2 rounded-2xl text-white font-semibold mt-2"
            >
              {!loading ? "Submit" : "loading"}
            </button>
            <Link
              to={"/"}
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
            >
              Forgot Password ?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
