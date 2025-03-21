import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] =  useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
  });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
      const res = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        
        navigate('/links')
        navigate(0);
      }
      else {
        alert('Invalid credentials');
      }
  }
  return (
    <div className="p-8 md:p-12 w-full flex flex-col items-start font-poppins bg-primary text-tertiary">

    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg items-center ">
        <div className="flex flex-col items-center ">
          <img
            src="src/assets/logo1.png"
            alt="Company Logo"
            className="  h-20 w-auto items-center"
          />
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-white">
            Welcome to Admin Portal
          </h2>
        </div>

        <div className="mt-8">  
          <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6 w-full">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
              onChange={handleChange}
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                className="mt-2 block w-full bg-transparent border border-yellow-300 rounded-md  px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-2 block w-full rounded-md bg-transparent border border-yellow-300  px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}
