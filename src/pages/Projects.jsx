import { useState } from "react";
import Particles from "../components/Particles";
import SpotlightCard from "../components/SpotlightCard";
import Footer from "../components/Footer";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  let arr = [
    {
      img: "image/Screenshot 2025-08-12 143510.png",
      title: "Inventory Management System",
      des: "The Inventory Management System is a fully functional web application designed to efficiently track, add, update, and delete inventory items. Built with React and Redux Toolkit for seamless state management, it ensures fast performance and scalability.",
      badges: [
        { label: "React", icon: "ri-reactjs-fill" },
        { label: "JavaScript", icon: "ri-javascript-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
      ],
      git: "https://github.com/Om6064/Bitcoin-web",
      demo: "https://github.com/Om6064/inventory-management-system"
    },
    {
      img: "/image/image.png",
      title: "Employee Management System",
      des: "The Employee Management System is a responsive, user-friendly web application built using React.js. It allows organizations to efficiently manage employee information with modern CRUD (Create, Read, Update, Delete) operations.",
      badges: [
        { label: "React", icon: "ri-reactjs-fill" },
        { label: "JavaScript", icon: "ri-javascript-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
      ],
      git: "https://github.com/Om6064/Employee-Management-System",
      demo: "https://employee-management-system-nine-ruddy.vercel.app/"
    },
    {
      img: "image/Screenshot 2025-07-02 124849.png",
      title: "React Invent Landing Page",
      des: "The React Invent Landing Page is a simple yet elegant landing page designed and built entirely with React.js and Bootstrap, without relying on third-party plugins. It demonstrates how to create clean, responsive layouts using Bootstrap’s grid system and utility classes, combined with React’s component-based architecture.",
      badges: [
        { label: "React", icon: "ri-reactjs-fill" },
        { label: "Bootstrap", icon: "ri-bootstrap-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
      ],
      git: "https://github.com/Om6064/Component-Landing-page",
      demo: "https://component-landing-page.vercel.app/"
    },
    {
      img: "image/Screenshot 2025-07-02 125950.png",
      title: "React Evea Landing Page",
      des: "The React Evea Landing Page is a straightforward, clean landing page built entirely with React.js and Bootstrap, without any third-party plugins. It focuses on delivering a professional, modern first impression while keeping the codebase simple and maintainable.",
      badges: [
        { label: "React", icon: "ri-reactjs-fill" },
        { label: "Bootstrap", icon: "ri-bootstrap-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
      ],
      git: "https://github.com/Om6064/main-landing-page",
      demo: "https://main-landing-page-chi.vercel.app/"
    },
    {
      img: "image/Screenshot 2025-07-02 130636.png",
      title: "Append Web Layout",
      des: "This Append Web Layout is a complete, multi-section web page designed using HTML5, CSS3, Bootstrap, and jQuery. It combines modern design with interactive elements, demonstrating strong front-end skills without relying on heavy frameworks.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
        { label: "Bootstrap", icon: "ri-bootstrap-fill" },
        { label: "jQuery", icon: "ri-code-s-slash-fill" },
      ],
      git: "https://github.com/Om6064/full-website",
      demo: "https://om6064.github.io/full-website/"
    },
    {
      img: "image/Screenshot 2025-07-02 131857.png",
      title: "Initial Personal Portfolio Website",
      des: "This is my initial personal portfolio website, crafted with core web technologies like HTML, CSS, jQuery, and Bootstrap. It serves as my starting point for presenting my skills, showcasing my projects, and providing an easy way for visitors to connect with me.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
        { label: "Bootstrap", icon: "ri-bootstrap-fill" },
        { label: "jQuery", icon: "ri-code-s-slash-fill" },
      ],
      git: "https://github.com/Om6064/portfolio-latest",
      demo: "https://om6064.github.io/portfolio-latest/"
    },
    {
      img: "image/Screenshot 2025-07-02 132244.png",
      title: "Homilisti Web Layout",
      des: "This project is a static website layout built entirely with HTML and CSS, inspired by real estate listing websites like Homlisti. It demonstrates my ability to design and structure clean, responsive web pages without any frameworks or plugins.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
      ],
      git: "https://github.com/Om6064/homlisti-web",
      demo: "https://om6064.github.io/homlisti-web/"
    },
    {
      img: "image/Screenshot 2025-07-02 132721.png",
      title: "Duralux Admin Panel",
      des: "This project is a responsive Admin Dashboard built using HTML, CSS, Bootstrap, and jQuery. It provides a clean, modern interface for managing backend data and visualizing statistics.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
        { label: "Bootstrap", icon: "ri-bootstrap-fill" },
        { label: "jQuery", icon: "ri-code-s-slash-fill" },
      ],
      git: "https://github.com/Om6064/admin-panal-2",
      demo: "https://om6064.github.io/admin-panal-2/"
    },
    {
      img: "image/Screenshot 2025-07-03 102420.png",
      title: "SendBox Web Layout",
      des: "Sendbox is a simple, clean landing page built entirely with HTML and CSS. It showcases a modern layout with a clear focus on minimal design and well-structured content sections.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
      ],
      git: "https://github.com/Om6064/sendbox",
      demo: "https://om6064.github.io/sendbox/"
    },
    {
      img: "image/Screenshot 2025-07-03 102941.png",
      title: "Vristro Admin Panel",
      des: "This Admin Panel is a dashboard interface built using HTML, CSS, and jQuery. It provides a foundational structure for managing and visualizing backend data in a user-friendly way.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
        { label: "jQuery", icon: "ri-code-s-slash-fill" },
      ],
      git: "https://github.com/Om6064/admin-panal",
      demo: "https://om6064.github.io/admin-panal/"
    },
    {
      img: "image/Screenshot 2025-07-03 103957.png",
      title: "Siora Pure Luxury Real Life Project",
      des: "Siora Luxury is a real-life e-commerce website designed and developed for an actual client, showcasing my ability to build professional, production-ready websites using HTML, CSS, Bootstrap, JavaScript, and jQuery.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
        { label: "Bootstrap", icon: "ri-bootstrap-fill" },
        { label: "JavaScript", icon: "ri-javascript-fill" },
        { label: "jQuery", icon: "ri-code-s-slash-fill" },
      ],
      git: "https://github.com/Om6064/Siora-Web",
      demo: "https://sioraluxury.com/"
    },
    {
      img: "image/Screenshot 2025-07-03 104534.png",
      title: "Bitcoin Web — Cryptocurrency Landing Page",
      des: "Bitcoin Web is a cryptocurrency-themed landing page crafted using HTML, CSS, Bootstrap, and jQuery. It demonstrates how to design a sleek, modern, and responsive promotional page for crypto-related services or products.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
        { label: "Bootstrap", icon: "ri-bootstrap-fill" },
        { label: "jQuery", icon: "ri-code-s-slash-fill" },
      ],
      git: "https://github.com/Om6064/Bitcoin-web",
      demo: "https://om6064.github.io/Bitcoin-web/"
    },
    {
      img: "image/Screenshot 2025-07-02 130850.png",
      title: "Interno Web Landing Page",
      des: "This Interno Web Landing Page is a pixel-perfect implementation of a modern design concept, built entirely with HTML, CSS, and Bootstrap. The layout faithfully converts a Figma design into a fully responsive, clean, and production-ready static website.",
      badges: [
        { label: "HTML", icon: "ri-html5-fill" },
        { label: "CSS", icon: "ri-css3-fill" },
        { label: "Bootstrap", icon: "ri-bootstrap-fill" },
        { label: "jQuery", icon: "ri-code-s-slash-fill" },
      ],
      git: "https://github.com/Om6064/Bitcoin-web",
      demo: "https://om6064.github.io/Bitcoin-web/"
    },
  ];



  return (
    <section className="absolute top-0 w-full -z-10 bg-black text-white">
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold my-28 text-center">My Recent <span className="text-purple-600">Works</span></h2>
        <div className="flex flex-wrap gap-y-4">

          {
            isOpen ? arr.map((projects, idx) => {
              return <div return={idx} className="col-md-6 col-xl-4 p-7">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 0, 255, .3)">
                  <img src={`${projects.img}`} alt="" />
                  <h2 className="text-center my-5 text-xl">{projects.title}</h2>
                  <p className="text-center">{projects.des}</p>

                  <div className="flex flex-wrap justify-center  gap-2 mt-6">
                    {projects.badges && projects.badges.map((badge, idx) => (
                      <span key={idx} className="bg-purple-600 text-white text-xs px-4 py-2 rounded flex items-center gap-1">
                        <i className={badge.icon}></i>
                        {badge.label}
                      </span>
                    ))}
                  </div>


                  <div className="mt-9 flex justify-evenly">
                    <a href={projects.git} target="_blank" rel="noopener noreferrer" className="bg-[#59327b] p-3 rounded-lg">
                      <i className="ri-github-fill"></i> Github
                    </a>
                    <a href={projects.demo} target="_blank" rel="noopener noreferrer" className="bg-[#59327b] p-3 rounded-lg">
                      <i className="ri-slideshow-line"></i> Demo
                    </a>

                  </div>
                </SpotlightCard>
              </div>
            }) : arr.slice(0, 6).map((projects) => {
              return <div className="col-md-6 col-xl-4 p-7">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 0, 255, .3)">
                  <img src={`${projects.img}`} alt="" />
                  <h2 className="text-center my-5 text-xl">{projects.title}</h2>
                  <p className="text-center">{projects.des}</p>
                  <div className="flex flex-wrap justify-center  gap-2 mt-6">
                    {projects.badges && projects.badges.map((badge, idx) => (
                      <span key={idx} className="bg-purple-600 text-white text-xs px-4 py-2 rounded flex items-center gap-1">
                        <i className={badge.icon}></i>
                        {badge.label}
                      </span>
                    ))}
                  </div>


                  <div className="mt-9 flex justify-evenly">
                    <a href={projects.git} target="_blank" rel="noopener noreferrer" className="bg-[#59327b] p-3 rounded-lg">
                      <i className="ri-github-fill"></i> Github
                    </a>
                    <a href={projects.demo} target="_blank" rel="noopener noreferrer" className="bg-[#59327b] p-3 rounded-lg">
                      <i className="ri-slideshow-line"></i> Demo
                    </a>

                  </div>
                </SpotlightCard>
              </div>
            })
          }

          {
            isOpen ? <div className="text-center w-full py-10">
              <button className="bg-[#59327b] p-3 rounded-lg" onClick={() => {
                setIsOpen(false)
              }}>Show Less</button>
            </div> : <div className="text-center w-full py-10">
              <button className="bg-[#59327b] p-3 rounded-lg" onClick={() => {
                setIsOpen(true)
              }}>Show More</button>
            </div>
          }
        </div>
      </div>

      <Footer />

    </section>
  )
}



export default Projects;
