import Footer from "../../components/Footer";
import Particles from "../../components/Particles";

const JavascriptConceptsPart2 = () => {
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
          JavaScript Concepts - Part 2
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          Continuing from Part 1, this part explores more important JavaScript fundamentals and questions
          you’re likely to encounter in interviews.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Async/Await</h2>
        <p className="mb-6 text-gray-300">
          <code>async</code> and <code>await</code> simplify working with Promises by allowing you to write
          asynchronous code that looks synchronous, improving readability and error handling.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Event Loop</h2>
        <p className="mb-6 text-gray-300">
          The JavaScript event loop is a mechanism that handles asynchronous callbacks. Understanding how
          it works with the call stack, microtask queue, and task queue is key for debugging async code.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Prototype & Prototypical Inheritance</h2>
        <p className="mb-6 text-gray-300">
          JavaScript uses prototypical inheritance — objects can inherit properties and methods from other objects.
          This makes it different from classical inheritance used in other languages.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Common Interview Questions</h2>
        <ul className="mb-6 text-gray-300 list-disc pl-5 space-y-2">
          <li>How does the event loop work in JavaScript?</li>
          <li>Explain the difference between synchronous and asynchronous code.</li>
          <li>How do you handle async operations in JavaScript?</li>
          <li>What is prototypical inheritance?</li>
        </ul>

        <div className="bg-purple-700/20 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Key Takeaway</h3>
          <p className="text-gray-300">
            Mastering asynchronous patterns and inheritance concepts will help you build more reliable,
            maintainable, and efficient JavaScript applications.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full z-10">
        <Footer />
      </div>
    </section>
  );
};

export default JavascriptConceptsPart2;
