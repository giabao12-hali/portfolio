import { useRef, useState, useEffect } from "react";
import HeaderLayout from "./layout/header";
import musicAudio from '../about_you.mp3'
import { Container, Button } from 'react-floating-action-button'
import { Menu, Disc3 } from "lucide-react";

const Recap = () => {
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
            <div className="w-full min-h-screen p-3">
                <HeaderLayout />
                <main>
                    <h1 className="font-bold text-center pt-12 uppercase text-2xl font-brygada1918Font">story about me</h1>
                    <div className="flex justify-center w-full my-12">
                        <ul className="timeline timeline-snap-icon max-sm:timeline-compact timeline-vertical lg:mx-24">
                            <li>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 sm:text-end">
                                    <time className="font-mono italic">2003</time>
                                    <div className="text-lg font-black">First time seeing the world</div>
                                    Hi, I&apos;m Gia Bao. I&apos;m a software engineer. I was born in 2003 in Vietnam.
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">1998</time>
                                    <div className="text-lg font-black">iMac</div>
                                    iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                                    been the primary part of consumer desktop offerings since its debut in August 1998,
                                    and has evolved through seven distinct forms
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 md:text-end">
                                    <time className="font-mono italic">2001</time>
                                    <div className="text-lg font-black">iPod</div>
                                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                                    designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                                    8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                                    million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                                    over 20 years, the iPod brand is the oldest to be discontinued by Apple
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">2007</time>
                                    <div className="text-lg font-black">iPhone</div>
                                    iPhone is a line of smartphones produced by Apple Inc. that use own iOS mobile
                                    operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                                    January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                                    of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                                    accounts for 15.6% of global smartphone market share
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-start mb-10 md:text-end">
                                    <time className="font-mono italic">2015</time>
                                    <div className="text-lg font-black">Apple Watch</div>
                                    The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                                    tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                                    iOS and other Apple products and services
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
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

export default Recap;