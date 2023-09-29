import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faFilm,
  faTv,
  faArrowTrendUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const openMenuIcon = (
    <FontAwesomeIcon
      icon={faTimes}
      style={{ color: "#fff" }}
      className="text-xl cursor-pointer"
      onClick={handleMenuClick}
    />
  );

  const closeMenuIcon = (
    <FontAwesomeIcon
      icon={faBars}
      style={{ color: "#fff" }}
      className="text-xl cursor-pointer"
      onClick={handleMenuClick}
    />
  );

  return (
    <div>
      <div className="bg-gray-800 top-0 left-0">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-white cursor-pointer">
            <span className="text-yellow-400">Theatre</span>Lib
          </h1>

          {menuOpen ? openMenuIcon : closeMenuIcon}

        </div>
      </div>
      {menuOpen && (
        <div className="bg-black p-6 text-white border-b-[1px] border-gray-600">
            <NavLink 
                to={'/movies'}
                key={'movies'}
            >
                <div className='flex justify-start items-center flex-row w-full mb-6' onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faFilm} style={{color: '#fff'}} className='text-2xl pr-[10px]'/>
                    <p className='font-semibold'>Movies</p>
                </div>
            </NavLink>
            <NavLink 
                to={'/tvseries'}
                key={'tvseries'}
            >
                <div className='flex justify-start items-center flex-row w-full mb-6' onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faTv} style={{color: '#fff'}} className='text-xl pr-2'/>
                    <p className='font-semibold'>Tv Series</p>
                </div>
            </NavLink>
            <NavLink 
                to={'/trending'}
                key={'trending'}
            >
                <div className='flex justify-start items-center flex-row w-full mb-6' onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faArrowTrendUp} style={{color: '#fff'}} className='text-xl pr-[10px]'/>
                    <p className='font-semibold'>Trending</p>
                </div>
            </NavLink>
            <NavLink 
                to={'/search'}
                key={'search'}
            >
                <div className='flex justify-start items-center flex-row w-full' onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#fff'}} className='text-xl pr-[14px]'/>
                    <p className='font-semibold'>Search</p>
                </div>
            </NavLink>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
