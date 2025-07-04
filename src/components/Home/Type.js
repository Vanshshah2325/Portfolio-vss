import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "React.js Developer",
          "Node.js Backend Developer",
          "Next.js Enthusiast",
          "API Integration Expert",
          "JavaScript Developer",
          "Web App Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
