import ImageComponent from "@/components/ImageComponent";
import React from "react";

type Props = {};

function ImpresePage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing8.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            PICCOLE E MEDIE IMPRESE
          </h1>

          {/* <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Contattaci
          </a> */}
        </div>
      </section>

      {/* <div  className="bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
        <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
          <p>
            Il valore della{" "}
            <span className="text-torch-500">connessione umana</span> rende le
            soluzioni video fondamentali nel business.
          </p>
          <p>
            Ecco perchè le nostre soluzioni di collaboration con{" "}
            <span className="text-torch-500">Microsoft</span> offrono scelte per
            qualsiasi tipo di esigenza.
          </p>
          <p>
            Dispositivi Teams per le room, periferiche USB personali e soluzioni
            di interoperabilità video per dispositivi legacy è quello che troverai
            da noi.
          </p>
        </div>
      </div> */}

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/imprese1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              LA CONNESSIONE CON I TUOI CLIENTI DIVENTA PIÙ FACILE 
            </h1>
            <p className="text-2xl text-center">
              Investi nell’esperienza digitale del tuo cliente. 
            </p>
            <p className="text-2xl text-center">
              Con i nostri sistemi potrai mostrargli anche da remoto i tuoi migliori prodotti.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/imprese2.webp"
          invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              I MIGLIORI STRUMENTI DI COLLABORATION A TUA DISPOSIZIONE
            </h1>
            <p className="text-2xl text-center">
              Siamo partner Microsoft e grazie al nostro team di tecnici ti garantiamo un’integrazione perfetta con la piattaforma Teams e i servizi a tua scelta.
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default ImpresePage;
