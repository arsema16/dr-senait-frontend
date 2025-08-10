import React, { useEffect, useState } from "react";

const IntroPage = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowLine(true), 1500); // start line after text
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      onFinish(); // instantly finish when fading out
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
        transition: "opacity 1s ease",
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Text */}
      <h1
        style={{
          fontFamily: '"Federo", sans-serif',
          fontSize: "2rem",
          fontWeight: 400,
          letterSpacing: "2px",
          color: "#444",
          animation: "fadeUp 1.5s ease forwards",
          marginBottom: "1.5rem",
        }}
      >
        YOUR SMILE, OUR CANVAS
      </h1>

      {/* Center-to-ends expanding line */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "2px",
          backgroundColor: "#ccc", // base faint line
          overflow: "hidden",
        }}
      >
        {showLine && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              height: "100%",
              width: "0%",
              backgroundColor: "#000", // black animated line
              transform: "translateX(-50%)",
              animation: "fillLineFromCenter 1.5s ease forwards",
            }}
          ></div>
        )}
      </div>

      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fillLineFromCenter {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
      </style>
    </div>
  );
};

export default IntroPage;
