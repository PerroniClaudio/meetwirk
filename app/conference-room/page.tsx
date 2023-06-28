import ImageComponent from "@/components/ImageComponent";
import React from "react";

type Props = {};

function ConferenceRoomPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing8.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            CONFERENCE ROOM
          </h1>

          <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Contattaci
          </a>
        </div>
      </section>

      <div  className="bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
        <div  className="bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
          <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
            <p className="">
              Indipendentemente dalle dimensioni della vostra sala conferenze avete
              bisogno di una qualità eccezionale: video e audio che vi facciano
              sentire come se foste nella stessa stanza.
            </p>
            <p>
              Condivsione di contenuti ovunque si trovi il vostro team. Una
              tecnologia che crea potenti connessioni.
            </p>
          </div>
        </div>
      </div>

      {/* <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 container mb-8"> */}
        {/* <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            PRESTAZIONI ININTERROTTE
          </h1>
          <p>
            Video nitidi e audio chiari. Le telecamere intelligenti con
            inquadratura e tracciamento automatici assicurano che tutti siano
            visti, anche chi si trova agli angoli della stanza.
          </p>
          <p>
            Prestazioni audio che rimuovono i rumori per chiamate senza
            interruzioni.
          </p>
        </div> */}
        {/* <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            SOLUZIONE PER OGNI AMBIENTE
          </h1> */}
          {/* <p>
            Ogni sala conferenza ha diverse esigenze, sia che si tratti di sale
            più grandi che necessitano di telecamere di monitoraggio
            intelligente e microfoni multipli, sia che si tratti di sale che
            necessitano solo condivisione wireless e lavagne bianche.
          </p>
          <p>Noi possiamo offrirvi la soluzione per ogni vostra esigenza.</p> */}
          {/* <p>
            Ogni sala conferenza ha diverse esigenze, sia che si tratti di sale
            più grandi che necessitano di telecamere con monitoraggio
            intelligente, sia che si tratti di sale più piccole che necessitano
            solo di condivisione wireless.
          </p>
        </div> */}
        {/* <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            FLESSIBILITÀ AL SERVIZIO
          </h1>
          <p>
            Le soluzioni che ti proponiamo sono ergonomiche, realizzate per il
            massimo comfort, progettate per offrire un’esperienza elevata in
            quasi tutti gli ambienti cloud.
          </p>
          <p>
            Le nostre soluzioni sono progettate secondo le esigenze degli utenti
            per un utilizzo ottimale.
          </p>
        </div> */}
        {/* <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            FLESSIBILITÀ AL SERVIZIO
          </h1>
          <p>
            Audio e video che vi facciano sentire come se foste nella stessa
            stanza.
          </p>
          <p>
            Telecamere intelligenti con inquadratura e tracciamento automatici
            assicurano che tutti vengano inquadrati.
          </p>
          <p>
            Funzionalità audio che rimuovono i rumori di sottofondo per chiamate
            senza interruzioni.
          </p>
        </div>
      </section> */}

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/conferenceroom1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              SOLUZIONE PER OGNI AMBIENTE
            </h1>
            <p className="text-2xl text-center">
              Ogni sala conferenza ha diverse esigenze, sia che si tratti di sale
              più grandi che necessitano di telecamere con monitoraggio
              intelligente, sia che si tratti di sale più piccole che necessitano
              solo di condivisione wireless.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/conferenceroom2.webp"
          invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              OTTIME PRESTAZIONI AUDIO E VIDEO
            </h1>
            <p className="text-2xl text-center">
              Audio e video che vi facciano sentire come se foste nella stessa
              stanza.
            </p>
            <p className="text-2xl text-center">
              Telecamere intelligenti con inquadratura e tracciamento automatici
              assicurano che tutti vengano inquadrati.
            </p>
            <p className="text-2xl text-center">
              Funzionalità audio che rimuovono i rumori di sottofondo per chiamate
              senza interruzioni.
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default ConferenceRoomPage;
