import React from 'react'
import { useState } from 'react';

const AddPatientPopUp = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        unicode: '',
        name: '',
        gender: '',
        age: '',
        // recent_exercise: '',
        receive_time: '',
        // detail_url: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log('The form data is changed!!!')
        console.log(formData)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('This submit is called')
        onSave(formData);
        onClose();
      };
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-2xl mb-4">添加新病例</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-8"> {/* 调整 gap 值 */}
            <div className="flex items-center">
              <label className="block text-gray-700 mr-4 w-24">编号:</label> {/* 调整 mr 和 w 值 */}
              <input
                type="text"
                name="unicode"
                value={formData.unicode}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700 mr-4 w-24">姓名:</label> {/* 调整 mr 和 w 值 */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700 mr-4 w-24">性别:</label> {/* 调整 mr 和 w 值 */}
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700 mr-4 w-24">年龄:</label> {/* 调整 mr 和 w 值 */}
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700 mr-4 w-24">入院时间:</label> {/* 调整 mr 和 w 值 */}
              <input
                type="text"
                name="receive_time"
                value={formData.receive_time}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="mr-2 p-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              取消
            </button>
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded"
              onClick={handleSubmit}
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
      );
}

export default AddPatientPopUp