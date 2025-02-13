import { useState } from "react";
import { Outlet,Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Import the icon

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (<>
        {/* Navbar */}
        <nav 
        className={`border-b border-primary text-primary w-full z-10 
            ${isOpen ? 'fixed bg-light min-h-screen translate-y-0' : '-translate-y-full'}  
            md:static md:translate-y-0 transition-transform duration-500 ease-in-out`}>
        
        {/* Menu Icon */}
        <FontAwesomeIcon 
            onClick={toggleMenu} 
            className={`md:hidden text-3xl cursor-pointer transform translate-y-full translate-x-2 pt-2 ${isOpen ? 'pt-0':''}`}
            icon="fa-solid fa-bars" 
        />

        {/* Navbar Content */}
        <div className="container md:mx-auto flex md:justify-between justify-center">
            <div className="hidden md:block text-lg font-bold font-ArabicLogo ml-3">جيوغرافيك اكاديمي</div>
            
            {/* Mobile Links */}
            <div 
            className={`${isOpen ? 'flex' : 'hidden'} 
            md:flex flex-col md:flex-row items-center transition-transform duration-500 ease-in-out`}>
            
            <Link to="/courses" className="navs">السناتر و المواعيد</Link>
            <Link to="/login" className="navs">تسجيل الدخول</Link>
            <Link to="/signup" className="navs">للحجز و انشاء حساب</Link>
            <Link to="/" className="navs">الرئيسية</Link>
            </div>
        </div>
        </nav>
        <Outlet />
        </>
    );
}