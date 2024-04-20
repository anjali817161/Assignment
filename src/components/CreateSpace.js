import React from "react";

const Space = () => {
    return (
        <div className=" bg-red-200">
            <div className="flex justify-between ">
                <div className="md:mr-4 mb-4  p-4 ">
                    <h1 className="text-7xl mt-10">Create<br /> your Space</h1>
                    <p className="text-black  mt-40">Tell your story your way—with different ways to write, style, and brand your work</p>
                    <button className="bg-black  text-white font-bold py-2 px-4 rounded-full mt-4">
                        Start writing
                    </button>
                </div>
                <div className="mb-0 ">
                    <img src="https://plus.unsplash.com/premium_photo-1681702277226-d3c63331730a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRldmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="Space Image" className="w-full h-full  " />
                </div>
            </div>
            <hr className="border-black mb-4" />
            <div className="flex  grid-cols-2 divide-x divide-black">
                <div className="mb-4 p-6">
                    <h2 className="text-xl font-semibold ">Start blog</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                
                <div className="p-6">
                    <h2 className="text-xl font-semibold">Start a Publication</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
};

export default Space;
