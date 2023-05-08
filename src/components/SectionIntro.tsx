import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// const SectionIntro: FC = (): ReactElement => {
//   return <Box>

//     Section</Box>;
// };

// export default SectionIntro;

interface Props {
  title: string;
}

interface ColorPalette {
  bg: {
    r: number;
    g: number;
    b: number;
  };
  matter: {
    r: number;
    g: number;
    b: number;
  }[];
}

interface Config {
  particleNumber: number;
  maxParticleSize: number;
  maxSpeed: number;
  colorVariation: number;
}

interface Particle {
  x: number;
  y: number;
  r: number;
  c: string;
  s: number;
  d: number;
}

const colorVariation = (
  color: { r: number; g: number; b: number },
  returnString: boolean,
  config: Config
): string | { r: number; g: number; b: number; a: number } => {
  const r = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.r
  );
  const g = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.g
  );
  const b = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.b
  );
  const a = Math.random() + 0.5;

  return returnString ? `rgba(${r},${g},${b},${a})` : { r, g, b, a };
};

const updateParticleModel = (p: Particle, config: Config): Particle => {
  const a = 180 - (p.d + 90);
  p.d > 0 && p.d < 180
    ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
    : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
  p.d > 90 && p.d < 270
    ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
    : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
  return p;
};

const drawParticle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  c: string
): void => {
  ctx.beginPath();
  ctx.fillStyle = c;
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
};

const drawBg = (
  ctx: CanvasRenderingContext2D,
  color: { r: number; g: number; b: number },
  canvasRef: React.RefObject<HTMLCanvasElement>
): void => {
  ctx.fillStyle = `rgb(${color.r},${color.g},${color.b})`;
  ctx.fillRect(
    0,
    0,
    canvasRef.current?.width || 0,
    canvasRef.current?.height || 0
  );
};

const ParticleCanvas = styled("canvas")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: -1,
});

const MyComponent = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const config: Config = {
    particleNumber: 800,
    maxParticleSize: 10,
    maxSpeed: 40,
    colorVariation: 50,
  };

  const colorPalette: ColorPalette = {
    bg: {
      r: 255,
      g: 255,
      b: 255,
    },
    matter: [
      {
        r: 255,
        g: 255,
        b: 255,
      },
      {
        r: 0,
        g: 0,
        b: 0,
      },
      {
        r: 255,
        g: 0,
        b: 0,
      },
      {
        r: 0,
        g: 255,
        b: 0,
      },
      {
        r: 0,
        g: 0,
        b: 255,
      },
      {
        r: 255,
        g: 255,
        b: 0,
      },
      {
        r: 255,
        g: 0,
        b: 255,
      },
      {
        r: 0,
        g: 255,
        b: 255,
      },
    ],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let particles: Particle[] = [];

    const init = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      for (let i = 0; i < config.particleNumber; i++) {
        const color =
          colorPalette.matter[
            Math.floor(Math.random() * colorPalette.matter.length)
          ];
        const x = Math.random() * canvas!.width;
        const y = Math.random() * canvas!.height;
        const r = Math.random() * config.maxParticleSize + 1;
        const c = colorVariation(color, true, config) as string;
        const s = Math.random() * config.maxSpeed;
        const d = Math.random() * 360;
        particles.push({ x, y, r, c, s, d });
      }
    };

    const animate = () => {
      if (!ctx) return;
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      drawBg(ctx, colorPalette.bg, canvasRef);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x > canvas!.width + 5 ||
        p.x < -5 ||
        p.y > canvas!.height + 5 ||
        p.y < -5
          ? (particles[i] = { ...p, x: Math.random() * canvas!.width, y: -10 })
          : (particles[i] = updateParticleModel(p, config));
        drawParticle(ctx, p.x, p.y, p.r, p.c);
      }
    };

    init();
    animate();

    window.addEventListener("resize", () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      init();
    });

    return () =>
      window.removeEventListener("resize", () => {
        canvas!.width = window.innerWidth;
        canvas!.height = window.innerHeight;
        init();
      });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MyComponent;
