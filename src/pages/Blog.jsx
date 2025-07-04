import Particles from "../components/Particles";
import SpotlightCard from "../components/SpotlightCard";

const Projects = () => {


    const arr = [
        {
            id: 1,
            title: "Understanding Git and Github",
            category: "Git",
            description: "Understanding the difference between Git and Github with examples and their main use cases or how they are helpful for the developers."
        },
        {
            id: 2,
            title: "Client Vs Server Side Rendering",
            category: "React",
            description: "Difference between different types of rendering techniques and advantage of Next.js over React.js."
        },
        {
            id: 3,
            title: "Core Concept You Need to Know About React",
            category: "React",
            description: "Learning some of the fundamental concepts of React.js and top questions asked in react interview."
        },
        {
            id: 4,
            title: "Understanding Promises in Javascript",
            category: "Javascript",
            description: "Learning about Promises in Javascript."
        },
        {
            id: 5,
            title: "Javascript Concepts - Part1",
            category: "Javascript",
            description: "Learning some of the fundamental concepts of Javascript and questions asked in javascript interview."
        },
        {
            id: 6,
            title: "Javascript Concepts - Part2",
            category: "Javascript",
            description: "Learning some of the fundamental concepts of Javascript and questions asked in javascript interview."
        },
        {
            id: 7,
            title: "Javascript Event Loop: Explained",
            category: "Javascript",
            description: "Understanding how javascript works under the hood, how it executes our asynchronous javascript code and event loop."
        },
        {
            id: 8,
            title: "Prototype and Prototypical Inheritance",
            category: "Javascript",
            description: "Understanding And Using Prototype and Prototypical Inheritance in JavaScript."
        },
        {
            id: 9,
            title: "React Lifecycle Methods",
            category: "React",
            description: "Lifecycle methods are series of events that happen throughout the birth, growth, and death of a React component."
        }
    ];






    return (
        <section className="absolute top-0 w-full h-[110vh] -z-10 bg-black text-white">
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
                <h2 className="text-3xl font-bold my-28 text-center">My <span className="text-purple-600">Blogs</span></h2>
                <div className="flex flex-wrap gap-y-3">

                    {
                        arr.map((projects) => {
                            return <div className="col-4">
                                <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 0, 255, .3)">
                                    <h2 className="text-center my-5 text-xl">{projects.title}</h2>

                                    <p className="text-center">{projects.description}</p>

                                    <div className="flex mt-5 items-center justify-center">
                                        <div className="bg-purple-600 text-center text-white text-xs px-4 py-2 rounded flex items-center gap-1">

                                            {projects.category}
                                        </div>
                                    </div>


                                </SpotlightCard>
                            </div>
                        })}
                </div>
            </div>

        </section>
    )
}



export default Projects;
