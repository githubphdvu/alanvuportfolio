import {useState,useRef,useEffect,createElement} from "react"
import Modal from "react-modal"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import Aos from "aos"
import "aos/dist/aos.css"

import { HiMenuAlt2 } from "react-icons/hi"
import { FaHome } from "react-icons/fa"
import { GiSkills } from "react-icons/gi"
import { FaHandshake } from "react-icons/fa"
import { SiSmartthings } from "react-icons/si"
import { RiAwardFill } from "react-icons/ri"
import { GiWantedReward } from "react-icons/gi"

import { MdContactPhone } from "react-icons/md"
import { GrMail } from "react-icons/gr"
import { MdCall } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
/////////////////////////////////
const NAVICONS=[
  {
    link: "#home",
    icon: FaHome,
  },
  {
    link: "#skills",
    icon: GiSkills,
  },
  {
    link: "#services",
    icon: FaHandshake,
  },
  {
    link: "#projects",
    icon: SiSmartthings,
  },
  {
    link: "#testimonials",
    icon: RiAwardFill,
  },
  {
    link: "#hireme",
    icon: GiWantedReward,
  },
  {
    link: "#contact",
    icon: MdContactPhone,
  }
]
const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [active, setActive] = useState(0)
  return (
    <div id="home" className="flex">
      <a href="https://projectsav.netlify.app"><img src="https://projectsav.netlify.app/logo1.jpg" alt="" className="h-16 rounded-md m-2"/></a>
      <div className="w-full flex justify-center items-center">
        <div className="sm:cursor-pointer fixed top-2 -left-auto z-[99] rounded-lg bg-fuchsia-500" onClick={()=>setShowMenu(!showMenu)}>
          <HiMenuAlt2 size={60}/>
        </div>
        <nav
          className={`fixed z-[99] flex items-center gap-5 bg-fuchsia-500 px-6 py-3 backdrop-blur-md rounded-full text-white duration-300 ${showMenu ? "top-20" : "top-[-100%]"}`}>
          {NAVICONS.map((item, i) => (
            <a href={item.link} onClick={()=>setActive(i)} key={i} className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${i === active && "bg-white text-fuchsia-500"} `}>
              {createElement(item.icon)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
/////////////////////////////////
const HEROCONTENT=[
  {count:"3+ years",text:"of experience in Web development"},
  {count:"70+ projects",text:"worked in my career"}
]
const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        
        <div data-aos="slide-up" data-aos-delay="100" className="absolute h-full md:w-4/12 w-1/2 top-0 right-0 bg-yellow-500 bottom-0 -z-10">
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-white">ALAN{" "}<span className="text-text_dark_primary">VU</span></h1>
        </div>
        <div className="md:h-[37rem] h-96">{/*1st col*/}
          <img src='alan.png' data-aos="slide-right" alt='' className="h-full object-cover"/>
        </div>
        <div className="pb-16 px-6 pt-5" data-aos="fade-right">{/* 2nd col*/}
          <h2>Software Engineer</h2>
          <div className="flex flex-col gap-10 mt-10">
            {HEROCONTENT.map((content, i) => (
              <div key={i} data-aos="fade-down" data-aos-delay={i * 300} className={`flex items-center w-80 gap-5 ${i === 1 && "flex-row-reverse text-right"}`}>
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>))}
          </div>
        </div>

      </div>
    </section>
  )
}
/////////////////////////////////
Modal.setAppElement("#root")
const SKILLS=[
  {
    name: "React js",
    para: "Front-end JavaScript library for building user interfaces based on UI components",
    logo: 'reactjs.png',
  },
  {
    name: "Node js",
    para: "Back-end JavaScript runtime environment & library for running web apps outside client's browser",
    logo: 'nodejs.png',
  },
  {
    name: "Python",
    para: "An interpreted, object-oriented programming language with dynamic semantics",
    logo: 'python.png',
  },      
  {
    name: "Adobe Photoshop",
    para: "image creation, graphic design and photo editing software developed by Adobe",
    logo: 'ps.png',
  },
  {
    name: "Figma",
    para: "cloud-based design tool, similar to Sketch, but with for team collaboration.",
    logo: 'figma.png',
  },      
  {
    name: "Sketch",
    para: "Vector graphics app by Apple",
    logo: 'sketch.png',
  }
]
const Skills = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectSkill, setSelectSkill] = useState(null)
  function openModal() {setIsOpen(true)}
  function closeModal() {setIsOpen(false)}
  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%,-50%)",maxWidth:"23rem",width:"90%"},overlay:{padding:"2rem"}}}>
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt=''/>
          <h6>{selectSkill?.name}</h6>
        </div>
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>List item1</li>
          <li>List item2</li>
        </ul>
        <div className="flex justify-end"><button onClick={closeModal} className="btn">Close</button></div>
      </Modal>
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">My skills</h2>
        <h4 className="subtitle" data-aos="fade-down">MY TOP SKILLS</h4>
        <div className="flex flex-wrap gap-4 justify-center">
          {SKILLS.map((skill, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 300} className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
              <div><img src={skill.logo} alt='' className="w-10 group-hover:scale-125 duration-200"/></div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div onClick={()=>{setSelectSkill(skill);openModal()}} className="text-xl absolute top-3 right-3">➡️</div>
              </div>
            </div>
          ))}          
        </div>
      </div>
    </section>
  )
}
/////////////////////////////////
const SERVICES=[
  { title: "Web Development",
    para: "High-Quality, comprehensive, E-commerce, SEO Optimized, CMS-Based. Web Support+Maintenance Service.Mobile-Friendly Website Design.",
    logo: 'logo1.png',
  },
  { title: "UI / UX Designing",
    para: "Make product/service usable, enjoyable, accessible for customers by focusing on content, controls, visual design, information architecture, user research, branding, and customer/technical support.",
    logo: 'logo2.png',
  },
  { title: "Digital Photo Editing",
    para: "Knowledge of digital photo editing softwares and techniques. Creativity and artistic mindset.",
    logo: 'logo3.png',
  }
]
const Services = () => {
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">My services</h2>
        <h4 className="subtitle" data-aos="fade-down">WHAT I OFFER</h4>
        <div className="flex gap-5 justify-between flex-wrap group">
          {SERVICES.map((content, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 600} className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none">
              <img src={content.logo} alt='' className="mx-auto" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/////////////////////////////////
const PROJECTS=[
  {
    title: "LeadCoder",
    image: 'https://leadcoder.vercel.app/leadcoder.jpg',
    link: 'https://leadcoder.vercel.app/'
  },
  {
    title: "Gamely",
    image: 'https://gamelyfrontend.netlify.app/favicon.ico',
    link: 'https://gamelyfrontend.netlify.app/'
  },
  {
    title: "Warbler",
    image: 'https://warblerapp-z4gf.onrender.com/static/images/warbler.jpg',
    link: 'https://warblerapp-z4gf.onrender.com/'
  }
]
const Projects = () => {
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">

        <div>
          <h2 className="title" data-aos="fade-down">My projects</h2>
          <h4 className="subtitle" data-aos="fade-down">Projects highlight</h4>
        </div>

        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">

          <img src='Alan1.png' alt='' data-aos="fade-left" className="max-w-[45vw] min-w-[22rem]"/>

          <Swiper
            pagination={{clickable: true}}
            data-aos="fade-right"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {PROJECTS.map((content, i) => (
              <SwiperSlide key={i} className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
                <a href={content.link}><img src={content.image} alt=''/></a>
                
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                </div>
              </SwiperSlide>))}
          </Swiper>

        </div>
      </div>
    </section>
  )
}
/////////////////////////////////
const TESTIMONIALS=[
  {
    review:
      "“Having excellent problem-solving skills”",
    img: 'avatar1.jpg',
    name: "Mary N.",
  },
  {
    review:
      "“Solid technical expertise.”",
    img: 'avatar2.jpg',
    name: "Jane L.",
  },
  {
    review:
      "“can-do attitude”",
    img: 'avatar3.jpg',
    name: "Rose K.",
  },
  {
    review:
      "“ability to adapt to new technologies”",
    img: 'avatar4.jpg',
    name: "Lisa H.",
  },
]
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="testimonials">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">Testimonials</h2>
        <h4 className="subtitle" data-aos="fade-down">What others say</h4>
        <Swiper
          direction={"vertical"}
          pagination={{clickable: true}}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={e=>{setActiveIndex(e.realIndex)}}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {TESTIMONIALS.map((content, i) => (
            <SwiperSlide key={i}>
              <div className={`duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex items-center gap-6 
                              border-slate-200 md:flex-row flex-col ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt='' className="h-24" />
                <div><p className="sm:text-base text-sm">{content.review}</p><h6>{content.name}</h6></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
/////////////////////////////////
/////////////////////////////////
const HireMe = () => {
  return (
    <section id='hireme' className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">Hire Me</h2>
        <h4 className="subtitle" data-aos="fade-down">FOR YOUR PROJECTS</h4>
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img src='Alan2.png' alt='' data-aos="fade-right" className="max-w-sm md:block hidden"/>
          <img src='Alan3.png' alt='' data-aos="fade-up" className="max-w-sm md:hidden"/>{/*show when small*/}
          <div data-aos="fade-left" className="border-2 border-text_dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]">
            <p className="leading-7">I am: Well Rounded. Enjoy Solving Puzzles. Love Learning. Good Communication Skills. Confidence. Be Interested in the Business. Team Player. Understand the Importance of Deadline</p>
            <button className="btn bg-text_dark_primary text-white">Hire Me</button>
          </div>
        </div>
      </div>
    </section>
  )
}
/////////////////////////////////
const CONTACTS=[
  {
    text: "myemail@gmail.com",
    icon: GrMail,
    link: "mailto:myemail@gmail.com",
  },
  {
    text: "1-408-123-4567",
    icon: MdCall,
    link: "https://www.google.com",
  },
  {
    text: "my Instagram",
    icon: BsInstagram,
    link: "https://www.instagram.com/",
  },
]
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-white text-text_dark_primary" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">Contect Me</h2>
        <h4 className="subtitle" data-aos="fade-down">GET IN TOUCH</h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">

          <form ref={form} onSubmit={sendEmail} data-aos="fade-up" className="flex-1 flex flex-col gap-5">
            {/* Input Name as same as email js templates values */}
            <input required type="text"  name="from_name"  placeholder="Name" 
                   className="border border-slate-600 p-3 rounded"/>
            <input required type="email" name="user_email" placeholder="Email Id"
                   pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                   className="border border-slate-600 p-3 rounded"/>
            <textarea required name="message" placeholder="Message" 
                   className="border border-slate-600 p-3 rounded h-44"></textarea>
            <button className="btn self-start bg-white text-text_dark_primary">Submit</button>
          </form>

          <div className="flex-1 flex flex-col gap-5">
            {CONTACTS.map((contact, i) => (
              <div key={i} data-aos="fade-down" data-aos-delay={i * 430} className="flex items-center gap-2">
                <h4 className="text-white">{createElement(contact.icon)}</h4>
                <a className="font-Poppins" href={contact.link} target="_blank">{contact.text}</a>
              </div>))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default function App(){
  useEffect(()=>{Aos.init({duration:1800,offset:100,disable:"mobile"})},[])
  return (
    <div className="">
      <HamburgerMenu />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <HireMe />
      <Contact />
      <footer className="p-3 text-center bg-bg_light_primary">
        <p>©AlanPortfolio 2022</p>
      </footer>
    </div>
  )
}