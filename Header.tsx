import React, { useState, useEffect } from 'react';
import type { ViewId } from '../types';
import Navigation from './Navigation';

interface HeaderProps {
    activeView: ViewId;
    onNavClick: (viewId: ViewId) => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, onNavClick }) => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Ho_Chi_Minh' };
            setCurrentDate(new Intl.DateTimeFormat('vi-VN', options).format(now));
        };
        updateDate();
    }, []);

    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                         <img src="https://i.ibb.co/L89T71p/ghn-logo.png" alt="GHN Logo" className="h-7 md:h-8"/>
                         <div className="w-px bg-slate-300 self-stretch h-8 hidden sm:block"></div>
                         <h1 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">Quản lý Nhân tài & Năng lực Lãnh đạo</h1>
                    </div>
                    <div className="text-sm text-slate-500 hidden md:block">
                        <span>{currentDate}</span>
                    </div>
                </div>
                <Navigation activeView={activeView} onNavClick={onNavClick} />
            </div>
        </header>
    );
};

export default Header;