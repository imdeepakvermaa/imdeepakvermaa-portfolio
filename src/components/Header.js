import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDownload } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className="w-full bg-black text-white">
      
      <div className="md:flex justify-between items-center py-4 md:px-12">
        
        <div className="px-4 md:px-1">
          <h1 className="text-2xl font-head cursor-pointer">
            Imdeepakverma
          </h1>
        </div>

        <div className="flex items-center">
          <ul className="md:flex justify-center font-bold space-x-4 md:space-x-8">
            <li className="text-lg hover:underline decoration-orange-500 cursor-pointer">About</li>
            <li className="text-lg hover:underline decoration-orange-500 cursor-pointer">Skills</li>
            <li className="text-lg hover:underline decoration-orange-500 cursor-pointer">Projects</li>
            <li className="text-lg hover:underline decoration-orange-500 cursor-pointer">Certifications</li>
          </ul>
        </div>

        <div className="px-4 md:px-0">
          <div className="flex items-center rounded-2xl">
            
            <button className="w-24 md:w-36 h-10 bg-orange-600 text-white font-bold rounded-2xl">
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
