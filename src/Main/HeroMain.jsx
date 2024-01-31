import React from 'react'
import heroImg from "../assets/business-meeting-office.jpg"
import dots from "../assets/Icons/Dot's1.svg"
import { SecondaryBtn } from '../Components/Button'

function HeroMain() {
    return (
        <main className='relative bg-gray-100 z-0'>
            <div className='absolute right-0 top-0 h-full w-[720px] lg:bg-[#03045e] -z-10 rounded-bl-full'>
                <img src={heroImg} alt="hero-img" className='lg:flex hidden w-full h-full rounded-bl-full shadow-xl pl-5' />
            </div>
            {/* <div className='absolute -left-5 -top-5 h-96 w-96 -z-10 '> */}
            <img src={dots} alt="dots-icon" className='absolute -left-16 -top-20 h-96 w-96 -z-10' />
            {/* </div> */}
            <section className='max-w-screen-xl mx-auto md:flex py-14 md:py-28 px-3 xl:px-0'>
                <div className='lg:w-1/2 w-3/4  mt-5'>
                    <h1 className='text-6xl md:text-6xl font-axiforma md:leading-[80px] leading-[70px] font-bold text-[#03045e]   '>
                        Perfect Place for Your <br /> Business <br />Promotion
                    </h1>
                    <div className='flex items-center mt-5'>
                        <SecondaryBtn>
                            <a href="tel: +91 9448627779">Contact Us</a>
                        </SecondaryBtn>
                    </div>
                </div>
                {/* <div className='md:w-1/2 mt-5 md:mt-0'> */}
                {/* <div className='rounded-2xl sm:ml-5'>
                        <img src={heroImg} alt="hero-img" className='w-full h-full rounded-2xl shadow-xl' />
                    </div> */}
                {/* </div> */}
            </section>
        </main >
    )
}

export default HeroMain