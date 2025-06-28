import React, { useRef, useCallback } from "react";
import Particles from "react-tsparticles";

/**
 * GalaxyBackground
 * ================
 * - Fully dynamic, multi-layer cosmic universe simulation as animated app background.
 * - Inspired by attached reference image and style guide: swirling nebulae, color gradients, drifting starfields,
 *   random shooting stars, and interactive cosmic motes, with overlay-safe voids.
 * - Uses tsParticles for high-performance layer compositing and effects.
 *
 * Palette:
 *   Deep Black:   #06071a | Overlay Void: #101020
 *   Nebula Violet: #a633ec, #8532b7, #cc47ff
 *   Electric Blue: #30d2fa, #37a9ff, #4fc3f7
 *   Magenta:      #f92af7, #e017d6, #c030b0
 *   Turquoise:    #39e6f2, #42b6d7
 *   Star:         #fffceb, #ffe06b, #fff
 *   Glows:        #ff9880, #ffc1a6, #b393e6
 *   Shadow cloud: #21223f
 * 
 * Motifs: Swirling nebula fog, planet glow zones, twinkling starfield, shooting stars, deep black/blue voids for UI
 */

const COLORS = {
  black: "#06071a",
  void: "#101020",
  violet: "#a633ec",
  deepPurple: "#8532b7",
  magenta: "#f92af7",
  magentaDeep: "#c030b0",
  nebulaBlue: "#30d2fa",
  brightBlue: "#37a9ff",
  turquoise: "#39e6f2",
  cloudGray: "#21223f",
  starYellow: "#ffe06b",
  starWhite: "#fffceb",
  warmGlow: "#ff9880",
  rimGlow: "#b393e6"
};

