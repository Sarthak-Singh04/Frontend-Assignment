"use client"
import React, { useState } from 'react';
import dummyData from '@/Data';
import StoreData from '@/StoeData';

const SelectData = () => {
  const [title, setTitle] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryError, setCategoryError] = useState(false);
  const [showSelection, setShowSelection] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (title.trim() === '') {
      setCategoryError(true);
      return;
    }

    if (selectedCategories.length === 0) {
      setCategoryError(true);
      return;
    }

    // Handle form submission
    console.log('Title:', title);
    console.log('Selected Categories:', selectedCategories);
    const data = {
      id: dummyData.length + StoreData.length + 1,
      title: title,
      categories: selectedCategories,
    };

    StoreData.push(data);
    console.log(StoreData);

    setTitle('');
    setSelectedCategories([]);
    setCategoryError(false);

   
    setShowSelection(true);
  };

  return (
    <div className="py-4 sm:p-12">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-8">Select option</h1>
        <form onSubmit={handleSubmit} noValidate className="bg-white border-0 shadow-lg sm:rounded-3xl px-6 py-12">
          <div className="mb-5">
            <label htmlFor="title" className="text-gray-500">
              Enter title
            </label>
            <input
              type="text"
              name="title"
              placeholder=" "
              required
              value={title}
              onChange={handleTitleChange}
              className={`pt-3 pb-2 block w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 ${
                categoryError && title.trim() === '' ? 'border-red-500' : ''
              }`}
            />
            {categoryError && title.trim() === '' && (
              <span className="text-sm text-red-600">Title is required</span>
            )}
          </div>

          <div className="mb-5">
            <label className="text-gray-500">Select categories</label>
            <div className="flex flex-wrap">
              {dummyData.flatMap((book) => book.categories).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`px-3 py-1 bg-gray-300 text-gray-700 rounded-full mr-2 mb-2 ${
                    selectedCategories.includes(category) ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {categoryError && selectedCategories.length === 0 && (
              <span className="text-sm text-red-600">Category is required</span>
            )}
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>

        <div className="mt-8">
          {title && (
            <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2">
              <span className="font-bold">Title:</span> {title}
            </div>
          )}
          {selectedCategories.length > 0 && (
            <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2">
              <span className="font-bold">Selected Categories:</span>{' '}
              {selectedCategories.map((category) => (
                <span
                  key={category}
                  className="inline-block px-2 py-1 bg-gray-300 text-gray-700 rounded-full mx-1"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectData;
