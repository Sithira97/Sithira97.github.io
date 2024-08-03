import React from 'react';

const AudioPlayer = ({audioRef, isPlaying, setIsPlaying}) => {
    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className='flex gap-3 items-center'>
                <img src={process.env.PUBLIC_URL + "/images/audio-cover.jpg"} alt='' className='size-16 bg-gray-300 rounded-lg' />
                <div>
                    <h3 className='text-black'>Joyboy's Return</h3>
                    <span className='text-gray-500'>One Piece</span>
                </div>
            </div>
            <div className='flex gap-3 text-black'>
                <button onClick={handlePlayPause}>
                    {!isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                            <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                            <rect width={10} height={10} x={3} y={3} rx={1.5} />
                        </svg>
                    )}
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 text-gray-500">
                    <path d="M2.53 3.956A1 1 0 0 0 1 4.804v6.392a1 1 0 0 0 1.53.848l5.113-3.196c.16-.1.279-.233.357-.383v2.73a1 1 0 0 0 1.53.849l5.113-3.196a1 1 0 0 0 0-1.696L9.53 3.956A1 1 0 0 0 8 4.804v2.731a.992.992 0 0 0-.357-.383L2.53 3.956Z" />
                </svg>
            </div>
        </>
    );
};

export default AudioPlayer;