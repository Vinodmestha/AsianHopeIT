import React, { useState } from 'react'
// import logo from "../assets/asian_hope_it_company_logo.jpeg"
import logo from "../assets/logo.jpg"
import menu from "../assets/Icons/menu.svg"
import { useNavigate } from 'react-router-dom'

const navItems = [
    { label: "About", slug: "about" },
    { label: "Services", slug: "services" },
    { label: "Other Services", slug: "other-services" },
    { label: "Team", slug: "team" },
    // { label: "Why Choose Us", slug: "why-choose" }
]
function Header() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true);
    return (
        <div className='sticky top-0 z-[1] bg-[#001f54]'>
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
                                <li key={i} className='font-axiMedium text-base lg:text-lg text-white  hover:text-gray-400 cursor-pointer py-2 md:py-0'
                                    onClick={() => navigate(item?.slug)}>{item?.label}</li>
                            ))}
                            {/* <div>
                                <PrimaryBtn>
                                    Contact Us
                                </PrimaryBtn>
                            </div> */}
                        </ul>

                    </div>
                    <button
                        onClick={() => setOpen(!open)}
                        className={`absolute flex justify-center size-9 right-4 top-1/2 -translate-y-1/2 px-1 py-1.5 bg-white rounded-lg md:hidden`}
                    >
                        <img src={menu} alt='menu-con' className='size-6' />
                    </button>
                    <div className={`block lg:hidden absolute right-0 top-full w-full rounded-b-lg z-50 md:bg-transparent bg-white md:static md:flex md:w-full md:max-w-full px-5 md:px-0 py-3 lg:py-0 ${open ? "hidden" : ""} `}>
                        <button className='md:hidden absolute right-5 size-6 font-semibold'
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
                                }} className='font-axiMedium text-base lg:text-lg md:text-white text-[#001f54] hover:text-gray-400 cursor-pointer py-2 md:py-0'>{item?.label}2</li>
                            ))}
                        </ul>
                    </div>


                </nav>
            </div>
        </div>
    )
}

export default Header