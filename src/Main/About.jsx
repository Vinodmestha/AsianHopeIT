import React from 'react'
import itCompany from "../assets/about/it-company.jpg"
import manageTeam from "../assets/about/manage-team.jpg"
import lap from "../assets/about/lap.jpg"
const about = [
    { image: itCompany, desc: "We are the leading IT solution company with its inception in 2010, aims to work in the areas of  project/program management and execution in  the varied IT services space, IT-enabled services, specialized domain/vertical-centric resource  augmentation services across India and overseas. ASIANHOPE IT C aims to found another group of companies with diversified services portfolios in the near future." },
    { image: manageTeam, desc: "ASIANHOPE IT C management team consists of senior industry experts that have had rich experience in these functional areas for more than 12  years, worked with various renowned global  organizations, and then created the organizational  group in recent times." },
    { image: lap, desc: "ASIANHOPE IT C management aims to work in collaborative mode with large system integrators across  the country, and abroad in specialized staffing services, software project plans to take up turnkey projects as system integrators wherein it will do the overall program management through a consortium." },

]
function About() {
    return (
        <main className='bg-gray-50'>
            <section className='max-w-screen-xl mx-auto py-10 md:py-20 px-3 xl:px-0'>
                <h1 className='text-4xl tracking-wide font-bold mb-5 text-center'>About Us</h1>
                <div className="grid grid-cols-1 gap-5 lg:gap-12 pt-10">
                    {about?.map((item, i) => (
                        <div key={i} className='md:flex gap-10' dir={i % 2 ? "ltr" : "rtl"}>
                            <div className=' md:w-1/2 h-[250px] sm:h-[300px] lg:h-[350px]' >
                                <img src={item?.image} alt="about" className='w-full h-full rounded-xl' />
                            </div>
                            <div className='md:w-1/2 flex items-center mt-5 md:mt-0'>
                                <p className='text-left font-medium text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 md:leading-9'>{item?.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default About