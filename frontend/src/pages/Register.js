import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async(e) => {
    e.preventDefault();
    const registerInfo = {
      username: username,
      password: password
    }

    if(!agree) {
      alert("Please agree to the user agreement!");
      return;
    }

    if(password == confirmPassword) {
      try{
        const response = await api.post("/doctorInfo/register", registerInfo);
        console.log(response.data)
        if(response.data == true) {
          console.log("Register success!Redirecting to login page");
          navigate("/");
        } else {
          alert("Register failed! Please modify your username and password!");
        }
      } catch(err) {
        console.error(err.message);
        console.error(err.code);
        console.error(err.stack);
        console.error(err.config);
        console.error(err.config);
      }
    } else {
      alert("The password and confirm password are not the same!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">新用户注册</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">用户名</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">密码</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">确认密码</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <label className="ml-2 text-gray-700">请同意用户须知</label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            注册
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register