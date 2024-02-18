import React from 'react'
import logo from "../assets/logo.jpg"
import fb from "../assets/SocialMedia/facebook.png"
import ig from "../assets/SocialMedia/instagram.png"
import x from "../assets/SocialMedia/x.png"
import ln from "../assets/SocialMedia/linkedin.png"
const aboutItems = {
    // title: "About",
    items: [
        { label: "About", slug: "about" },
        // { label: "Company", slug: "company" },
        { label: "Services", slug: "services" },
        { label: "Other Services", slug: "other-services" },
        { label: "Team", slug: "team" },
        // { label: "Blog", slug: "blog" }
    ]
}
const socialMedia = [
    { icon: fb, link: "https://www.facebook.com/p/Asian-hope-it-company-100069302953203/", slug: "facebook" },
    { icon: ig, link: "instagram", slug: "instagram" },
    { icon: x, link: "x", slug: "x" },
    { icon: ln, link: "https://www.linkedin.com/company/asian-hope-it-company/about/", slug: "linkedin" }
]
function Footer() {
    return (
        <footer className='bg-[#001f54] py-12'>
            <div className='max-w-screen-xl mx-auto px-5 xl:px-0'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-10 mb-5'>
                    <div>
                        <div className='flex items-start'>
                            <div className='size-16 rounded-full'>
                                <img src={logo} alt="header-logo" className='w-full h-full' />
                            </div>
                            <div className='ml-2'>
                                <h4 className='text-white text-sm font-axiSemiBold tracking-widest'><span className='text-2xl sm:text-3xl'>AsianHope</span> IT Company</h4>
                                <p className='text-white text-sm font-semibold -mt-[3px]'>Creating Impact Together </p>
                            </div>
                        </div>
                        <div className='sm:mt-5 text-white mt-3 font-axiforma'>
                            <h4>9448627779</h4>
                            <h4>asianhopeit@gmail.com</h4>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 '>
                        <div>
                            {/* <h3 className='text-white text-lg'>{aboutItems?.title}</h3> */}
                            <ul className='mt-2'>
                                {aboutItems?.items?.map((item, i) => (
                                    <li key={i} className='text-white mb-2 font-axiforma cursor-pointer' onClick={() => window.open(item?.slug)}>{item?.label}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='font-axiforma'>
                            <h3 className='text-white text-lg'>Address</h3>
                            <ul className='mt-2'>
                                <li className='text-white mb-2'>Basaveshwaranagara, Bengaluru</li>
                            </ul>
                        </div>
                    </div>
                    <div className='font-axiforma'>
                        <h3 className='text-white text-lg'>Contact</h3>
                        <h3 className='text-white'>
                            Phone : 9448627779
                        </h3>
                        <h3 className='text-white'>
                            Email: connect@asianhopeit.com
                        </h3>
                    </div>
                </div>
                <hr />
                <div className='sm:flex justify-between items-center mt-5 font-axiforma'>
                    <h4 className='text-white'>
                        &copy;Business Consultant. All Right Reserved 2024
                    </h4>
                    <ul className='flex gap-3 text-white font-semibold mt-3 sm:mt-0'>
                        {socialMedia?.map((item, i) => (
                            <li key={i}>
                                <a href={item?.link}>
                                    <img src={item?.icon} alt={item?.slug} className='size-8' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer