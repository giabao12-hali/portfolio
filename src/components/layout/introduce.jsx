import avatar from '../../assets/avatar_img.jpg'
import vietnam_flag from '../../assets/vietnam_flag.png'
import asian_hat from '../../assets/asian-hat.png'
import { Send } from 'lucide-react'


const IntroduceLayout = () => {
    return (
        <>
            <section>
                <div className="profile w-full flex mt-44 sm:flex-col sm:justify-center">
                    <div className="left w-2/4 flex flex-col items-center justify-center gap-4 sm:w-full">
                        <div className="avatar flex flex-col gap-4">
                            <div className="w-56 rounded-3xl" data-aos="fade-up" data-aos-duration="1000">
                                <img src={avatar} alt="Profile Picture" />
                            </div>
                            <div className="about-me" data-aos="fade-up" data-aos-duration="1500">
                                <article className="max-w-96">
                                    <h3 className="font-extrabold text-4xl font-brygada1918Font pb-2">I&apos;m Gia Bao&nbsp;<span className="text-2xl font-normal">a.k.a&nbsp;</span>Hali</h3>
                                    <p className="text-2xl text-pretty font-brygada1918Font">Web Application Developer based in Ho Chi Minh City, Viet Nam </p>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="right w-2/4 flex flex-col items-center gap-4 sm:w-full" data-aos="fade-up" data-aos-duration="2000">
                        <article className="about-me text-pretty sm:text-balance">
                            <h3 className="font-bold text-5xl font-brygada1918Font pb-6">
                                Striving to turn the <span className="text-error"> impossible </span>into <span className="text-success">reality&nbsp;</span>through my&nbsp;<span className="text-warning">passion&nbsp;</span>in Website Development
                            </h3>
                            <p className="text-gray-500 font-brygada1918Font text-xl font-bold max-w-3xl sm:text-end sm:w-full">
                                As a Web App Developer, I always strive to deliver fresh experiences and visually appealing interfaces for users. Simultaneously, I possess high-quality processing capabilities to meet user demands effectively.
                            </p>
                        </article>
                        <div className="w-full flex sm:flex-col sm:gap-10">
                            <div className="w-3/4 flex flex-col">
                                <p className='location-title font-merriweatherFont text-2xl font-semibold'>Location</p>
                                <div className='location mt-4'>
                                    <div className='w-full flex items-center'>
                                        <img src={asian_hat} className='w-6 h-6 mr-2 translate-y-px' alt='Asian Hat' />
                                        <img src={vietnam_flag} className='w-6 h-6 mr-4 translate-y-px' alt='Viet Nam flag' />
                                        <p className='font-brygada1918Font text-2xl cursor-default'>Ho Chi Minh City, Viet Nam</p>
                                    </div>
                                </div>
                                <p className='email-address-title font-merriweatherFont text-2xl font-semibold mt-8'>Email Address</p>
                                <div className='email-address mt-4'>
                                    <div className='w-full flex items-center'>
                                        <Send className='w-4 h-4 mr-4 translate-y-px sm:hidden' />
                                        <a href="mailto:nguyenhiengiabao12@gmail.com" className="group transition duration-300 text-2xl font-brygada1918Font sm:text-xl">
                                            nguyenhiengiabao12@gmail.com
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/4 flex flex-col sm:w-full">
                                <p className='phone-title font-merriweatherFont text-2xl font-semibold'>Phone Number</p>
                                <div className='location mt-4'>
                                    <div className='w-full flex items-center'>
                                        <img src={vietnam_flag} className='w-6 h-6 mr-4 translate-y-px' alt='Viet Nam flag' />
                                        <p className='font-brygada1918Font text-2xl cursor-default'>(+84) 929 435 927</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex mt-8 gap-4 sm:grid sm:grid-cols-2'>
                            <button className='btn btn-success rounded-3xl h-auto p-4 btn-wide sm:w-full'>
                                <a href='/CV_ENG_NGUYENHIENGIABAO.pdf' download="CV_ENG_NGUYENHIENGIABAO" target='_blank' rel='noreferrer'>
                                    <p className='font-semibold text-base-100 font-brygada1918Font text-2xl'>Hire Me</p>
                                </a>
                            </button>
                            <button className='btn btn-outline rounded-3xl h-auto p-4 btn-wide sm:w-full'>
                                <a href="https://m.me/nguyengiabao01212" target='_blank'>
                                    <p className='font-semibold font-brygada1918Font text-2xl'>Talk with me</p>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default IntroduceLayout;