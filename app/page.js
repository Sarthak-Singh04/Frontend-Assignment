"use client"
import { useState } from 'react';
import dummyData from '@/Data';
import { TiEdit, TiDelete } from 'react-icons/ti';
import Link from 'next/link';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Home() {
  const [data, setData] = useState(dummyData);
  const categoryColorMap = {};

  // Generate unique background colors for each category
  data.forEach((item) => {
    item.categories.forEach((category) => {
      if (!categoryColorMap[category]) {
        categoryColorMap[category] = generateRandomColor();
      }
    });
  });

  const handleDelete = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <div className="mt-10 text-2xl font-semibold border-b-2">Recommended Topics</div>
      <div className="flex flex-col mt-6">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b-2 py-4">
            <div>
              <div className="text-xl font-semibold mb-2">{item.title}</div>
              <div className="flex flex-wrap">
                {item.categories.map((category, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 mr-2 mb-2 text-sm rounded-full text-[#fff]"
                    style={{ backgroundColor: categoryColorMap[category] }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex">
            <Link href="/editor">
            <button className="flex px-4 rounded-md py-2 items-center bg-transparent hover:bg-gray-300 focus:outline-none transition duration-200 ease-in-out text-gray-500 hover:text-gray-700">
                <h3 className="mr-2">Write</h3>
                <TiEdit className="text-gray-500" />
              </button>

            </Link>
           
              <button
                className="flex px-4 rounded-md py-2 items-center bg-transparent hover:bg-red-300 focus:outline-none transition duration-200 ease-in-out text-red-500 hover:text-red-700"
                onClick={() => handleDelete(item.id)}
              >
                <h3 className="mr-2">Delete</h3>
                <TiDelete className="text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
