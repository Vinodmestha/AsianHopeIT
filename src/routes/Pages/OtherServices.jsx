import React, { useState } from 'react'

import { H1 } from '../../Components/Typography'
import { otherServices, services } from '../../db/json'


function OtherServices() {
    const [state, setState] = useState({
        active: "it",
        activeItem: services[0]
    })
    return (
        <main className='bg-gray-100 dark:bg-darkPrimary'>
            <section className='max-w-screen-xl mx-auto py-10 md:py-20 px-3 xl:px-0'>
                <div className='text-center mb-12'>
                    <H1>Other Services</H1>
                    <p className='font-axiforma text-gray-700 dark:text-gray-400 px-3 sm:px-14 mt-10'>
                        AsianHope IT C is also prime in the industry in implementing Solar and IT related projects
                        with respect to public and private sector.<br /> Our premium service in installing and
                        maintenance of IT and Solar equipments has been lauded by the sector.
                        <br />
                        <br />
                        With the experienced and seasoned professionals delivering the services, AsianHope IT C has
                        been able to cater to the requirements across organisations and domains.
                    </p>
                </div>

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
                            <h4 className="mb-3 text-xl font-bold font-axiBold text-primary2">{item?.label}</h4>
                            <p className="text-gray-500 font-axiMedium text-justify">{item?.desc}</p>
                            <div className='flex items-center mt-4'>
                                <h3 className='text-5xl my-3 font-bold font-axiBold text-primary2'>{item?.value}</h3>
                                <p className='pl-5 text-left font-axiforma text-gray-400'>{item?.desc2}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='pt-20'>
                    <div className='flex gap-3 lg:w-1/2 sm:w-4/5 mx-auto pt-10'>
                        {services?.map((item, i) => (
                            <button key={i}
                                className={`w-full px-5 py-2.5 text-lg rounded-lg font-axiforma border ${state.active === item?.slug ? "bg-blue-500 text-white" : "dark:text-white"}`}
                                onClick={() => {
                                    setState((prev) => {
                                        return {
                                            ...prev,
                                            active: item?.slug,
                                            activeItem: item
                                        }
                                    })
                                }}>{item?.label}</button>
                        ))}
                    </div>
                    <div className='py-14 font-axiforma text-center'>
                        <H1 className='pb-10'>{state?.activeItem?.label}</H1>
                        <p className='dark:text-gray-400'>{state.activeItem?.desc}</p>
                    </div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5'>
                        {state.activeItem?.data?.map((item, i) => (
                            <div key={i} className='bg-white rounded-lg font-axiforma'>
                                <div>
                                    <img src={item?.img} alt={item?.heading} className='rounded-t-lg' />
                                </div>
                                <div className='px-4 py-5'>
                                    <h5 className='text-xl pb-3 font-semibold pt-3 text-primary'>{item?.heading}</h5>
                                    <p className='text-gray-500'>{item?.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </main >
    )
}

export default OtherServices