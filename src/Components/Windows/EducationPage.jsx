import React from 'react';
import { Rnd } from 'react-rnd';
import { AboutData } from '../../Assets/aboutData';

const Education = ({ nodeRef, hideWindow, bringToFront, zIndex }) => {
    return (
        <Rnd
            bounds="body"
            style={{ zIndex }}
            onClick={bringToFront}
            onDragStart={bringToFront}>
            <div ref={nodeRef} className="box w-80 max-w-screen-lg sm:w-[50vw] rounded-xl" onClick={bringToFront}>
                <div className="rounded-lg resize-model text-black">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="pt-3 px-3 backdrop-blur-lg bg-gray-200 bg-opacity-80 w-[150%] rounded-l-xl">
                                <div className="mb-7 h-6 pt-3 pl-3 gap-1.5 -mt-0 mx-0 rounded-t-xl rounded-b-none flex items-center">
                                    <div onClick={hideWindow} className="size-3.5 bg-[#ff5e57] rounded-full border border-[#e0534c]"></div>
                                    <div className="size-3.5 bg-[#ffbb2e] rounded-full border border-[#e0a428]"></div>
                                    <div className="size-3.5 bg-[#38c149] rounded-full border border-[#31aa40]"></div>
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
                                    Education
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
        </ Rnd >
    );
}

export default Education;