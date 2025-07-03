import {
  FaBriefcase,
  FaEnvelope,
  FaGamepad,
  FaHome,
  FaPhone,
  FaSuitcase,
} from "react-icons/fa";

import Footer from "../components/Footer";
import { useGitHubProfile } from "../hooks/useGitHubProfile";

export default function Home() {
const {profile, error, loading} = useGitHubProfile("MarcosSSantana");

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
        <header className="fixed top-0 left-0 right-0 bg-[#1b2a36] text-white shadow-lg z-50 flex items-center justify-between px-8 h-16 font-['Montserrat'] tracking-wide text-lg transition-colors">
          <span>{profile.name}</span>
          <span className="text-[#b2bec3] text-base flex items-center gap-2">
            <FaEnvelope className="inline" /> marcosshotokan10@gmail.com
          </span>
        </header>

        {/* Container */}
        <div className="max-w-[1100px] mx-auto pt-24 px-4">
          {/* Profile */}
          <section className="flex flex-wrap gap-8 mb-10 items-center">
            <img
              src={profile.avatar_url}
              alt="Avatar"
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white bg-white"
            />
            <div className="flex-1 min-w-[250px]">
              <h1 className="font-['Montserrat'] text-3xl mb-2 text-[#1b2a36] font-bold">
                Marcos Silva Santana
              </h1>
              <p className="flex items-center gap-2 text-[#6c757d] text-base mb-1">
                <FaBriefcase className="text-green-500" /> Software Developer -{" "}
                {profile.company}
              </p>
              <p className="flex items-center gap-2 text-[#6c757d] text-base mb-1">
                <FaHome className="text-green-500" /> {profile.location}
              </p>
              <p className="flex items-center gap-2 text-[#6c757d] text-base mb-1">
                <FaPhone className="text-green-500" /> +55 (16) 98162-8782
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <div className="font-['Montserrat'] text-xl text-[#1b2a36] mb-6 border-l-4 border-[#4caf50] pl-3 font-semibold flex items-center gap-2">
              <FaGamepad className="text-green-500 text-2xl" /> Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              {[
                {
                  title: "Candy Rain",
                  tech: "HTML5, CSS3, JavaScript, PixiJS, GSAP, Webpack, Typescript",
                  link: "https://marcosssantana.github.io/candy-rain/",
                },
                {
                  title: "Cartela Raspadinha",
                  tech: "HTML5, CSS3, JavaScript, PixiJS, GSAP",
                  link: "https://marcosssantana.github.io/cartela-raspadinha/",
                },
                {
                  title: "Club (Prize Roulette)",
                  tech: "Construct 3, JavaScript, HTML5, CSS3",
                  link: "https://marcosssantana.github.io/club/",
                },
                {
                  title: "Crash Soccer",
                  tech: "HTML5, CSS3, JavaScript, PixiJS, Typescript",
                  link: "https://marcosssantana.github.io/crash-soccer/",
                },
                {
                  title: "Jogo da Velha",
                  tech: "HTML5, CSS3, JavaScript (Canvas)",
                  link: "https://marcosssantana.github.io/jogo-da-velha/",
                },
                {
                  title: "Mach Words",
                  tech: "Angular, TypeScript, HTML5, CSS3",
                  link: "https://marcosssantana.github.io/mach-words/",
                },
                {
                  title: "Match 3",
                  tech: "HTML5, CSS3, JavaScript, PixiJS, Typescript",
                  link: "https://marcosssantana.github.io/match3/",
                },
                {
                  title: "Puzzle",
                  tech: "HTML5, CSS3, JavaScript, PixiJS, Typescript",
                  link: "https://marcosssantana.github.io/puzzle/",
                },
                {
                  title: "Quiz",
                  tech: "HTML5, CSS3, JavaScript, PixiJS",
                  link: "https://marcosssantana.github.io/quiz/",
                },
                {
                  title: "Quiz Contábeis",
                  tech: "Construct 3, JavaScript, HTML5, CSS3",
                  link: "https://marcosssantana.github.io/quizcontabeis/",
                },
                {
                  title: "Tic Tac Toe",
                  tech: "HTML5, CSS3, JavaScript, PixiJS, Typescript",
                  link: "https://marcosssantana.github.io/tic-tac-toe/",
                },
                {
                  title: "Video Bingo",
                  tech: "HTML5, CSS3, JavaScript, PixiJS, GSAP",
                  link: "https://marcosssantana.github.io/video-bingo/",
                },
                {
                  title: "Wind Soldier",
                  tech: "HTML5, CSS3, JavaScript",
                  link: "https://html5.gamedistribution.com/4086914c63db48a7a17f1b005cd0c53a/",
                },
              ].map((proj, i) => (
                <div
                  key={proj.title}
                  className="bg-white rounded-xl shadow-lg p-7 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-50"
                  style={{
                    animation: `fadeInUp 0.8s forwards`,
                    animationDelay: `${0.1 * (i + 1)}s`,
                  }}
                >
                  <h5 className="mb-2 text-lg text-[#2e4a5a] font-['Montserrat'] font-semibold">
                    {proj.title}
                  </h5>
                  <span className="text-[#4caf50] text-base block mb-2">
                    {proj.tech}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-6 py-2 bg-[#4caf50] text-white rounded-full font-semibold text-base shadow hover:bg-[#2e4a5a] transition"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-12">
            <div className="font-['Montserrat'] text-xl text-[#1b2a36] mb-6 border-l-4 border-[#4caf50] pl-3 font-semibold flex items-center gap-2">
              <FaSuitcase className="text-green-500 text-2xl" /> Work Experience
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Game Dev - Front End / Squadra Digital",
                  year: "May 2023 - Sep 2023",
                  desc: "Creation of games for the web (Design, Tutorial and game functionality). HTML, CSS, JS, Canvas, PixiJS, Gsap, Typescript, Webpack, Nodejs, ReactJs; Scenario Modeling and Level Design.",
                },
                {
                  title: "Game Developer / Esys Technology",
                  year: "Jul 2015 - Dec 2021",
                  desc: "Responsible for the development of the programming and interface of the games and new technologies aiming at the efficiency and performance of the environment where the games will be executed and integration with the mathematical engines through API.",
                },
                {
                  title: "PHP Developer / Contábeis",
                  year: "Dec 2021 - May 2023",
                  desc: "PHP, Composer, PHPmailer, PHP-encryption, Mysql, Docker compose, Bootstrap 5, DataTables, SweetAlert2, Jquery, JavaScript, AdminLTE.",
                },
                {
                  title:
                    "Webmaster / Fast information telephony and tele service",
                  year: "Dec 2014 - Jul 2015",
                  desc: "Development and support of the company website, developing with: PHP, Java Script, HTML 5, CSS 3, JSON, MySql, MVC, Object Orientation, Bootstrap (CSS Framework) among others.",
                },
              ].map((work, i) => (
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
              {[
                {
                  title: "Universidade Paulista - UNIP",
                  year: "2015 - 2020",
                  desc: "Analysis and systems development",
                },
                {
                  title: "Senac São Paulo",
                  year: "2013 - 2015",
                  desc: "Computer programming",
                },
                {
                  title:
                    "Federal Institute of Education, Science and Technology of São Paulo - IFSP",
                  year: "2012 - 2014",
                  desc: "Computer technician for computers",
                },
              ].map((edu, i) => (
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
