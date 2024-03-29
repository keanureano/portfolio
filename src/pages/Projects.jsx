import projects from "../cms/projects.json";

export default function Projects() {
  return (
    <div>
      <h1 className="title">My Projects.</h1>
      <ProjectsList />
    </div>
  );
}

function ProjectsList() {
  return (
    <div className="space-y-4 overflow-y-scroll divide-y divide-white/50 scrollbar-hide">
      {projects.map((project) => (
        <div
          key={project.title}
          className="w-48 py-1 project md:w-72 hover:translate-x-2 transition"
        >
          <a href={project.url}>
            <h2 className="font-semibold text-sm">{project.title}</h2>
            <p className="font-medium text-xs">{project.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
