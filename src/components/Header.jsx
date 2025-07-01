// src/components/Header.js
import { Link } from 'react-router-dom';
import GooeyNav from './GooeyNav';




const Header = () => {

  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Project", href: "#" },
    { label: "Resume", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Git 🐱", href: "https://github.com/om6064" },
  ];
  return (
    <header className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img src="/image/download (1).png" alt="" className='w-[50px] h-[28px]' />
          </div>
          <div className='flex' style={{ position: 'relative' }}>
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
