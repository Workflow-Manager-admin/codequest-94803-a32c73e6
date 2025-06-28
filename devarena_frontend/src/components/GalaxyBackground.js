import React, { useRef } from "react";
import Particles from "react-tsparticles";

// PUBLIC_INTERFACE
/**
 * GalaxyBackground
 * ---------------
 * Renders the dynamic layered galaxy background using tsParticles, fully matching the reference palette/style/motifs.
 * Features:
 *   - Swirling nebulae (purple, blue, magenta, teal, soft glow)
 *   - Layered, blinking stars (dense below, variance in hue/size)
 *   - Shooting stars (random, realistic, streaking angles)
 *   - Depth fog and cosmic dust (large, faint, slow floaters)
 *   - Responsive, z-index-safe: entire app overlays cleanly, never masked/blurry at root
 * Palette/Motifs: Deep navy #120e24, rich purple #6a3de2, electric blue #39cafc, pink-magenta #e965c6, teal #56ffe0,
 *                 pale amber #ffe980, white. Swirling nebula left/upper-right, starfield bottom, luminous halos.
 */
function GalaxyBackground() {
  const particlesNebula = useRef();
  const particlesStars = useRef();
  const particlesFog = useRef();
  const particlesShooting = useRef();

  // Nebula - swirling, slow, overlapping, wide, vibrant, glowing (mostly purple, blue, magenta, teal, with white/amber halos)
  const nebulaOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 1,
    particles: {
      number: { value: 23, density: { enable: true, area: 1450 } },
      color: { value: [
        "#6a3de2",
        "#39cafc",
        "#e965c6",
        "#56ffe0",
        "#ffe980",
        "#eae1ff",
        "#ffd5f8",
        "#b393e6",
      ] },
      opacity: {
        value: 0.15,
        random: { enable: true, minimumValue: 0.09 },
        animation: { enable: true, speed: 0.7, minimumValue: 0.062, sync: false },
      },
      size: {
        value: 88,
        random: { enable: true, minimumValue: 34 },
        animation: { enable: true, speed: 7.1, minimumValue: 25, sync: false }
      },
      move: {
        enable: true,
        speed: 0.11,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out"
      },
      shape: { type: "circle" },
      links: { enable: false },
      shadow: { enable: true, blur: 61, color: "#572d93" }
    }
  };

  // Starfield - blinking, small, various colors, dense below (interactive)
  const starsOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 2,
    particles: {
      number: { value: 170, density: { enable: true, area: 880 } },
      color: { value: [
        "#fff",
        "#ffe980",
        "#a2caff",
        "#e965c6",
        "#39cafc",
        "#ffd5f8"
      ] },
      opacity: {
        value: 0.9,
        random: { enable: true, minimumValue: 0.22 },
        animation: { enable: true, speed: 1.15, minimumValue: 0.13, sync: false }
      },
      size: {
        value: 1.7,
        random: { enable: true, minimumValue: 0.63 },
        animation: { enable: true, speed: 1.1, minimumValue: 0.34, sync: false }
      },
      move: {
        enable: true,
        speed: 0.11,
        direction: "none",
        random: true,
        outModes: "out"
      },
      shape: { type: ["circle", "star"] },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.21,
          color: { value: "#fff" }
        }
      },
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
        repulse: { distance: 105, duration: 0.41 },
        bubble: { distance: 85, duration: 0.36, size: 2.7, opacity: 1 },
        push: { quantity: 3 }
      }
    }
  };

  // Shooting Stars - occasional, bright, diagonal, multi-color (active galaxy sparkle)
  const shootingOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 7,
    particles: { number: { value: 0 } },
    emitters: [
      {
        direction: "top-right",
        rate: { quantity: 1, delay: 2.2 },
        size: { width: 0, height: 0 },
        position: { x: 7, y: 96 },
        particles: {
          move: {
            enable: true,
            direction: "top-right",
            speed: { min: 13, max: 21 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.49, max: 0.77 },
            animation: { enable: true, startValue: "max", count: 1, speed: 2.3 }
          },
          size: {
            value: { min: 1.2, max: 2 },
            animation: { enable: true, startValue: "max", count: 1, speed: 6 }
          },
          color: { value: ["#ffe980", "#e965c6", "#39cafc", "#fff"] },
          shape: { type: "line" },
          life: { duration: { sync: true, value: 0.88 }, count: 1 },
          trail: {
            enable: true,
            length: 22,
            fillColor: { value: "#251546" }
          }
        }
      },
      {
        direction: "top-left",
        rate: { quantity: 1, delay: 4.3 },
        size: { width: 0, height: 0 },
        position: { x: 93, y: 98 },
        particles: {
          move: {
            enable: true,
            direction: "top-left",
            speed: { min: 13, max: 19 },
            straight: true,
            outModes: { default: "destroy" }
          },
          opacity: {
            value: { min: 0.43, max: 0.61 },
            animation: { enable: true, startValue: "max", count: 1, speed: 1.9 }
          },
          size: {
            value: { min: 1, max: 1.62 },
            animation: { enable: true, startValue: "max", count: 1, speed: 5.3 }
          },
          color: { value: ["#fff", "#6a3de2", "#ffe980"] },
          shape: { type: "line" },
          life: { duration: { sync: true, value: 0.99 }, count: 1 },
          trail: {
            enable: true,
            length: 17,
            fillColor: { value: "#120e24" }
          }
        }
      }
    ]
  };

  // Cosmic Fog - large, faint orbs, ultra-blur, depth below nebula
  const fogOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    detectRetina: true,
    zLayers: 0,
    particles: {
      number: { value: 7, density: { enable: true, area: 1770 } },
      color: {
        value: [
          "#e9e4fd",
          "#ffe980",
          "#e965c6",
          "#39cafc",
          "#b393e6",
          "#a2bfff"
        ]
      },
      opacity: { value: 0.068, random: { enable: true, minimumValue: 0.022 } },
      size: {
        value: 170,
        random: { enable: true, minimumValue: 70 },
        animation: { enable: true, speed: 1.3, minimumValue: 48, sync: false }
      },
      move: {
        enable: true,
        speed: 0.017,
        direction: "none",
        random: true,
        outModes: "out"
      },
      shape: { type: "circle" }
    }
  };

  // Compose all layers, tuned z-index, safe sizing
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
        background: "transparent"
      }}
      aria-hidden="true"
      tabIndex={-1}
    >
      {/* Layer 0: Depth cosmic fog/haze */}
      <Particles
        id="galaxy-fog"
        options={fogOptions}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          filter: "blur(34px) brightness(1.12)",
          zIndex: 1,
          opacity: 0.55
        }}
        ref={particlesFog}
      />
      {/* Layer 1: Swirling nebula blobs */}
      <Particles
        id="galaxy-nebula"
        options={nebulaOptions}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          filter: "blur(19px) saturate(1.6) brightness(0.93)",
          mixBlendMode: "lighten",
          pointerEvents: "none"
        }}
        ref={particlesNebula}
      />
      {/* Layer 2: Dense, interactive, twinkling stellar field */}
      <Particles
        id="galaxy-stars"
        options={starsOptions}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 3,
          pointerEvents: "auto",
          userSelect: "none"
        }}
        ref={particlesStars}
      />
      {/* Layer 3: Occasional shooting stars (screen blend) */}
      <Particles
        id="galaxy-shooting-stars"
        options={shootingOptions}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 7,
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
        ref={particlesShooting}
      />
    </div>
  );
}

export default GalaxyBackground;
