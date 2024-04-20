import React, { useState } from "react";

const Networks = () => {
    const [members] = useState([
        { name: "Barack Obama", description: "network of curious minds", image: "https://images.unsplash.com/photo-1541112324160-e8a425b58dac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlc3xlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Michael Chabon", description: "network of curious mindsnetwork of curious minds", image: "https://images.unsplash.com/photo-1584361853901-dd1904bb7987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlc3xlbnwwfHwwfHx8MA%3D%3D" },
        { name: "Carnil Fornier", description: "network of curious mindsnetwork of curious minds", image: "https://images.unsplash.com/photo-1563235453-a57d94b5a552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFuJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D" },
        { name: "Carvell Wallace", description: "network of curious mindsnetwork of curious minds", image: "https://images.unsplash.com/photo-1561313021-b52621b123b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGh1bWFuJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D" },
        { name: "Devon Price", description: "network of curious mindsnetwork of curious minds", image: "https://images.unsplash.com/photo-1627085067881-02da06b73aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGh1bWFuJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D" },
        { name: "Susan orien", description: "network of curious mindsnetwork of curious minds", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFuJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D" }
    ]);

    return (
        <div className="p-4 bg-black text-white">
            <div className="flex">
            <div className="mb-8">
                <h1 className="text-7xl font-bold mb-4 max-w-3xl mt-12">Join a network of curious minds</h1>
            </div>
           <div className="ml-40 ">
           {members.map((member, index) => (
                <div key={index} className="mb-4 max-w-3xl">
                    <div className="flex items-center  mb-2">
                        <img src={member.image} className="w-16 h-16 rounded-full mr-4" alt={member.name} />
                        <div>
                            <p className="font-bold">{member.name}</p>
                            <p className="text-white">{member.description}</p>
                        </div>
                    </div>
                    {index !== members.length - 1 && <hr className="border-t border-gray-300" />}
                </div>
            ))}
           </div>
            </div>
        </div>
    );
};

export default Networks;
