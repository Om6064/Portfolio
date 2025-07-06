import Footer from "../../components/Footer";
import Particles from "../../components/Particles";


const UnderstandingGitGitHub = () => {
    return (
        <section className="min-h-screen w-full bg-black  text-white px-4 py-36">
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
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-purple-400">Understanding Git and GitHub</h1>

                <p className="text-lg leading-relaxed">
                    In today’s fast-paced software world, version control is a non-negotiable skill...
                    {/* intro */}
                </p>

                <h2 className="text-2xl font-semibold text-purple-300">What is Git?</h2>
                <p className="text-base leading-relaxed">
                    Git is an open-source version control system...
                </p>

                <h2 className="text-2xl font-semibold text-purple-300">What is GitHub?</h2>
                <p className="text-base leading-relaxed">
                    GitHub is a cloud platform that hosts Git repositories online...
                </p>

                <h2 className="text-2xl font-semibold text-purple-300">Git vs GitHub: Key Differences</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border border-purple-600">
                        <thead className="bg-purple-800">
                            <tr>
                                <th className="py-2 px-4 border border-purple-600">Feature</th>
                                <th className="py-2 px-4 border border-purple-600">Git</th>
                                <th className="py-2 px-4 border border-purple-600">GitHub</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border border-purple-600">Type</td>
                                <td className="py-2 px-4 border border-purple-600">Local version control system</td>
                                <td className="py-2 px-4 border border-purple-600">Online Git repository hosting</td>
                            </tr>
                            {/* more rows */}
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-semibold text-purple-300">Why Developers Love Them</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>✅ Safe Collaboration</li>
                    <li>✅ Open Source Communities</li>
                    <li>✅ Portfolio Building</li>
                    <li>✅ Easy Rollbacks</li>
                </ul>

                <h2 className="text-2xl font-semibold text-purple-300">Conclusion</h2>
                <p className="text-base leading-relaxed">
                    In short: Git helps you manage your code, GitHub helps you share it with the world...
                </p>
            </div>
            <div className="bottom-0 fixed w-full z-10">
                <Footer />
            </div>
        </section>
    );
};

export default UnderstandingGitGitHub;
