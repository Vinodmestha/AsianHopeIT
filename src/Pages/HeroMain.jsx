import React from 'react'
import heroImg from "../assets/business-meeting-office.jpg"
import dots from "../assets/Icons/Dot's1.svg"
import lines from "../assets/Icons/3 Lines.svg"
import { SecondaryBtn } from '../Components/Button'
// ffbe0b
function HeroMain() {
    return (
        <main className='relative bg-gray-100 z-0'>
            <div className='absolute right-0 top-0 h-full w-[720px] lg:bg-[#001f54] -z-10 rounded-bl-full'>
                <img src={heroImg} alt="hero-img" className='lg:flex hidden w-full h-full rounded-bl-full shadow-xl pl-3' />
            </div>
            <div className='absolute left-0 bottom-0 lg:bg-white -z-10 h-8 w-1/2 rounded-tr-full'></div>
            {/* <div className='absolute -left-5 -top-5 h-96 w-96 -z-10 '> */}
            <img src={dots} alt="dots-icon" className='absolute -left-16 -top-20 h-96 w-96 -z-10' />
            {/* </div> */}
            <section className='max-w-screen-xl mx-auto md:flex py-14 md:py-28 px-3 xl:px-0 lg:h-[85vh]'>
                <div className='relative lg:w-1/2 w-3/4 mt-5 grid'>
                    <img src={lines} alt="lines-icon" className='absolute lg:flex hidden -right-80 -bottom-28 size-60 -z-10' />
                    <div>
                        <h1 className='text-6xl md:text-6xl font-axiforma md:leading-[80px] leading-[70px] font-bold text-[#03045e]   '>
                            Perfect Place for Your <br /> <span className='text-[#ffc300]'>Business</span> <br />Promotion
                        </h1>
                    </div>

                    <div className='mt-5 lg:mt-0'>
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