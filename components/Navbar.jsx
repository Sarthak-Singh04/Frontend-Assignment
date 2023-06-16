"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";

function Navbar() {
  const pathname = usePathname();
  const categories = [
    { id: 1, name: "All", path: "/" },
    { id: 2, name: "Custom", path: "/custom" },
    { id: 3, name: "ICP", path: "/icp" },
    { id: 4, name: "Missions", path: "/missions" },
    { id: 5, name: "Product", path: "/product" },
  ];

  return (
    <>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-4 mb-4">
      <Link href="/">        <div className="font-bold text-lg">Categories</div></Link>


        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 duration-200 cursor-pointer ${
                  pathname === category.path
                    ? "border-opacity-100"
                    : "non-active"
                }`}
              >
                <Link href={category.path}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/form">
        <div className="flex justify-center items-center bg-green-500 px-4 py-2 rounded-md text-white group transition-colors duration-300 ease-in-out hover:bg-green-600 hover:text-gray-900" >
          <h3 className="h-8 p-1 cursor-pointer">Text</h3>
          <AiOutlinePlus className="cursor-pointer" />
        </div>
        </Link>

      
      </header>
    </>
  );
}

export default Navbar;
