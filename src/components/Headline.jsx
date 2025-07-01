import React, { useEffect, useState } from "react";

const Headline = () => {
  const yourtext = [
    ["Web-developer", "#ffffff"],
    ["Front-end-developer", "#ffffff"],
    ["Full-stack-Developer", "#ffffff"]
  ];

  const wait = 300; // typing speed
  const additionalwait = 5; // extra wait after word is typed

  const [text, setText] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const txt = yourtext[y][0].split("");

    const interval = setInterval(() => {
      if (x < txt.length) {
        setText((prev) => prev + txt[x]);
        setX((prev) => prev + 1);
      } else if (x < txt.length + 2 + additionalwait) {
        setX((prev) => prev + 1);
      } else {
        // Next word
        setX(0);
        setY((prev) => (prev + 1) % yourtext.length);
        setText("");
      }
    }, wait);

    return () => clearInterval(interval);
  }, [x, y]); // Re-run when x or y changes

  return (
    <h1
      id="changingText"
      style={{ color: yourtext[y][1], transition: "color 0.3s" }}
    >
      {text}
    </h1>
  );
};

export default Headline;
