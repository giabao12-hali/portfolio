import avatar from '../src/assets/avatar_img.jpg'
import vietnam_flag from '../src/assets/vietnam_flag.png'
import asian_hat from '../src/assets/asian-hat.png'
import sparkle from '../src/assets/magic.png'
import { Send } from 'lucide-react'

function App() {

  return (
    <>
      <div className="navbar bg-base-100 px-8">
        <div className="navbar-start">
          <a href="#" className="group font-semibold text-3xl font-merriweatherFont transition duration-300">
            Hali
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-error"></span>
          </a>
        </div>
        <div className="navbar-end">
          <div className="flex gap-12 text-2xl font-merriweatherFont">
            <a href="#" className="group text-gray-500 transition duration-300">
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
            </a>

            <a href="#" className="group text-gray-500 transition duration-300">
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
            </a>

            <a href="#" className="group text-gray-500 transition duration-300">
              Project
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
            </a>

            <a href="#" className="group text-gray-500 transition duration-300">
              Services
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
            </a>

            <a href="#" className="group text-gray-500 transition duration-300">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="profile w-full flex mt-44">
        <div className="left w-2/4 flex flex-col items-center justify-center gap-4">
          <div className="avatar flex flex-col gap-4">
            <div className="w-56 rounded-3xl">
              <img src={avatar} alt="Profile Picture" />
            </div>
            <div className="about-me">
              <article className="max-w-96">
                <h3 className="font-extrabold text-4xl font-brygada1918Font pb-2">I&apos;m Gia Bao&nbsp;<span className="text-2xl font-normal">a.k.a&nbsp;</span>Hali</h3>
                <p className="text-2xl text-pretty font-brygada1918Font">Web Application Developer based in Ho Chi Minh City, Viet Nam </p>
              </article>
            </div>
          </div>
        </div>
        <div className="right w-2/4 flex flex-col items-center gap-4">
          <article className="about-me text-pretty">
            <h3 className="font-bold text-5xl font-brygada1918Font pb-6">
              Striving to turn the <span className="text-error"> impossible </span>into <span className="text-success">reality&nbsp;</span>through my&nbsp;<span className="text-warning">passion&nbsp;</span>in Website Development
            </h3>
            <p className="text-gray-500 font-brygada1918Font text-xl font-bold max-w-3xl">
              As a Web App Developer, I always strive to deliver fresh experiences and visually appealing interfaces for users. Simultaneously, I possess high-quality processing capabilities to meet user demands effectively.
            </p>
          </article>
          <div className="w-full flex">
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
                  <Send className='w-4 h-4 mr-4 translate-y-px' />
                  <a href="mailto:nguyenhiengiabao12@gmail.com" className="group transition duration-300 text-2xl font-brygada1918Font">
                    nguyenhiengiabao12@gmail.com
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-2/4 flex flex-col">
              <p className='phone-title font-merriweatherFont text-2xl font-semibold'>Phone Number</p>
              <div className='location mt-4'>
                <div className='w-full flex items-center'>
                  <img src={vietnam_flag} className='w-6 h-6 mr-4 translate-y-px' alt='Viet Nam flag' />
                  <p className='font-brygada1918Font text-2xl cursor-default'>(+84) 929 435 927</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex mt-8 gap-4'>
            <button className='btn btn-success rounded-3xl h-auto p-4 btn-wide'>
              <p className='font-semibold text-[#FFFDE9] font-brygada1918Font text-2xl'>Hire Me</p>
            </button>
            <button className='btn btn-outline rounded-3xl h-auto p-4 btn-wide'>
              <p className='font-semibold font-brygada1918Font text-2xl'>Talk with me</p>
            </button>
          </div>
        </div>
      </div>
      <div className="divider font-semibold text-3xl font-brygada1918Font my-24">
        <img src={sparkle} className='w-10 h-10' />
        Anything about me
        <img src={sparkle} className='w-10 h-10' />
      </div>
    </>
  )
}

export default App
