interface InfoCardProps {
  title: string;
  year: string;
  desc: string;
  index: number;
}

const InfoCard = ({ title, year, desc, index }: InfoCardProps) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:bg-gray-50"
      style={{
        animation: `fadeInUp 0.8s forwards`,
        animationDelay: `${0.1 * (index + 1)}s`,
      }}
    >
      <h5 className="mb-1 text-lg text-[#2e4a5a] font-['Montserrat'] font-semibold">
        {title}
      </h5>
      <span className="text-[#6c757d] text-sm block mb-1">{year}</span>
      <p className="text-[#6c757d] text-base">{desc}</p>
    </div>
  );
};

export default InfoCard;
