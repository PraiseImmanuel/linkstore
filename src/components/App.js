import "../styles/App.css";
import AnchorTags from "./AnchorTags";
import Footer from "./Footer";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import React from "react";

const Main = () => {
    return (
        <React.Fragment>
            <Profile />
            <AnchorTags />
            <SocialLinks />
        </React.Fragment>
    );
};

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={Main()} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
