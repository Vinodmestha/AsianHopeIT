import React from 'react'
import takshila from "../../assets/Image/takshila.png"
import { H1 } from '../../Components/Typography'

const tdvsData = [
    { desc: "Easy to maintain the answer booklets securely." },
    { desc: "Easy to access all the answer booklets whenever required by the authorized users." },
    { desc: "Valuation process will be simplified." },
    { desc: "Error during the tabulation will be minimized to almost zero." },
    { desc: "Manual valuation billing and payment will be eliminated and system will generate the  bills based on the rules and regulations given by the university." },
    { desc: "Logistics problems such as issuing the answer books to evaluators, receive back after evaluation, storing answer booklets, pulling required answer books for Re- valuation / Re-totalling / Challenge Valuation / Photocopy will be reduced." },
    { desc: "Analysis of the valuation process. Hundreds of reports/ analysis graphs can be generated during and after evaluation." },
]
export default function Takshila() {
    return (
        <section>
            <div className='max-w-screen-xl mx-auto py-10 md:py-20 px-3 xl:px-0'>
                <div className='text-center'>
                    <div className='pt-5 pb-10'>
                        <H1>TAKSHILA</H1>
                        <h5 className='text-xl font-axiforma pt-3'>DIGITAL VALUATION SYSTEM</h5>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 pt-16'>
                            <div>
                                <p className='text-justify leading-7 font-axiforma text-gray-500 px-3 sm:px-14'>We can meet you anywhere in your journey with a
                                    Growing activities of examinations and
                                    the management of huge volume of
                                    answer books during and after the
                                    conventional evaluation process have
                                    increased risk of answer booklet
                                    misplacement, tabulation errors and
                                    other factors which are affecting the
                                    results, eventually delaying the next
                                    examination activities.
                                    <br />
                                    <br />
                                    With Takshila Digital Evaluation System,
                                    institutions are able to digitize the
                                    evaluation process and improve the
                                    quality and speed of tabulation
                                    process and hence processing the
                                    students results at the earliest with high
                                    rate of accuracy in short period of time.
                                </p>
                                <p className='text-hover text-3xl pt-10'>
                                    DIGITIZE,  DEVICE & DELIVER
                                </p>
                            </div>
                            <div>
                                <img src={takshila} alt="takshila" />
                            </div>
                        </div>
                    </div>
                    <div className='md:py-20 py-10'>
                        <H1 className="md:pb-10">ADVANTAGES OF TDVS</H1>
                        <div className="grid grid-cols-1 md:gap-10 gap-6 md:grid-cols-2 pt-10">
                            {tdvsData?.map((item, i) => (
                                <div
                                    className={`grid grid-cols-[.1fr_1fr] gap-6 bg-gray-100 rounded-r-2xl h- shadow-2xl font-axiforma ${item?.className}`}
                                    key={i}
                                >
                                    <div className="rounded-r-full w-10 bg-[#00b4d8]"></div>
                                    <div className="flex flex-col text-justify py-10 px-3">
                                        {/* <h5 className="text-">{item?.label}</h5> */}
                                        <p className="text-gray-500 !text-base font-semibold">
                                            {item?.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
