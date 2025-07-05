import Footer from "../components/Footer";
import Particles from "../components/Particles";

const Projects = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-10">
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

      {/* Page content */}
      <section className="p-5 py-32">
        <h2 className="flex justify-center items-center text-2xl font-bold mb-4">Contact</h2>
        <p className="flex justify-center items-center text-white mb-8 text-center">
          "Connect with Aryan: Reach Out for Collaboration, Inquiries, or Support – Your Next Digital Solution is
          Just a Message Away."
        </p>
        <div className="container mx-auto">
          <div className="shadow p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact items */}
              <div className="flex items-center hover:shadow-lg p-4 transition">
                <div className="border border-[#cd5ff8] rounded-full flex items-center justify-center w-12 h-12">
                  <i className="ri-map-pin-fill text-xl text-[#cd5ff8]" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="capitalize text-white text-sm">
                    176/ girdhardhwar soc.3, Gujarat, India
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:shadow-lg p-4 transition">
                <div className="border border-[#cd5ff8] rounded-full flex items-center justify-center w-12 h-12">
                  <i className="ri-phone-fill text-xl text-[#cd5ff8]" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="capitalize text-white text-sm">
                    +91 97144 45713
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:shadow-lg p-4 transition">
                <div className="border border-[#cd5ff8] rounded-full flex items-center justify-center w-12 h-12">
                  <i className="ri-mail-fill text-xl text-[#cd5ff8]" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-white text-sm">
                    aryanpatel.lihodiya@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow mt-8 p-4" id="contact">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="1b97c614-0bbf-4fdf-b1f9-1f5b5d832447"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  className="w-full border bg-transparent border-gray-300 rounded px-4 py-2"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="w-full border bg-transparent border-gray-300 rounded px-4 py-2"
                  placeholder="Your Email"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                className="w-full border bg-transparent border-gray-300 rounded px-4 py-2"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                rows="6"
                className="w-full border bg-transparent border-gray-300 rounded px-4 py-2"
                placeholder="Message"
                required
              ></textarea>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Projects;
