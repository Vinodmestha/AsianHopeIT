import React from 'react'
import logo from "../assets/asian_hope_it_company_logo.jpeg"
const aboutItems = {
    title: "About",
    items: [
        { label: "Company", slug: "company" },
        { label: "Services", slug: "services" },
        { label: "Our Team", slug: "our-team" },
        { label: "Blog", slug: "blog" }
    ]
}
function Footer() {
    return (
        <footer className='bg-[#001f54] py-10'>
            <div className='max-w-screen-xl mx-auto px-5 xl:px-0'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-10 mb-5'>
                    <div>
                        <div className='flex items-start'>
                            <div className='w-14 h-14 rounded-full'>
                                <img src={logo} alt="header-logo" className='w-full h-full rounded-full' />
                            </div>
                            <h4 className='text-white font-semibold ml-3'>AsianHope IT <br /> Company</h4>
                        </div>
                        <div className='sm:mt-5 text-white mt-3'>
                            <h4>9448627779</h4>
                            <h4>asianhopeit@gmail.com</h4>
                        </div>
                    </div>
                    <div className=' grid grid-cols-2 '>
                        <div>
                            <h3 className='text-white text-lg'>{aboutItems?.title}</h3>
                            <ul className='mt-2'>
                                {aboutItems?.items?.map((item, i) => (
                                    <li key={i} className='text-white mb-2'>{item?.label}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-white text-lg'>Address</h3>
                            <ul className='mt-2'>
                                <li className='text-white mb-2'>Bengalore</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white text-lg'>Contact</h3>
                        <h3 className='text-white'>
                            <b>Phone</b> : 9448627779
                        </h3>
                        <h3 className='text-white'>
                            <b>Email</b> : connect@asianhopeit.com
                        </h3>
                    </div>
                </div>
                <hr />
                <div className='sm:flex justify-between mt-5'>
                    <h4 className='text-white'>
                        &copy;Business Consultant. All Right Reserved 2024
                    </h4>
                    <h4 className='text-white font-semibold mt-3 sm:mt-0'>
                        Social media
                    </h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer