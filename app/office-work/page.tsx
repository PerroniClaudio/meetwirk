import React from "react";
import ImageComponent from "@/components/ImageComponent";

type Props = {};

function OfficeWorkPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing4.webp)" }}>
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            OFFICE WORK
          </h1>

          <button className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Scopri di più
          </button>
        </div>
      </section>

      <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <p>I tuoi strumenti di collaboration sono cambiati per sempre.</p>
        <p>
          Gli uffici si adattano ad una tecnologia che supporta la
          partecipazione di tutti, sia che si colleghino da spazi di gruppo, sia
          da postazioni personali, da ufficio o da remoto.
        </p>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/officework1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <p className="text-2xl text-center">
              La tua forza-lavoro torna in ufficio con nuove aspettative
            </p>
            <p className="text-2xl text-center">
              I vostri dipendenti possono avere le stesse esperienze eccellenti
              che sono abituati ad avere a casa.
            </p>
            <p className="text-2xl text-center">
              Per cominciare, bisogna avere soluzioni audio e video che
              migliorano la qualità del lavoro ibrido per tutto il vostro team.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/officework2.webp"
          invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              MICROSOFT TEAMS ROOMS PER WINDOWS​
            </h1>
            <p className="text-2xl text-center">
              I dipendenti torneranno in ufficio in modi e orari diversi.
            </p>
            <p className="text-2xl text-center">
              Secondo alcune ricerche il 97% dei dipendenti di un’azienda
              possono essere classificati secondo sei stili di lavoro diversi.​
              Innanzitutto, identificate gli stili di lavoro nella vostra
              organizzazione e fornite ai vostri dipendenti gli strumenti audio
              e video di cui hanno bisogno.
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default OfficeWorkPage;
