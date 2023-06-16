import React from 'react';
import { FiCheck } from 'react-icons/fi';

const NewFeaturePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Introducing Our New Feature</h2>
        <p className="text-gray-600 mb-8">
          We are excited to introduce our latest feature that will revolutionize the way you manage your tasks and
          projects. This powerful tool will streamline your workflow and boost productivity.
        </p>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white rounded-full p-2">
            <FiCheck className="w-6 h-6" />
          </div>
          <p className="text-gray-800">
            Benefit 1: Stay organized with advanced task management capabilities.
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <div className="bg-blue-500 text-white rounded-full p-2">
            <FiCheck className="w-6 h-6" />
          </div>
          <p className="text-gray-800">
            Benefit 2: Collaborate seamlessly with your team members in real-time.
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <div className="bg-blue-500 text-white rounded-full p-2">
            <FiCheck className="w-6 h-6" />
          </div>
          <p className="text-gray-800">
            Benefit 3: Gain valuable insights with advanced analytics and reporting.
          </p>
        </div>
        <button className="bg-blue-500 text-white rounded-md py-2 px-6 mt-8 transition duration-300 ease-in-out hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default NewFeaturePage;
