const About = () => (
  <section className="absolute top-0 w-full -z-10 bg-black text-white">
    <div className="container mx-auto">
  <div className="min-h-screen  flex  px-6  space-y-12 py-72">
      <div className="max-w-4xl text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Know Who <span className="text-purple-400">I'M</span>
        </h1>
        <p className="text-lg mb-4">
          Hi Everyone, I am <span className="text-purple-400">Soumyajit Behera</span> from{" "}
          <span className="text-purple-400">Bhubaneswar, India</span>.
        </p>
        <p className="text-lg mb-4">
          I am currently employed as a software developer at Juspay.
        </p>
        <p className="text-lg mb-8">
          I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
        </p>
        <p className="text-lg mb-4">Apart from coding, some other activities that I love to do!</p>
        <ul className="text-left inline-block mb-8">
          <li className="flex items-center mb-2">
            <span className="mr-2">🎮</span> Playing Games
          </li>
          <li className="flex items-center mb-2">
            <span className="mr-2">✍️</span> Writing Tech Blogs
          </li>
          <li className="flex items-center">
            <span className="mr-2">🌍</span> Travelling
          </li>
        </ul>
        <p className="italic text-purple-300">"Strive to build things that make a difference!"</p>
        <p className="mt-1">— Soumyajit</p>
      </div>

      <div>
          <img src="image/about.aee0f771fbfc1e7b8fa8.png" alt="" />
      </div>

    </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">
          Professional <span className="text-purple-400">Skillset</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center text-3xl">C++</div>
          <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center text-3xl">JS</div>
          <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center text-3xl">Go</div>
          <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center text-3xl">Node.js</div>
          <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center text-3xl">React</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
