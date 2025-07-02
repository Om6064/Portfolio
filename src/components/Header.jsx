// src/components/Header.js
import { Link } from 'react-router-dom';

const Header = () => {

  // const items = [
  //   { label: "Home", href: "/" },
  //   { label: "About", href: "/about" },
  //   { label: "Project", href: "#" },
  //   { label: "Resume", href: "#" },
  //   { label: "Blogs", href: "#" },
  //   { label: "Contact", href: "#" },
  //   { label: "Git 🐱", href: "https://github.com/om6064" },
  // ];
  return (
    <header className="py-5 absolute w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img src="/image/download (1).png" alt="" className='w-[50px] h-[28px]' />
          </div>
          <div>
              <ul className='flex items-center gap-14 text-xl text-white font-semibold'>
                <Link to={"/"} className='cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400'><i className="ri-home-7-line"></i> Home</Link>
                <Link to={"/about"} className='cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400'><i class="ri-user-line"></i> About</Link>
                <Link to={"/projects"} className='cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400'><i class="ri-broadcast-line"></i> Project</Link>
                <Link  className='cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400'><i class="ri-booklet-line"></i> Resume</Link>
                <Link  className='cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400'><i class="ri-news-line"></i> Blogs</Link>
                <Link  className='cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400'><i class="ri-phone-fill"></i> Contact</Link>
                <Link  className='cursor-pointer px-3 py-2 rounded-xl mb-2 hover:translate-y-[-2px] transition-all  bg-[#934cce5e]'><i class="ri-github-fill"></i> Git</Link>
              </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
