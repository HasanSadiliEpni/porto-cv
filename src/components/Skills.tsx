export default function Skills() {
  const skills = [
    "React.js", "Next.js", "Node.js", "Tailwind CSS", "JavaScript/TypeScript",
    "MongoDB", "RESTful APIs", "Git & GitHub"
  ];

  return (
    <section id="skills" className="py-12 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map(skill => <div key={skill}>{skill}</div>)}
      </div>
    </section>
  );
}