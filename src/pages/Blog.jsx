    import { useState } from "react";
    import { Link } from "react-router-dom";
    import Footer from "../components/Footer";
    import Particles from "../components/Particles";
    import SpotlightCard from "../components/SpotlightCard";

    const Projects = () => {
    const arr = [
        {
        id: 1,
        title: "Understanding Git and Github",
        category: "Git",
        description:
            "Understanding the difference between Git and Github with examples and their main use cases or how they are helpful for the developers.",
        slug: "/blogs/understandinggit",
        },
        {
        id: 2,
        title: "Client Vs Server Side Rendering",
        category: "React",
        description:
            "Difference between different types of rendering techniques and advantage of Next.js over React.js.",
        slug: "/blogs/ClientVsServerSideRendering",
        },
        {
        id: 3,
        title: "Core Concept You Need to Know About React",
        category: "React",
        description:
            "Learning some of the fundamental concepts of React.js and top questions asked in react interview.",
        slug: "/blogs/CoreConceptsReact",
        },
        {
        id: 4,
        title: "Understanding Promises in Javascript",
        category: "Javascript",
        description: "Learning about Promises in Javascript.",
        slug: "/blogs/UnderstandingPromises",
        },
        {
        id: 5,
        title: "Javascript Concepts - Part1",
        category: "Javascript",
        description:
            "Learning some of the fundamental concepts of Javascript and questions asked in javascript interview.",
        slug: "/blogs/JavascriptConceptsPart1",
        },
        {
        id: 6,
        title: "Javascript Concepts - Part2",
        category: "Javascript",
        description:
            "Learning some of the fundamental concepts of Javascript and questions asked in javascript interview.",
        slug: "/blogs/JavascriptConceptsPart2",
        },
        {
        id: 7,
        title: "Javascript Event Loop: Explained",
        category: "Javascript",
        description:
            "Understanding how javascript works under the hood, how it executes our asynchronous javascript code and event loop.",
        slug: "/blogs/JavascriptEventLoopExplained",
        },
        {
        id: 8,
        title: "Prototype and Prototypical Inheritance",
        category: "Javascript",
        description:
            "Understanding And Using Prototype and Prototypical Inheritance in JavaScript.",
        slug: "/blogs/PrototypeAndPrototypicalInheritance",
        },
        {
        id: 9,
        title: "React Lifecycle Methods",
        category: "React",
        description:
            "Lifecycle methods are series of events that happen throughout the birth, growth, and death of a React component.",
        slug: "/blogs/ReactLifecycleMethods",
        },
    ];

    const [activeCategory, setActiveCategory] = useState("All");

    // Unique categories
    const categories = ["All", ...Array.from(new Set(arr.map((item) => item.category)))];

    // Filtered projects
    const filtered = activeCategory === "All"
        ? arr
        : arr.filter((item) => item.category === activeCategory);

    return (
        <section className="absolute top-0 w-full min-h-screen  -z-10 bg-black text-white">
        <div
            style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            }}
        >
            <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            />
        </div>

        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold my-28 mb-10 text-center">
            My <span className="text-purple-600">Blogs</span>
            </h2>

            {/* Filter Bar */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 border rounded-full ${
                    activeCategory === cat
                    ? "bg-purple-600 border-purple-600"
                    : "border-gray-500"
                }`}
                >
                {cat}
                </button>
            ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
                <Link to={project.slug} className="flex w-full" key={project.id}>
                <SpotlightCard
                    className="custom-spotlight-card flex flex-col justify-between w-full"
                    spotlightColor="rgba(0, 0, 255, .3)"
                >
                    <h2 className="text-center my-5 text-xl">{project.title}</h2>
                    <p className="text-center px-4">{project.description}</p>
                    <div className="flex mt-5 mb-4 items-center justify-center">
                    <div className="bg-purple-600 text-center text-white text-xs px-4 py-2 rounded flex items-center gap-1">
                        {project.category}
                    </div>
                    </div>
                </SpotlightCard>
                </Link>
            ))}
            </div>
        </div>

        <div className="fixed -bottom-1 w-full">
            <Footer />
        </div>
        </section>
    );
    };

    export default Projects;
