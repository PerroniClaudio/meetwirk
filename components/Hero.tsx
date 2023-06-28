import React from "react";

type Props = {
  children?: React.ReactNode;
};

function Hero({ children }: Props) {
  return (
    <section
      className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: "url(/images/sfondo2.webp)" }}>
      <div className="h-full min-h-[45vh] w-full bg-neutral-900/60 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
        {children}
        <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
          Contattaci
        </a>
      </div>
    </section>
  );
}

export default Hero;
