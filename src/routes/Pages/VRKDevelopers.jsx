import React from 'react'
import img1 from "../../assets/Image/IMG_1088.jpg"
import img2 from "../../assets/Image/IMG_1104.jpg"
import img3 from "../../assets/Image/IMG_1092.jpg"

import { H1 } from '../../Components/Typography'
import { PrimaryBtn } from '../../Components/Button'
import { useNavigate } from 'react-router-dom'

const whyChooseUs = [
    { icon: img1, label: "Statewide Clients", desc: "We are trusted by 40+ clients from statewide." },
    { icon: img2, label: "Next-Gen Technology Provider", desc: "Lifetime provider of uttermost tactics for  your digital journey." },
    { icon: img3, label: "It’s All About Technology", desc: "24*7 support from our expertise to your business." },
]

export default function VRKDevelopers() {
    const navigate = useNavigate()
    return (
        <main className='bg-gray-50 dark:bg-darkPrimary'>
            <section className='max-w-screen-xl mx-auto py-10 md:py-20 px-3 xl:px-0'>
                <div className='text-center mb-12'>
                    <H1 className="tracking-wide">VRK Developers</H1>
                    <ul className="mt-10 grid grid-cols-1 gap-6 text-center text-slate-700 lg:grid-cols-3 sm:grid-cols-2">
                        {whyChooseUs?.map((item, i) => (
                            <li className="rounded-xl bg-white dark:bg-gray-700 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-1 shadow-sm" key={i}>
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
                    <PrimaryBtn className="mt-12" onClick={() => { navigate("/vrkdevelopers") }}>More About</PrimaryBtn>
                </div>
            </section>
        </main>
    )
}

