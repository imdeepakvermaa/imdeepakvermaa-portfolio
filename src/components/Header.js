import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDownload } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className=" md:fixed z-10 w-screen bg-black text-white  ">
      
      <div className="md:flex justify-between items-center py-4 md:px-12">
        
        <div className="px-4 md:px-1">
          <h1 className="text-xl font-name text-red-500 cursor-pointer">
            imdeepakverma
          </h1>
        </div>

        <div className="flex items-center">
          <ul className="md:flex justify-center font-bold space-x-4 md:space-x-8">
            <li className="ml-4 text-lg hover:underline decoration-orange-500 cursor-pointer ">About</li>
            <li className="text-lg hover:underline decoration-orange-500 cursor-pointer">Skills</li>
            <li className="text-lg hover:underline decoration-orange-500 cursor-pointer">Projects</li>
            <li className="text-lg hover:underline decoration-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="px-4 md:px-0">
          <div className="flex items-center rounded-2xl">
            
            <button className="w-32 md:w-36 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black font-bold rounded-2xl">
            <FontAwesomeIcon icon={faDownload} className='mr-2'/>
              My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
