import { FaBriefcase, FaHome, FaPhone } from "react-icons/fa";

import type { GitHubProfile } from "../types/github";

interface ProfileProps {
  profile: GitHubProfile;
  phone?: string;
  position?: string;
}

const Profile = ({ profile, phone, position }: ProfileProps) => {
  return (
    <section className="flex flex-wrap gap-8 mb-10 items-center">
      <img
        src={profile.avatar_url}
        alt="Avatar"
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white bg-white"
      />
      <div className="flex-1 min-w-[250px]">
        <h1 className="font-['Montserrat'] text-3xl mb-2 text-[#1b2a36] font-bold">
          {profile.name}
        </h1>
        <p className="flex items-center gap-2 text-[#6c757d] text-base mb-1">
          <FaBriefcase className="text-green-500" /> {position} -{" "}
          {profile.company}
        </p>
        <p className="flex items-center gap-2 text-[#6c757d] text-base mb-1">
          <FaHome className="text-green-500" /> {profile.location}
        </p>
        <p className="flex items-center gap-2 text-[#6c757d] text-base mb-1">
          <FaPhone className="text-green-500" /> {phone}
        </p>
      </div>
    </section>
  );
};

export default Profile;
