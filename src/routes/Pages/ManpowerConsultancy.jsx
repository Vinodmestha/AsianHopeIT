import React from 'react'
import { Desc, H1, H3 } from '../../Components/Typography'

const data = [
    { title: "Excellent manpower services in bangalore", desc: "Whether you are looking for an experienced leader or a skilled junior worker, a focused approach to recruitment is imperative. AsianHope IT, a trusted manpower consultancy in Bangalore, helps you find ideal, knowledgeable, skilled, and diligent recruits that are the right cultural fit. Hire us today to give your business a boost with our manpower solutions." },
    { title: "Manpower solutions like none other", desc: "A company’s success rests on the calibre of its workforce. Indeed, your human resources make or break your business. AsiaHope IT assists you in growing your business with an excellent talent pool, made possible by our unique manpower consultancy methods. Feel the difference with access to unmatched manpower services in Bangalore." },
    { title: "Staffing made easier", desc: "With AsianHope IT, the leading manpower consultancy in Bangalore, you can say goodbye to scanning through hundreds of applications and conducting innumerable interviews. Save time on recurring tasks with our recruitment expertise. With cutting-edge manpower solutions and a strong database of talent, your organization gets the best. Connect with AsianHope IT today and feel the difference." },
    { title: "Grow your team with AsianHope IT", desc: " Your business needs a competent team to reach its goals. And when it comes to choosing the right human resources, we understand recruitment like none other. Combining technology with the human touch, we offer targeted staffing services for organizations of every scale. Bring out the best in your business by partnering with AsianHope IT leading manpower solutions in Bangalore." },
]
export default function ManpowerConsultancy() {
    return (
        <main className='bg-gray-5'>
            <section className='max-w-screen-xl mx-auto py-10 md:py-20 px-3 xl:px-0'>
                <div className='text-center mb-12'>
                    <H1>Manpower Consultancy</H1>
                    <div className='flex mt-8 sm:mt-10'>
                        <Desc className=''>
                            In India’s very own Silicon Valley, hiring the right personnel demands a focused approach and a strong network. With over 10 years of manpower consultancy experience and a strong network of candidates, Manpower Consultancy assists you in finding the best fit for your organization. Join hands with us and end your recruitment woes with the best manpower agency in Bangalore.
                        </Desc>
                    </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-10'>
                    {data?.map((item, i) => (
                        <div key={i} className='bg-gray-50 shadow-sm rounded-lg px-5 py-10 border'>
                            <H3>{item?.title}</H3>
                            <p className='mt-5 font-axiforma text-gray-700 sm:px-3 leading-8'>{item?.desc}</p>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    )
}
