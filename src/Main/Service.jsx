import React from 'react'
import bpo from "../assets/service/bpo.jpg"
const ourService = [
    { icon: bpo, label: "BPO Services", desc: "For Outstanding Business Inbound and outbound process." },
    { icon: bpo, label: "Software Development And Design", desc: "Tailored software development to provide varied specialized IT and ITeS services the e- governance and IT modernization programs in India." },
    { icon: bpo, label: "E-Governance", desc: "To provide software services in the  following areas end-to-end solutions." },
    { icon: bpo, label: "Data Management and Services", desc: "For secure, reliable and hassle-free data management service." },
    { icon: bpo, label: "Business Consulting Services", desc: "From Inception to Execution including all level tasks across diverse departments." },
    { icon: bpo, label: "Resource Argumentation & Training Resources", desc: "Sourcing and Training of the workforce in Corporate environment" }
]
function Service() {
    return (
        <main className='bg-gray-100'>
            <section className='max-w-screen-xl mx-auto py-8 md:py-14 px-3 xl:px-0'>
                <div className='text-center'>
                    <h1 className='text-4xl tracking-wide font-bold mb-5'>All the services that we provide</h1>
                    <p className='text-[17px] font- text-gray-500 px-14'>We can meet you anywhere in your journey with a
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
                <div className='bg-white p-5 lg:p-10 rounded-xl mt-10'>
                    <p className='text-teal-800 font-semibold text-lg mt-4 mb-10 text-center'>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {ourService?.map((item, i) => (
                            <div
                                key={i}
                                className="p-4 flex flex-col items-center text-center transition-all rounded-xl hover:scale-105 bg-[#F2F1FD]"
                            >
                                <div className='w-20 h-20 mb-4'>
                                    <img
                                        src={item?.icon}
                                        alt={item?.label}
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <h4 className="mb-2 text-lg font-semibold">{item?.label}</h4>
                                <p className="text-gray-500">{item?.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Service