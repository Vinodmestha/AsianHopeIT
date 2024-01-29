import React from 'react'
import img from "../assets/service/bpo.jpg"
import construction from "../assets/images.png"
import management from "../assets/management.svg"
import repair from "../assets/repair.png"
import manpower from "../assets/manpower.jpg"
import itEnabled from "../assets/it-enabled.jpg"

const contract = [
    { image: construction, label: "Construction" },
    { image: management, label: "Management" },
    { image: repair, label: "Repair &  Maintenance" },
    { image: manpower, label: "Manpower Supply " },
    { image: itEnabled, label: "IT Enabled & Related " },
]
function Contract() {
    return (
        <main className='bg-[#001f54]'>
            <section className='max-w-screen-xl mx-auto py-6 md:py-10 px-3 xl:px-0'>
                <p className='text-white text-lg text-center font-axiMedium'>Asianhope IT C is actively participating in the Central and State Government contracts  </p>
                <div className='overflow-x-scroll whitespace-nowrap w-full'>
                    <div className='flex md:grid grid-cols-5 gap-10 mt-8'>
                        {contract?.map((item, i) => (
                            <div key={i} className='w-32'>
                                <div className='flex justify-center'>
                                    <div className='w-20 h-20 rounded-full'>
                                        <img src={item?.image} alt="img" className='w-full h-full p-2 bg-white rounded-full' />
                                    </div>
                                </div>
                                <h3 className='text-center text-white my-2 font-axiSemiBold'>{item?.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contract