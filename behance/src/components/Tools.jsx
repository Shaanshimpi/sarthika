import React from 'react';
import { IoIosMail } from "react-icons/io";
import { SiAdobexd } from "react-icons/si";
import { FaRegFolderOpen } from "react-icons/fa6";
import { RiShare2Fill } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
const Tools = () => {
    return (
        <>
        <div className="hidden md:block pl-5 mt-32 text-xs text-gray-500">
            <div className="border relative border-gray-300 w-13 h-13 rounded-full"><FaPlusCircle color='blue' size={15} className='absolute right-0 bottom-0'/></div>
            <p className="ml-2 mt-1">Follow</p>
            <div className="border mt-6 border-gray-300 w-13 h-13 rounded-full flex items-center justify-center"><IoIosMail size={20} color='black'/></div>
            <p className="ml-4 mt-1">Hire</p>
            <div className="border mt-6 border-gray-300 w-13 h-13 rounded-full flex items-center justify-center"><SiAdobexd size={20} color='purple'/></div>
            <p className="ml-3 mt-1">Tools</p>
            <div className="border mt-6 border-gray-300 w-13 h-13 rounded-full flex items-center justify-center"><FaRegFolderOpen size={20} color='black'/></div>
            <p className="ml-3 mt-1">Save</p>
            <div className="border mt-6 border-gray-300 w-13 h-13 rounded-full flex items-center justify-center"><RiShare2Fill size={20} color='black'/></div>
            <p className="ml-3 mt-1">Share</p>
            <div className="border mt-6 border-gray-300 bg-blue-600 w-13 h-13 rounded-full flex items-center justify-center"><FaThumbsUp size={20} color='white'/></div>
        </div>
        </>
    );
}

export default Tools;