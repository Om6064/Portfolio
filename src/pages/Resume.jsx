import Footer from "../components/Footer";
import Particles from "../components/Particles"

const Resume = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Particles */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
      >
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

      {/* Content */}
      <div className="container mx-auto px-4 py-28 flex flex-col items-center justify-center">
        {/* Download Button */}
        <a
          href="https://drive.google.com/file/d/1V0Se-fCBoM5N8_oBMtDI2dwt-Bmhl0IT/view"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#59327b] p-3 rounded-lg inline-flex items-center gap-2 hover:bg-purple-700 transition"
        >
          <i className="ri-download-2-line"></i> Download CV
        </a>

        {/* Resume Image */}
        <div className="mt-8 w-full  max-w-4xl">
          <img
            src="/image/Screenshot 2025-07-03 162204.png"
            alt="Resume"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Resume;
