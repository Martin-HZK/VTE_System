import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import api from '../api/axiosConfig';
const DetailedDashBoard = () => {
  const patientInfo = {
    name: 'Yinhe',
    gender: 'male',
    age: '25',
    admissionDate: '2020-12-1 12:12:12'
  };
  const location = useLocation();
  const { propToPass } = location.state || {}; // 获取传递的unicode

  // const rehabilitationRecords = [
  //   { action: '动作名称A', status: '已完成', score: 90, date: '2024-06-21' },
  //   { action: '动作名称B', status: '未完成', score: 0, date: '2024-06-20' },
  //   { action: '动作名称B', status: '已完成', score: 80, date: '2024-06-20' },
  //   { action: '动作名称C', status: '已完成', score: 90, date: '2024-06-15' }
  // ];

  const [rehabilitationRecords, setRehabilitationRecords] = useState([
    { move_type: '动作名称A', completion: '已完成', score: '90', complete_time: '2024-06-21' },
    { move_type: '动作名称B', completion: '未完成', score: '0', complete_time: '2024-06-20' },
    { move_type: '动作名称B', completion: '已完成', score: '80', complete_time: '2024-06-20' },
    { move_type: '动作名称C', completion: '已完成', score: '100', complete_time: '2024-06-15' }
  ]);

  useEffect(() => {
    fetchRehabilitationRecords({propToPass});
  }
  , []);

  const fetchRehabilitationRecords = async ({propToPass}) => {
    try {
      const response = await api.get('/patient_brief/details/get_ex_record', {
        params: {
          unicode: propToPass
        }
      });
      setRehabilitationRecords(response.data);
      console.log("Patients get:", response.data);
    }
    catch (err) {
      console.error("Error fetching patients:", err);
    }
  }






  return (
    <div className="container mx-auto p-4">

      <div className="max-w-7xl mx-auto mt-4">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-lg font-semibold mb-4">{propToPass}</h2>
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
                  <td className="border border-gray-300 p-2">{record.move_type}</td>
                  <td className="border border-gray-300 p-2">{record.completion}</td>
                  <td className="border border-gray-300 p-2">{record.score}</td>
                  <td className="border border-gray-300 p-2">{record.complete_time}</td>
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