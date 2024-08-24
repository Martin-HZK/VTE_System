import React from 'react'
import { useState, useEffect, useNavigate } from 'react';
import api from '../api/axiosConfig';
import AddPatientPopUp from '../components/AddPatientPopUp';

const DashBoard = () => {
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unicode, setUnicode] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [receive_time, setReceiveTime] = useState("");
  const [recent_excercise, setRecentExcercise] = useState("");
  // const [detail_url, setDetailUrl] = useState("");
  // const [details, setDetails] = useState("");
  useEffect(() => {
    fetchPatients();
  }, []);

  const navigate = useNavigate();


  const fetchPatients = async () => {
    try {
      const response = await api.get('/patient_brief/all_patients');
      setPatients(response.data);
      console.log("Patients get:", response.data);
    } catch (err) {
      console.error("Error fetching patients:", err);
    }
  };


  const onFileUpload = async () => {
    const formData = new FormData();
  
    formData.append("unicode", unicode);
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("receive_time", receive_time);
    formData.append("recent_excercise", recent_excercise);
    // formData.append("detail_url", detail_url);
    // formData.append("details", details)

    try{
      const response = await api.post("", formData);
      console.log(response);
      alert("The file is successfully uploaded");
      setUnicode("");
      setName("");
      setGender("");
      setAge("");
      setReceiveTime("");
      setRecentExcercise("");
      // setDetails("");
      // setDetailUrl("");

  } catch(err) {
      console.log(err);
      alert("Failed to upload goods");
  }


  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">在院患者</h1>
      <div className="flex justify-end mb-4">
      <button className="p-2 bg-blue-500 text-white rounded" onClick={() => setIsModalOpen(true)}>添加新病例</button>
      <AddPatientPopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={onFileUpload} />
      </div>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 block md:table-cell">编号</th>
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
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.unicode}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.name}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.gender}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.age}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.receive_time}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{patient.recent_excercise}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell" onClick={()=> navigate('details', { state: { propToPass: patient.unicode}}) }>详情</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashBoard