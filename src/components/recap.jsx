import { useEffect } from "react";
import HeaderLayout from "./layout/header";
import musicAudio from '../assets/about_you.mp3'
import sparkle from '../assets/magic.png'
import MusicPlayerLayout from "./layout/player_layout";
import Aos from 'aos'
import 'aos/dist/aos.css'
import FooterLayout from "./layout/footer";

const Recap = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div className="w-full min-h-screen p-3 mb-12">
                <HeaderLayout />
                <main>
                    <h1 className="font-bold text-center pt-12 uppercase text-2xl font-brygada1918Font" data-aos="fade-up">story about me</h1>
                    <div className="flex justify-center w-full my-12">
                        <ul className="timeline timeline-snap-icon max-sm:timeline-compact timeline-vertical lg:mx-24">
                            <li data-aos="fade-up">
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
                                <div className="timeline-start mb-10 text-balance text-end">
                                    <time className="font-mono italic">2003</time>
                                    <div className="text-lg font-black">First time seeing the world</div>
                                    Hi, I&apos;m Gia Bao. I officially saw the world we are living in today for the first time in 2003, when the whole sky was very beautiful, because that day was the last day of the 2003 Sea Games sports festival.
                                </div>
                                <hr />
                            </li>
                            <li data-aos="fade-up">
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
                                    <time className="font-mono italic">2019</time>
                                    <div className="text-lg font-black">First time learning about programming</div>
                                    When the COVID-19 pandemic broke out, I spent time learning about programming. That was the first time I discovered Discord and its Bots (playing music, mini games, quizzes, etc.). I found it quite interesting, so I explored and managed to write my first Bot with <span className="font-bold">JavaScript.</span>
                                    <div className="pt-4 italic">It&apos;s on my old computer, so there&apos;s no source available, hehe.</div>
                                </div>
                                <hr />
                            </li>
                            <li data-aos="fade-up">
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
                                <div className="timeline-start mb-10 text-end">
                                    <time className="font-mono italic">2021</time>
                                    <div className="text-lg font-black">Started learning what is programming mean</div>
                                    It was the first time I enrolled in a school that taught computer science. During my time there, I learned and explored new technologies. The main language I was taught at school was <span className="font-bold">C#,</span> and later, I self-studied <span className="font-bold">ReactJS</span> to help with interface development.
                                </div>
                                <hr />
                            </li>
                            <li data-aos="fade-up">
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
                                    <time className="font-mono italic">2024</time>
                                    <div className="text-lg font-black">Exploring the technologies that companies are currently using.</div>
                                    Of course, right now I&apos;m sitting at the office and writing these lines (yes, the very lines you&apos;re reading). So, consider this as a milestone for me to continue developing my skills.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="divider font-semibold text-3xl font-brygada1918Font my-24 px-12 sm:p-0 sm:text-2xl" data-aos="fade-up">
                            <img src={sparkle} className='w-10 h-10 sm:w-6 sm:h-6' />
                            Education
                            <img src={sparkle} className='w-10 h-10 sm:w-6 sm:h-6' />
                        </div>
                        <div className="grid grid-cols-2 sm:flex sm:flex-col gap-6" data-aos="fade-up">
                            <div className="text-center">
                                <div className="mx-12 space-y-4">
                                    <h1 className="text-2xl font-bold font-buenardFont">Graduate</h1>
                                    <div className="text-left space-y-2">
                                        <time className="font-semibold italic">August 2021 ~ May 2024</time>
                                        <h1 className="uppercase font-bold">
                                            INFORMATION TECHNOLOGY - SOFTWARE DEVELOPMENT (C#)
                                        </h1>
                                        <p>FPT Polytechnic College</p>
                                        <h1 className="font-bold">Rewards:</h1>
                                        <div>
                                            <p>
                                                Received the Excellent Student title in Summer 2022.
                                            </p>
                                            <p>
                                                Received the Excellent Student title in Summer 2023.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:divider mx-8"></div>
                            <div className="text-center">
                                <div className="mx-12 space-y-4">
                                    <h1 className="text-2xl font-bold font-buenardFont">Certifications</h1>
                                    <div className="text-left space-y-12">
                                        <div>
                                            <time className="font-semibold italic">July 2023</time>
                                            <h1 className="uppercase font-bold">
                                                Google Data Analytics Professional Certificate.
                                            </h1>
                                        </div>
                                        <div>
                                            <time className="font-semibold italic">July 2023</time>
                                            <h1 className="uppercase font-bold">
                                                ACADEMIC PREPARATORY ENGLISH Level 3 - Topnotch 2.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <FooterLayout />
            <MusicPlayerLayout musicAudio={musicAudio} />
        </>
    );
}

export default Recap;