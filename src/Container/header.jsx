import React, { useEffect, useState } from 'react'
// import logo from "../assets/asian_hope_it_company_logo.jpeg"
import logo from "../assets/logo.jpg"
import menu from "../assets/Icons/menu.svg"
import { useNavigate } from 'react-router-dom'
import { darkIcon, lightIcon } from '../assets'

const navItems = [
    { label: "About", slug: "about" },
    { label: "Services", slug: "services" },
    { label: "Other Services", slug: "other-services" },
    // { label: "Team", slug: "team" },
    // { label: "Why Choose Us", slug: "why-choose" }
]
const Switcher = ({ theme }) => {
    return (
        <>
            {theme ? <img src={lightIcon} alt='light-theme' /> : <img src={darkIcon} alt="dark-theme" />}
        </>
    )
}
function Header() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true);
    const [theme, setTheme] = useState(true);

    const handleClick = () => {
        if (localStorage.theme === "dark" || !("theme" in localStorage)) {
            //add class=dark in html element
            document.documentElement.classList.add("dark");
        } else {
            //remove class=dark in html element
            document.documentElement.classList.remove("dark");
        }

        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
            setTheme(true)
        } else {
            localStorage.theme = "dark";
            setTheme(false)
        }
    }
    return (
        <header className='sticky top-0 z-[1] bg-primary dark:bg-darkPrimary dark:border-b-2 dark:border-b-gray-700'>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3.5 px-3 xl:px-0'>
                <div className='flex justify-center items-center cursor-pointer' onClick={() => navigate("/")}>
                    <div className='flex justify-center items-center size-16 rounded-full '>
                        <img src={logo} alt="header-logo" className='size-[70px] p-1' />
                    </div>
                    <div className='ml-2'>
                        <h4 className='lg:flex items-end gap-2 text-white text-sm font-axiSemiBold tracking-widest'>
                            <p className='text-2xl lg:text-3xl'>AsianHope</p>
                            <p className='md:mb-1'>IT Company</p>
                        </h4>
                        <p className='text-white text-xs lg:text-sm font-semibold lg:-mt-[3px]'>Creating Impact Together </p>
                    </div>
                </div>
                <nav className='block z-10'>
                    <div className={`hidden lg:block w-full rounded-b-lg z-50 md:max-w-full px-5 md:px-0 py-3 lg:py-0 `} >
                        <ul className='items-center gap-8 lg:gap-12 block md:flex md:py-0 py-1'>
                            {navItems?.map((item, i) => (
                                <li key={i} className='font-axiMedium text-base lg:text-lg text-white hover:text-gray-400 cursor-pointer py-2 md:py-0'
                                    onClick={() => navigate(item?.slug)}>{item?.label}</li>
                            ))}
                            <div className="size-9 cursor-pointer bg-white rounded-full p-2" onClick={handleClick}>
                                <Switcher theme={theme} />
                            </div>

                        </ul>

                    </div>
                    <button
                        onClick={() => setOpen(!open)}
                        className={`absolute flex justify-center size-9 right-4 top-1/2 -translate-y-1/2 px-1 py-1.5 bg-white rounded-lg md:hidden`}
                    >
                        <img src={menu} alt='menu-con' className='size-6' />
                    </button>
                    <div className={`block lg:hidden absolute right-0 top-full w-full rounded-b-lg z-50 md:bg-transparent bg-white dark:bg-gray-800 md:static md:flex md:w-full md:max-w-full px-5 md:px-0 py-3 lg:py-0 ${open ? "hidden" : ""} `}>
                        <button className='md:hidden absolute right-5 size-6 font-semibold dark:text-white'
                            onClick={() => {
                                setOpen(true)
                            }}
                        >
                            X
                        </button>
                        <ul className='items-center gap-8 lg:gap-12 block md:flex md:py-0 py-1'>
                            {navItems?.map((item, i) => (
                                <li key={i} onClick={() => {
                                    setOpen(true),
                                        navigate(item?.slug)
                                }} className='font-axiMedium text-base lg:text-lg md:text-white text-[#001f54] dark:text-white hover:text-gray-400 cursor-pointer py-2 md:py-0'>{item?.label}</li>
                            ))}
                            <div className="flex" onClick={handleClick}>
                                <div className="flex-initial w-fit font-bold underline decoration-sky-500 text-red-800 dark:bg-black dark:text-white">
                                    (Dark/Light)
                                </div>
                            </div>
                        </ul>
                    </div>


                </nav>
            </div >
        </header >
    )
}

export default Header