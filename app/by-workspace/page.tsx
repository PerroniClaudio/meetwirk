import React from "react";
import ImageComponent from "@/components/ImageComponent";
import Link from "next/link";
import Hero from "@/components/Hero";

type Props = {};

function ByWorkspacePage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero>
        <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
          Lavora come vuoi <br /> ovunque ti trovi
        </h1>
      </Hero>

      <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <p className="">Sicurezza, efficienza e performance.</p>
        <p>
          Semplifica il tuo lavoro rendendo accessibili dati e applicazioni in
          qualsiasi momento e da qualsiasi luogo, in completa sicurezza.
        </p>
        <p>
          Scopri gli strumenti più adatti per i tuoi collaboratori aziendali.
        </p>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        {/* <ImageComponent imageUrl="/images/banner7.webp">
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
        </ImageComponent> */}
        <ImageComponent imageUrl="/images/banner8.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              OFFICE WORK
            </h1>
            <p className="text-2xl text-center">
              Il tuo ufficio è pronto per il lavoro ibrido?
            </p>

            <Link
              // href="/landing/office-work"
              href="/office-work"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner9.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              REMOTE WORK
            </h1>
            <p className="text-2xl text-center">
              Preoccupati del tuo business, all’audio ci pensiamo noi.
            </p>
            <p className="text-2xl text-center">
              Ovunque ti trovi ti garantiamo ottime performance audio.
            </p>
            <Link
              // href="/landing/remote-work"
              href="/remote-work"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner3.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              ON THE GO
            </h1>
            <p className="text-2xl text-center">
              Soluzioni che si muovono con te​
            </p>

            <Link
              // href="/landing/on-the-go"
              href="/on-the-go"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner10.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              AT THE DESK
            </h1>
            <p className="text-2xl text-center">
              {/* Concentrati sul lavoro, non sul rumore */}
              Lavora in tranquillità alla tua scrivania, nessun rumore ostacolerà le tue chiamate.
            </p>

            <Link
              // href="/landing/at-the-desk"
              href="/at-the-desk"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner11.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              CONFERENCE ROOM
            </h1>
            <p className="text-2xl text-center">
              Riunioni produttive ed efficaci grazie a ottime prestazioni tecniche
            </p>

            <Link
              // href="/landing/conference-room"
              href="/conference-room"
              className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Approfondisci
            </Link>
          </div>
        </ImageComponent>
        <ImageComponent imageUrl="/images/banner12.webp" invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              HUDDLE SPACE
            </h1>
            <p className="text-2xl text-center">
              Grandi idee, piccoli spazi
            </p>

            <Link
              // href="/landing/huddle-space"
              href="/huddle-space"
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
