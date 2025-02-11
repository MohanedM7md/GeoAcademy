import { useState } from "react";
import { Outlet,Link } from "react-router";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (<>
        {/* Navbar */}
        <nav className={`border-b border-primary text-primary  w-full z-10 ${isOpen?'min-h-screen fixed bg-light':''}` }>
            <button onClick={toggleMenu} className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <div className="container md:mx-auto flex md:justify-between justify-center">
                <div className="hidden md:block text-lg font-bold font-ArabicLogo ml-3">جيوغرافيك اكاديمي</div>
                <div className={`${isOpen ? 'flex' : 'hidden'}   md:flex flex-col items-center  md:flex-row p-0`}>
                    <Link to="/courses" className="navs">السناتر و المواعيد</Link>
                    <Link to="./login" className="navs">تسجيل الدخول</Link>
                    <Link to="./signup" className="navs">للحجز و انشاء حساب</Link>
                    <Link to="/" className="navs">الرئيسية</Link>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    );
}