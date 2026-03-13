import { useEffect, useRef, useState } from "react";
import { usePlayStore } from "../store/playerStore";

export function Player() {
    const { isPlaying, setIsPlaying, currentMusic } = usePlayStore(state => state)
    const audioRef = useRef()

    useEffect(() => {
        isPlaying
            ? audioRef.current.play()
            : audioRef.current.pause()
    }, [isPlaying])

    useEffect(() => {
        // audioRef.current.src = `/music/1/01.mp3`;
        const { song, songs, playlist } = currentMusic
        if (song) {
            const src = `/music/${playlist.id}/0${song.id}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        }
    }, [currentMusic])

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }

    return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
        <div className="">CurrentSong...</div>

        <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-content">
            <button
            className="bg-white rounded-full p-2"
            onClick={handleClick}
            >
            {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" class="bi bi-pause-fill" viewBox="0 0 16 16">
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                </svg>
            )}
            </button>
        </div>
        </div>

        <div className="grid place-content-center">Volumen</div>

        <audio ref={audioRef} />
    </div>
    );
}
