import React from 'react';
import { useState } from "react";
import Navbar from '../components/Navbar';

const ComingSoon = () => {
    const [isNavHovered, setIsNavHovered] = useState(false);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white font-inter">
            <div className="relative z-50">
                <Navbar onHoverChange={setIsNavHovered} />
            </div>
            <h1 className="text-8xl font-bold m-0">Coming Soon</h1>
            <h2 className="text-2xl font-medium my-4">We're working hard to bring you new content!</h2>
            <p className="text-zinc-400 mb-8">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <a
                href="/"
                className="px-8 py-3 bg-indigo-500 text-white rounded-lg font-semibold transition-colors duration-200 hover:bg-indigo-600"
            >
                Go Home
            </a>
        </div>
    );
};

export default ComingSoon;