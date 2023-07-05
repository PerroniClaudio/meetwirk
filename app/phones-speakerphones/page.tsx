import React from "react";
import ImageComponent from "@/components/ImageComponent";

type Props = {};

function SpeakerphonesPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing1.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            TELEFONI <br />
            PER MICROSOFT TEAMS
          </h1>
          {/* <h3 className="text-lg lg:text-4xl font-semibold text-torch-500 text-center drop-shadow-md">
            Migliora la qualità delle tue chiamate su Microsoft Teams <br /> con
            la nostra gamma dispositivi dotati di tecnologie innovative.
          </h3> */}
          {/* <a
            href="#contact-us"
            className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300"
          >
            Contattaci
          </a> */}
        </div>
      </section>
      <div  className="bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
        <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
          <p className="">
            Le tue conversazioni non avranno più rumori di sottofondo.
          </p>
          <p>
            Ascolta e fatti ascoltare con&nbsp;
            <span className="text-torch-500">chiarezza</span>.
          </p>
          <p>
            Offriamo un’ampia gamma di telefoni da scrivania, telefoni per
            conferenze e vivavoce integrati con Teams che riducono i rumori e
            migliorano le chiamate di&nbsp;
            <span className="text-torch-500">Microsoft Teams</span>.
          </p>
          <p>
            Soddisfiamo le tue richieste con tecnologie{" "}
            <span className="text-torch-500">innovative</span> e design
            ergonomici.
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/landing1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              NOISEBLOCK AI
            </h1>
            <p className="text-2xl text-center">
              Grazie a Noiseblock AI, multi-microfoni intelligenti e recinzione
              acustica, le conversazioni sono fluide e chiare ed è come essere
              nella stessa stanza.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/speakerphones.webp"
          invert={true}
        >
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center uppercase">
              Nessuno ha tempo da perdere
            </h1>
            <p className="text-2xl text-center">
              L’esperienza con Microsoft è semplice.
            </p>
            <p className="text-2xl text-center">
              Non perderai tempo ad imparare difficili passaggi, nulla ti
              distrae dalla gestione dei tuoi business.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent imageUrl="/images/landing/speakerphones1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center uppercase">
              Soluzioni audio per ogni esigenza lavorativa
            </h1>
            <p className="text-2xl text-center">
              Preferisci le cuffie invece dei tradizionali ricevitori per la tua
              scrivania?
            </p>
            <p className="text-2xl text-center">
              Hai bisogno di ospitare un’importante riunione in una grande sala
              conferenze?
            </p>
            {/* <p className="text-2xl text-center">
              Vuoi aggiornare il tuo vivavoce da casa e metterlo nello zaino per
              una riunione con il cliente?
            </p> */}
            <p className="text-2xl text-center text-torch-500">
              Nessun problema, abbiamo soluzioni per ogni tua richiesta
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default SpeakerphonesPage;
