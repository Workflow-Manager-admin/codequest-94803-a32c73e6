import React from "react";
import Particles from "react-tsparticles";
import galaxyBg from "../assets/galaxy_bg.png";

/**
 * PUBLIC_INTERFACE
 * GalaxyBackground renders a full-screen animated galaxy background
 * with moving stars, overlays the user's Milky Way image seamlessly, and
 * ensures clear visibility for front UI elements. Uses tsParticles for smooth star animations.
 * The overlay image softly blends into the starfield using a CSS gradient for an immersive UX.
 */
function GalaxyBackground() {
  return (
    <div className="galaxy-bg-root">
      {/* Animated starfield */}
      <Particles
        id="galaxy-stars"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 170, density: { enable: true, area: 600 } },
            color: { value: ["#fff", "#D1E6FA", "#79B3FF", "#ffe980", "#AB8DF7", "#fff8e7"] },
            opacity: { value: 0.87, random: { enable: true, minimumValue: 0.2 } },
            size: { value: 1.6, random: { enable: true, minimumValue: 0.8 } },
            move: { enable: true, speed: 0.36, direction: "none", random: true, outMode: "out" },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.06,
                color: { value: "#fff" }
              }
            }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" }
            }
          }
        }}
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          inset: 0,
          zIndex: 0
        }}
      />
      {/* Milky Way/Galaxy image, softly blended center, faded at edges */}
      <div className="galaxy-bg-image-blend">
        <img
          src={galaxyBg}
          alt="Galaxy Milky Way background"
          draggable={false}
          aria-hidden="true"
          className="galaxy-bg-image"
        />
      </div>
    </div>
  );
}

export default GalaxyBackground;
