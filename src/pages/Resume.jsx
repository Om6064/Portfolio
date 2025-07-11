import Footer from "../components/Footer";
import Particles from "../components/Particles";

const Resume = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Particles */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1,
        }}
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
          href="https://drive.google.com/file/d/1ia6KaRwJJMsKwNwWPuSJX1iZJP5cmZ_J/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#59327b] p-3 rounded-lg inline-flex items-center z-10 gap-2 hover:bg-purple-700 transition"
        >
          <i className="ri-download-2-line"></i> Download CV
        </a>

        {/* Resume Image */}
        <div className="mt-8 col-md-4">
          <img
            src="image/Screenshot 2025-07-11 092343.png"
            alt="Resume"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Resume;
