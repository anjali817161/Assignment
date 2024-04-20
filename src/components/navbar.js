import React from "react";

const Navbar = () => {
    return (
        <div className="bg-red-500 border-b-2 border-gray-600 text-black">
            <div className="flex justify-between items-center py-4 px-6 ">
                <img src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.jpg" alt="Logo" className="h-10 w-24" />
                <div>
                    <a href="#" className="text-white mr-4">Sign In</a>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-full">
                        Start Writing
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
