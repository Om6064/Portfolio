import { useRef, useEffect } from "react";
import gsap from "gsap";

const DecayCard = ({ image, children, width, height }) => {
  const svgRef = useRef(null);
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cachedCursor = useRef({ ...cursor.current });
  const winsize = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

    const handleResize = () => {
      winsize.current = { width: window.innerWidth, height: window.innerHeight };
    };

    const handleMouseMove = (ev) => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
    };

    const render = () => {
      let targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120),
        0.1
      );
      let targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120),
        0.1
      );
      let targetRz = lerp(
        imgValues.imgTransforms.rz,
        map(cursor.current.x, 0, winsize.current.width, -10, 10),
        0.1
      );

      const bound = 50;
      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz,
        });
      }

      cachedCursor.current = { ...cursor.current };
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={svgRef}
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="relative w-full h-full block [will-change:transform]"
      >
        {/* Removed filter */}
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
        {children}
      </div>
    </div>
  );
};

export default DecayCard;
