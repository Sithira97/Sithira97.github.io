import React from 'react';
import { Popover, PopoverButton, PopoverPanel, Transition, Switch } from '@headlessui/react'
import { WifiIcon, } from '../../Assets/icons'

const WiFiMenu = (props) => {
    return (
        <Popover as="div" className="relative inline-block text-left">
            <div className='flex items-center'>
                <PopoverButton className='focus:outline-none'>
                    <WifiIcon />
                </PopoverButton>
            </div>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <PopoverPanel className="absolute pt-3 px-4 pb-2 text-black backdrop-blur -right-36 z-10 mt-2 w-80 origin-top-right rounded-lg bg-white bg-opacity-60 shadow-lg focus:outline-none">
                    <div className='flex justify-between'>
                        <p>Wi-Fi</p>
                        <Switch
                            checked={props.wifiEnabled}
                            onChange={props.setWifiEnabled}
                            className="group flex p-0.5 h-[1.5rem] w-10 items-center rounded-full bg-gray-500 bg-opacity-50 transition data-[checked]:bg-blue-600 data-[checked]:opacity-100"
                        >
                            <span className="size-5 translate-x-0 rounded-full bg-white transition group-data-[checked]:translate-x-4" />
                        </Switch>
                    </div>
                    <hr className='border-gray-400 opacity-60 rounded-full border-t-[0.3px] my-2' />
                    <p className='opacity-60 text-gray-900'>Known Networks</p>
                    <div className='flex justify-between mt-3 items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='{props.wifiEnabled? 'bg-blue-600':'bg-gray-400'} rounded-full size-8 flex justify-center items-center'>
                                <WifiIcon />
                            </div>
                            <p>Home Wi-Fi</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='flex justify-between mt-3 items-center'>
                        <div className='flex gap-3 items-center'>
                            <div className='bg-gray-400 rounded-full size-8 flex justify-center items-center'>
                                <WifiIcon />
                            </div>
                            <p>Office Wi-Fi</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr className='border-gray-400 opacity-60 rounded-full border-t-[0.3px] my-2' />
                    <div className='flex justify-between items-center'>
                        <p className='opacity-60 text-gray-900'>Other Networks</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <hr className='border-gray-400 opacity-60 rounded-full border-t-[0.3px] my-2' />
                    <p className='font-normal mb-1'>Wi-Fi Settings...</p>
                </PopoverPanel>
            </Transition>
        </Popover>
    )
}

export default WiFiMenu;
