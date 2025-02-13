import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import {NavLink,Outlet } from "react-router";
import { useState } from "react";
export default function SideNavBar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <>
    <div className="relative overflow-hidden h-screen float-right w-screen  md:w-36">
      <div className=
      {
        `ml-auto text-right h-full bg-darkPrimary text-white fixed w-full md:relative
        ${toggleMenu ? 'translate-x-0' : 'translate-x-full'}
        transition-transform duration-500 ease-in-out`
        }>

        <div className="flex md:flex-row flex-col justify-between p-3 ">
          <FontAwesomeIcon className=
          {`text-xl cursor-pointer text-darkBackground md:relative fixed
      
          ${toggleMenu?'translate-x-90':'-translate-x-10 rotate-180'}
          transition duration-600 ease-in-out`
          }
          onClick={()=>setToggleMenu(!toggleMenu)}
          icon="fa-solid fa-arrow-right" />
          <h2 className="text-lg font-bold ">جيو أكاديمي</h2>
        </div>
        <ul className="flex flex-col gap-y-4 mt-10"> 
          <NavLink to="/landing" className={({ isActive }) => ` ${isActive ? 'bg-dark p-2' : 'SideNaves'}`}>الصفحة الرئيسية</NavLink>
          <NavLink to="/quizs" className={({ isActive }) => ` ${isActive ? 'bg-dark p-2' : 'SideNaves'}`}>الكويزات</NavLink>
          <NavLink to="/exams" className={({ isActive }) => ` ${isActive ? 'bg-dark p-2' : 'SideNaves'}`}>الاختبارات</NavLink>
          <NavLink to="/videos" className={({ isActive }) => ` ${isActive ? 'bg-dark p-2' : 'SideNaves'}`}>المحاضرات</NavLink>
          <NavLink to="/gradeBook" className={({ isActive }) => ` ${isActive ? 'bg-dark p-2' : 'SideNaves'}`}>التسليمات</NavLink>
        </ul>
      </div>
    </div>
      <Outlet />
    </>
  );
}