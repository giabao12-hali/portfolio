import avatar from '../src/assets/avatar_img.jpg'
import vietnam_flag from '../src/assets/vietnam_flag.png'
import asian_hat from '../src/assets/asian-hat.png'
import sparkle from '../src/assets/magic.png'
import { Github, Send } from 'lucide-react'

function App() {

  return (
    <>
      <div className='w-full min-h-screen p-3'>
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
        <div className="divider font-semibold text-3xl font-brygada1918Font my-24 px-12">
          <img src={sparkle} className='w-10 h-10' />
          Anything about me
          <img src={sparkle} className='w-10 h-10' />
        </div>
        <div className='anything-about-me grid grid-cols-3 my-12 px-24'>
          <div className='flex justify-center items-center'>
            <p className='text-center text-balance text-2xl font-buenardFont'>Hello, I&apos;m Gia Bao, a Software Engineer with a background in studying at FPT Polytechnic College. I have gained practical experience by participating in various software development projects. Currently, my expertise is <span className='text-success'>primarily focused</span> on technologies related to <span className='text-[#67217a]'>.NET</span>, with additional experiences in the Frontend domain.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-center text-balance text-2xl font-buenardFont'>I am eager to have the opportunity to contribute to problem-solving and bring new experiences to users. During my free time, I dedicate myself to learning new knowledge and practical applications, aiming to enhance my understanding and become an increasingly proficient programmer.</p>
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-center text-balance text-2xl font-buenardFont'>My learning and exploration go beyond coding; I am passionate about generating innovative ideas to optimize values for everyone through the products I create. I look forward to opportunities that allow me to contribute to impactful solutions and provide new experiences for users.</p>
          </div>
        </div>
        <div className='my-24 flex flex-col justify-center'>
          <div className='flex justify-center'>
            <p className='font-semibold text-3xl font-buenardFont'>TL;DR</p>
          </div>
          <div className='w-full mt-12'>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">Jun 2023 ~ August 2023</time>
                  <div className="text-lg font-black">.NET Developer | Personal ASP.NET Blazor E-Commerce Website Project</div>
                  A personal project to develop an E-Commerce website using ASP.NET Blazor. The project aims to provide a platform for users to purchase products and manage their accounts. The website will be designed with a user-friendly interface and optimized for performance and security to ensure a smooth shopping experience for users.
                  <div className='flex justify-end mt-4'>
                    <a className='link' href='https://github.com/giabao12-hali/BlazorEcommerce' target='_blank'>
                      <Github />
                    </a>
                  </div>
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
                  <time className="font-mono italic">September 2023 ~ December 2023</time>
                  <div className="text-lg font-black">Front-End Developer | Graduation Donace Project</div>
                  Graduation project website focuses on developing an online event ticketing system. Built primarily with Next.js, Tailwind CSS, and NextUI for UI design, the site offers a modern and user-friendly experience. Users can easily browse and purchase tickets for events, manage their ticket information, and complete transactions quickly and conveniently. The responsive interface ensures compatibility across a range of devices, from desktops to mobile phones, providing a seamless experience for all users.
                  <div className='flex justify-start mt-4'>
                    <a className='link' href='https://github.com/Donace-Project/Donace-FE-Production' target='_blank'>
                      <Github />
                    </a>
                  </div>
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
                  <time className="font-mono italic">January 2024 ~ February 2024</time>
                  <div className="text-lg font-black">Freelancer Front-End Developer | Metruyenchu</div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque laudantium laboriosam molestias, culpa odio consequatur? Modi harum odio ut officia iusto sint quae, architecto, provident sapiente at est hic quis!
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
                  <time className="font-mono italic">May 2023 ~ May 2024</time>
                  <div className="text-lg font-black">.NET Developer | HQSOFT - Distribution & Retail Expert </div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus ipsam ducimus repellat esse ullam nobis unde asperiores, quae sequi, ad praesentium ex similique minus in soluta fugit id quod.
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
                  <time className="font-mono italic">June 2024 ~ ...</time>
                  <div className="text-lg font-black">The Journey Begins</div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ea magnam voluptatem assumenda qui accusantium soluta ipsum nobis! Voluptas vero earum nisi vel eaque hic explicabo facilis quae! Facere, voluptatum.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
