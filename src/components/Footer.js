import React from "react";

const Footer = () => {
    return (
        <div className="bg-white text-black p-8 flex justify-between items-center">
            <div className="flex items-center">
                <img src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.jpg" alt="Logo" className="h-10 w-20 mr-4" />
            </div>
            <div> 
            <p className="text-sm">Every idea needs a Medium</p>

            </div>
            <div className="flex">
                <a href="#" className="mr-4">About</a>
                <a href="#" className="mr-4">Terms</a>
                <a href="#" className="mr-4">Privacy</a>
                <a href="#">Help</a>
            </div>
        </div>
    );
};

export default Footer;
