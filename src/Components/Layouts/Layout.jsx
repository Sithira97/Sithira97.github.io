import React, { useState, useRef } from "react";
import TopNavBar from "./TopNavBar";
import BottomNavbar from "./BottomNavbar";
import About from '../Windows/AboutPage'
import Education from '../Windows/EducationPage'

const Layout = ({ children }) => {
    const [windows, setWindows] = useState([]);
    const [zIndices, setZIndices] = useState({ about: 1, education: 1 });
    const [maxZIndex, setMaxZIndex] = useState(1);

    const showWindow = (windowName) => () => {
        setWindows((prevWindows) => {
            const newWindows = prevWindows.filter(win => win !== windowName);
            return [...newWindows, windowName];
        });
        bringToFront(windowName)();
    };

    const hideWindow = (windowName) => () => {
        setWindows((prevWindows) => prevWindows.filter(win => win !== windowName));
    };

    const bringToFront = (windowName) => () => {
        setMaxZIndex((prevMaxZIndex) => {
            const newMaxZIndex = prevMaxZIndex + 1;
            setZIndices((prevZIndices) => ({
                ...prevZIndices,
                [windowName]: newMaxZIndex
            }));
            return newMaxZIndex;
        });
    };

    const nodeAbRef = useRef(null);
    const nodeEdRef = useRef(null);

    return (
        <div className="App">
            <div className="w-dvh h-dvh text-white items-center overflow-hidden" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/wallpaper.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                {windows.includes('about') && (
                    <About
                        nodeRef={nodeAbRef}
                        hideWindow={hideWindow('about')}
                        bringToFront={bringToFront('about')}
                        zIndex={zIndices['about']}
                    />
                )}

                {windows.includes('education') && (
                    <Education
                        nodeRef={nodeEdRef}
                        hideWindow={hideWindow('education')}
                        bringToFront={bringToFront('education')}
                        zIndex={zIndices['education']}
                    />
                )} 

                <TopNavBar />
                {children}
                <BottomNavbar
                    showAbWindow={showWindow('about')}
                    showEdWindow={showWindow('education')} />
            </div>
        </div>

    );
}

export default Layout;