const Skills = () => (
  <section className="p-10">
    <h2 className="text-3xl font-bold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Git'].map(skill => (
        <span key={skill} className="px-4 py-2 bg-gray-200 rounded-full">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;
