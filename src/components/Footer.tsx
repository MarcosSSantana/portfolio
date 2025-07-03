import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12 bg-[#1b2a36] text-white text-center py-8 rounded-t-xl text-lg tracking-wide">
      <p>Find me on social media.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://www.facebook.com/marcos.shotokam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="inline text-2xl hover:text-[#4caf50] transition" />
        </a>
        <a
          href="https://www.instagram.com/marcossantana10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="inline text-2xl hover:text-[#4caf50] transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcos-santana-815385101/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="inline text-2xl hover:text-[#4caf50] transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
