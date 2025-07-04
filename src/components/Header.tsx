import { FaEnvelope } from "react-icons/fa";

interface HeaderProps {
  name: string;
  email: string;
}

const Header = ({ name, email }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1b2a36] text-white shadow-lg z-50 flex items-center justify-between px-8 h-16 font-['Montserrat'] tracking-wide text-lg transition-colors">
      <span>{name}</span>
      <span className="text-[#b2bec3] text-base flex items-center gap-2">
        <FaEnvelope className="inline" /> {email}
      </span>
    </header>
  );
};

export default Header;
