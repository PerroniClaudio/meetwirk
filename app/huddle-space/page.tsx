import React from "react";

type Props = {};

function HuddleSpacePage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing9.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            HUDDLE SPACE
          </h1>

          <button className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Scopri di più
          </button>
        </div>
      </section>

      <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <p className="">
          Check-in settimanali, brainstorming di gruppo, allineamenti del team
          all’ultimo minuto: le huddle room sono sempre più utilizzate.
        </p>
        <p>
          Abbiamo soluzioni apposite per questi spazi più piccoli, facili da
          gestire.
        </p>
        <p>
          Dalle barre video USB che si collegano facilmente a un PC, alle
          soluzioni all-in-one adatte alla vostra applicazione video cloud
          preferita.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 container mb-8">
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            SEMPLICITÀ RADICALE 
          </h1>
          <p>Facile da gestire e facile da usare.</p>
          <p>Progettiamo per una funzionalità semplice.</p>
          <p>
            Sia che dobbiate arredare un’ambiente sia che dobbiate arredarne
            cento.
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            OTTIME PRESTAZIONI
          </h1>
          <p>
            Telecamere intelligenti che mostrano solo le persone presenti nella
            stanza e audio che bloccano i rumori di sottofondo.
          </p>
          <p>
            Le nostre soluzioni realizzano questo e molto altro per offrire a
            tutti un’esperienza di riunione eccellente.
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            FLESSIBILITÀ DI CONNESSIONE
          </h1>
          <p>
            Poiché il mercato si evolve rapidamente, le soluzioni per le huddle
            room devono essere sufficientemente flessibili da poter collegare
            diversi servizi video cloud.
          </p>
        </div>
      </section>
    </main>
  );
}

export default HuddleSpacePage;
