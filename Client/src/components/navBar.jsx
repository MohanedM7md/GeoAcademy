import { useState } from "react";
import { Link } from "react-router";

export default function navBar() {

    return (<>
        {/* Navbar */}
        <nav className="border-b border-primary text-primary fixed w-full z-10 md:relative">
            <button onClick={toggleMenu} className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <div className="container md:mx-auto flex md:justify-between items-center">
                <div className="hidden md:block text-lg font-bold font-ArabicLogo ml-3">جيوغرافيك اكاديمي</div>
                <div className={`j ${isOpen ? 'flex' : 'hidden'} md:flex md:flex-raw p-0`}>
                    <Link to="/courses" className="navs">السناتر و المواعيد</Link>
                    <Link to="/about" className="navs">تسجيل الدخول</Link>
                    <Link to="/about" className="navs">للحجز و انشاء حساب</Link>
                    <Link to="/" className="navs">الرئيسية</Link>
                </div>
            </div>
        </nav>
        </>
    );
}