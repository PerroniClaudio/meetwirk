import React from "react";

import ImageComponent from "@/components/ImageComponent";

type Props = {};

function OnTheGoPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing6.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            ON THE GO
          </h1>

          <a
            href="#contact-us"
            className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300"
          >
            Contattaci
          </a>
        </div>
      </section>

      <div
        className="bg-bottom bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}
      >
        <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
          <p className="">
            Il lavoro si svolge ovunque. Sul treno. Mentre si prende un caffè.
            Tra una riunione e l’altra. Non sorprende che quasi il 50% delle
            chiamate di lavoro avvenga su dispositivi mobili.
          </p>
          <p>
            Indipendentemente da dove ci si trova è fondamentale che la
            conversazione abbia un audio eccellente.
          </p>
          <p>
            I nostri dispositivi offrono cancellazione del rumore e la massima
            qualità audio, per rendervi ancora più produttivi, ovunque il lavoro
            vi porti.
          </p>
        </div>
      </div>

      {/* <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 container mb-8">
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            AUDIO PROFESSIONALE OVUNQUE TU SIA
          </h1>
          <p>
            I rumori di fondo che possono esserci in un ufficio o per strada
            sono fonte di distrazione e possono rovinare un’importante
            conversazione.
          </p>
          <p>
            I nostri microfoni sono in grado di eliminare il rumore e riportare
            la conversazione al centro dell’attenzione.
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            LAVORA CON <br /> FLESSIBILITÀ
          </h1>
          <p>
            Versatile e flessibile: questa è la forza lavoro aziendale di oggi.
          </p>
          <p>
            Per questo offriamo sistemi che consentono di rispondere facilmente
            alle chiamate anche quando ci si sposta o si cambia dispositivo dal
            telefono al PC e viceversa.
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            SILENZIA SENZA PREOCCUPAZIONI
          </h1>
          <p>Essere in muto non è più una tua preoccupazione.</p>
          <p>
            Le funzionalità intuitive di disattivazione audio e i sensori
            integrati forniscono più livelli di sicurezza.
          </p>
          <p>Puoi silenziare e riattivare l’audio con un solo tocco.</p>
          <p>
            L’adattatore USB diventa rosso quando l’audio è disattivato. E,
            ancora, un avviso sonoro ti ricorderà se stai parlando con il muto
            attivo.
          </p>
        </div>
      </section> */}

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/onthego1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              AUDIO PROFESSIONALE OVUNQUE TU SIA
            </h1>
            <p className="text-2xl text-center">
              I rumori di fondo che possono esserci in un ufficio o per strada
              sono fonte di distrazione e possono interrompere un’importante
              conversazione.
            </p>
            <p className="text-2xl text-center">
              I nostri dispositivi, però, sono in grado di eliminare qualsiasi
              tipo di interferenza.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent imageUrl="/images/landing/onthego2.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              LAVORA CON FLESSIBILITÀ
            </h1>
            <p className="text-2xl text-center">
              Versatile e flessibile: questa è la forza lavoro aziendale di
              oggi.
            </p>
            <p className="text-2xl text-center">
              Per questo, offriamo dispositivi che ti permettano di rispondere
              facilmente alle chiamate anche quando ci si sposta o si ha
              necessità di cambiare dispositivo passando dal PC al telefono o
              viceversa.
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default OnTheGoPage;
