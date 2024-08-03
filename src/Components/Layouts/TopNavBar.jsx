import { useState, useEffect, useRef } from 'react';
import { SearchIcon } from '../../Assets/icons'
import ControlMenu from '../ControlMenu/ControlMenu';
import WiFiMenu from '../WiFiMenu/WiFiMenu';
import BatteryMenu from '../BatteryMenu/BatteryMenu';

const TopNavBar = () => {
    let timeOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    let [CurrentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(() => setCurrentDateTime(new Date()), 50000);
        return () => clearInterval(timer);
    }, []);

    const [wifiEnabled, setWifiEnabled] = useState(true)
    const [blEnabled, setBLEnabled] = useState(false)
    const [adEnabled, setADEnabled] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);

    const audioRef = useRef(null);

    useEffect(() => {
        const handleAudioEnded = () => {
            setIsPlaying(false);
        };

        const audioElement = audioRef.current;
        audioElement.addEventListener('ended', handleAudioEnded);

        return () => {
            audioElement.removeEventListener('ended', handleAudioEnded);
        };
    }, []);

    return (
        <div className="hidden md:flex absolute top-0 md:h-8 h-0 z-10 bg-slate-100 w-screen grow bg-opacity-20 text-sm items-center justify-stretch">
            <audio ref={audioRef} src={process.env.PUBLIC_URL + "Song.mp3"} volume={volume} />
            <div className="flex grow mx-3 gap-2">
                <img src={process.env.PUBLIC_URL + '/images/Logo_W.png'} className='w-5' alt='logo' />
                <p className='font-semibold'>Sithira Perera</p>
            </div>

            <div className="flex grow mx-3 justify-end items-center font-semibold gap-2">
                <BatteryMenu />

                <WiFiMenu {...{ wifiEnabled, setWifiEnabled }} />

                <SearchIcon />

                <ControlMenu {...{
                    wifiEnabled, setWifiEnabled, blEnabled, setBLEnabled,
                    adEnabled, setADEnabled, audioRef, volume, setVolume, isPlaying, setIsPlaying
                }} />
                <p className="ml-3">{Intl.DateTimeFormat('en-US', timeOptions).format(CurrentDateTime).replaceAll(",", " ")}</p>
            </div>
        </div>
    )
}

export default TopNavBar;