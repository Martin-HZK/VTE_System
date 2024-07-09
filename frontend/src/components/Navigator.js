import React from 'react';
// import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <div className="bg-teal-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl">首页</h1>
      <div className="flex items-center space-x-4">
        <button className="text-white">当前账户用户名</button>
        <button className="text-white">登出</button>
      </div>
    </div>
  );
}

export default Navigator;