import Footer from "../../components/Footer";
import Particles from "../../components/Particles";

const PrototypeAndPrototypicalInheritance = () => {
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
          Prototype and Prototypical Inheritance
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          In JavaScript, prototypical inheritance is a powerful feature that lets one object inherit properties and methods from another. 
          Understanding how prototypes work is key to mastering JavaScript’s object model.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">What is a Prototype?</h2>
        <p className="mb-6 text-gray-300">
          Every JavaScript object has an internal property called <code>[[Prototype]]</code> (accessible via <code>__proto__</code>).
          This prototype is itself an object from which the original object can inherit properties and methods.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Prototypical Inheritance</h2>
        <p className="mb-6 text-gray-300">
          When you try to access a property or method on an object, JavaScript first looks on the object itself.
          If it’s not found, it searches up the prototype chain until it finds it or reaches the end (<code>null</code>).
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Example</h2>
        <p className="mb-6 text-gray-300">
          For example, you can create a constructor function and add methods to its prototype. All instances created 
          from that constructor will share those methods, saving memory and enabling inheritance.
        </p>

        <div className="bg-purple-700/20 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Key Takeaway</h3>
          <p className="text-gray-300">
            Prototypes allow objects to share behavior efficiently. Understanding prototypes helps you build 
            reusable, memory-efficient code and explains how JavaScript’s inheritance works under the hood.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full z-10">
        <Footer />
      </div>
    </section>
  );
};

export default PrototypeAndPrototypicalInheritance;
