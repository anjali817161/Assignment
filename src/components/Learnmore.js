import React from "react";

const LearnMore = () => {
    const backgroundStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1648615784825-1ad2dd93986f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGdyZWVuJTIwY3ViZXMlMjBiYWNrZ3JvdW5kJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
    };
    return (
        <div className="p-4 " style={backgroundStyle}>
            <h1 className="text-5xl mt-4 mb-4 text-white">Earn money <br />from your writing.</h1>
            <p className="text-white mt-12 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
            <button className="bg-black text-white py-2 px-4 rounded-full mt-5">
                Learn more
            </button>
        </div>
    );
};

export default LearnMore;
