import Footer from "../../components/Footer";
import Particles from "../../components/Particles";

const CoreConceptsReact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-36">
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

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-purple-500">
          Core Concepts You Need to Know About React
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          React is a powerful JavaScript library for building modern UIs.
          Understanding its core concepts is vital for every React developer.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">🧩 Components</h2>
        <p className="mb-6 text-gray-300">
          Components are the building blocks of a React app. They help you break the UI into reusable pieces.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">🔗 JSX</h2>
        <p className="mb-6 text-gray-300">
          JSX lets you write HTML-like syntax in JavaScript. It makes the code more readable and declarative.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">⚙️ Props & State</h2>
        <p className="mb-6 text-gray-300">
          Props are used to pass data to components. State is used to manage local, dynamic data.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">🪝 Hooks</h2>
        <p className="mb-6 text-gray-300">
          Hooks like <code>useState</code> and <code>useEffect</code> let you manage state and side effects in functional components.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">⚡ Virtual DOM</h2>
        <p className="mb-6 text-gray-300">
          React’s Virtual DOM efficiently updates only the parts of the real DOM that changed.
        </p>

        <div className="bg-purple-700/20 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Top Interview Questions</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Difference between props and state?</li>
            <li>How does the Virtual DOM work?</li>
            <li>What are Hooks? Explain <code>useEffect</code>.</li>
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 w-full z-10">
        <Footer />
      </div>
    </section>
  );
};

export default CoreConceptsReact;
