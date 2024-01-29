import React from 'react'
import bpo from "../assets/service/bpo.jpg"
import software from "../assets/service/software-design.jpg"
const otherServices = [
    { icon: bpo, label: "SOLAR PRODUCTS ", desc: "AsianHope IT C in its quest to contribute in harnessing the green energy has a wide spectrum of solar-energy based equipment  from panels, lights, chargers, fan, lamp, street light and many more.", value: "80%", desc2: "of the cost of Solar Panels has been dropped since 2018." },
    { icon: software, label: "IT PRODUCTS", desc: "AsianHope IT C leads the way in supplying IT equipment to government agencies across the state. Biometrics, Printers, Desktops, Laptops  etc., have been the major share holders in the foothold of AsianHope IT C in government sector", value: "95.4%", desc2: "of Indian Institutions using digital examinations as per Speedlabs.in " },

]
function OtherServices() {
    return (
        <main className='bg-gray-100'>
            <section className='max-w-screen-xl mx-auto py-8 md:py-14 px-3 xl:px-0'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl tracking-wide font-bold mb-5'>Other Services</h1>
                    <p className='text-[17px] font- text-gray-500 px-3 sm:px-14'>
                        AsianHope IT C is also prime in the industry in implementing Solar and IT related projects
                        with respect to public and private sector. Our premium service in installing and
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
                                className="p-4 flex flex-col items-center text-center rounded-xl  bg-white"
                            >
                                <div className='w-32 h-32 mb-4'>
                                    <img
                                        src={item?.icon}
                                        alt={item?.label}
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <h4 className="mb-2 text-xl font-bold">{item?.label}</h4>
                                <p className="text-gray-500 font-[500]">{item?.desc}</p>
                                <div className='flex items-center '>
                                    <h3 className='text-5xl my-3 font-bold text-[#03045e] '>{item?.value}</h3>
                                    <p className='pl-5 text-left'>{item?.desc2}</p>
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