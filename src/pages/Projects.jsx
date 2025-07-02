import SpotlightCard from "../components/SpotlightCard";

const Projects = () => (
  <section className="absolute top-0 w-full -z-10 bg-black text-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold my-28 text-center">My Recent <span className="text-purple-600">Works</span></h2>
      <div className="flex">
        <div className="col-4">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              
          </SpotlightCard>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  </section>
);

export default Projects;
