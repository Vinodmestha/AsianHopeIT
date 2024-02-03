import React, { useState } from 'react'
// import logo from "../assets/asian_hope_it_company_logo.jpeg"
import logo from "../assets/logo.jpg"
import menu from "../assets/Icons/menu.svg"
import { PrimaryBtn } from '../Components/Button'

const navItems = [
    { label: "About", slug: "about" },
    { label: "Services", slug: "services" },
    { label: "Other Services", slug: "other-services" },
    { label: "Our Team", slug: "our-team" },
    // { label: "Why Choose Us", slug: "why-choose" }
]
function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className='sticky top-0 z-[1] bg-white'>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center py-4 px-3 xl:px-0'>
                <div className='flex justify-center items-center font'>
                    <div className='w-14 h-14 rounded-full'>
                        <img src={logo} alt="header-logo" className='w-full h-full rounded-full' />
                    </div>
                    <h4 className='text-[#001f54] text-sm font-axiSemiBold tracking-wider ml-2'>AsianHope IT <br /> Company</h4>
                </div>
                <nav className='block z-10'>
                    <div
                        className={`hidden lg:block w-full rounded-b-lg z-50 bg-white  md:max-w-full px-5 md:px-0 py-3 lg:py-0 `}
                    >
                        <ul className='items-center gap-8 lg:gap-12 block md:flex md:py-0 py-1'>
                            {navItems?.map((item, i) => (
                                <li key={i} className='font-axiMedium text-base lg:text-lg text-[#001f54]  hover:text-gray-400 cursor-pointer py-2 md:py-0'>{item?.label}</li>
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
                        className={` absolute size-10 right-4 top-1/2 block -translate-y-1/2 px-1 py-2 md:hidden`}
                    >
                        <img src={menu} alt='menu-con' className='w-full h-full' />
                    </button>
                    <div className={`block lg:hidden absolute right-0 top-full w-full rounded-b-lg z-50 bg-white md:static md:flex md:w-full md:max-w-full px-5 md:px-0 py-3 lg:py-0 ${open ? "hidden" : ""} `}>
                        <ul className='items-center gap-8 lg:gap-12 block md:flex md:py-0 py-1'>
                            {navItems?.map((item, i) => (
                                <li key={i} className='font-axiMedium text-base lg:text-lg text-[#001f54] hover:text-gray-400 cursor-pointer py-2 md:py-0'>{item?.label}</li>
                            ))}
                        </ul>
                    </div>


                </nav>
            </div>
        </div>
    )
}

export default Header