interface ProjectCardProps {
  title: string;
  tech: string;
  link: string;
  index: number;
}

const ProjectCard = ({ title, tech, link, index }: ProjectCardProps) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-7 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-50"
      style={{
        animation: `fadeInUp 0.8s forwards`,
        animationDelay: `${0.1 * (index + 1)}s`,
      }}
    >
      <h5 className="mb-2 text-lg text-[#2e4a5a] font-['Montserrat'] font-semibold">
        {title}
      </h5>
      <span className="text-[#4caf50] text-base block mb-2">{tech}</span>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 px-6 py-2 bg-[#4caf50] text-white rounded-full font-semibold text-base shadow hover:bg-[#2e4a5a] transition"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
