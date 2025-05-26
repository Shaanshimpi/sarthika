import React from 'react';

const Footer = () => {
    return (
        <footer className="hidden md:flex flex justify-between fixed bottom-0 left-0 w-full py-2 px-5 border-t border-gray-200 bg-gray-50 z-50">
            <div className="flex justify-between  space-x-3 text-xs text-gray-500 font-bold">
                <div className='border-r border-gray-400 pr-4'>More Behance</div>
                <div className='border-r border-gray-400 pr-4'>English</div>
                <div className='border-r border-gray-400 pr-4'>Try Behance Pro</div>
                <div>TOU</div>
                <div>Privacy</div>
                <div>Community</div>
                <div>Help</div>
                <div>Cookie preferences</div>
                <div>Do not sell or share my personal information</div>
                </div>
        </footer>
    );
};

export default Footer;