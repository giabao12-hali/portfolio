import ScrollIntoView from 'react-scroll-into-view'
import { Link } from 'react-router-dom'


const HeaderLayout = () => {
    return (
        <>
            <header>
                <div className='hidden sm:drawer sm:p-4'>
                    <input id='drawer-navbar' type='checkbox' className='drawer-toggle' />
                    <div className='drawer-content'>
                        <label className="group font-semibold text-3xl font-merriweatherFont transition duration-300 cursor-pointer drawer-button" htmlFor='drawer-navbar'>
                            Hali
                            <span className="block max-w-0 group-hover:max-w-14 transition-all duration-500 h-0.5 bg-error"></span>
                        </label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="drawer-navbar" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-1/2 p-4">
                            <li>
                                <ScrollIntoView selector='#about' alignToTop="true" className='cursor-pointer'>
                                    <a className="group transition duration-300 font-serif">
                                        About
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                                    </a>
                                </ScrollIntoView>
                            </li>
                            <li>
                                <ScrollIntoView selector='#projects' alignToTop="true" className='cursor-pointer'>
                                    <a className="group transition duration-300 font-serif">
                                        Project
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                                    </a>
                                </ScrollIntoView>
                            </li>
                            <li>
                                <Link to="/recap" className="group transition duration-300 font-serif">
                                    Recap
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                                </Link>
                            </li>
                            <li>
                                <ScrollIntoView selector='#projects' alignToTop="true" className='cursor-pointer'>
                                    <a className="group transition duration-300 font-serif">
                                        Contact
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                                    </a>
                                </ScrollIntoView>
                            </li>
                            <div className="divider"></div>
                            <div className='flex justify-between items-center mx-2'>
                                <p className='font-semibold'>Theme</p>
                                <label className="swap swap-rotate">
                                    <input type="checkbox" className="theme-controller" value="sunset" />
                                    <svg
                                        className="swap-off h-8 w-8 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>
                                    <svg
                                        className="swap-on h-8 w-8 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="navbar bg-base-100 px-8 sm:hidden">
                    <div className="navbar-start">
                        <a href="/" className="group font-semibold text-3xl font-merriweatherFont transition duration-300">
                            Hali
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-error"></span>
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="flex gap-12 text-2xl font-merriweatherFont">
                            <a href="" className="group text-gray-500 font-serif transition duration-300">
                                Home
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                            </a>
                            <ScrollIntoView selector='#about' alignToTop="true" className='cursor-pointer'>
                                <a className="group text-gray-500 font-serif transition duration-300">
                                    About
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                                </a>
                            </ScrollIntoView>

                            <ScrollIntoView selector='#projects' alignToTop="true" className='cursor-pointer'>
                                <a className="group text-gray-500 font-serif transition duration-300">
                                    Project
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                                </a>
                            </ScrollIntoView>
                            <Link to="/recap" className="group text-gray-500 font-serif transition duration-300">
                                Recap
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                            </Link>
                            <a href="#" className="group text-gray-500 font-serif transition duration-300">
                                Contact
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderLayout;