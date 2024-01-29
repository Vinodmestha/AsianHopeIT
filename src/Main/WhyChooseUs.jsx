import React from 'react'
import bpo from "../assets/service/bpo.jpg"
import software from "../assets/service/software-design.jpg"
import { H1 } from '../Components/Typography'
const whyChooseUs = [
    { icon: bpo, label: "Statewide Clients", desc: "We are trusted by 40+ clients from statewide." },
    { icon: software, label: "Next-Gen Technology Provider", desc: "Lifetime provider of uttermost tactics for  your digital journey." },
    { icon: software, label: "It’s All About Technology", desc: "24*7 support from our expertise to your business." },

]
function WhyChooseUs() {
    return (
        <main className='bg-gray-100'>
            <section className='max-w-screen-xl mx-auto py-8 md:py-14 px-3 xl:px-0'>
                <H1> Why Choose Us </H1>
                <ul className="mt-10 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                    {whyChooseUs?.map((item, i) => (
                        <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
                            <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt={item?.label} className="mx-auto h-10 w-10" />
                            <h3 className="my-3 font-axiBold text-lg font-medium">Powered by ChatGPT</h3>
                            <p className="mt-1.5 text-base leading-6 font-axiforma">
                                {item?.desc}
                            </p>
                        </li>
                    ))}
                </ul>
                {/* </div> */}

            </section>
        </main>
    )
}

export default WhyChooseUs