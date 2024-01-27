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
        <div className='sticky bg-[#001f54]'>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3'>
                <div className='w-16 h-16 rounded-full'>
                    <img src={logo} alt="header-logo" className='w-full h-full rounded-full' />
                </div>
                <nav>
                    <ul className='flex items-center gap-10'>
                        {navItems?.map((item, i) => (
                            <li key={i} className='text-lg text-white font-semibold'>{item?.label}</li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <button className='bg-blue-500 text-white py-2.5 px-5 font-semibold rounded-full hover:bg-white hover:text-blue-500'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Header