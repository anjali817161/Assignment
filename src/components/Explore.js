import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/fontawesome-free";

const Explore = () => {
    const [topics] = useState([
        { title: "How do I start writing on Medium?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: faArrowUp },
        { title: "How can I make money writing on Medium?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: faArrowUp },
        { title: "Who writes on Medium?", icon: faArrowDown },
        { title: "Do I need to be in the partner program to write on Medium?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: faArrowUp },
        { title: "How can readers find my work on Medium?", icon: faArrowDown },
        { title: "How can I grow my audience with Medium?", icon: faArrowDown }
    ]);

    return (
        <div className="p-7 bg-black">
            <div className="mb-4 text-white">
                <h2 className="text-5xl mt-7 ">More about writing on Medium:</h2>
            </div>
            {topics.map((topic, index) => (
                <div key={index} className="mb-6 text-white mt-11 ">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{topic.title}</h3>
                        <FontAwesomeIcon icon={topic.icon} style={{ color: 'white' }} />
                    </div>
                    {topic.content && <p className="text-white mt-12">{topic.content}</p>}
                    <hr className="my-2 border-gray-300" />
                </div>
            ))}
            <div className="flex items-center justify-center">
                <p className="text-white text-lg mb-2">Looking for help getting started?</p>
                <button className="bg-white text-black  py-2 px-4 rounded-full ml-8">
                    Check out our guide
                </button>
            </div>
        </div>
    );
};

export default Explore;
