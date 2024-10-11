/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { Container, Button } from 'react-floating-action-button'
import { Menu, Disc3 } from "lucide-react";


const MusicPlayerLayout = ({ musicAudio }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    const handlePlayPauseMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    return (
        <>
            <Container>
                <Button
                    styles={{ backgroundColor: '#383836', color: '#f5f4f2' }}
                    tooltip="Play Music"
                    onClick={handlePlayPauseMusic}
                >
                    <Disc3 />
                </Button>
                <Button
                    styles={{ backgroundColor: '#504f4d', color: '#d6d5d3' }}
                    tooltip="Function"
                >
                    <Menu />
                </Button>
            </Container>
            <audio ref={audioRef} loop>
                <source src={musicAudio} type="audio/mp3" />
            </audio>
        </>
    );
}

export default MusicPlayerLayout;