import Particles from "../components/Particles";
import SpotlightCard from "../components/SpotlightCard";

const Projects = () => {
  let arr = [
    {
      img: "/image/image.png",
      title: "Employee Management System",
      des: "The Employee Management System is a responsive, user-friendly web application built using React.js. It allows organizations to efficiently manage employee information with modern CRUD (Create, Read, Update, Delete) operations.",
    },
    {
      img: "image/Screenshot 2025-07-02 124849.png",
      title: "React Invent Landing Page",
      des: "The React Invent Landing Page is a clean, modern, and fully responsive landing page built with React.js. It demonstrates my skills in creating reusable components, managing layouts with React-Bootstrap and delivering smooth user interactions.",
    },
    {
      img: "image/Screenshot 2025-07-02 125950.png",
      title: "React Evea Landing Page",
      des: "The React Evea Landing Page is a straightforward, clean landing page built entirely with React.js and Bootstrap, without any third-party plugins. It focuses on delivering a professional, modern first impression while keeping the codebase simple and maintainable.",
    },
    {
      img: "image/Screenshot 2025-07-02 130636.png",
      title: "Append Web Layout",
      des: "This Append Web Layout is a complete, multi-section web page designed using HTML5, CSS3, Bootstrap, and jQuery. It combines modern design with interactive elements, demonstrating strong front-end skills without relying on heavy frameworks.",
    },
    {
      img: "image/Screenshot 2025-07-02 131857.png",
      title: "initial personal portfolio website",
      des: "This is my initial personal portfolio website, crafted with core web technologies like HTML, CSS, jQuery, and Bootstrap. It serves as my starting point for presenting my skills, showcasing my projects, and providing an easy way for visitors to connect with me.",
    },
    {
      img: "image/Screenshot 2025-07-02 132244.png",
      title: "Homilisti Web Layout",
      des: "This project is a static website layout built entirely with HTML and CSS, inspired by real estate listing websites like Homlisti. It demonstrates my ability to design and structure clean, responsive web pages without any frameworks or plugins.",
    },
    {
      img: "image/Screenshot 2025-07-02 132721.png",
      title: "Duralux Admin Panal",
      des: "This project is a responsive Admin Dashboard built using HTML, CSS, Bootstrap, and jQuery. It provides a clean, modern interface for managing backend data and visualizing statistics.",
    },
    {
      img: "image/Screenshot 2025-07-02 132721.png",
      title: "Duralux Admin Panal",
      des: "This project is a responsive Admin Dashboard built using HTML, CSS, Bootstrap, and jQuery. It provides a clean, modern interface for managing backend data and visualizing statistics.",
    },
  ]
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
            arr.map((projects) => {
              return <div className="col-4">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 0, 255, .3)">
                  <img src={`${projects.img}`} alt="" />
                  <h2 className="text-center my-5 text-xl">{projects.title}</h2>
                  <p>{projects.des}</p>

                  <div className="mt-9 flex justify-evenly">
                    <a href="https://om6064.github.io/admin-panal-2/" className="bg-[#59327b] p-3 rounded-lg"><button><i class="ri-github-fill"></i> Github</button></a>
                    <a href="https://om6064.github.io/admin-panal-2/" className="bg-[#59327b] p-3 rounded-lg"><i class="ri-slideshow-line"></i> Demo</a>
                  </div>
                </SpotlightCard>
              </div>
            })
          }
        </div>
      </div>

    </section>
  )
}



export default Projects;
