import React from 'react'
import logo from "../assets/asian_hope_it_company_logo.jpeg"

const navItems = [
    { label: "HOME", slug: "HOME" },
    { label: "Services", slug: "services" },
    { label: "Our Team", slug: "our-team" },
    { label: "Blog", slug: "blog" }
]
function Header() {
    return (
        <div className='sticky bg-[#] border-b'>
            <div className='max-w-screen-xl mx-auto md:flex justify-between items-center py-5 px-3 xl:px-0'>
                <div className='flex items-center font'>
                    <div className='w-14 h-14 rounded-full'>
                        <img src={logo} alt="header-logo" className='w-full h-full rounded-full' />
                    </div>
                    <h4 className='text-[#001f54] font-semibold ml-3'>AsianHope IT <br /> Company</h4>
                </div>
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-10 lg:gap-20'>
                        {navItems?.map((item, i) => (
                            <li key={i} className='text-lg text-[#001f54] font-semibold hover:text-gray-400 cursor-pointer'>{item?.label}</li>
                        ))}
                    </ul>
                </nav>
                <div className='hidden md:block'>
                    <button className='border-2 border-blue-500 text-blue-500 py-2.5 px-5 font-semibold rounded-full hover:text-white hover:bg-blue-500'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Header