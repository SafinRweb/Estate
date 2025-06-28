import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return()=>{
            document.body.style.overflow = 'auto'
        };
    },[showMobileMenu])

    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full z-10"
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={assets.logo} alt="Logo" />

                <ul className="hidden md:flex gap-7 text-white">
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
                    <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
                    <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
                    <a href="#Testimonial" className="cursor-pointer hover:text-gray-400">Testimonial</a>
                </ul>

                <button className="hidden md:block btn">Sign Up</button>

                <img
                    onClick={() => setShowMobileMenu(true)}
                    src={assets.menu_icon}
                    className="md:hidden w-7 cursor-pointer"
                    alt="Sidebar" />
            </div>
            {/* For-Mobile */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className="flex justify-end p-6 cursor-pointer">
                    <img
                        onClick={() => setShowMobileMenu(false)}
                        src={assets.cross_icon}
                        className="w-6"
                        alt="" />
                </div>
                <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                    <a 
                    onClick={() => setShowMobileMenu(false)}
                    href="#Header" className="px-4 py-2 rounded inline-block hover:text-blue-500">Home</a>
                    <a 
                    onClick={() => setShowMobileMenu(false)}
                    href="#About" className="px-4 py-2 rounded inline-block
                    hover:text-blue-500">About</a>
                    <a 
                    onClick={() => setShowMobileMenu(false)}
                    href="#Projects" 
                    className="px-4 py-2 rounded inline-block
                    hover:text-blue-500">Projects</a>
                    <a 
                    onClick={() => setShowMobileMenu(false)}
                    href="#Testimonials" 
                    className="px-4 py-2 rounded inline-block hover:text-blue-500">Testimonials</a>
                </ul>
            </div>
        </motion.div>
    );
};

export default Navbar;
