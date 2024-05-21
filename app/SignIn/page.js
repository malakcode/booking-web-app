"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Ensure the correct import path
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Cookies from 'js-cookie';

function SignIn({ initialUserId }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();
  const [userId, setUserId] = useState(initialUserId);

  useEffect(() => {
    if (userId) {
      router.push('/userspace/');  // Redirect if user is already logged in
    }
  }, [userId, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user/login', formData);
      console.log(response.data);

      // Set cookies upon successful sign-in
      Cookies.set('UserId', response.data.idU);
      Cookies.set('UserFN', response.data.firstName);
      Cookies.set('UserLN', response.data.lastName);
      Cookies.set('UserEm', response.data.email);
      Cookies.set('UserIM', response.data.imgPath);

      setUserId(response.data.idU);  // Update state to reflect the user is logged in
      router.push('/userspace/');
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="Username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    id="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <Button type="submit">Sign in</Button>
                  {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Don't have an account?{' '}
                    <a href="/SignUp" className="text-gray-700 underline">Register</a>.
                  </p>
                </div>
              </form>
              {userId && (
                <Button onClick={() => router.push('/Logout')}>Logout</Button>
              )}
            </div>
          </main>
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="/signin.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Sign in</h2>
              <p className="mt-4 leading-relaxed text-white/90">Get in here and experience better healthcare services with us</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default SignIn;