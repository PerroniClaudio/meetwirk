import React from "react";
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";

type Props = {};

function ByWorkspacePage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/hero.webp)" }}>
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            NOI COLLABORIAMO <br />
            ORA PUOI FARLO ANCHE TU
          </h1>
          <h3 className="text-lg lg:text-4xl font-semibold text-torch-500 text-center drop-shadow-md">
            La collaborazione è la chiave del successo <br /> scopri come
            ottenere soluzioni integrate e performanti
          </h3>
          <button className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Scopri di più
          </button>
        </div>
      </section>
      <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <p className="">
          Come tutti i migliori nuovi assunti, ognuna delle nostre soluzioni
          <br />
          entra nei tuoi sistemi e si mette subito al lavoro.
        </p>

        <p>
          Grazie alla partnership con
          <span className="text-torch-500"> Microsoft</span> ti offriamo una
          suite <br /> di prodotti realizzati appositamente.
        </p>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/banner7.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              HYBRID WORKING​
            </h1>
            <p className="text-2xl text-center">
              Il lavoro è molto più di un semplice luogo.
            </p>
            <p className="text-2xl text-center">
              Le nostre soluzioni ti permetteranno di lavorare da qualsiasi
              posto con ottimi risultati​
            </p>
            <Link
              href="/landing/video-conferencing"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner8.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              OFFICE WORK
            </h1>
            <p className="text-2xl text-center">
              Il tuo ufficio è pronto per il lavoro ibrido?
            </p>

            <Link
              href="/landing/phones-speakerphones"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner9.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              REMOTE WORK​
            </h1>
            <p className="text-2xl text-center">
              Preoccupati del tuo business, all’audio ci pensiamo noi.
            </p>
            <p className="text-2xl text-center">
              Ovunque ti trovi ti garantiamo ottime performance audio.
            </p>
            <Link
              href="/landing/headsets"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner3.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              ON THE GO
            </h1>
            <p className="text-2xl text-center">
              Soluzioni che si muovono con te​
            </p>

            <Link
              href="/landing/headsets"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default ByWorkspacePage;
