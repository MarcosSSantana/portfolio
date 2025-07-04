import { FaGamepad, FaGraduationCap, FaSuitcase } from "react-icons/fa";

import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import InfoCard from "../components/InfoCard";
import Profile from "../components/Profile";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { useGitHubProfile } from "../hooks/useGitHubProfile";
import { workExperience } from "../data/workExperience";

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
          <Section
            title="Projects"
            icon={<FaGamepad className="text-green-500 text-2xl" />}
          >
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
          </Section>

          {/* Work Experience */}
          <Section
            title="Work Experience"
            icon={<FaSuitcase className="text-green-500 text-2xl" />}
          >
            <div className="flex flex-col gap-6">
              {workExperience.map((work, i) => (
                <InfoCard
                  title={work.title}
                  year={work.year}
                  desc={work.desc}
                  index={i}
                />
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section
            title="Educação"
            icon={<FaGraduationCap className="text-green-500 text-2xl" />}
          >
            <div className="flex flex-col gap-6">
              {education.map((edu, i) => (
                <InfoCard
                  title={edu.title}
                  year={edu.year}
                  desc={edu.desc}
                  index={i}
                />
              ))}
            </div>
          </Section>
        </div>

        <Footer />
      </div>
    );
  }
}
