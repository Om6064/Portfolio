import Footer from "../../components/Footer";
import Particles from "../../components/Particles";

const JavascriptEventLoopExplained = () => {
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
          JavaScript Event Loop: Explained
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          The event loop is a core concept for understanding how JavaScript handles asynchronous operations
          like callbacks, promises, and timers. Let’s break down how it works under the hood.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Single-threaded Nature</h2>
        <p className="mb-6 text-gray-300">
          JavaScript runs in a single-threaded environment, meaning it has one call stack and can do one thing
          at a time. To handle asynchronous tasks, it uses an event loop and callback queues.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Call Stack</h2>
        <p className="mb-6 text-gray-300">
          The call stack keeps track of function calls. When a function is called, it’s pushed onto the stack;
          when it returns, it’s popped off. If the stack is busy, synchronous tasks have to wait.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Web APIs & Callback Queue</h2>
        <p className="mb-6 text-gray-300">
          Asynchronous operations (like <code>setTimeout</code> or HTTP requests) are handled by the browser’s
          Web APIs. Once they finish, their callbacks are pushed into the callback queue.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">How the Event Loop Works</h2>
        <p className="mb-6 text-gray-300">
          The event loop constantly checks if the call stack is empty. If it is, it takes the first callback
          from the callback queue and pushes it onto the stack for execution. This enables non-blocking behavior.
        </p>

        <div className="bg-purple-700/20 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Key Takeaway</h3>
          <p className="text-gray-300">
            The event loop makes JavaScript non-blocking and efficient for I/O-heavy tasks. Understanding it
            helps you write better asynchronous code and debug issues more effectively.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full z-10">
        <Footer />
      </div>
    </section>
  );
};

export default JavascriptEventLoopExplained;
