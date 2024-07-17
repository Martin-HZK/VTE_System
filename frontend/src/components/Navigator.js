import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Navigator = () => {

  const navigator = useNavigate();

  const handleLogin = () => {
    const confirmLogout = window.confirm("您确定要推出系统吗?");
        if (confirmLogout) {
            // Perform logout action here
            console.log("User confirmed logout");
            localStorage.clear();
            navigator('/');
        } else {
            console.log("User canceled logout");
        }
  }

  return (
    <div className="bg-teal-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl">首页</h1>
      <div className="flex items-center space-x-4">
        <button className="text-white">当前账户用户名</button>
        <button onClick={handleLogin} className="text-white">登出</button>
      </div>
    </div>
  );
}

export default Navigator;