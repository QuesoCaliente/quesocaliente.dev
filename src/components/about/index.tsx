"use client";
import React, { useEffect, useRef } from "react";

export default function About() {
  const refLottie = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section>
      <div className="mx-10 my-10 flex  flex-col items-center justify-center  lg:flex-row">
        <div className="relative max-w-3xl rounded-t-xl">
          <h2 className="mb-5 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-5xl font-bold text-transparent">
            Acerca de mi
          </h2>
          <p className=" relative z-[1] text-2xl font-medium leading-relaxed text-gray-600">
            Mi nombre es Brian y soy Frontend Developer, Llevo 1 año trabajando
            en desarrollo web y tengo experiencia en el desarrollo de
            aplicaciones web usando Javascript, React, NextJs, Html, Css,
            TailwindCss, Bootstrap, y otras tecnologías.
          </p>
        </div>
        <div className="flex max-w-2xl items-center justify-center">
          <lottie-player
            id="cheese"
            ref={refLottie}
            autoplay
            loop
            style={{ maxWidth: "700px", maxHeight: "700px" }}
            mode="normal"
            src="/lottie/cheese.json"
          />
        </div>
      </div>
    </section>
  );
}
