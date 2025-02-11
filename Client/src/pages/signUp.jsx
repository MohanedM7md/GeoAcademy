import { useState } from "react";


export default function SignUp() {
    return (
        <>
            <div className="flex flex-col gap-y-5 items-center w-10/12 md:w-3/6 mt-10 mx-auto h-5/6 "> 
                    <h1 className="text-4xl font-extrabold ">
                    إنشاء حسابك الشخصي
                    </h1>
                    <form className="grid grid-cols-2 gap-y-8 gap-x-2 w-full text-right text-textsColor">
                        <label className="">
                            <p>الاسم الاوسط</p>
                            <input dir="rtl" className="inp   w-full " type="text" />
                        </label>
                        <label className="">
                            <p>الاسم الاول</p>
                            <input dir="rtl" className="inp  w-full" type="text" />
                        </label>
                        <label className="col-span-2">
                            <p>الاسم الاخير</p>
                            <input dir="rtl" className="inp  w-full " type="text" />
                        </label>
                        <label className="col-span-2">
                            <p>البريد الالكتروني</p>
                            <input dir="rtl" className="inp   w-full" type="email" />
                        </label>
                        <label className="">
                            <p>تأكيد كلمة المرور</p>
                            <input dir="rtl" className="inp   w-full" type="password" />
                        </label>
                        <label className="">
                            <p>كلمة المرور</p>
                            <input dir="rtl" className="inp   w-full" type="password" />
                        </label>

                        <label className="">
                            <p>رقم هاتف ولي الامر</p>
                            <input dir="rtl" className="inp   w-full" type="phone" />
                        </label>
                        <label className="">
                            <p>رقم الهاتف</p>
                            <input dir="rtl" className="inp   w-full" type="phone" />
                        </label>
                        <div className="col-span-2 flex justify-center">
                        <button className =" bg-primary rounded-md text-3xl font-extrabold text-white w-3/12 h-12" type="submit"> تاكيد</button>
                        </div>
                    </form>
                </div>
        </>
    );
}

