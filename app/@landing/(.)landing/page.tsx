import Modal from "@/components/Modal";
import React from "react";

type Props = {};

function LandingDynamic({}: Props) {
  return (
    <Modal>
      <div
        className="container bg-center bg-cover bg-no-repeat mx-auto p-0 lg:my-32"
        style={{ backgroundImage: "url(/images/landing/landing1.webp)" }}>
        <div className="inset-0 bg-neutral-900/80 px-4 lg:px-16 pt-16 pb-32 flex flex-col gap-8  text-gray-50">
          <div className="w-1/6 lg:w-1/12 bg-torch-500 h-6"></div>
          <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold lg:w-1/2">
            SOLUZIONI VIDEO <br /> PER MICROSOFT TEAMS
          </h1>
          <hr className="border border-t-4" />
          <div className="flex flex-col lg:w-1/2 gap-4 text-lg lg:text-xl font-semibold text-center lg:text-left">
            <p>
              A volte capisci di aver centrato il punto con un solo sguardo.
            </p>
            <p>
              Il valore della connessione umana rende le soluzioni video
              fondamentali nel business.
            </p>
            <p>
              Ecco perchè le nostre soluzioni di collaboration con Microsoft
              offrono scelte per qualsiasi tipo di esigenza.
            </p>
            <p>
              Dispositivi Teams per le room, periferiche USB personali e
              soluzioni di interoperabilità video per dispositivi legacy è
              quello che troverai da noi.​
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="bg-torch-500 text-gray-50 text-2xl px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Contattaci
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LandingDynamic;
