import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white w-full mt-16">

          
            <div className="max-w-6xl mx-auto px-4 py-12 text-center">

                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    KeenKeeper
                </h1>

                <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <h3 className="text-lg font-semibold mb-4">
                    Social Links
                </h3>

              
                <div className="flex justify-center gap-4">
                    <a href="#" className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
                        <FaInstagram />
                    </a>
                    <a href="#" className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
                        <FaXTwitter />
                    </a>
                </div>

            </div>

            
            <div className="border-t border-green-700">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-200 gap-2">

                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Cookies</a>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;