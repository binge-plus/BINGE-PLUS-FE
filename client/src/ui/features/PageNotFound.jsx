import React from 'react';

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white font-inter">
            <h1 className="text-8xl font-bold m-0">404</h1>
            <h2 className="text-2xl font-medium my-4">Page Not Found</h2>
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

export default PageNotFound;
