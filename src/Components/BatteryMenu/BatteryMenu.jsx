import React from 'react';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { BatteryIcon, } from '../../Assets/icons'

const BatteryMenu = () => {
    return (
        <Popover as="div" className="relative inline-block text-left">
            <div className='flex items-center'>
                <PopoverButton className='focus:outline-none'>
                    <BatteryIcon />
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
                    <p>Battery</p>
                    <span className='font-normal text-xs mb-1'>Power Source: Battery</span>
                    <hr className='border-gray-400 opacity-60 rounded-full border-t-[0.3px] my-2' />
                    <p className='opacity-50 text-gray-900'>Using Significant Energy</p>
                    <hr className='border-gray-400 opacity-60 rounded-full border-t-[0.3px] my-2' />
                    <p className='opacity-60 text-gray-900'>Battery Preferences...</p>
                </PopoverPanel>
            </Transition>
        </Popover>
    )
}

export default BatteryMenu;