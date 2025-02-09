import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="min-h-screen bg-light ">

            {/* Main Content */}
            <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#d2691e79] to-[#b1581983]">
                {/* Image on the left */}
                <div className="flex md:w-1/2 h-full justify-center items-center">
                    {/* Uncomment and set the image source */}
                    <div className="w-96 h-96 bg-black m-3"></div>
                    {/* <img src="/images/landing.png" alt="landing" className="w-full h-full object-cover"/> */}
                </div>

                {/* Text content on the right */}
                <div className="text-right md:w-1/2 font-ArabicText my-10">
                    <div className="flex flex-col justify-center ">
                        <h2 className="px-1 py-4 text-4xl font-extrabold">
                            اهلا بك فى منصة جيوغرافيك اكاديمي لتعلم مادة الجغرافيا
                        </h2>
                        <p className="px-1 py-4 text-xl">
                            تمتع بالحصول علي أفضل تجربة مشاهدة واستماع تفاعلية واختبار قدراتك مع كل درس تنتهي منه   
                        </p>
                    </div>
                    <div className="flex flex-row-reverse gap-x-12"> 
                        <button className="Homebtn">
                            إنشاء حساب جديد
                        </button>
                        <Link to="./pages/login">
                         <button className="Homebtn">
                            تسجيل دخول
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}