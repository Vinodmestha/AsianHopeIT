import React, { useState } from 'react'
import logo from "../assets/asian_hope_it_company_logo.jpeg"
import { PrimaryBtn } from '../Components/Button'

const navItems = [
    { label: "About", slug: "about" },
    { label: "Services", slug: "services" },
    { label: "Our Team", slug: "our-team" },
    { label: "Other Services", slug: "other-services" },
    // { label: "Why Choose Us", slug: "why-choose" }
]
function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className='sticky bg-[#] border-b z-[1]'>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center py-5 px-3 xl:px-0'>
                <div className='flex justify-center items-center font'>
                    <div className='w-14 h-14 rounded-full'>
                        <img src={logo} alt="header-logo" className='w-full h-full rounded-full' />
                    </div>
                    <h4 className='text-[#001f54] text-sm font-axiforma font-bold ml-2 mt-2'>AsianHope IT <br /> Company</h4>
                </div>
                <nav className='block z-10'>
                    <button
                        onClick={() => setOpen(!open)}
                        id="navbarToggler"
                        className={` ${open && "navbarTogglerActive"} absolute right-4 top-1/2 block -translate-y-1/2 rounded px-1 py-2 ring-primary focus:ring-2 md:hidden`}
                    >
                        <span className="relative my-[4px] block h-[2px] w-[24px] bg-black"></span>
                        <span className="relative my-[4px] block h-[2px] w-[24px] bg-black"></span>
                        <span className="relative my-[4px] block h-[2px] w-[24px] bg-black"></span>
                    </button>
                    <div
                        id="navbarCollapse"
                        className={`absolute right-0 top-full w-full rounded-b-lg z-50 bg-white shadow md:static md::flex md:w-full md:max-w-full md:shadow-none px-5 md:px-0 
                        ${!open && "hidden"} `}
                    >
                        <ul className='items-center gap-8 lg:gap-12 block md:flex md:py-0 py-1'>
                            {navItems?.map((item, i) => (
                                <li key={i} className='font-axiMedium text-base lg:text-lg text-[#001f54]  hover:text-gray-400 cursor-pointer'>{item?.label}</li>
                            ))}
                            <div className=''>
                                <PrimaryBtn>
                                    Contact Us
                                </PrimaryBtn>
                            </div>
                        </ul>

                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Header