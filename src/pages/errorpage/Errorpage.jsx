import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 via-indigo-600 to-blue-600 text-white px-4">

            <div className="text-center">

                {/* 404 Text */}
                <h1 className="text-8xl md:text-9xl font-extrabold mb-4 drop-shadow-lg">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                    Oops! Page Not Found
                </h2>

                <p className="text-white/80 mb-6 max-w-md mx-auto">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        Go Home
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Errorpage;