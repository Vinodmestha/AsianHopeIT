import React from 'react'
import bpo from "../../assets/service/bpo.jpg"
import software from "../../assets/service/software-design.jpg"
import { H1 } from '../../Components/Typography'

const otherServices = [
    { icon: bpo, label: "SOLAR PRODUCTS ", desc: "AsianHope IT C in its quest to contribute in harnessing the green energy has a wide spectrum of solar-energy based equipment  from panels, lights, chargers, fan, lamp, street light and many more.", value: "80%", desc2: "of the cost of Solar Panels has been dropped since 2018." },
    { icon: software, label: "IT PRODUCTS", desc: "AsianHope IT C leads the way in supplying IT equipment to government agencies across the state. Biometrics, Printers, Desktops, Laptops  etc., have been the major share holders in the foothold of AsianHope IT C in government sector", value: "95.4%", desc2: "of Indian Institutions using digital examinations as per Speedlabs.in " },

]
function OtherServices() {
    return (
        <main className='bg-gray-100'>
            <section className='max-w-screen-xl mx-auto py-10 md:py-20 px-3 xl:px-0'>
                <div className='text-center mb-12'>
                    <H1>Other Services</H1>
                    <p className='font-axiforma text-gray-700 px-3 sm:px-14 mt-10'>
                        AsianHope IT C is also prime in the industry in implementing Solar and IT related projects
                        with respect to public and private sector.<br /> Our premium service in installing and
                        maintenance of IT and Solar equipment has been lauded by the sector.
                        <br />
                        <br />
                        With the experienced and seasoned professionals delivering the service, AsianHope IT C has
                        been able to cater to the requirements across organisations and domains
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                        {otherServices?.map((item, i) => (
                            <div
                                key={i}
                                className="p-4 grid flex-col items-center text-center rounded-xl  bg-white"
                            >
                                <div className='w-32 h-32 mb-5 mx-auto'>
                                    <img
                                        src={item?.icon}
                                        alt={item?.label}
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <h4 className="mb-3 text-xl font-bold font-axiBold text-[#03045e]">{item?.label}</h4>
                                <p className="text-gray-500 font-axiMedium">{item?.desc}</p>
                                <div className='flex items-center mt-4'>
                                    <h3 className='text-5xl my-3 font-bold font-axiBold text-[#03045e]'>{item?.value}</h3>
                                    <p className='pl-5 text-left font-axiforma text-gray-400'>{item?.desc2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OtherServices