import React from 'react'

const DetailedDashBoard = () => {
  const patientInfo = {
    name: 'Yinhe',
    gender: 'male',
    age: '25',
    admissionDate: '2020-12-1 12:12:12'
  };

  const rehabilitationRecords = [
    { action: '动作名称A', status: '已完成', score: 90, date: '2024-06-21' },
    { action: '动作名称B', status: '未完成', score: 0, date: '2024-06-20' },
    { action: '动作名称B', status: '已完成', score: 80, date: '2024-06-20' },
    { action: '动作名称C', status: '已完成', score: 90, date: '2024-06-15' }
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="bg-teal-500 p-4 flex justify-between items-center text-white">
        <h1 className="text-lg">首页</h1>
        <div className="flex items-center">
          <span>当前账户用户名</span>
          <button className="ml-4">登出</button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-4">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-lg font-semibold mb-4">康复人员信息</h2>
          <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">姓名</th>
                <th className="border border-gray-300 p-2">性别</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">{patientInfo.name}</td>
                <td className="border border-gray-300 p-2">{patientInfo.gender}</td>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">年龄</th>
                <th className="border border-gray-300 p-2">入院时间</th>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">{patientInfo.age}</td>
                <td className="border border-gray-300 p-2">{patientInfo.admissionDate}</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-lg font-semibold mb-4">康复记录</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">动作类型</th>
                <th className="border border-gray-300 p-2">完成情况</th>
                <th className="border border-gray-300 p-2">完成评分</th>
                <th className="border border-gray-300 p-2">完成时间</th>
              </tr>
            </thead>
            <tbody>
              {rehabilitationRecords.map((record, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{record.action}</td>
                  <td className="border border-gray-300 p-2">{record.status}</td>
                  <td className="border border-gray-300 p-2">{record.score}</td>
                  <td className="border border-gray-300 p-2">{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DetailedDashBoard