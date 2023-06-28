"use client";

import Hero from "@/components/Hero";
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";

export default function ByPlatformPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <Hero>
        <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
          Ridisegna il futuro <br /> della tua azienda
        </h1>
      </Hero>

      <div className="container mx-auto px-8 py-32 flex flex-col gap-8 text-center text-gray-800 text-xl lg:text-3xl">
        <p className="">
          Cambia la modalità di lavoro e potenzia la produttività con&nbsp;
          <span className="text-torch-500">Microsoft Teams</span>
        </p>

        <p>
          Ti forniamo prodotti audio e video di livello professionale, per
          collaborare efficacemente ovunque ti trovi.
        </p>
      </div>

      {/* Sezione mezza nera e mezza immagine */}

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/banner1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              VIDEO CONFERENCING
            </h1>
            <p className="text-2xl text-center">
              Dall&apos; interoperabilità dei dispositivi video personali, alle
              soluzioni per le tue room.
            </p>
            <p className="text-2xl text-center">
              Ti offriamo un&apos;esperienza di collaboration end to end con
              Microsoft Teams.
            </p>
            <Link
              // href="/landing/video-conferencing"
              href="/video-conferencing"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner2.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              PHONES E SPEAKERPHONES​
            </h1>
            <p className="text-2xl text-center">
              Telefoni e vivavoce che offrono comunicazioni vocali nitide.
            </p>
            <p className="text-2xl text-center">
              Semplici da usare, certificati Microsoft
              Teams.
            </p>
            <Link
              // href="/landing/phones-speakerphones"
              href="/phones-speakerphones"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner3.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              HEADSETS
            </h1>
            <p className="text-2xl text-center">
              Ascolta e fatti ascoltare con incredibile chiarezza, eliminando i
              rumori esterni.
            </p>
            <p className="text-2xl text-center">
              Cuffie certificate Teams per le tue conversazioni più importanti.​
            </p>
            <Link
              // href="/landing/headsets"
              href="/headsets"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
      </section>

      {/* <section className="lg:p-8">
        <div
          className="container bg-center bg-cover bg-no-repeat mx-auto p-0 lg:rounded"
          style={{ backgroundImage: `url(/images/banner4.webp)` }}>
          <div className="inset-0 bg-neutral-900/80 px-4 lg:px-16 py-16 flex flex-col gap-8  text-gray-50 lg:rounded">
            <div className="w-1/6 lg:w-1/12 bg-torch-500 h-6"></div>
            <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold lg:w-1/2">
              SERVIZI
            </h1>
            <hr className="border border-t-4" />
            <div className="flex flex-col lg:w-1/2 gap-4 text-lg lg:text-xl font-semibold text-center lg:text-left">
              <p>
                Scegli il percorso migliore per implementare Microsoft Teams,
                grazie ai nostri servizi.
              </p>
              <p>
                Possiamo gestire ogni aspetto della vostra soluzione Teams,
                dalla progettazione, attraverso l’implementazione e il continuo
                supporto​
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <Link
                href="/landing/servizi"
                href="/servizi"
                className="bg-torch-500 text-gray-50 text-2xl px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
                Approfondisci
              </Link>
            </div>
          </div>
        </div>
      </section> */}

    </main>
  );
}
