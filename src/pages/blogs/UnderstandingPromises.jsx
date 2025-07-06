import Footer from "../../components/Footer";
import Particles from "../../components/Particles";

const UnderstandingPromises = () => {
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
          Understanding Promises in JavaScript
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          Promises are one of the fundamental ways to handle asynchronous operations in JavaScript.
          They help you write cleaner, more readable async code without falling into callback hell.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">What is a Promise?</h2>
        <p className="mb-6 text-gray-300">
          A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation
          and its resulting value. It has three states: pending, fulfilled, or rejected.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Creating a Promise</h2>
        <p className="mb-6 text-gray-300">
          You can create a Promise using the <code>Promise</code> constructor. Inside, you write an async task,
          and then call <code>resolve</code> to mark it successful or <code>reject</code> for failure.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Using Promises</h2>
        <p className="mb-6 text-gray-300">
          Use <code>.then()</code> to handle the resolved value, and <code>.catch()</code> for errors.
          You can chain multiple <code>.then()</code> calls to handle sequences of async tasks.
        </p>

        <div className="bg-purple-700/20 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Example</h3>
          <code className="block text-gray-300 mb-2">
            const myPromise = new Promise((resolve, reject) =&gt; &#123;<br/>
            &nbsp;&nbsp;// async task<br/>
            &nbsp;&nbsp;resolve("Success!");<br/>
            &#125;);<br/>
            <br/>
            myPromise<br/>
            &nbsp;&nbsp;.then(result =&gt; &#123; console.log(result); &#125;)<br/>
            &nbsp;&nbsp;.catch(error =&gt; &#123; console.error(error); &#125;);
          </code>
          <p className="text-gray-300">
            Promises help you write async code that’s easier to read, maintain, and debug.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 w-full z-10">
        <Footer />
      </div>
    </section>
  );
};

export default UnderstandingPromises;
