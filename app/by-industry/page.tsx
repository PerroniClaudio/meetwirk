import React from "react";
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";
import Hero from "@/components/Hero";

type Props = {};

function ByIndustryPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero>
        <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
          Siamo pronti a <br /> soddisfare le tue esigenze
        </h1>
      </Hero>

      <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <p className="">
          Porta il cliente all’interno della tua azienda virtuale <br /> in modo
          tale da presentare i tuoi migliori prodotti anche da remoto.
        </p>

        <p>Rendi la tua azienda flessibile e competitiva. </p>
        <p>
          Attiva gli strumenti di collaboration <br /> in ogni settore della tua
          azienda, compresa la produzione.
        </p>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/banner5.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              PICCOLE e MEDIE IMPRESE
            </h1>
            <p className="text-2xl text-center">
              Migliora la tua immagine professionale con le nostre soluzioni
              audio e video.
            </p>
            {/* <Link
              href="#contact-us"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Contattaci
            </Link> */}
            <Link
              href="/imprese"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner13.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              PUBBLICA AMMINISTRAZIONE
            </h1>
            <p className="text-2xl text-center">
              La connessione umana tra governo e cittadini è di vitale
              importanza.
            </p>

            {/* <Link
              href="#contact-us"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Contattaci
            </Link> */}
            <Link
              href="/pubblica-amministrazione"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner14.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              ISTRUZIONE ED <span className="whitespace-nowrap">E-LEARNING</span>
            </h1>
            <p className="text-2xl text-center">
              Le aule scolastiche continuano ad evolversi e così anche le nostre
              tecnologie audio-video.
            </p>

            {/* <Link
              href="#contact-us"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Contattaci
            </Link> */}
            <Link
              href="/istruzione"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default ByIndustryPage;
