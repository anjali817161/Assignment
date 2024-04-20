import React from "react";
import Navbar from "./components/navbar";
import Blog from "./components/Blog";
import Networks from "./components/Network";
import Space from "./components/CreateSpace";
import Connection from "./components/Connections";
import LearnMore from "./components/Learnmore";
import Explore from "./components/Explore";
import Footer from "./components/Footer";


function App() {
    return (
        <div>
            <Navbar /> 
            <Blog />
            <Networks />
            <Space />
            <Connection />
            <LearnMore />
            <Explore />
            <Footer />
        </div>
    );
}

export default App;
