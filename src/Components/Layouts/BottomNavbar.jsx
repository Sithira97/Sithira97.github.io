import React, { useState } from 'react';

const BottomNavbar = ({ showAbWindow, showEdWindow, showWoWindow, showReWindow, showPrWindow, showCoWindow, showTrWindow }) => {
    const Icons = [
        { title: "About", iconSrc: "Finder.png", route: '/about', click: showAbWindow },
        { title: "Education", iconSrc: "Reminders.png", route: '/', click: showEdWindow },
        { title: "Work", iconSrc: "Keynote.png", route: '/', click: showWoWindow },
        { title: "Resume", iconSrc: "Photos.png", route: '/', click: showReWindow },
        { title: "Projects", iconSrc: "Xcode.png", route: '/', click: showPrWindow },
        { title: "Comments", iconSrc: "Messages.png", route: '/', click: showCoWindow },
        { title: "Trash", iconSrc: "TrashEmpty.png", route: '/', click: showTrWindow },
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };


    return (
        <div className="hidden md:flex absolute shadow-2xl mx-auto left-0 right-0 bottom-3 rounded-lg md:h-20 h-0 z-10 bg-white w-max grow bg-opacity-15 text-sm items-center">
            {Icons.map((icon, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="group size-16 rounded-lg justify-center items-center text-center"
                    style={{
                        marginLeft: index === 0 ? '0.75rem' : '0.25rem',
                        marginRight: index === Icons.length - 1 ? '0.75rem' : '0.25rem',
                        transform: hoveredIndex === index ? 'translateY(-1.5rem)' : 'translateY(0)',
                        width: hoveredIndex === index ? '5rem' : '4rem',
                        height: hoveredIndex === index ? '5rem' : '4rem',
                        transition: 'transform 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out',
                    }}>
                    <button onClick={icon.click} className="ease-in size-16 rounded-lg justify-center group-hover:size-20 group-hover:size-20 group-hover:delay-200 group-hover:duration-200 items-center"
                        style={{
                            width: hoveredIndex === index ? '5rem' : '4rem',
                            height: hoveredIndex === index ? '5rem' : '4rem',
                            transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
                        }}>
                        <img src={process.env.PUBLIC_URL + "/images/" + icon.iconSrc} alt={icon.title} />
                    </button>
                    <p className="text-nowrap font-semibold leading-3"
                        style={{
                            fontSize: hoveredIndex === index ? '0.8rem' : '0',
                            opacity: hoveredIndex === index ? 1 : 0,
                            transition: 'opacity 0.2s ease-in-out 0.1s',
                        }}>{icon.title}</p>
                </div>)
            )}
        </div>
    )
}

export default BottomNavbar;