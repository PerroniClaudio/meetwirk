import React from "react";
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";

type Props = {};

function ByIndustryPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/hero.webp)" }}>
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            Siamo pronti a lavorare <br /> per la tua azienda
          </h1>
          <h3 className="text-lg lg:text-4xl font-semibold text-torch-500 text-center drop-shadow-md">
            Coinvolgi le persone. <br /> Crea connessioni più profonde.
            <br /> Ottieni di più.
          </h3>
          <button className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Scopri di più
          </button>
        </div>
      </section>
      <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <p className="">
          Potenti prodotti e servizi di collaboration per il tuo settore.
        </p>

        <p>
          Nessuno è meglio di noi nell’aiutare le persone a lavorare insieme{" "}
          <br /> per fare qualcosa di eccezionale.
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
            <p className="text-2xl text-center">
              Dai vita alle tue competenze trasversali con audio e video
              professionali che offrono esperienze di qualità, bloccano i rumori
              esterni, eliminano le luci d’ombra e mantengono l’attenzione su di
              voi e sui vostri messaggi.
            </p>
            <Link
              href="/#"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Contattaci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner6.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              PUBBLICA AMMINISTRAZIONE
            </h1>
            <p className="text-2xl text-center">
              La connessione umana tra governo e cittadini è di vitale
              importanza.
            </p>
            <p className="text-2xl text-center">
              Le soluzioni di collaboration che ti offriamo migliorano la tua
              sicurezza, potenziano i tuoi servizi, permettono corsi di
              formazione a distanza mitigando i costi dei tuoi processi
              tradizionali.
            </p>

            <Link
              href="/#"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Contattaci
            </Link>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default ByIndustryPage;
