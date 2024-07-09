import React, { useEffect } from 'react'
import {useState} from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import api from '../api/axiosConfig';
const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleCheckChange = (e) => {
    setChecked(e.target.checked);
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    const loginInfo = {
      username: username,
      password: password
    }

    // Can be adder later if we need confirmation
    // if (!checked) {
    //   console.log("Please confirm the Ethical issue");
    //   alert("Please confirm the Ethical issue!");
    //   return;
    // }
    try{
      const response = await api.post("/doctorInfo/login", loginInfo);
      console.log(response.data)
      if(response.data == true) {
        console.log("Login success!Redirecting to upload image page");
        navigate("dashboard", { state: { propToPass: username} });
        // setGlobUsername(username);
      } else {
        console.log("Login failed! Please check your username and password!");
        alert("Login failed! Please check your username and password!");
      }
    } catch(err) {
      console.error(err.message);
      console.error(err.code);
      console.error(err.stack);
      console.error(err.config);
      console.error(err.config);
    }
    

  };

  useEffect(() => {
    console.log("Login page loaded");
  }
  , []);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">登陆</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">用户名</label>
            <input id="text" name="text" type="text" onChange={handleUsernameChange} autoComplete="姓名" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">密码</label>
            <input id="password" name="password" type="password" onChange={handlePasswordChange} autoComplete="密码" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"/>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" onChange={handleCheckChange} className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">记住密码</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">忘记密码</a>
            </div>
          </div>
          <div>
            <button onClick={handleLogin}type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">登陆</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login