const Footer = () => {
  return (
    <footer className="bg-[#0a0416] py-4 w-full bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-white gap-4">
          <p className="text-center md:text-left">
            Designed and Developed by Aryan Patel
          </p>
          <p className="text-center md:text-left">
            Copyright © 2025 AP
          </p>
          <ul className="flex gap-6">
            <li>
              <a href="https://github.com/om6064" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill text-xl hover:text-[#cd5ff8] transition-colors"></i>
              </a>
            </li>
            <li>
              <a href="mailto:aryanpatel.lihodiya@gmail.com">
                <i className="ri-mail-fill text-xl hover:text-[#cd5ff8] transition-colors"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aryan-patel07/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-fill text-xl hover:text-[#cd5ff8] transition-colors"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_om_6064_/" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line text-xl hover:text-[#cd5ff8] transition-colors"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
