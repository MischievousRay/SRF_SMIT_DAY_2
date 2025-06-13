import React, { useRef } from 'react';

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  audioSrc: string;
  soundEnabled: boolean;
  info: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, title, description, audioSrc, soundEnabled, info }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className='group'>
        <div className="relative border rounded p-4 w-64 h-100 text-center group-hover:bg-gray-400/95" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2 group-hover:text-white">{title}</h2>
            <p className="text-sm mt-1 group-hover:text-white">{description.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
                ))}
            </p>
            <div className='flex items-center justify-center py-4'>
                <button className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded cursor-pointer'>{info}</button>
            </div>
            <audio ref={audioRef} src={audioSrc} preload="auto" />
        </div>
    </div>
  );
};

export default Card;
