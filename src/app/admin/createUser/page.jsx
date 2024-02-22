"use client"
import { useState } from 'react';
import {createUser} from '../../auth_api/route'

const CreateUserPage = () => {
  const [user, setUser] = useState({
    student_id: '',
    email: '',
    password: '',
    name: '',
    sem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUser(user).then((response) =>{
      console.log("response from component" , response)
    })
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Create User</h1>
      <div >
        <div className="mb-4">
          <label htmlFor="student_id" className="block text-sm font-medium text-gray-700">User Name:</label>
          <input type="text" id="student_id" name="student_id" value={user.student_id} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md  text-gray-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md text-gray-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" id="password" name="password" value={user.password} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md text-gray-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md text-gray-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="sem" className="block text-sm font-medium text-gray-700">Semester:</label>
          <input type="text" id="sem" name="sem" value={user.sem} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md text-gray-700" />
        </div>
        <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Create User</button>
      </div>
    </div>
  );
};

export default CreateUserPage;
