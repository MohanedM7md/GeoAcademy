import { useState } from "react";


function Login() {
    return (
        <>
            <div className="flex flex-col gap-y-5 items-center w-10/12 md:w-3/6 mt-10 mx-auto h-5/6 "> 
                    <h1 className="text-4xl font-extrabold ">
                    تسجيل الدخول
                    </h1>
                    <form className="grid grid-cols-2 gap-y-8 gap-x-2 w-full text-right text-textsColor"> 
                        <label className="col-span-2">
                            <p>البريد الالكتروني</p>
                            <input dir="rtl" className="inp   w-full" type="email" />
                        </label>

                        <label className="col-span-2">
                            <p>كلمة المرور</p>
                            <input dir="rtl" className="inp   w-full" type="password" />
                        </label>
                        <div className="col-span-2 flex justify-center">
                        <button className ="transition border-2 border-primary hover:border-primary hover:-translate-y-1 hover:bg-transparent hover:text-primary bg-primary rounded-md text-2xl font-extrabold text-white w-5/12 h-12" type="submit">
                        تسجيل الدخول
                        </button>
                        </div>
                    </form>
                </div>
        </>
    );
}

export default Login;