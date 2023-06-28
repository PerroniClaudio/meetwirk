import ImageComponent from "@/components/ImageComponent";
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

          <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Contattaci
          </a>
        </div>
      </section>

      <div  className="bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
        <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
          <p className="">
            Check-in settimanali, brainstorming di gruppo, allineamenti del team
            all’ultimo minuto.
          </p>
          <p>Le huddle-room sono la soluzione.</p>
        </div>
      </div>

      {/* <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 container mb-8"> */}
        {/* <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
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
        </div> */}
        {/* <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            HUDDLE ROOM: PICCOLI SPAZI DI COLLABORATION, INFORMALI E
            TECNOLOGICAMENTE ATTREZZATI
          </h1>
          <p>
            Check-in settimanali, brainstorming di gruppo, allineamenti del team
            all’ultimo minuto: le huddle room sono sempre più utilizzate.
          </p>
          <p>
            Abbiamo soluzioni facili da gestire, apposite per questi spazi più
            piccoli.
          </p>
          <p>
            Dalle barre video USB che si collegano facilmente a un PC, alle
            soluzioni all-in-one adatte alla vostra applicazione video cloud
            preferita.
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            PROTEZIONE, PRIVACY E RISERVATEZZA PER UNA COLLABORATION EFFICACE
          </h1>
          <p>
            Piccoli spazi, con standard acustici elevati e un elevato isolamento
            dai rumori acustici.
          </p>
          <p>
            Display e monitor non di grandi dimensioni, ma che permettano
            un’esperienza video di alta qualità.
          </p>
          <p>Il tutto con la protezione, privacy e riservatezza necessarie.</p>
        </div>
      </section> */}

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/huddlespace1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              PICCOLI SPAZI INFORMALI E
              TECNOLOGICAMENTE ATTREZZATI
            </h1>
            <p className="text-2xl text-center">
              Abbiamo soluzioni facili da gestire, apposite per questi spazi più
              piccoli.
            </p>
            <p className="text-2xl text-center">
              Dalle barre video USB che si collegano facilmente a un PC, alle
              soluzioni all-in-one adatte alla vostra applicazione video cloud
              preferita.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/huddlespace2.webp"
          invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              PROTEZIONE, PRIVACY E RISERVATEZZA PER UNA COLLABORATION EFFICACE
            </h1>
            <p className="text-2xl text-center">
              Piccoli spazi, con standard acustici elevati e un elevato isolamento
              dai rumori acustici.
            </p>
            <p className="text-2xl text-center">
              Display e monitor non di grandi dimensioni, ma che permettano
              un’esperienza video di alta qualità.
            </p>
            <p className="text-2xl text-center">Il tutto con la protezione, privacy e riservatezza necessarie.</p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default HuddleSpacePage;
