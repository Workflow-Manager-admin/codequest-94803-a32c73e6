import React, { useMemo, useRef } from "react";
import Particles from "react-tsparticles";

/**
 * GalaxyBackground
 * ===============
 * Fully animated, interactive, multi-layered universe for DevArena.
 * Inspired by provided image palette & motif:
 * - Swirling magenta/blue/cyan nebula, color zone glows, layered parallax starfields,
 * - Occasional cosmic shooting stars (different angles/colors/lengths),
 * - Interactive parallax cosmic motes, all with motion & visible depth.
 * - Fantasy/universe style with harmony to glassmorphic UI.
 *
 * Palette:
 *   Deep Space:   #06071a | Universe Void: #101020
 *   Nebulae:      #a633ec, #8532b7, #cc47ff, #30d2fa, #37a9ff, #4fc3f7, #39e6f2, #42b6d7
 *   Magenta:      #f92af7, #e017d6, #c030b0
 *   Stars/Glow:   #fffceb, #ffe06b, #fff, #ff9880, #ffc1a6, #b393e6
 *   Shadow cloud: #21223f
 *   UI-void:      #101020  (matches dark UI panel backgrounds)
 */

const COSMOS_COLORS = {
  deepBlack: "#06071a",
  universeVoid: "#101020",
  nebulaViolet: "#a633ec",
  nebulaDeepPurple: "#8532b7",
  nebulaMauve: "#cc47ff",
  nebulaBlue: "#30d2fa",
  nebulaBrightBlue: "#37a9ff",
  nebulaSky: "#4fc3f7",
  magenta: "#f92af7",
  magentaDeep: "#c030b0",
  electricBlue: "#39e6f2",
  turquoise: "#42b6d7",
  cloudGray: "#21223f",
  goldStar: "#ffe06b",
  whiteStar: "#fffceb",
  rimGlow: "#b393e6",
  warmGlow: "#ff9880",
  blendPink: "#ffc1a6",
  starWhite: "#fff"
};

// Full BG area settings
const GALAXY_SIZE_STYLE = {
  pointerEvents: "none",
  zIndex: 0,
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100vh",
  minWidth: "100vw",
  minHeight: "100vh",
  background: `radial-gradient(ellipse at 61% 34%, rgba(12,16,61,0.52) 0%, rgba(6,7,26,0.91) 87%), ${COSMOS_COLORS.deepBlack}`
};

