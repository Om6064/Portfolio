import Particles from "../components/Particles"

const Resume = () => {
  return (
    <section className="absolute top-0 w-full -z-10 bg-black text-white">
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
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

      <div className="py-28">
        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1V0Se-fCBoM5N8_oBMtDI2dwt-Bmhl0IT/view"
            target="_blank"
            download
            className="bg-[#59327b] p-3 rounded-lg inline-flex items-center gap-2"
          >
            <i className="ri-download-2-line"></i> Download CV
          </a>
        </div>

        <div className="flex items-center justify-center my-8">
          <img src="image/Screenshot 2025-07-03 162204.png" alt="resume" />
        </div>
      </div>
    </section>
  )
}

export default Resume
