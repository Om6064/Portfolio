import Footer from "../../components/Footer";
import Particles from "../../components/Particles";

const ReactLifecycleMethods = () => {
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
          React Lifecycle Methods
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          In React, lifecycle methods are special methods that get called at different stages of a component’s existence:
          mounting, updating, and unmounting. Understanding them helps you control your component’s behavior.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Mounting Phase</h2>
        <p className="mb-6 text-gray-300">
          This is when the component is created and inserted into the DOM. Common methods include:
          <code>constructor</code>, <code>getDerivedStateFromProps</code>, <code>render</code>, and <code>componentDidMount</code>.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Updating Phase</h2>
        <p className="mb-6 text-gray-300">
          When a component’s state or props change, it re-renders. Methods like <code>shouldComponentUpdate</code>,
          <code>getSnapshotBeforeUpdate</code>, and <code>componentDidUpdate</code> are called during this phase.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Unmounting Phase</h2>
        <p className="mb-6 text-gray-300">
          This is when the component is removed from the DOM. The <code>componentWillUnmount</code> method lets you clean up 
          subscriptions or timers to avoid memory leaks.
        </p>

        <div className="bg-purple-700/20 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Key Takeaway</h3>
          <p className="text-gray-300">
            Lifecycle methods help you manage what happens when your component mounts, updates, or unmounts.
            Knowing when to use them makes your React code more efficient and predictable.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full z-10">
        <Footer />
      </div>
    </section>
  );
};

export default ReactLifecycleMethods;
