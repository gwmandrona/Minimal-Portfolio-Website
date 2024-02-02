import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className = "text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Garrett</h1>
            <p className = "text-base md:text-xl mb-3 font-medium">Security Engineer & Technology Management Student</p>
            <p>This is where the bio will go</p>
        </div>
        // Go to tailwindcss.com/dpcs/padding to see the documentation on what padding to use
    )
}

export default Intro;