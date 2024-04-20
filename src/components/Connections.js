import React from "react";

const Connection = () => {
    return (
        <div className="p-4 text-black">
            <div className="mb-4 justify-center text-center p-4">
                <h1 className="text-7xl ">Find and grow your<br /> audience.</h1>
                <p className="text-black text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <hr className="border-black"/>
            <div className="flex  grid-cols-2 divide-x divide-black  md:grid-cols-2 gap-4">
                <div className="mb-4 p-4">
                    <div className=" items-center mb-2">
                        <h2 className="text-3xl mt-5 font-semibold mr-2">Audience insights</h2>
                        <p className="text-black mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <img src="https://media.istockphoto.com/id/117247268/photo/growth-chart.webp?b=1&s=170667a&w=0&k=20&c=NKJF63We8Ip3lEZIPOewUGzPoJPI7RwePTk1VijcqqE=" alt="Audience Insights" className="w-full h-full" />
                    </div>
                    
                </div>
                <div className="ml-20 ">
                <div className="ml-5  flex  grid-cols-2 divide-x divide-black">
                <div className=" p-7">
                    <h3 className="text-3xl font-semibold">Social connectivity</h3>
                    <p className="text-black mt-20 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className=" p-7">
                    <h3 className="text-3xl font-semibold">Powerful network</h3>
                    <p className="text-black mt-20 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <hr className="border-black"/>
                <div className="ml-5 flex grid-cols-3 divide-x divide-black">
                <div className="p-7 ">
                    <h3 className="text-3xl font-semibold">Email subscriptions</h3>
                    <p className="text-black mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="p-7 ">
                    <h3 className="text-3xl font-semibold">Interactive discussions</h3>
                    <p className="text-black mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="p-7 ">
                    <h3 className="text-3xl font-semibold">Custom design</h3>
                    <p className="text-black mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Connection;
