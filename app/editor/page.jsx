"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Page() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    {/* if i save this data on the server so i'm using this*/}
    const data=fetch(" ");


    data.set('title',title);
    data.set('summary',summary);
    data.set('content',content)



    // Handle form submission here
    // ...
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <form className="sm:max-w-lg min-w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Create Article</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Title"
            className="input pt-3 pb-2 block w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Summary"
            className="input pt-3 pb-2 block w-full bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            className="editor"
          />
        </div>

        <button
          className="w-full bg-green-400 py-4 px-2 rounded-md text-lg text-white font-bold hover:bg-green-500 transition-colors duration-200"
          onClick={handleSubmit}
        >
          Create Article
        </button>
      </form>
    </div>
  );
}

export default Page;
