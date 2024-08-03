import React, { useState, useRef } from "react";
import TopNavBar from "./TopNavBar";
import BottomNavbar from "./BottomNavbar";
import About from '../Windows/AboutPage'
import Education from '../Windows/EducationPage'

const Layout = ({ children }) => {

    const [aboutVisible, setAboutVisible] = useState(false);
    const [educationVisible, setEducationVisible] = useState(false);
    const showWindow = (setVisible) => () => {
        setVisible(true);
    };

    const hideWindow = (setVisible) => () => {
        setVisible(false);
    }


    const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

    const nodeAbRef = useRef(null);
    const nodeEdRef = useRef(null);

    return (
        <div className="App">
            <div className="w-dvh h-dvh text-white items-center overflow-hidden" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/wallpaper.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                {aboutVisible && (
                    <About bounds={bounds} nodeRef={nodeAbRef} setBounds={setBounds} hideWindow={hideWindow(setAboutVisible)} />
                )}

                {educationVisible && (
                    <Education bounds={bounds} nodeRef={nodeEdRef} setBounds={setBounds} hideWindow={hideWindow(setEducationVisible)} />
                )}

                <TopNavBar />
                {children}
                <BottomNavbar
                    showAbWindow={showWindow(setAboutVisible)}
                    showEdWindow={showWindow(setEducationVisible)} />
            </div>
        </div>

    );
}

export default Layout;