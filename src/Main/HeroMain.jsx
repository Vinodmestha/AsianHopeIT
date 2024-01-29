import React from 'react'
import heroImg from "../assets/business-meeting-office.jpg"
function HeroMain() {
    return (
        <main className='relative'>
            <div className='absolute right-0 top-0 h-full w-[700px] bg-[#dee2ff] -z-10 rounded-bl-full'></div>
            <section className='max-w-screen-xl mx-auto md:flex py-14 md:py-28 px-3 xl:px-0'>
                <div className='md:w-1/2 mt-5'>
                    <h1 className='text-6xl md:text-6xl leading-[60px] md:leading-[70px] font-bold text-[#03045e]   '>
                        Perfect Place for Your <br /> Business <br />Promotion
                    </h1>
                    <div className='flex items-center mt-10'>
                        <button className='border-2 bg-blue-500 text-white py-2.5 px-5 font-semibold rounded-full hover:bg-white hover:border-blue-500 hover:text-blue-500'>
                            <a href="tel: +91 9448627779">Contact Us</a>
                        </button>
                    </div>
                </div>
                <div className='md:w-1/2 mt-5 md:mt-0'>
                    <div className='bg-[#f8f9fa] px-3 md:px-5 py-5 md:py-8 rounded-2xl'>
                        <img src={heroImg} alt="hero-img" className='w-full h-full rounded-2xl' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HeroMain