import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import React from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={{
        style: {
          height: "394px",
          position: "absolute",
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: -90,
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 10,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "images",
            image: {
              src: "/images/cheese-square.svg",
            },
          },
          size: {
            value: { min: 10, max: 20 },
          },
        },
        detectRetina: true,
      }}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
}
