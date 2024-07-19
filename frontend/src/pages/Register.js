import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleAgreeChange = (e) => {
    setAgreed(e.target.checked);
  }

  const handleRegister = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!agreed) {
      alert("You must agree to the terms and conditions!");
      return;
    }

    const registerInfo = {
      username: username,
      password: password
    }

    try {
      const response = await api.post("/doctorInfo/register", registerInfo);
      console.log(response.data);
      if (response.data === true) {
        console.log("Registration successful! Redirecting to login page");
        navigate("/login");
      } else {
        console.log("Registration failed! Please try again.");
        alert("Registration failed! Please try again.");
      }
    } catch (err) {
      console.error(err.message);
      console.error(err.code);
      console.error(err.stack);
      console.error(err.config);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center">新用户注册</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">用户名</label>
              <input id="username" name="username" type="text" onChange={handleUsernameChange} autoComplete="用户名" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"/>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">密码</label>
              <input id="password" name="password" type="password" onChange={handlePasswordChange} autoComplete="新密码" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"/>
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">确认密码</label>
              <input id="confirm-password" name="confirm-password" type="password" onChange={handleConfirmPasswordChange} autoComplete="确认密码" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"/>
            </div>
            <div className="flex items-center">
              <input id="agree" name="agree" type="checkbox" onChange={handleAgreeChange} className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
              <label htmlFor="agree" className="block ml-2 text-sm text-gray-900">请同意用户须知</label>
            </div>
            <div>
              <button onClick={handleRegister} type="submit" disabled={!agreed} className={`w-full px-4 py-2 text-white rounded ${agreed ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'} focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}>
                注册
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
