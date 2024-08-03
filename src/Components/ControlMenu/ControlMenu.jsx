import React from 'react';
import { Popover, PopoverButton, PopoverPanel, Transition, Checkbox } from '@headlessui/react'
import { WifiIcon, BluetoothIcon, AirdropIcon, ControlsIcon } from '../../Assets/icons'
import AudioPlayer from './AudioPlayer';
import VolumeController from './VolumeController';
import BrightnessController from './BrightnessController';


const ControlMenu = (props) => {
    let [audioRef, isPlaying, setIsPlaying, volume, setVolume] = [props.audioRef, props.isPlaying, props.setIsPlaying, props.volume, props.setVolume]
    return (
        <Popover as="div" className="relative inline-block text-left">
            <div className='flex items-center'>
                <PopoverButton className='focus:outline-none'>
                    <ControlsIcon />
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
                <PopoverPanel className="absolute p-3 backdrop-blur grid grid-cols-2 grid-rows-11 gap-3 -right-36 z-10 mt-2 w-80 origin-top-right rounded-[1rem] bg-white bg-opacity-20 shadow-lg focus:outline-none">
                    <div className='bg-white bg-opacity-50 rounded-[0.75rem] row-span-4 p-3'>
                        <div key={1} className='flex gap-3 items-center'>
                            <Checkbox checked={props.wifiEnabled} onChange={props.setWifiEnabled}
                                className="group block size-8 rounded-full bg-gray-400 data-[checked]:bg-blue-500 flex items-center justify-center">
                                <WifiIcon />
                            </Checkbox>
                            <div>
                                <p className='text-[0.8rem] leading-[0.5rem] text-black'>Wi-Fi</p>
                                <span className='text-[0.6rem] leading-[0.5rem] text-gray-600'>Home</span>
                            </div>
                        </div>
                        <div key={2} className='flex gap-3 items-center mt-2'>
                            <Checkbox checked={props.blEnabled} onChange={props.setBLEnabled}
                                className="group block size-8 rounded-full bg-gray-400 data-[checked]:bg-blue-500 flex items-center justify-center">
                                <BluetoothIcon />
                            </Checkbox>
                            <div>
                                <p className='text-[0.8rem] leading-[0.5rem]  text-black'>Bluetooth</p>
                                <span className='text-[0.6rem] leading-[0.5rem] text-gray-600'>On</span>
                            </div>
                        </div>
                        <div key={3} className='flex gap-3 items-center mt-2'>
                            <Checkbox checked={props.adEnabled} onChange={props.setADEnabled}
                                className="group block size-8 rounded-full bg-gray-400 data-[checked]:bg-blue-500 flex items-center justify-center">
                                <AirdropIcon />
                            </Checkbox>
                            <div>
                                <p className='text-[0.8rem] leading-[0.75rem]  text-black'>AirDrop</p>
                                <span className='text-[0.6rem] leading-[0.5rem] text-gray-600'>Contact Only</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white bg-opacity-50 rounded-[0.75rem] row-span-2 w-36'></div>
                    <div className='bg-white bg-opacity-50 rounded-[0.75rem] row-span-2'></div>
                    <div className='bg-white bg-opacity-50 rounded-[0.75rem] col-span-2 row-span-2'>
                        <BrightnessController />
                    </div>
                    <div className='bg-white bg-opacity-50 rounded-[0.75rem] col-span-2 row-span-2'>
                        <VolumeController {...{ audioRef, volume, setVolume }} />
                    </div>
                    <div className='bg-white bg-opacity-50 rounded-[0.75rem] col-span-2 row-span-3 flex items-center justify-between px-4'>
                        <AudioPlayer {...{ audioRef, isPlaying, setIsPlaying }} />
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    )
};

export default ControlMenu;