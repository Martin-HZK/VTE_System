import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Navigator = () => {

  const navigator = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("您确定要退出系统吗?");
        if (confirmLogout) {
            // Perform logout action here
            console.log("User confirmed logout");
            localStorage.clear();
            navigator('/');
        } else {
            console.log("User canceled logout");
        }
  }

  const handleReturn = () => {
    navigator('/dashboard');
  }
  
  return (
    <div className="bg-teal-500 p-4 flex justify-between items-center">
      <button onClick={handleReturn} className="text-white text-xl">首页</button>
      <div className="flex items-center space-x-4">
        <button className="text-white">当前账户用户名</button>
        <button onClick={handleLogout} className="text-white">登出</button>
      </div>
    </div>
  );
}

export default Navigator;