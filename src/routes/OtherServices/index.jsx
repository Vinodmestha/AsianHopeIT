import React from 'react'
import { useNavigate } from 'react-router-dom'
import { otherServices } from '../../db/json'

import BackTo from '../../Components/BackTo'
import { H1 } from '../../Components/Typography'
import Container from '../../Components/Container'

export default function OtherServices() {
    const navigate = useNavigate()
    return (
        <div>
            <main className='bg-gray-100'>
                <Container>
                    <BackTo backTo={() => navigate("/")} title={"Other Services"} />
                    <div className='py-20 md:py-32'>
                        <H1 className='text-center text-4xl font-semibold font-axiforma tracking-wide'>Our services and unique products.</H1>
                        <p className='font-axiforma text-center pt-5 font-medium'>Here you can find out quickly and concisely which services Asian IT Company offers you.</p>
                    </div>
                </Container>
            </main >
            <Container>
                <div className="grid grid-cols-1 gap-5 sm:gap-8 py-10">
                    {otherServices?.map((item, i) => (
                        <div
                            key={i}
                            className="sm:p-4 flex flex-col-reverse items-center text-center rounded-xl  bg-white"
                        >
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
                                {item?.images?.map((chilItem, index) => (
                                    <div className='w-full h-full mb-5 mx-auto' key={index}>
                                        <img
                                            src={chilItem}
                                            alt={item?.label}
                                            className="w-full h-full rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='px-5 py-4'>
                                <h4 className="mb-3 text-2xl font-bold font-axiBold text-[#03045e]">{item?.label}</h4>
                                <p className="text-gray-500 font-axiMedium text-center">{item?.desc}</p>
                                <div className='mt-4'>
                                    <h3 className='text-5xl my-3 font-bold font-axiBold text-[#03045e]'>{item?.value}</h3>
                                    <p className='sm:pl-5 text-center font-axiforma text-gray-400'>{item?.desc2}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
