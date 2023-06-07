import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <section
      className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: "url(/images/hero.webp)" }}>
      <div className="h-full min-h-[45vh] w-full bg-neutral-900/60 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
        <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
          Il lavoro ibrido <br /> è parte di te​
        </h1>
        <h3 className="text-lg lg:text-4xl font-semibold text-torch-500 text-center drop-shadow-md">
          Dispositivi microsoft teams <br /> per tutti i tipi di lavoro e per
          ogni ambiente
        </h3>
        <button className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
          Scopri di più
        </button>
      </div>
    </section>
  );
}

export default Hero;
