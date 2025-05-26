import React from 'react';
import { useState } from 'react';
import { IoIosMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-10">
            <div className="mx-auto px-6 py-2 flex items-center justify-between">
                <TiThMenu className="block md:hidden" onClick={() => {setIsMenuOpen(!isMenuOpen)}}/>

                   <div className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300 ${isMenuOpen ? 'opacity-30 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}/>
                    <div className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        
                        <div className="flex justify-between p-4">
                        <IoClose className="text-2xl cursor-pointer"onClick={() => setIsMenuOpen(false)}/>
                        <button className="border border-gray-300 rounded-full px-4 py-1.5 text-sm font-bold">Share Your Work</button>
                        </div>

        
                        <ul className="flex flex-col gap-6 px-6 py-4 text-lg">
                            <li><a href="#" className="font-bold">Explore</a></li>
                            <li><a href="#" className="font-bold">Find Jobs</a></li>
                            <li><a href="#" className="font-bold">Hire Freelancers</a></li>
                            <li><a href="#" className="font-bold">Career Resources</a></li>
                        </ul>
                        <div className='flex flex-row gap-2 px-6 py-4 font-bold'>
                            <img alt="" src="https://a5.behance.net/e14bdda55a4b0c0a254964e678aed7fe10fa01bb/img/profile/no-image-100.png?cb=264615658" width="15%"/>
                            <p className='flex flex-row gap-2 justify-center items-center'>Me <IoMdArrowDropdown /></p>
                        </div>
                        <div className="inline-flex items-center bg-black text-white px-3 py-1 ml-3 rounded-md shadow-md hover:bg-gray-800 transition">
                            <FaApple className="w-8 h-8 mr-3" />
                            <div className="text-left leading-tight">
                                <p className="text-[2.5vw] mb-0">Download on the</p>
                                <p className="text-lg font-semibold">App Store</p>
                            </div>
                        </div>
                        <div className="inline-flex items-center mt-3 bg-black text-white px-2 py-1 ml-3 rounded-md shadow-md hover:bg-gray-800 transition">
                            <FaGooglePlay className="text-2xl mr-3" />
                            <div className="text-left leading-tight">
                                <p className="text-[2.5vw]">GET IT ON</p>
                                <p className="text-lg font-semibold">Google Play</p>
                            </div>
                        </div>
                        <ul className="text-[2.5vw] space-y-3 font-bold px-6 py-6">
                            <li>English</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>TOU</li>
                            <li>Privacy</li>
                            <li>Community</li>
                            <li>Help</li>
                            <li>Cookie preferences</li>
                            <li>Do not sell or share my<br/> personal informantion</li>
                        </ul>
                        <button className="border-2 rounded-full text-white ml-3 mt-3 px-4 font-bold text-sm py-1.5 bg-gradient-to-r from-[#0188fd] via-[#003bff] to-[#001faa]">Start Free Trial</button>
                    </div>
                <div className="w-20 h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.5 28.2" className="w-full h-auto" data-iid="v-0-0-0-0-0-0-3-10-0-0"><title id="IconBase-title-v-0-0-0-0-0-0-3-10-0-0">Behance</title><desc id="IconBase-description-v-0-0-0-0-0-0-3-10-0-0"></desc><g><path d="M13.1 0c1.3 0 2.5.1 3.6.4 1.1.2 2 .6 2.8 1.1.8.5 1.4 1.2 1.8 2.1.4.9.6 2 .6 3.2 0 1.4-.3 2.6-1 3.5-.6.9-1.6 1.7-2.8 2.3 1.7.5 3 1.4 3.8 2.6.8 1.2 1.3 2.7 1.3 4.4 0 1.4-.3 2.6-.8 3.6s-1.3 1.9-2.2 2.5c-.9.6-2 1.1-3.2 1.4-1.2.3-2.4.5-3.6.5H0V0h13.1zm-.8 11.2c1.1 0 2-.3 2.7-.8.7-.5 1-1.4 1-2.5 0-.6-.1-1.2-.3-1.6-.2-.4-.5-.7-.9-1-.4-.2-.8-.4-1.3-.5-.5-.1-1-.1-1.6-.1H6.1v6.5h6.2zm.3 11.8c.6 0 1.2-.1 1.7-.2s1-.3 1.4-.6c.4-.3.7-.6 1-1.1.2-.5.4-1.1.4-1.8 0-1.4-.4-2.4-1.2-3.1-.8-.6-1.9-.9-3.2-.9H6.1V23h6.5zm19.3-.1c.8.8 2 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.9c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.6-.8 4.2-.8 1.7 0 3.2.3 4.5 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.2 1.4.3 2.8.2 4.4H30.5c0 1.6.6 3.1 1.4 3.9zm6.3-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1 .7-1.4 1.1-.4.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.2-1.5-.7-2.5-1.4-3.2zM52.8 0v10.4h.1c.7-1.2 1.6-2 2.7-2.5s2.1-.8 3.2-.8c1.5 0 2.7.2 3.6.6.9.4 1.7 1 2.2 1.7.5.7.9 1.6 1.1 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.2-2.7-1.2-1.5 0-2.6.5-3.2 1.3-.7.9-1 2.4-1 4.4v10.5h-5.5V0h5.5zM70 10.6c.6-.9 1.3-1.5 2.2-2.1.9-.5 1.9-.9 3-1.1 1.1-.2 2.2-.3 3.3-.3 1 0 2 .1 3.1.2 1 .1 2 .4 2.8.8.9.4 1.5 1 2.1 1.7.5.7.8 1.7.8 2.9v10.5c0 .9.1 1.8.2 2.6s.4 1.5.7 1.9h-5.6c-.2-.2-.3-.6-.4-.9-.1-.3-.1-.7-.1-1-.9.9-1.9 1.5-3.1 1.9-1.2.4-2.4.5-3.6.5-1 0-1.8-.1-2.7-.4-.8-.2-1.5-.6-2.2-1.1-.6-.5-1.1-1.1-1.5-1.9-.3-.8-.5-1.6-.5-2.7s.2-2.1.6-2.8c.4-.7.9-1.3 1.5-1.8.6-.4 1.4-.8 2.2-1 .8-.2 1.6-.4 2.5-.5l2.4-.3c.8-.1 1.5-.2 2.1-.3.6-.2 1.1-.4 1.5-.7.4-.3.5-.7.5-1.3 0-.6-.1-1.1-.3-1.4-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.4-.4-.1-.9-.1-1.4-.1-1.1 0-1.9.2-2.5.7-.6.5-1 1.3-1.1 2.3h-5.5c0-1.2.4-2.3.9-3.1zm10.9 7.8c-.3.1-.7.2-1.1.3-.4.1-.8.1-1.3.2-.4.1-.9.1-1.3.2l-1.2.3c-.4.1-.8.3-1 .5-.3.2-.5.5-.7.8-.3.4-.3.8-.3 1.3s.1.9.3 1.2c.2.3.4.6.7.8.3.2.7.3 1.1.4.4.1.8.1 1.3.1 1.1 0 1.9-.2 2.5-.5.6-.4 1-.8 1.3-1.3.3-.5.5-1 .5-1.5.1-.5.1-.9.1-1.2v-2.1c-.3.2-.6.4-.9.5zM95.6 7.6v2.8h.1c.7-1.2 1.6-2 2.7-2.5s2.3-.8 3.4-.8c1.5 0 2.7.2 3.6.6 1 .4 1.7 1 2.2 1.7.5.7.9 1.6 1.2 2.6.2 1 .3 2.1.3 3.4v12.3h-5.5V16.4c0-1.7-.3-2.9-.8-3.7-.5-.8-1.4-1.3-2.8-1.3-1.5 0-2.6.6-3.3 1.5-.7.9-1 2.4-1 4.4v10.5h-5.5V7.6h5.4zm25.8 3.6c-.9 0-1.6.2-2.2.6-.6.4-1.1.9-1.5 1.6-.4.6-.6 1.3-.8 2.1-.2.8-.2 1.5-.2 2.3 0 .7.1 1.5.2 2.2.2.8.4 1.4.8 2 .4.6.8 1.1 1.4 1.5.6.4 1.3.6 2.2.6 1.3 0 2.3-.4 3.1-1.1.7-.7 1.2-1.7 1.3-3h5.3c-.4 2.7-1.4 4.7-3.1 6.1-1.7 1.4-3.9 2.1-6.6 2.1-1.5 0-2.9-.3-4.1-.8-1.3-.5-2.3-1.2-3.2-2.1-.9-.9-1.6-2-2.1-3.2-.5-1.3-.7-2.6-.7-4.1 0-1.6.2-3 .7-4.3.5-1.3 1.1-2.5 2-3.5.9-1 2-1.7 3.2-2.3 1.3-.5 2.7-.8 4.3-.8 1.2 0 2.3.2 3.4.5s2.1.8 2.9 1.4c.9.6 1.6 1.4 2.1 2.4.5.9.8 2.1.9 3.4h-5.4c-.2-2.4-1.5-3.6-3.9-3.6zm-92-9.3h11.2v2.7H29.4zm109.9 21c.8.8 2.1 1.2 3.6 1.2 1.1 0 2.1-.3 2.9-.8.8-.6 1.3-1.2 1.5-1.8h4.8c-.8 2.4-2 4.1-3.6 5.2-1.6 1-3.5 1.6-5.8 1.6-1.6 0-3-.3-4.3-.8-1.3-.5-2.3-1.2-3.2-2.2-.9-.9-1.6-2-2-3.3-.5-1.3-.7-2.7-.7-4.3 0-1.5.2-2.9.7-4.2.5-1.3 1.2-2.4 2.1-3.4.9-.9 2-1.7 3.2-2.2 1.3-.5 2.7-.8 4.2-.8 1.7 0 3.2.3 4.4 1 1.3.7 2.3 1.5 3.1 2.7.8 1.1 1.4 2.4 1.8 3.8.4 1.4.5 2.9.4 4.5h-14.5c0 1.5.6 3 1.4 3.8zm6.4-10.5c-.7-.7-1.8-1.1-3.1-1.1-.9 0-1.6.2-2.2.5-.6.3-1.1.7-1.4 1.1-.3.4-.6.9-.7 1.4-.1.5-.2.9-.2 1.3h9c-.3-1.5-.8-2.5-1.4-3.2z"></path></g></svg>
                </div>
                
                    <div>
                        <a href="/" className="hidden md:block text-gray-700 font-bold hover:border-b-3">Explore</a>
                    </div>
                    <div>
                        <a href="/about" className="hidden md:block text-gray-700 font-bold hover:border-b-3">Find Jobs</a>
                    </div>
                    <div className="hidden md:flex flex-row items-center px-2 border-r border-gray-200">
                        <a href="/projects" className="text-gray-700 font-bold">Hire Freelancers</a>
                        <RiArrowDropDownLine color='gray' size={25}/>
                    </div>
                    <div className="hidden md:flex flex-row items-center">
                        <a href="/contact" className="text-gray-700 font-bold">Career Resources</a>
                        <RiArrowDropDownLine color='gray' size={25}/>
                    </div>
                    
                    <div className="hidden sm:flex flex-row items-center px-3 py-1 w-80 rounded-full border bg-gray-50 border-gray-200">
                        <IoSearch color='gray'/>
                        <input
                            type="text"
                            placeholder="Search..."
                            className='px-1 outline-none w-70'
                        />
                        <IoImageOutline color='gray' size={20}/>
                    </div>
                    <button className="hidden md:block border-2 rounded-full text-white px-4 font-bold text-sm py-1.5 bg-gradient-to-r from-[#0188fd] via-[#003bff] to-[#001faa]">Start Free Trial</button>
                    <button className="block md:hidden border-2 rounded-full text-white px-4 font-bold text-sm py-1.5 bg-blue-600">Use App</button>
                    <button className="hidden md:block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-bold">Share Your Work</button>
                    <IoIosMail className="text-2xl" />
                    <FaBell className="text-md"/>
                    <img alt="" src="https://a5.behance.net/e14bdda55a4b0c0a254964e678aed7fe10fa01bb/img/profile/no-image-100.png?cb=264615658" width="2%" className='hidden md:block'/>
                    <div className='hidden md:flex flex-row gap-1 items-center'>
                        <SiAdobe />
                        <p className='text-xs font-bold'>Adobe</p>
                    </div>
            </div>
        </nav>
    );
};

export default Navbar;