/* eslint-disable react/no-unknown-property */
import avatar from '../src/assets/avatar_img.jpg'
import vietnam_flag from '../src/assets/vietnam_flag.png'
import asian_hat from '../src/assets/asian-hat.png'
import sparkle from '../src/assets/magic.png'
import { Github, Send, Heart } from 'lucide-react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Slider from 'react-infinite-logo-slider'

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div className='w-full min-h-screen p-3'>
        <navbar>
          <section>
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
                    Contact
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </navbar>
        <main>
          <section>
            <div className="profile w-full flex mt-44">
              <div className="left w-2/4 flex flex-col items-center justify-center gap-4">
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
              <div className="right w-2/4 flex flex-col items-center gap-4" data-aos="fade-up" data-aos-duration="2000">
                <article className="about-me text-pretty" >
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
                  <a href='/CV_ENG_NGUYENHIENGIABAO.pdf' download="CV_ENG_NGUYENHIENGIABAO" target='_blank' rel='noreferrer'>
                    <button className='btn btn-success rounded-3xl h-auto p-4 btn-wide'>
                      <p className='font-semibold text-[#FFFDE9] font-brygada1918Font text-2xl'>Hire Me</p>
                    </button>
                  </a>
                  <button className='btn btn-outline rounded-3xl h-auto p-4 btn-wide'>
                    <a href="https://m.me/nguyengiabao01212" target='_blank'>
                      <p className='font-semibold font-brygada1918Font text-2xl'>Talk with me</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="divider font-semibold text-3xl font-brygada1918Font my-24 px-12" data-aos="fade-up">
            <img src={sparkle} className='w-10 h-10' />
            Anything about me
            <img src={sparkle} className='w-10 h-10' />
          </div>
          <section data-aos="fade-up">
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
          </section>
          <section className='px-12'>
            <div className='my-24 flex flex-col justify-center'>
              <div className='flex justify-center' data-aos="fade-up">
                <p className='font-semibold text-3xl font-buenardFont'>TL;DR</p>
              </div>
              <div className='w-full mt-12'>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical" >
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
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">Jun 2023 ~ August 2023</time>
                      <div className="text-lg font-black">.NET Developer | Personal ASP.NET Blazor E-Commerce Website Project</div>
                      A personal project to develop an E-Commerce website using <span className='font-bold'>ASP.NET Blazor</span>. The project aims to provide a platform for users to purchase products and manage their accounts. The website will be designed with a user-friendly interface and optimized for performance and security to ensure a smooth shopping experience for users.
                      <div className='flex flex-col justify-end mt-4 gap-2'>
                        <p className='font-bold'>Source Code:</p>
                        <a className='link flex justify-end' href='https://github.com/giabao12-hali/BlazorEcommerce' target='_blank'>
                          <Github />
                        </a>
                      </div>
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
                      <time className="font-mono italic">September 2023 ~ December 2023</time>
                      <div className="text-lg font-black">Front-End Developer | Graduation Donace Project</div>
                      Graduation project website focuses on developing an online event ticketing system. Built primarily with <span className='font-bold'>Next.js, Tailwind CSS, and NextUI</span> for UI design, the site offers a modern and user-friendly experience. Users can easily browse and purchase tickets for events, manage their ticket information, and complete transactions quickly and conveniently. The responsive interface ensures compatibility across a range of devices, from desktops to mobile phones, providing a seamless experience for all users.
                      <div className='flex flex-col justify-start mt-4 gap-1'>
                        <div>
                          <p className='font-bold py-2'>Website:</p>
                          <p className='cursor-default font-semibold'>
                            Click&nbsp;
                            <a className='link tooltip tooltip-right' data-tip="🙋‍♂️" href='https://donace-fe-production.vercel.app/' target='_blank'>here</a>
                          </p>
                        </div>
                        <div>
                          <p className='font-bold py-2'>Source Code:</p>
                          <a className='link' href='https://github.com/Donace-Project/Donace-FE-Production' target='_blank'>
                            <Github />
                          </a>
                        </div>
                      </div>
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
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">January 2024 ~ February 2024</time>
                      <div className="text-lg font-black">Freelancer Front-End Developer | Metruyenchu</div>
                      A novel reading platform built using <span className='font-bold'>ReactJS</span> for the frontend and <span className='font-bold'>DaisyUI</span> for component-based styling, offering a responsive and user-friendly interface. The website ensures seamless navigation and enhances the reading experience with a modern, minimalist design.
                      <div className='flex flex-col justify-end mt-4 gap-2'>
                        <div>
                          <p className='font-bold py-2'>Website:</p>
                          <p className='cursor-default font-semibold'>
                            Click&nbsp;
                            <a className='link tooltip' data-tip="hi there, it's me again" href='https://story-reading.vercel.app/' target='_blank'>here</a>
                            &nbsp;👈
                          </p>
                        </div>
                        <div>
                          <p className='font-bold py-2'>Source Code:</p>
                          <a className='link flex justify-end' href='https://github.com/TranDat1114/Story-Reading' target='_blank'>
                            <Github />
                          </a>
                        </div>
                      </div>
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
                      <time className="font-mono italic">May 2023 ~ May 2024</time>
                      <div className="text-lg font-black">Intership .NET Developer | HQSOFT - Distribution & Retail Expert </div>
                      The ERP (Enterprise Resource Planning) Software is built using <span className='font-bold'>.NET 8</span> technology, incorporating Blazor for component-based web development, and utilizing DevExpress, MudBlazor, and Bootstrap for dynamic and responsive user interfaces. This ERP system efficiently handles business operations like finance, supply chain, and human resources through a modern and scalable cloud-based architecture.
                      <div className='flex flex-col justify-start mt-4 gap-1'>
                        <div>
                          <p className='italic py-2'>*At HQSoft, I worked on ERP-related software, but it was developed for internal use, so there’s no link available, hehe. However, I do have the source code from when I practiced coding with the ABP framework to meet the company’s needs:</p>
                          <p className='cursor-default font-semibold items-center flex'>
                            Click&nbsp;
                            <a className='link tooltip tooltip-bottom' data-tip="ohh you found me ^^" href='https://github.com/giabao12-hali/ABPFramework_Pratice' target='_blank'>here</a>
                            &nbsp;
                            <label className="swap swap-flip text-base" >
                              <input type="checkbox" />

                              <div className="swap-on tooltip" data-tip="yes, this way">👈</div>
                              <div className="swap-off tooltip" data-tip="ops, wrong way">👉</div>
                            </label>
                          </p>
                        </div>
                      </div>
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
                    <div className="timeline-start mb-10 md:text-end">
                      <time className="font-mono italic">August 2024 ~ Present</time>
                      <div className="text-lg font-black">Learning Flutter & Dart</div>
                      Learning Flutter and Dart involves mastering a modern framework and programming language for building cross-platform mobile applications. Flutter offers a fast, efficient development process with a rich set of pre-designed widgets, while Dart is a clean, object-oriented language that enables high-performance, responsive UI development. Together, they allow for creating beautiful and scalable apps for iOS, Android, and beyond from a single codebase.
                      <div className='flex flex-col justify-end mt-4 gap-2'>
                        <div>
                          <p className='italic py-2'>*Because I am still continuing to learn and get familiar with the Flutter interface and the Dart language, you can follow my progress on developing apps here:</p>
                          <p className='cursor-default font-semibold items-center flex justify-end'>
                            Flutter is so much&nbsp;
                            <a className='link tooltip tooltip-bottom' data-tip="ohh you found me again" href='https://github.com/giabao12-hali/flutter-project-collection' target='_blank'>fun</a>
                            &nbsp;
                            <label className="swap swap-flip text-base" >
                              <input type="checkbox" />

                              <div className="swap-off tooltip" data-tip="this time">👈</div>
                              <div className="swap-on tooltip" data-tip="no wrong way anymore">👉</div>
                            </label>
                          </p>
                        </div>
                      </div>
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
                      <time className="font-mono italic">August 2024 ~ Present</time>
                      <div className="text-lg font-black">Fullstack Web Developer | Vietravel</div>
                      The Passport/ID Card reading system is built with <span className='font-bold'>.NET 8</span> as the backend and <span className='font-bold'>ReactJS, TailwindCSS, and DaisyUI</span> for the frontend. This system allows the sales team to upload passport or ID card images, automatically extracting customer information such as full name, nationality, passport number, and other relevant details. The extracted data is then stored in the eTour system for further processing and management, streamlining the customer data entry process and improving efficiency in handling bookings.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="divider font-semibold text-3xl font-brygada1918Font my-24 px-12" data-aos="fade-up">
            <img src={sparkle} className='w-10 h-10' />
            Techincal Skills
            <img src={sparkle} className='w-10 h-10' />
          </div>
          <section className='overflow-hidden w-full my-12' data-aos="fade-up">
            <Slider blurBorders={true} blurBoderColor={'#fffde9'}>
              <Slider.Slide >
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://github.com/microsoft/TypeScript' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://www.youtube.com/@DotNetMastery' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://learn.microsoft.com/en-us/dotnet/core/introduction' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" className="filter grayscale hover:filter-none transition duration-300" width={60} />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://www.udemy.com/share/101Wby/' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://vitejs.dev/' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://tailwindcss.com/' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://react-bootstrap.github.io/' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://learn.microsoft.com/en-us/ef/core/' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href="https://www.w3schools.com/postgresql/index.php" target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href='https://www.udemy.com/share/1013o4/' target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
              <Slider.Slide>
                <a href="https://www.udemy.com/share/1013o4/" target='_blank'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" width={60} className="filter grayscale hover:filter-none transition duration-300" />
                </a>
              </Slider.Slide>
            </Slider>
          </section>
        </main>
      </div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href='https://github.com/giabao12-hali' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a href='https://www.instagram.com/_giabao_12/' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href='https://www.facebook.com/nguyengiabao01212' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </nav>
        <aside>
          <p className='flex items-center'>Copyright © {new Date().getFullYear()} - <span className='font-semibold'>Thanks for scrolling,</span>&nbsp;that&apos;s all folks <Heart className='w-4 h-4 ml-1' /></p>
        </aside>
      </footer>
    </>
  )
}

export default App