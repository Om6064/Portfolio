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
          <p className="my-4 text-lg md:text-xl text-center md:text-left">
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          </p>

          <p className="my-4 text-lg md:text-xl text-center md:text-left">
            I am fluent in classics like C++, Javascript and Go.
          </p>

          <p className="my-4 text-lg md:text-xl text-center md:text-left">
            My field of Interest's are building new Web Technologies and Products and also in areas related to Blockchain.
          </p>

          <p className="my-4 text-lg md:text-xl text-center md:text-left">
            Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Next.js.
          </p>
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
