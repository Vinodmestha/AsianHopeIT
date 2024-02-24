import bpo from "../assets/service/bpo.jpg"
import software from "../assets/service/software-design.jpg"
import eGovernance from "../assets/service/e-governance.jpg"
import dataManage from "../assets/service/data-management.jpg"
import trainingResource from "../assets/service/resource-training.jpg"
import business from "../assets/service/business-consulting.jpg"

// Other services
import solar1 from "../assets/Image/solar1.jpeg"
import solar2 from "../assets/Image/solar2.jpeg"
import solar3 from "../assets/Image/solar3.jpeg"
import solar4 from "../assets/Image/solar4.jpeg"
import it1 from "../assets/Image/it1.jpeg"
import it3 from "../assets/Image/it3.jpeg"
import it4 from "../assets/Image/it4.jpeg"
import it5 from "../assets/Image/it5.jpeg"
import it6 from "../assets/Image/it6.webp"
import it7 from "../assets/Image/it7.jpeg"
import it8 from "../assets/Image/it8.jpeg"
import it9 from "../assets/Image/it9.jpeg"
import { api, b2b, b2c, bcs, bos, bpo2, dms, ehs, gds, lds, wad, wds, whs, wms, wsc } from "../assets"
// import software from "../assets/service/software-design.jpg"

export const ourService = [
    { icon: bpo, label: "BPO Services", desc: "For Outstanding Business Inbound and outbound process." },
    { icon: software, label: "Software Development And Design", desc: "Tailored software development to provide varied specialized IT and ITeS services the e- governance and IT modernization programs in India." },
    { icon: eGovernance, label: "E-Governance", desc: "To provide software services in the  following areas end-to-end solutions." },
    { icon: dataManage, label: "Data Management and Services", desc: "For secure, reliable and hassle-free data management service." },
    { icon: business, label: "Business Consulting Services", desc: "From Inception to Execution including all level tasks across diverse departments." },
    { icon: trainingResource, label: "Resource Argumentation & Training Resources", desc: "Sourcing and Training of the workforce in Corporate environment" }
]

export const services = [
    {
        label: "IT Services",
        slug: "it",
        desc: "IT services refers to the application of business and technical expertise to enable organizations in the creation, management and optimization of or access to information and business processes. The IT services market can be segmented by the type of skills that are employed to deliver the service (design, build, run).",
        data: [
            { img: wds, heading: "Website Designing Service", desc: "TradeHolders Software Services also offers professional website maintenance across India." },
            { img: wms, heading: "Website Maintenance Service", desc: "TradeHolders Software Services offers best website maintenance service in India." },
            { img: whs, heading: "Website Hosting Service", desc: "Web Hosting means, when a hosting provider allocates space on a web server for a website to store its files, they are hosting a website." },
            { img: wad, heading: "Web Application Development", desc: "Web application development is the creation of application programs that reside on remote servers and are delivered to the users device over the Internet." },
            { img: dms, heading: "Digital Marketing Service", desc: "Digital Marketing Services are professional services that help market or advertise your business online through search engine search, social media, and paid channels." },
            { img: wms, heading: "Website Modification Service", desc: "TradeHolders Software Services offers best website modification service in India.            " },
            { img: api, heading: "API Integration Service", desc: "An API(Application Programming Interface) is a set of programming code that enables data transmission between one software product and another." },
            { img: ehs, heading: "Email Hosting Service", desc: "Email hosting is a service in which a hosting provider rents out email servers to its users." },
            { img: gds, heading: "Graphics Designing Service", desc: "Graphic design is the process of creating visual content in form of pictures, illustrations, typography, icons, photos, etc." },
            { img: lds, heading: "Logo Designing Service", desc: "Logo facilitates brand recognition, Let's think about some of the iconic brands you remember at the moment you see their logo, the entire brand or company name as well as their history comes into mind." },
            { img: wsc, heading: "Website SSL Certificate", desc: "SSL (Secure Sockets Layer) is the standard security technology for establishing an encrypted link between a web server and a browser.            " },
            { img: b2b, heading: "B2B Website Development", desc: "Business-to-Business (B2B), also called B-to-B, is a form of transaction between businesses, such as one involving a manufacturer and wholesaler, or a wholesaler and a retailer." },
            { img: b2c, heading: "B2C Website Development", desc: "TradeHolders Software Services also offers B2C Website Development services." },
        ]
    },
    {
        label: "Non IT Services",
        slug: "non-it",
        desc: "There are also different type of Non IT Services: business process services, application services and infrastructure services. If these services are outsourced, they are referred to as business process outsourcing (BPO), business consulting services, applications outsourcing (AO) and infrastructure outsourcing etc.",
        data: [
            { img: bos, heading: "Business Outsourcing Service", desc: "Outsourcing is the business practice of hiring a party outside a company to perform services and create goods that traditionally were performed in-house by the companies own employees and staff." },
            { img: bpo2, heading: "Business Process Outsourcing", desc: "Business Process Outsourcing, or BPO, refers to the process of contracting standard business functions to be handled by a party outside of the company." },
            { img: bcs, heading: "Business Consulting Services", desc: "Business consultants provide Management Consulting to help organizations improve their performance and efficiency." },
        ]
    }
]

export const otherServices = [
    { icon: solar1, images: [solar1, solar2, solar3, solar4], label: "SOLAR PRODUCTS ", desc: "AsianHope IT C in its quest to contribute in harnessing the green energy has a wide spectrum of solar-energy based equipment  from panels, lights, chargers, fan, lamp, street light and many more.", value: "80%", desc2: "of the cost of Solar Panels has been dropped since 2018." },
    { icon: software, images: [it7, it8, it9, it1, it3, it4, it5, it6], label: "IT PRODUCTS", desc: "AsianHope IT C leads the way in supplying IT equipment to government agencies across the state. Biometrics, Printers, Desktops, Laptops  etc., have been the major share holders in the foothold of AsianHope IT C in government sector", value: "95.4%", desc2: "of Indian Institutions using digital examinations as per Speedlabs.in " },

]