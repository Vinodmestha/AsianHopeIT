import React, { useEffect } from 'react'
import img1 from "../../assets/Image/IMG_1088.jpg"
import img2 from "../../assets/Image/IMG_1104.jpg"
import img3 from "../../assets/Image/IMG_1092.jpg"
import { H1 } from '../../Components/Typography'

const whyChooseUs = [
    { icon: img1, label: "Statewide Clients", desc: "We are trusted by 40+ clients from statewide." },
    { icon: img2, label: "Next-Gen Technology Provider", desc: "Lifetime provider of uttermost tactics for  your digital journey." },
    { icon: img3, label: "It’s All About Technology", desc: "24*7 support from our expertise to your business." },
]
const list = [
    { label: "750 Areca nut plants" },
    { label: "120 Coconut trees, mango trees, sapota trees and many more plants" },
    { label: "Grand entrance arch, club house, swimming pool, 30ft wide roads, 24*7 security, etc" },
    { label: "Excellent return on investment" },
    { label: "Indoor and Outdoor games, open kitchen, restaurant, kitchen garden, view point and many more exciting ameneties" },
]

function Hero() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <main className='bg-gray-100'>
                <section className='max-w-screen-xl mx-auto py-20 md:py-32 px-3 xl:px-0'>
                    <H1 className='text-center text-4xl font-semibold font-axiforma tracking-wide'>VRK Developers</H1>
                    <p className='font-axiforma text-center pt-5 font-medium'>Contact Number <a href="tel: +919448627779 ">+91 9448627779, </a> <a href="tel: +91 8123551230 ">+91 8123551230</a></p>
                </section>
            </main >
            <main>
                <section className='max-w-screen-xl mx-auto py-10 md:py-20 px-3 xl:px-0'>
                    <ul className="grid grid-cols-1 gap-6 text-center text-slate-700 lg:grid-cols-3 sm:grid-cols-2 ">
                        {whyChooseUs?.map((item, i) => (
                            <li className="rounded-xl bg-white px-4 py-4 shadow-sm" key={i}>
                                {/* <div> */}
                                <img src={item?.icon} alt={item?.label} className="mx-auto h-full w-full p-2 rounded-2xl" />
                                {/* </div> */}
                                {/* <h3 className="my-3 font-axiBold text-lg font-medium">{item?.label}</h3>
                                <p className="mt-1.5 text-base leading-6 font-axiforma">
                                    {item?.desc}
                                </p> */}
                            </li>
                        ))}
                    </ul>
                    <ul className='grid grid-cols-1 gap-6 text-slate-700 lg:grid-cols-3 sm:grid-cols-2'>
                        {list?.map((item, i) => (
                            <li key={i} className='flex justify-start items-center rounded-2xl bg-white h-28 px-4 py-2 shadow-2xl font-axiforma'>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </section>

            </main>
        </>
    )
}

export default Hero