import ImageComponent from "@/components/ImageComponent";
import React from "react";

type Props = {};

function IstruzionePage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing8.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            ISTRUZIONE ED E-LEARNING 
          </h1>

          {/* <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Contattaci
          </a> */}
        </div>
      </section>

      <div  className="bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
        <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
          <p>
            Le aule scolastiche dotate di tecnologia di tracciamento, consentono ai relatori o insegnanti di svolgere in maniera funzionale le loro lezioni.
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/istruzione1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              CONTINUITÀ E FACILITÀ DI UTILIZZO NELL’ ACCESSO AI CONTENUTI A DISTANZA
            </h1>
            <p className="text-2xl text-center">
              Lezione in presenza o da remoto?
            </p>
            <p className="text-2xl text-center">
              Ti forniamo gli strumenti giuste per affrontarle entrambe.
            </p>
            <p className="text-2xl text-center">
              Devi solo scegliere quella più adatta a alle tue esigenze.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/istruzione2.webp"
          invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              E-LEARNING PER LA TUA AZIENDA
            </h1>
            <p className="text-2xl text-center">
              Presentare i tuoi servizi a clienti e partner a distanza?
            </p>
            <p className="text-2xl text-center">
              Ridurre i costi di formazione?
            </p>
            <p className="text-2xl text-center">
              Formazione del personale più rapida?
            </p>
            <p className="text-2xl text-center">
              E nessuna barriera spazio-temporale?
            </p>
            <p className="text-2xl text-center">
              Questo è l’e-learning e le nostre soluzioni renderanno l’apprendimento a distanza più facile.
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default IstruzionePage;
