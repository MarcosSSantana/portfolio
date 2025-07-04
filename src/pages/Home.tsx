import { FaGamepad, FaSuitcase } from "react-icons/fa";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import ProjectCard from "../components/ProjectCard";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { useGitHubProfile } from "../hooks/useGitHubProfile";

export default function Home() {
  const { profile, error, loading } = useGitHubProfile("MarcosSSantana");

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa]">
        <div className="text-center">
          <h2 className="text-2xl font-montserrat text-red-600 mb-4">
            Erro ao carregar perfil
          </h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f6fa]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4caf50] mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando perfil...</p>
        </div>
      </div>
    );
  }

  if (profile) {
    return (
      <div className="bg-[#f5f6fa] min-h-screen text-[#222]">
        {/* Header */}
        <Header name={profile.name} email="marcosshotokan10@gmail.com" />

        {/* Container */}
        <div className="max-w-[1100px] mx-auto pt-24 px-4">
          {/* Profile */}
          <Profile
            profile={profile}
            phone="+55 (16) 98162-8782"
            position="Software Developer"
          />

          {/* Projects */}
          <section className="mb-12">
            <div className="font-['Montserrat'] text-xl text-[#1b2a36] mb-6 border-l-4 border-[#4caf50] pl-3 font-semibold flex items-center gap-2">
              <FaGamepad className="text-green-500 text-2xl" /> Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              {projects.map((proj, i) => (
                <ProjectCard
                  key={proj.title}
                  title={proj.title}
                  tech={proj.tech}
                  link={proj.link}
                  index={i}
                />
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-12">
            <div className="font-['Montserrat'] text-xl text-[#1b2a36] mb-6 border-l-4 border-[#4caf50] pl-3 font-semibold flex items-center gap-2">
              <FaSuitcase className="text-green-500 text-2xl" /> Work Experience
            </div>
            <div className="flex flex-col gap-6">
              {education.map((work, i) => (
                <div
                  key={work.title}
                  className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:bg-gray-50"
                  style={{
                    animation: `fadeInUp 0.8s forwards`,
                    animationDelay: `${0.1 * (i + 1)}s`,
                  }}
                >
                  <h5 className="mb-1 text-lg text-[#2e4a5a] font-['Montserrat'] font-semibold">
                    {work.title}
                  </h5>
                  <span className="text-[#6c757d] text-sm block mb-1">
                    {work.year}
                  </span>
                  <p className="text-[#6c757d] text-base">{work.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <div className="font-['Montserrat'] text-xl text-[#1b2a36] mb-6 border-l-4 border-[#4caf50] pl-3 font-semibold flex items-center gap-2">
              {/* Ícone removido pois FaMortarBoard não está definido */}
              Educação
            </div>
            <div className="flex flex-col gap-6">
              {education.map((edu, i) => (
                <div
                  key={edu.title}
                  className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:bg-gray-50"
                  style={{
                    animation: `fadeInUp 0.8s forwards`,
                    animationDelay: `${0.1 * (i + 1)}s`,
                  }}
                >
                  <h5 className="mb-1 text-lg text-[#2e4a5a] font-['Montserrat'] font-semibold">
                    {edu.title}
                  </h5>
                  <span className="text-[#6c757d] text-sm block mb-1">
                    {edu.year}
                  </span>
                  <p className="text-[#6c757d] text-base">{edu.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}
