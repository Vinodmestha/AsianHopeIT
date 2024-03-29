import React from 'react'

import { H1 } from '../../Components/Typography'
import { ourService } from '../../db/json'

function Service() {
    return (
        <main className='bg-gray-100 dark:bg-darkPrimary'>
            <section className='max-w-screen-xl mx-auto py-10 md:py-20 px-3 xl:px-0'>
                <div className='text-center mb-12'>
                    <H1>All the services that we provide</H1>
                    <p className='mt-14 leading-7 font-axiforma text-gray-500 dark:text-gray-400 px-3 sm:px-14'>We can meet you anywhere in your journey with a
                        unique plan that changes and grows with you,
                        from full implementation to strategic advisory and
                        program management.
                        Our diverse team, from data scientists to industry
                        experts, across finance, retail, hospitality and
                        technology, has decades of industry expertise. Our
                        best practices and proven methods will set you up
                        to continuously innovate and improve.
                    </p>

                </div>
                {/* <hr className='border-[#ffc300]' /> */}
                <div className='pt-5'>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {ourService?.map((item, i) => (
                            <div
                                key={i}
                                className="p-4 flex flex-col items-center text-center transition-all shadow-xl rounded-xl border-2 hover:scale-105 md:bg-white"
                            >
                                <div className='sm:w-full w-full sm:h-40 md:h-48 lg:h-56 mb-5'>
                                    <img
                                        src={item?.icon}
                                        alt={item?.label}
                                        className="w-full h-full rounded-lg"
                                    />
                                </div>
                                <h4 className="mb-3 text-lg font-axiforma font-bold">{item?.label}</h4>
                                <p className="text-gray-500 font-axiforma">{item?.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-gray-600 font-semibold font-axiforma text-center bg-green-200 p-8 rounded-xl shadow-lg mt-5 sm:mt-10'>
                        Our focused offerings to support
                        you through each stage of your
                        journey - from pilot to
                        production. From out of the box
                        offerings to customized
                        packages, SmartServices are
                        designed for you to realize the
                        value of your investment
                        quickly, painlessly, at a lower
                        cost and with peak performance.
                    </p>
                </div>

            </section>
        </main>
    )
}

export default Service