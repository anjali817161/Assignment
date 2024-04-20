import React from "react";

const Blog = () => {
    return (
        <div className=" bg-red-500 ">
            <div className="flex">
            <div className="mb-4 p-4 max-w-2xl" >
                <span className="text-white">Start a Blog for Free</span>
                <h1 className="text-7xl font-bold mb-2">Publish, grow, and earn, all in one place</h1>
                <div className="mb-2">
                    <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full mb-4">
                Start writing
            </button>
            </div>
            <hr />
            <div className="border-l-2 border-gray-600 ml-52 p-2">
                <img src="https://media.istockphoto.com/id/1485172638/photo/downward-red-business-chart-with-arrows-on-blurry-background-crisis-recession-and-financial.webp?b=1&s=170667a&w=0&k=20&c=CxlzHIjvtWjGwwZNqOdfjaxkRaxMps_PJJZnv8jbDHE=" alt="Blog Image" className="w-full ml-10 h-full" />
            </div>
            </div>
        </div>
    );
};

export default Blog;
