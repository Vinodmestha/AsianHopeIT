import React from 'react'
import Container from '../../Components/Container'
import { H1 } from '../../Components/Typography'
import BackTo from '../../Components/BackTo'
import { useNavigate } from 'react-router-dom'
import Service from '../Pages/Service'
import { ourService } from '../../db/json'

export default function Hero() {
    const navigate = useNavigate()
    return (
        <div>

            <main className='bg-gray-100'>
                <Container>
                    <BackTo backTo={() => navigate("/")} title={"Services"} />
                    <div className='py-20 md:py-32'>
                        <H1 className='text-center text-4xl font-semibold font-axiforma tracking-wide'>Our services and unique products.</H1>
                        <p className='font-axiforma text-center pt-5 font-medium'>Here you can find out quickly and concisely which services Asian IT Company offers you.</p>
                    </div>
                </Container>
            </main >
            <Container>
                <div className='grid gap-10 max-w-screen-lg mx-auto my-20'>
                    {ourService?.map((item, i) => (
                        <div
                            key={i}
                            className="p-4 grid sm:grid-cols-2 grid-cols-1  items-start text-center transition-all shadow-xl rounded-xl md:bg-[# ]"
                        >
                            <div className='sm:w-full w-full sm:h-40 md:h-48 lg:h-64 mb-5'>
                                <img
                                    src={item?.icon}
                                    alt={item?.label}
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                            <div className='sm:mt-10 mt-5 sm:px-5'>
                                <h4 className="mb-3 text-xl font-axiforma font-bold">{item?.label}</h4>
                                <p className="text-gray-500 font-axiforma">{item?.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
