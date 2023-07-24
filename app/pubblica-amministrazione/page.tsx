import ImageComponent from "@/components/ImageComponent";
import React from "react";

type Props = {};

function PubblicaAmministrazionePage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing8.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            PUBBLICA AMMINISTRAZIONE
          </h1>

          {/* <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Contattaci
          </a> */}
        </div>
      </section>

      <div
        className="bg-bottom bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}
      >
        <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
          <p>
            Le soluzioni di collaboration che ti offriamo migliorano la tua
            sicurezza, potenziano i tuoi servizi, permettono corsi di formazione
            a distanza, mitigando i costi dei tuoi processi tradizionali.
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/pubblicaamministrazione1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              CREA MAGGIORE INTERCONNESSIONE TRA P.A. E CITTADINI
            </h1>
            <p className="text-2xl text-center">
              Il processo di digitalizzazione della Pubblica Amministrazione non
              è più rimandabile.
            </p>
            <p className="text-2xl text-center">
              Ti offriamo soluzioni con l’integrazione di Teams per qualsiasi
              dispositivo: dai telefoni per la scrivania, alle cuffie bluetooth,
              alle sale videoconferenza.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/pubblicaamministrazione2.webp"
          invert={true}
        >
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              PIÙ EFFICIENZA, MENO COSTI
            </h1>
            <p className="text-2xl text-center">
              Scopri come gli strumenti di collaboration possono mantenere la
              tua forza-lavoro connessa, aumentando la produttività e riducendo
              i costi.
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default PubblicaAmministrazionePage;
