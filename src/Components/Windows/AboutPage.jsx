import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { AboutData } from '../../Assets/aboutData';

const About = ({ bounds, nodeRef, setBounds, hideWindow }) => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight });
    const handleDrag = (e, data) => {
        setPosition({ x: data.x, y: data.y });
    };

    useEffect(() => {
        const updateBounds = () => {
            if (nodeRef.current) {
                const rect = nodeRef.current.getBoundingClientRect();
                setBounds({
                    left: 0,
                    top: 0,
                    right: window.innerWidth - rect.width / 4,
                    bottom: window.innerHeight - rect.height / 4
                });
                setPosition({ x: (window.innerWidth - rect.width) / 2, y: (window.innerHeight - rect.height - 30) / 2 })
            }
        };

        updateBounds();
        window.addEventListener('resize', updateBounds);
        return () => window.removeEventListener('resize', updateBounds);
    }, [nodeRef, setBounds]);

    return (
        <Draggable
            bounds={bounds}
            nodeRef={nodeRef}
            position={position}
            onStop={handleDrag}>
            <div ref={nodeRef} className="box w-80 max-w-screen-lg sm:w-[50vw] rounded-xl">
                <div className="rounded-lg resize-model text-black">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="pt-3 px-3 backdrop-blur-lg bg-gray-200 bg-opacity-80 w-[150%] rounded-l-xl">
                                <div className="mb-7 h-6 pt-3 pl-3 gap-1.5 -mt-0 mx-0 rounded-t-xl rounded-b-none flex items-center">
                                    <div onClick={hideWindow} class="size-3.5 bg-[#ff5e57] rounded-full border border-[#e0534c]"></div>
                                    <div class="size-3.5 bg-[#ffbb2e] rounded-full border border-[#e0a428]"></div>
                                    <div class="size-3.5 bg-[#38c149] rounded-full border border-[#31aa40]"></div>
                                </div>
                                <div className='ml-4'>
                                    {AboutData.map(({ label, value }) => (
                                        <div key={value} value={value}>
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='py-5 pl-8 rounded-r-xl bg-[#efefef]' style={{ filter: "drop-shadow(-3px 0 1px rgb(0 0 0 / 0.05)" }}>
                                <h3 className="text-center font-bold">
                                    About Me
                                </h3>
                                <hr className="my-2" />
                                <div className='h-[60dvh] overflow-y-scroll pr-5 pt-4'>
                                    {AboutData.map(({ value, desc }) => (
                                        <p key={value} value={value} className='mb-2'>
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable >
    );
}

export default About;