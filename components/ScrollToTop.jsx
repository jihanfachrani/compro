'use client'

import Link from 'next/link'
import React from 'react'

import { useState, useEffect } from 'react';

const ScrollToTop = () => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setActive(true);
            }
            else {
                setActive(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);
    

    return (
        <Link href="#beranda" className={`fixed bottom-10 right-10 bg-slate-800 text-white p-1 rounded-lg shadow-md 
                 hover:bg-slate-700 w-12 h-12 text-center cursor-pointer transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}>
            <i className="ri-arrow-up-s-fill ri-2x"></i>
        </Link>
    )
}

export default ScrollToTop