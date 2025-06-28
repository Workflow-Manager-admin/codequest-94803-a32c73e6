import React, { useRef } from "react";
import Particles from "react-tsparticles";

/**
 * PUBLIC_INTERFACE
 * GalaxyBackground
 * -----------------
 * Renders a fully dynamic, interactive cosmic background based on the visual + palette style guide.
 * Features:
 *   - Swirling nebula clouds with dynamic color blending (purple, blue, magenta, electric teal, with soft core/halo gradients)
 *   - Dense drifting starfield (twinkling, interactive, slightly colored with subtle yellow/magenta/icy blue tints)
 *   - Occasional shooting stars (angled, brief, glowing pale yellow or pale blue streaks)
 *   - Soft, depth-enhancing cosmic fog (haze orbs drifting, blend-modes for vibrance)
 *   - Designed for game UIs: overlays and cards stay readable and harmonious above background
 *
 * Palette/Core Motifs (from style guide):
 * - Deep night navy to violet #190d27, rich purple #7b5ede, electric blue #36c7f5, magenta-pink #e965c6, cyan/teal #56ffe0
 * - Yellow/amber #ffe980 (sparks, stars), white/soft blue-white for star cores
 * - Nebula have pulsing/floating blobs and gradients, not smoke/splatter
 * - Motif: swirling, nebulae center-left & top-right, dense stars below
 */
function GalaxyBackground() {
  const starsRef = useRef();

  // Nebula/Clouds Particle Config
  const nebulaConfig = {
    particles: {
      number: { value: 28, density: { enable: true, area: 1200 } },
      color: {
        value: [
          "#7b5ede",  // main purple
          "#36c7f5",  // electric blue
          "#e965c6",  // magenta
          "#56ffe0",  // teal
          "#bc9afd",  // light purple
          "#fff2"     // translucent white core hints
        ]
      },
      opacity: {
        value: 0.15,
        random: { enable: true, minimumValue: 0.07 },
        animation: { enable: true, speed: 0.88, minimumValue: 0.05, sync: false }
      },
      size: {
        value: 88,
        random: { enable: true, minimumValue: 40 },
        animation: { enable: true, speed: 6, minimumValue: 22, sync: false }
      },
      move: {
        enable: true,
        speed: 0.13,
        direction: "none",
        random: true,
        outModes: "out"
      },
      shape: { type: "circle" },
      links: {
        enable: false
      },
      shadow: {
        enable: true,
        blur: 40,
        color: "#663b96"
      }
    },
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 1
  };

  // Starfield Particle Config
  const starsConfig = {
    particles: {
      number: {
        value: 175,
        density: { enable: true, area: 900 }
      },
      color: {
        value: [
          "#fff",           // main white
          "#ffe980",        // golden-yellow
          "#a2caff",        // pale icy blue
          "#e965c6",        // magenta
          "#36c7f5"         // blue star hint
        ]
      },
      opacity: {
        value: 0.77,
        random: { enable: true, minimumValue: 0.13 },
        animation: { enable: true, speed: 0.49, minimumValue: 0.12, sync: false }
      },
      size: {
        value: 1.5,
        random: { enable: true, minimumValue: 0.666 },
        animation: { enable: true, speed: 1, minimumValue: 0.5, sync: false }
      },
      move: {
        enable: true,
        speed: 0.09,
        direction: "none",
        random: true,
        outModes: "out"
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.16,
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
        repulse: { distance: 120, duration: 0.38 },
        bubble: { distance: 95, duration: 0.42, size: 3.5, opacity: 1 },
        push: { quantity: 4 }
      }
    },
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 2
  };

  // Shooting Stars Particle Config (sporadic, two angles, bright, fast, magenta or blue core)
  const shootingStarsConfig = {
    particles: { number: { value: 0 } },
    emitters: [
      {
        direction: "top-right",
        rate: { quantity: 1, delay: 2.9 },
        size: { width: 0, height: 0 },
        position: { x: 8, y: 97 }, // from bottom left edge
        particles: {
          move: {
            enable: true,
            direction: "top-right",
            speed: { min: 17, max: 22 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.54, max: 0.73 },
            animation: { enable: true, startValue: "max", count: 1, speed: 2.6, sync: false }
          },
          size: {
            value: { min: 1.3, max: 2 },
            animation: { enable: true, startValue: "max", count: 1, speed: 8, sync: false }
          },
          color: {
            value: ["#ffe980", "#a2caff", "#fff", "#bc9afd"] // yellow/blue-white/magenta streaks
          },
          shape: { type: "line" },
          life: {
            duration: { sync: true, value: 1.1 },
            count: 1
          },
          trail: {
            enable: true,
            length: 18,
            fillColor: { value: "#221042" }
          }
        }
      },
      {
        direction: "top-left",
        rate: { quantity: 1, delay: 4.2 },
        size: { width: 0, height: 0 },
        position: { x: 92, y: 98 }, // from near bottom-right
        particles: {
          move: {
            enable: true,
            direction: "top-left",
            speed: { min: 16, max: 20 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.53, max: 0.63 },
            animation: { enable: true, startValue: "max", count: 1, speed: 2, sync: false }
          },
          size: {
            value: { min: 1, max: 1.9 },
            animation: { enable: true, startValue: "max", count: 1, speed: 6, sync: false }
          },
          color: {
            value: ["#fff", "#ffe980", "#36c7f5"]
          },
          shape: { type: "line" },
          life: {
            duration: { sync: true, value: 0.8 },
            count: 1
          },
          trail: {
            enable: true,
            length: 14,
            fillColor: { value: "#120822" }
          }
        }
      }
    ]
  };

  // Cosmic fog/haze (floating, very faint, extra sense of depth)
  const fogConfig = {
    particles: {
      number: { value: 9, density: { enable: true, area: 1500 } },
      color: { value: ["#fff", "#ffe980", "#a0c3ff", "#e965c6", "#bc9afd"] },
      opacity: { value: 0.075, random: { enable: true, minimumValue: 0.025 } },
      size: {
        value: 180,
        random: { enable: true, minimumValue: 88 },
        animation: { enable: true, speed: 1.8, minimumValue: 88, sync: false }
      },
      move: {
        enable: true,
        speed: 0.028,
        direction: "none",
        random: true,
        outModes: "out"
      },
      shape: { type: "circle" }
    },
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 0
  };

  return (
    <div
      className="galaxy-bg-root"
      style={{
        pointerEvents: "none",
        zIndex: 0,
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
        minHeight: "100vh"
      }}
      aria-hidden="true"
      tabIndex={-1}
    >
      {/* Layer 0: Cosmic fog/haze */}
      <Particles
        id="galaxy-fog"
        options={fogConfig}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          filter: "blur(28px) brightness(1.08)",
          zIndex: 1,
          opacity: 0.73
        }}
      />
      {/* Layer 1: Swirling nebula blobs */}
      <Particles
        id="galaxy-nebula"
        options={nebulaConfig}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          filter: "blur(16px) saturate(1.5) brightness(0.99)",
          mixBlendMode: "lighten",
          pointerEvents: "none"
        }}
      />
      {/* Layer 2: Dense starfield */}
      <Particles
        id="galaxy-stars"
        options={starsConfig}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 3,
          pointerEvents: "auto",
          userSelect: "none"
        }}
        ref={starsRef}
      />
      {/* Layer 3: Occasional shooting stars */}
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
