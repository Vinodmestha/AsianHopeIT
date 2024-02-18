import React from 'react'
import state from "../assets/Icons/state.png"
import technology from "../assets/Icons/technology.png"
import technology2 from "../assets/Icons/technology2.png"
import service from "../assets/Image/service.png"

import { H1 } from './Typography'

const whyChooseUs = [
    { icon: state, label: "Statewide Clients", desc: "We are trusted by 40+ clients from statewide." },
    { icon: technology, label: "Next-Gen Technology Provider", desc: "Lifetime provider of uttermost tactics for  your digital journey." },
    { icon: technology2, label: "It’s All About Technology", desc: "24*7 support from our expertise to your business." },
    { icon: service, label: "Assured Services", desc: "We are always at the top in terms of client satisfaction." },

]
function WhyChooseUs() {
    return (
        <main className='bg-gray-100'>
            <section className='max-w-screen-xl mx-auto py-8 md:py-14 px-3 xl:px-0'>
                <H1>Why Choose Us</H1>
                <ul className="mt-10 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-2 xl:grid-cols-4">
                    {whyChooseUs?.map((item, i) => (
                        <li className="rounded-xl bg-white px-6 py-8 shadow-sm" key={i}>
                            <div>
                                <img src={item?.icon} alt={item?.label} className="mx-auto size-20 border-2 border-blue-400 p-2 rounded-full" />
                            </div>
                            <h3 className="my-3 font-axiBold text-lg font-medium">{item?.label}</h3>
                            <p className="mt-1.5 text-base leading-6 font-axiforma">
                                {item?.desc}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default WhyChooseUs