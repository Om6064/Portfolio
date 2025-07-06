import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const HeroAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {/* Left column */}
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <h1 className="font-semibold text-3xl md:text-4xl pb-8 text-center md:text-left">
            LET ME <span className="text-[#cd5ff8]">INTRODUCE</span> MYSELF
          </h1>
          <p className="py-4 text-xl">I fell in love with programming and I keep learning every day! 🚀</p>
          <p className="py-4 text-xl">I am fluent in Java, JavaScript, HTML, CSS, and comfortable working with React.js for building modern web applications.</p>
          <p className="py-4 text-xl">My fields of interest include Full Stack Web Development, creating efficient and user-friendly web applications, and exploring new technologies that solve real-world problems.</p>
          <p className="py-4 text-xl">Whenever possible, I also apply my passion for building projects with Node.js, React.js, and learning modern frameworks and tools to become an even better developer.</p>
        </div>

        {/* Right column - Profile Card */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <ProfileCard
            name="Aryan Patel"
            title="Full Stack Web Developer"
            handle="om_6064"
            status="Online"
            contactText="Contact Me"
            avatarUrl="image/WhatsApp Image 2025-07-05 at 2.22.55 PM.jpeg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => navigate("./contact")}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
