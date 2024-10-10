import sparkle from '../assets/magic.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import HeaderLayout from './layout/header'
import FooterLayout from './layout/footer'
import SlideSkillsLayout from './layout/slide_skills'
import ProjectsLayout from './layout/projects'
import AboutMeLayout from './layout/about_me'
import IntroduceLayout from './layout/introduce'

const HomePage = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div className='w-full min-h-screen p-3'>
                <HeaderLayout />
                <main>
                    <IntroduceLayout />
                    <div id='about'></div>
                    <div className="divider font-semibold text-3xl font-brygada1918Font my-24 px-12 sm:p-0 sm:text-2xl" data-aos="fade-up" >
                        <img src={sparkle} className='w-10 h-10 sm:w-6 sm:h-6' />
                        Anything about me
                        <img src={sparkle} className='w-10 h-10 sm:w-6 sm:h-6' />
                    </div>
                    <AboutMeLayout />
                    <div id='projects'></div>
                    <ProjectsLayout />
                    <div className="divider font-semibold text-3xl font-brygada1918Font my-24 px-12 sm:p-0 sm:text-2xl" data-aos="fade-up" >
                        <img src={sparkle} className='w-10 h-10 sm:w-6 sm:h-6' />
                        Techincal Skills
                        <img src={sparkle} className='w-10 h-10 sm:w-6 sm:h-6' />
                    </div>
                    <SlideSkillsLayout />
                </main>
            </div>
            <FooterLayout />
        </>
    );
}

export default HomePage;