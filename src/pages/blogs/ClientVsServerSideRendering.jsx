import Footer from "../../components/Footer";
import Particles from "../../components/Particles";

const ClientVsServerSideRendering = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-36">
        <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 1,
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-purple-500">
          Client Vs Server Side Rendering
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          In modern web development, rendering strategy plays a crucial role in performance and user experience.
          Let’s understand the differences between Client Side Rendering (CSR) and Server Side Rendering (SSR),
          with a focus on why frameworks like Next.js are preferred for SSR.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Client Side Rendering (CSR)</h2>
        <p className="mb-6 text-gray-300">
          In CSR, the browser loads a minimal HTML page, then downloads and executes JavaScript to build the UI.
          This approach is used by React by default. The initial page load can be slower because rendering happens
          entirely on the client, but it enables highly interactive single-page applications (SPAs).
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Server Side Rendering (SSR)</h2>
        <p className="mb-6 text-gray-300">
          In SSR, the server generates the complete HTML for each page request and sends it to the browser.
          This means the user sees content faster because HTML is ready to render immediately.
          SSR is better for SEO since search engines can easily index server-rendered pages.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Why Next.js?</h2>
        <p className="mb-6 text-gray-300">
          Next.js extends React by adding SSR and Static Site Generation (SSG) capabilities out of the box.
          This hybrid approach allows developers to choose CSR, SSR, or SSG per page, improving performance,
          SEO, and user experience while retaining React’s flexibility.
        </p>

        <div className="bg-purple-700/20 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Key Takeaway</h3>
          <p className="text-gray-300">
            Use CSR for dynamic, highly interactive parts of your app. Use SSR (with Next.js) for better
            performance, SEO, and faster time-to-content. The best modern apps combine both.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full z-10">
        <Footer/>
      </div>
    </section>
  );
};

export default ClientVsServerSideRendering;
