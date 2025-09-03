import React, { useRef, useState, useEffect } from "react";

const AudioPlay = ({ audioURL }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const togglePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const skip = (seconds) => {
        if (!audioRef.current) return;
        let newTime = audioRef.current.currentTime + seconds;
        if (newTime < 0) newTime = 0;
        if (newTime > duration) newTime = duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleProgressChange = (e) => {
        const value = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = value;
            setCurrentTime(value);
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div style={{ width: '100%', display: "flex", flexDirection: "column", gap: "8px" }}>
            <audio
                ref={audioRef}
                src={audioURL}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
            />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <input
                    type="range"
                    min={0}
                    max={duration}
                    step={0.1}
                    value={currentTime}
                    onChange={handleProgressChange}
                />
                <p className="secondary-text" style={{ position: 'absolute', left: '0' }}>{formatTime(currentTime)}</p>
                <p className="secondary-text" style={{ position: 'absolute', right: '0' }}>{formatTime(duration)}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button onClick={() => skip(-10)}>⏪ 10s</button>
                <button onClick={togglePlayPause}>{isPlaying ? "⏸" : "▶️"}</button>
                <button onClick={() => skip(10)}>10s ⏩</button>
            </div>
        </div>
    );
};

export default AudioPlay;
