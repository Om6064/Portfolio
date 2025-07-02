import Footer from "../components/Footer";
import Header from "../components/Header";
import Headline from "../components/Headline";
import HeroAbout from "../components/HeroAbout";
import Particles from "../components/Particles";

const Hero = () => {
  return (
    <section className="pt-32 absolute w-full top-0 -z-10 flex items-center justify-center flex-col  bg-image text-white">
      <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1, // Keep it behind everything
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
        <div className="flex items-center justify-center">
          <div className="col-6">
            <p className="text-5xl font-semibold">Hi There! 👋🏻</p>
            <p className="text-5xl font-semibold">I'M <span className="text-[#cd5ff8]">Aryan Patel</span></p>

            <div className="py-10 text-5xl">
              <Headline />
            </div>
          </div>
          <div className="col-6">
            <img src="image/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full">
        <HeroAbout/>
      </div>
      <Footer/>
      
    </section>
  );
};

export default Hero;