function GalaxyBackground() {
  const nebulaRef = useRef();
  const parallaxRef = useRef();
  const shootingRef = useRef();
  const motesRef = useRef();

  // Layer 1: Animated NEBULA (deep glow swirls, slow large soft)
  const nebulaOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    zLayers: 1,
    detectRetina: true,
    particles: {
      number: { value: 12, density: { enable: true, area: 2100 } },
      color: {
        value: [
          COSMOS_COLORS.nebulaViolet,
          COSMOS_COLORS.magenta,
          COSMOS_COLORS.nebulaBlue,
          COSMOS_COLORS.nebulaMauve,
          COSMOS_COLORS.nebulaBrightBlue,
          COSMOS_COLORS.deepBlack,
          COSMOS_COLORS.nebulaSky,
          COSMOS_COLORS.turquoise,
          COSMOS_COLORS.electricBlue
        ]
      },
      opacity: {
        value: 0.195,
        random: { enable: true, minimumValue: 0.11 },
        animation: { enable: true, speed: 0.1, minimumValue: 0.07, sync: false }
      },
      size: {
        value: 188,
        random: { enable: true, minimumValue: 73 },
        animation: { enable: true, speed: 6.5, minimumValue: 34, sync: false }
      },
      move: {
        enable: true,
        speed: 0.08,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
        noise: { enable: true, delay: { min: 0.24, max: 0.51 } }
      },
      shape: { type: "circle" },
      links: { enable: false },
      shadow: { enable: true, blur: 85, color: COSMOS_COLORS.nebulaViolet }
    }
  }), []);

  // Layer 2: STARFIELD (twinkling, layered, subtle drifting, interactive)
  const parallaxOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    zLayers: 3,
    detectRetina: true,
    particles: {
      number: { value: 411, density: { enable: true, area: 1400 } },
      color: {
        value: [
          COSMOS_COLORS.whiteStar,
          COSMOS_COLORS.goldStar,
          COSMOS_COLORS.rimGlow,
          COSMOS_COLORS.nebulaBlue,
          COSMOS_COLORS.magenta,
          COSMOS_COLORS.nebulaBrightBlue,
          "#f8fafc",
          "#fff"
        ]
      },
      opacity: {
        value: 0.72,
        random: { enable: true, minimumValue: 0.14 },
        animation: { enable: true, speed: 1.38, minimumValue: 0.04, sync: false }
      },
      size: {
        value: 1.67,
        random: { enable: true, minimumValue: 0.38 },
        animation: { enable: true, speed: 2.19, minimumValue: 0.21, sync: false }
      },
      move: {
        enable: true,
        speed: 0.085,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
        parallax: { enable: true, smooth: 20, force: 33 }
      },
      shape: { type: ["circle", "star"] },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.19,
          color: { value: COSMOS_COLORS.starWhite }
        }
      },
      links: { enable: false }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: ["repulse", "bubble"] },
        onClick: { enable: true, mode: ["push", "bubble"] },
        resize: true
      },
      modes: {
        repulse: { distance: 102, duration: 0.44 },
        bubble: { distance: 101, duration: 0.46, size: 4.2, opacity: 0.91, color: COSMOS_COLORS.turquoise },
        push: { quantity: 3 }
      }
    }
  }), []);

  // Layer 3: SHOOTING STARS (rare, animated, diagonal, layered, colorful)
  const shootingOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 7,
    particles: { number: { value: 0 } },
    emitters: [
      {
        direction: "top-right",
        rate: { quantity: 1, delay: { min: 2.9, max: 7.9 } },
        size: { width: 0, height: 0 },
        position: { x: 8, y: 93 },
        particles: {
          move: {
            enable: true,
            direction: "top-right",
            speed: { min: 12, max: 19 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.59, max: 0.97 },
            animation: { enable: true, startValue: "max", count: 1, speed: 2.1 }
          },
          size: {
            value: { min: 1.3, max: 2.6 },
            animation: { enable: true, startValue: "max", count: 1, speed: 4.4 }
          },
          color: { value: [COSMOS_COLORS.starWhite, COSMOS_COLORS.goldStar, COSMOS_COLORS.nebulaSky, COSMOS_COLORS.magenta, COSMOS_COLORS.nebulaViolet] },
          shape: { type: "line" },
          life: { duration: { sync: true, value: 1.27 }, count: 1 },
          trail: { enable: true, length: 37, fillColor: { value: COSMOS_COLORS.universeVoid } }
        }
      },
      {
        direction: "top-left",
        rate: { quantity: 1, delay: { min: 7.5, max: 14.7 } },
        size: { width: 0, height: 0 },
        position: { x: 91, y: 95 },
        particles: {
          move: {
            enable: true,
            direction: "top-left",
            speed: { min: 15, max: 23 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.33, max: 0.66 },
            animation: { enable: true, startValue: "max", count: 1, speed: 2.2 }
          },
          size: {
            value: { min: 1.1, max: 2.3 },
            animation: { enable: true, startValue: "max", count: 1, speed: 4.8 }
          },
          color: { value: [COSMOS_COLORS.starWhite, COSMOS_COLORS.nebulaBrightBlue, COSMOS_COLORS.nebulaBlue, COSMOS_COLORS.goldStar] },
          shape: { type: "line" },
          life: { duration: { sync: true, value: 1.7 }, count: 1 },
          trail: { enable: true, length: 19, fillColor: { value: COSMOS_COLORS.deepBlack } }
        }
      }
    ]
  }), []);

  // Layer 4: INTERACTIVE COSMIC MOTES (reactive, middle z-index, color variety, semi-glow)
  const motesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    zLayers: 6,
    detectRetina: true,
    particles: {
      number: { value: 34, density: { enable: true, area: 990 } },
      color: {
        value: [
          COSMOS_COLORS.turquoise,
          COSMOS_COLORS.nebulaBrightBlue,
          COSMOS_COLORS.magenta,
          COSMOS_COLORS.rimGlow,
          COSMOS_COLORS.blendPink,
          COSMOS_COLORS.electricBlue,
          "#fff"
        ]
      },
      opacity: {
        value: 0.28,
        random: { enable: true, minimumValue: 0.14 },
        animation: { enable: true, speed: 1.25, minimumValue: 0.07, sync: false }
      },
      size: {
        value: 6.4,
        random: { enable: true, minimumValue: 1.3 },
        animation: { enable: true, speed: 1.77, minimumValue: 0.61, sync: false }
      },
      move: {
        enable: true,
        speed: 0.21,
        direction: "none",
        random: true,
        outModes: "out",
        noise: { enable: true, delay: { min: 0.18, max: 0.41 } }
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
        bubble: { distance: 93, duration: 0.73, size: 13.5, opacity: 1 },
        repulse: { distance: 120, duration: 0.43 }
      }
    }
  }), []);

  // Parallax effect for depth on mouse-move (all main particle layers get it natively)
  // All layers positioned absolute/fixed, transparencies blend multiply/lighten

  return (
    <div
      className="galaxy-bg-root"
      style={GALAXY_SIZE_STYLE}
      aria-hidden="true"
      tabIndex={-1}
    >
      {/* Layer 1: Nebulae - prominent, softly blended, deepest z-index */}
      <Particles
        id="galaxy-nebula"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          filter: "blur(22px) saturate(1.37) brightness(0.87)",
          zIndex: 1,
          pointerEvents: "none",
          mixBlendMode: "lighten",
          opacity: 0.60
        }}
        options={nebulaOptions}
        ref={nebulaRef}
      />

      {/* Layer 2: Parallax starfield - high count, motion/interactive */}
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
          opacity: 0.80,
          filter: "brightness(1.08) blur(0.17px) drop-shadow(0 3.5px 16px #fff5)"
        }}
        options={parallaxOptions}
        ref={parallaxRef}
      />

      {/* Layer 3: Shooting stars - appears every few seconds, different directions/colors */}
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
          opacity: 0.76,
          filter: "blur(1.2px) brightness(1.12) contrast(1.20)"
        }}
        options={shootingOptions}
        ref={shootingRef}
      />

      {/* Layer 4: Interactive parallax cosmic motes */}
      <Particles
        id="galaxy-motes"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 6,
          pointerEvents: "auto",
          opacity: 0.71
        }}
        options={motesOptions}
        ref={motesRef}
      />
      {/* Overlay-safe voids handled via UI; galaxy never covers overlay/modal area */}
    </div>
  );
}

export default GalaxyBackground;
