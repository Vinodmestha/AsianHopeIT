import React from 'react'
import logo from "../assets/asian_hope_it_company_logo.jpeg"
import fb from "../assets/SocialMedia/facebook.png"
import ig from "../assets/SocialMedia/instagram.png"
import x from "../assets/SocialMedia/x.png"
import ln from "../assets/SocialMedia/linkedin.png"
const aboutItems = {
    title: "About",
    items: [
        { label: "Company", slug: "company" },
        { label: "Services", slug: "services" },
        { label: "Our Team", slug: "our-team" },
        { label: "Blog", slug: "blog" }
    ]
}
const socialMedia = [
    { icon: fb, link: "facebook", slug: "facebook" },
    { icon: ig, link: "instagram", slug: "instagram" },
    { icon: x, link: "x", slug: "x" },
    { icon: ln, link: "linkedin", slug: "linkedin" }
]
function Footer() {
    return (
        <footer className='bg-[#001f54] py-12'>
            <div className='max-w-screen-xl mx-auto px-5 xl:px-0'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-10 mb-5'>
                    <div>
                        <div className='flex items-start'>
                            <div className='w-14 h-14 rounded-full'>
                                <img src={logo} alt="header-logo" className='w-full h-full rounded-full' />
                            </div>
                            <h4 className='text-white font-axiforma tracking-wider font-bold ml-3'>AsianHope IT <br /> Company</h4>
                        </div>
                        <div className='sm:mt-5 text-white mt-3 font-axiforma'>
                            <h4>9448627779</h4>
                            <h4>asianhopeit@gmail.com</h4>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <h3 className='text-white text-lg'>{aboutItems?.title}</h3>
                            <ul className='mt-2'>
                                {aboutItems?.items?.map((item, i) => (
                                    <li key={i} className='text-white mb-2 font-axiforma'>{item?.label}</li>
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
                            <li>
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