function GalaxyBackground() {
  const nebulaRef = useRef();
  const starsRef = useRef();
  const shootingRef = useRef();
  const motesRef = useRef();

  // NEBULA swirling magenta/violet/blue cloud layer (uses slow noise for motion, big gradients, strong glow)
  const nebulaOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 1,
    particles: {
      number: { value: 16, density: { enable: true, area: 2100 } },
      color: {
        value: [
          COLORS.violet,
          COLORS.magenta,
          COLORS.nebulaBlue,
          COLORS.brightBlue,
          COLORS.turquoise,
          COLORS.deepPurple,
          COLORS.magentaDeep,
          COLORS.warmGlow
        ]
      },
      opacity: {
        value: 0.16,
        random: { enable: true, minimumValue: 0.08 },
        animation: {
          enable: true,
          speed: 0.2,
          minimumValue: 0.05,
          sync: false
        }
      },
      size: {
        value: 148,
        random: { enable: true, minimumValue: 52 },
        animation: {
          enable: true,
          speed: 7.5,
          minimumValue: 40,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.07,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
        noise: {
          enable: true,
          delay: { min: 0.22, max: 0.65 }
        }
      },
      shape: { type: "circle" },
      links: { enable: false },
      shadow: {
        enable: true,
        blur: 95,
        color: COLORS.violet
      }
      // Blendmode+blur for soft nebulae, but non-blurry root
    }
  };

  // STARFIELD layer: Drifting, gentle parallax, responsive star/interactivity glow
  const starsOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 3,
    particles: {
      number: { value: 340, density: { enable: true, area: 1500 } },
      color: {
        value: [
          COLORS.starWhite,
          COLORS.starYellow,
          COLORS.rimGlow,
          COLORS.nebulaBlue,
          COLORS.magenta,
          COLORS.brightBlue,
          "#fff"
        ]
      },
      opacity: {
        value: 0.81,
        random: { enable: true, minimumValue: 0.14 },
        animation: {
          enable: true,
          speed: 1.6,
          minimumValue: 0.041,
          sync: false
        }
      },
      size: {
        value: 1.5,
        random: { enable: true, minimumValue: 0.41 },
        animation: {
          enable: true,
          speed: 2.1,
          minimumValue: 0.25,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.12,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
        parallax: {
          enable: true,
          smooth: 15,
          force: 28
        }
      },
      shape: { type: ["circle", "star"] },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.18,
          color: { value: "#fff" }
        }
      },
      stroke: { width: 0 },
      links: { enable: false }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: ["repulse", "bubble"]
        },
        onClick: {
          enable: true,
          mode: ["push", "bubble"]
        },
        resize: true
      },
      modes: {
        repulse: { distance: 111, duration: 0.44 },
        bubble: { distance: 99, duration: 0.36, size: 4, opacity: 1, color: COLORS.nebulaBlue },
        push: { quantity: 4 }
      }
    }
  };

  // SHOOTING STARS: Random, flashy diagonal meteors (screen blend). Appears several times per minute, mix of angles/colors
  const shootingOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 7,
    particles: { number: { value: 0 } },
    emitters: [
      {
        direction: "top-right",
        rate: { quantity: 1, delay: { min: 3.1, max: 6.1 } }, // every ~4sec random
        size: { width: 0, height: 0 },
        position: { x: 9, y: 98 },
        particles: {
          move: {
            enable: true,
            direction: "top-right",
            speed: { min: 13, max: 22 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.49, max: 0.92 },
            animation: { enable: true, startValue: "max", count: 1, speed: 2.8 }
          },
          size: {
            value: { min: 1.5, max: 2.6 },
            animation: { enable: true, startValue: "max", count: 1, speed: 6 }
          },
          color: { value: [COLORS.starWhite, COLORS.starYellow, COLORS.magenta, COLORS.brightBlue] },
          shape: { type: "line" },
          life: { duration: { sync: true, value: 0.96 }, count: 1 },
          trail: {
            enable: true,
            length: 30,
            fillColor: { value: COLORS.void }
          }
        }
      },
      {
        direction: "top-left",
        rate: { quantity: 1, delay: { min: 6.6, max: 9.8 } },
        size: { width: 0, height: 0 },
        position: { x: 90, y: 97 },
        particles: {
          move: {
            enable: true,
            direction: "top-left",
            speed: { min: 14, max: 19 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.41, max: 0.6 },
            animation: { enable: true, startValue: "max", count: 1, speed: 2 }
          },
          size: {
            value: { min: 1.3, max: 2.1 },
            animation: { enable: true, startValue: "max", count: 1, speed: 5 }
          },
          color: { value: ["#fff", COLORS.violet, COLORS.nebulaBlue, COLORS.starYellow] },
          shape: { type: "line" },
          life: { duration: { sync: true, value: 1.15 }, count: 1 },
          trail: {
            enable: true,
            length: 17,
            fillColor: { value: COLORS.black }
          }
        }
      }
    ]
  };

  // INTERACTIVE MOTES - floating cosmic motes, faster, react to mouse/tap
  const motesOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    zLayers: 6,
    detectRetina: true,
    particles: {
      number: { value: 27, density: { enable: true, area: 970 } },
      color: {
        value: [
          COLORS.turquoise,
          COLORS.brightBlue,
          COLORS.magenta,
          COLORS.rimGlow,
          "#fff"
        ]
      },
      opacity: {
        value: 0.25,
        random: { enable: true, minimumValue: 0.12 },
        animation: {
          enable: true,
          speed: 1.1,
          minimumValue: 0.08,
          sync: false
        }
      },
      size: {
        value: 5.2,
        random: { enable: true, minimumValue: 1.5 },
        animation: {
          enable: true,
          speed: 1.9,
          minimumValue: 0.92,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.16,
        direction: "none",
        random: true,
        outModes: "out",
        noise: {
          enable: true,
          delay: { min: 0.16, max: 0.45 }
        }
      },
      shape: { type: "circle" },
      links: { enable: false }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: ["bubble", "repulse"] },
        onClick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        bubble: { distance: 97, duration: 0.6, size: 12, opacity: 0.9 },
        repulse: { distance: 120, duration: 0.41 }
      }
    }
  };

  // PARTICLES INIT: (removed for react-tsparticles v1.x compatibility)

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
        minHeight: "100vh",
        background: `radial-gradient(ellipse at 61% 34%, rgba(12,16,61,0.52) 0%, rgba(6,7,26,0.91) 87%), ${COLORS.black}` // soft vignette
      }}
      aria-hidden="true"
      tabIndex={-1}
    >

      {/* Layer 1: Nebulae (swirling fog, prominent, blurred, colorful) */}
      <Particles
        id="galaxy-nebula"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          filter: "blur(17px) saturate(1.5) brightness(0.98)",
          zIndex: 1,
          pointerEvents: "none",
          mixBlendMode: "lighter",
          opacity: 0.85
        }}
        options={nebulaOptions}
        ref={nebulaRef}
      />

      {/* Layer 2: Starfield (twinkling, moving, interactive, color graded) */}
      <Particles
        id="galaxy-stars"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 3,
          pointerEvents: "auto",
          userSelect: "none",
          opacity: 0.75,
          filter: "brightness(1.11) blur(0.18px) drop-shadow(0 3.5px 15px #fff3) grayscale(0.05)"
        }}
        options={starsOptions}
        ref={starsRef}
      />

      {/* Layer 3: Shooting stars (screen blend, rare, random directions) */}
      <Particles
        id="galaxy-shooting-stars"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 7,
          pointerEvents: "none",
          mixBlendMode: "screen",
          opacity: 0.88,
          filter: "blur(1.1px) brightness(1.08) contrast(1.14)"
        }}
        options={shootingOptions}
        ref={shootingRef}
      />

      {/* Layer 4: Interactive cosmic motes/flares (dynamic, user-interactive) */}
      <Particles
        id="galaxy-motes"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 6,
          pointerEvents: "auto",
          opacity: 0.65
        }}
        options={motesOptions}
        ref={motesRef}
      />

      {/* Overlay-safe - leave black voids behind UI zones by default */}
    </div>
  );
}

export default GalaxyBackground;
