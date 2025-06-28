import React, { useRef } from "react";
import Particles from "react-tsparticles";
// Only use the latest attached galaxy background image. Remove/comment all previous galaxy backgrounds.
import galaxyBg from "../assets/20250628_154453_galaxt_.png";
// import galaxyBgOld from "../assets/20250628_153355_galaxt_.png"; // Deprecated: previous image, no longer used.

/**
 * PUBLIC_INTERFACE
 * GalaxyBackground overlays a visually rich animated galaxy scene:
 * - Main provided galaxy image as center background
 * - Shooting stars (falling streaks with trails)
 * - Animated nebula/electric cloud overlays (pulsing particle fog)
 * - Interactive cosmic twinkle particles (hover/click: repulse/pulse)
 * 
 * Visual priorities:
 * - Galaxy image remains prominent as the deepest layer, softly blended
 * - All animated overlays use opacity, blur, blend modes for harmony
 * - All content/UI above remains fully legible
 */
function GalaxyBackground() {
  const particlesRef = useRef();

  // Shooting Star customizer: helper for dynamic shooting stars
  // (react-tsparticles v1.x does not support custom presets, but config works)
  const shootingStarsConfig = {
    particles: {
      number: { value: 0 },
    },
    emitters: [
      {
        direction: "top-right",
        rate: { quantity: 1, delay: 2.8 },
        size: { width: 0, height: 0 },
        position: { x: 5, y: 95 }, // start from bottom-left edge
        particles: {
          move: {
            enable: true,
            direction: "top-right",
            speed: { min: 18, max: 22 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.58, max: 0.68 },
            animation: {
              enable: true,
              startValue: "max",
              count: 1,
              speed: 2.4,
              sync: false
            }
          },
          size: {
            value: { min: 1.2, max: 1.7 },
            animation: {
              enable: true,
              startValue: "max",
              count: 1,
              speed: 7,
              sync: false
            }
          },
          color: {
            value: ["#fff", "#ffeedd", "#acd3ff"]
          },
          shape: { type: "line" },
          life: {
            duration: { sync: true, value: 0.8 },
            count: 1
          },
          trail: {
            enable: true,
            length: 15,
            fillColor: { value: "#232142" }
          }
        }
      },
      {
        direction: "top-left",
        rate: { quantity: 1, delay: 4.35 },
        size: { width: 0, height: 0 },
        position: { x: 95, y: 92 }, // start from bottom-right edge
        particles: {
          move: {
            enable: true,
            direction: "top-left",
            speed: { min: 13, max: 16 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.53, max: 0.65 },
            animation: {
              enable: true,
              startValue: "max",
              count: 1,
              speed: 1.9,
              sync: false
            }
          },
          size: {
            value: { min: 1.1, max: 1.5 },
            animation: {
              enable: true,
              startValue: "max",
              count: 1,
              speed: 4.3,
              sync: false
            }
          },
          color: {
            value: ["#fff", "#ffeeff", "#F2E8F7"]
          },
          shape: { type: "line" },
          life: {
            duration: { sync: true, value: 1 },
            count: 1
          },
          trail: {
            enable: true,
            length: 13,
            fillColor: { value: "#18062C" }
          }
        }
      }
    ]
  };

  // Nebula/Electric Cloud config (use "links" as foggy cloud and blurred colored orbs)
  const nebulaConfig = {
    particles: {
      number: { value: 42, density: { enable: true, area: 900 } },
      color: { value: ["#a36cf8", "#3a93dd", "#8d73e6", "#6fc2ff", "#fff2"] },
      opacity: {
        value: 0.19,
        random: { enable: true, minimumValue: 0.09 },
        animation: {
          enable: true,
          speed: 0.55,
          minimumValue: 0.07,
          sync: false
        }
      },
      size: {
        value: 54,
        random: { enable: true, minimumValue: 20 },
        animation: {
          enable: true,
          speed: 8.6,
          minimumValue: 15,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        outModes: "out"
      },
      shape: {
        type: "circle"
      },
      links: {
        enable: true,
        distance: 150,
        color: "#3a93dd99",
        opacity: 0.06,
        width: 3.5
      },
      stroke: { width: 0 },
      shadow: {
        enable: true,
        blur: 18,
        color: "#675edd",
      }
    },
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    zLayers: 1
  };

  // Foreground cosmic twinkle & interactive particles
  const mainParticlesConfig = {
    particles: {
      number: {
        value: 162,
        density: { enable: true, area: 680 }
      },
      color: { value: ["#fff", "#D1E6FA", "#ffe980", "#AB8DF7", "#79B3FF"] },
      opacity: {
        value: 0.82,
        random: { enable: true, minimumValue: 0.15 },
        animation: {
          enable: true,
          speed: 0.66,
          minimumValue: 0.09,
          sync: false
        }
      },
      size: {
        value: 1.7,
        random: { enable: true, minimumValue: 0.7 },
        animation: {
          enable: true,
          speed: 1.65,
          minimumValue: 0.6,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.26,
        direction: "none",
        random: true,
        outModes: "out"
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.11,
          color: { value: "#fff" }
        }
      },
      shape: { type: ["circle", "star"] },
      stroke: { width: 0 }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: ["repulse", "bubble"] },
        onClick: { enable: true, mode: ["push", "bubble"] },
        resize: true
      },
      modes: {
        repulse: { distance: 145, duration: 0.46 },
        bubble: {
          distance: 104,
          duration: 0.42,
          size: 6,
          opacity: 0.94
        },
        push: { quantity: 4 },
      }
    },
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    zLayers: 2
  };

  // Handlers
  // NOTE: react-tsparticles v1.x does not support init/loadFull, so we omit this.

  return (
    <div className="galaxy-bg-root" style={{
      pointerEvents: "none",
      zIndex: 0, // always at back, under everything else
      position: "fixed",
      inset: 0
    }}>
      {/* Layer 1: Galaxy background now set via CSS only. The .galaxy-bg-root provides the image as a true background. */}

      {/* Layer 2: Animated Nebula/electric clouds (blur, purple/blue, low opacity) */}
      <Particles
        id="galaxy-nebula"
        options={nebulaConfig}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          filter: "blur(19px) saturate(1.6) brightness(0.99)",
          userSelect: "none",
          pointerEvents: "none",
          mixBlendMode: "lighten"
        }}
      />

      {/* Layer 3: Cosmic starfield (twinkle, interactive) */}
      <Particles
        id="galaxy-stars"
        options={mainParticlesConfig}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 3,
          pointerEvents: "auto", // allow interaction
          userSelect: "none"
        }}
        ref={particlesRef}
      />

      {/* Layer 4: Shooting stars rendered on top, quickly fading */}
      <Particles
        id="galaxy-shooting-stars"
        options={shootingStarsConfig}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 7,
          pointerEvents: "none",
          mixBlendMode: "screen"
        }}
      />
    </div>
  );
}

export default GalaxyBackground;
