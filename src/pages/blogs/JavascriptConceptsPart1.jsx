import Footer from "../../components/Footer";
import Particles from "../../components/Particles";

const JavascriptConceptsPart1 = () => {
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
          JavaScript Concepts - Part 1
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          JavaScript is the backbone of modern web development. This part covers some fundamental
          concepts that every developer should know, along with common interview questions.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Variable Declarations</h2>
        <p className="mb-6 text-gray-300">
          JavaScript uses <code>var</code>, <code>let</code>, and <code>const</code> to declare variables.
          Understanding their scope and hoisting behavior is crucial for avoiding bugs.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Hoisting</h2>
        <p className="mb-6 text-gray-300">
          Hoisting is JavaScript’s default behavior of moving declarations to the top.
          Variables declared with <code>var</code> are hoisted and initialized with <code>undefined</code>,
          while <code>let</code> and <code>const</code> are hoisted but not initialized.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Closures</h2>
        <p className="mb-6 text-gray-300">
          A closure is created when an inner function has access to its outer function’s scope,
          even after the outer function has executed. Closures are powerful for data privacy and callbacks.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Common Interview Questions</h2>
        <ul className="mb-6 text-gray-300 list-disc pl-5 space-y-2">
          <li>Explain the difference between <code>var</code>, <code>let</code>, and <code>const</code>.</li>
          <li>What is hoisting in JavaScript?</li>
          <li>How do closures work and where are they used?</li>
          <li>Explain scope and lexical scope.</li>
        </ul>

        <div className="bg-purple-700/20 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Key Takeaway</h3>
          <p className="text-gray-300">
            Mastering these core concepts helps you write efficient, bug-free JavaScript and tackle
            technical interviews with confidence.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full z-10">
        <Footer />
      </div>
    </section>
  );
};

export default JavascriptConceptsPart1;
