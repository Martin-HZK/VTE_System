import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api/axiosConfig';

const DashBoard = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: '',
    gender: '',
    age: '',
    admissionDate: '',
    lastExerciseDate: '',
    recordDetails: ''
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:8080/doctor_info');
      setPatients(response.data);
    } catch (err) {
      console.error("Error fetching patients:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const addPatient = async () => {
    try {
      const response = await axios.post('http://localhost:8080/doctor_info', newPatient);
      setPatients([...patients, response.data]);
      setNewPatient({
        name: '',
        gender: '',
        age: '',
        admissionDate: '',
        lastExerciseDate: '',
        recordDetails: ''
      });
    } catch (err) {
      console.error("Error adding patient:", err);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">在院患者</h1>
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addPatient}
        >
          添加新病例
        </button>
      </div>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">姓名</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">性别</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">年龄</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">入院时间</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">最近康复运动时间</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">康复记录详情</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {patients.map((patient, index) => (
            <tr key={index} className="bg-gray-100 border border-gray-300 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.name}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.gender}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.age}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.admissionDate}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.lastExerciseDate}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.recordDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashBoard