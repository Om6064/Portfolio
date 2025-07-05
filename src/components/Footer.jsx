const Footer = () => {
  return (
    <footer className="bg-[#0a0416] py-4 w-full mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-white gap-4">
          <p className="text-center md:text-left">
            Designed and Developed by Aryan Patel
          </p>
          <p className="text-center md:text-left">
            Copyright © 2025 SB
          </p>
          <ul className="flex gap-6">
            <li>
              <i className="ri-github-fill text-xl hover:text-[#cd5ff8] transition-colors"></i>
            </li>
            <li>
              <i className="ri-mail-fill text-xl hover:text-[#cd5ff8] transition-colors"></i>
            </li>
            <li>
              <i className="ri-linkedin-fill text-xl hover:text-[#cd5ff8] transition-colors"></i>
            </li>
            <li>
              <i className="ri-instagram-line text-xl hover:text-[#cd5ff8] transition-colors"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
