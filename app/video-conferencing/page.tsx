import React from "react";
import ImageComponent from "@/components/ImageComponent";

type Props = {};

function VideoConferencingPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing0.webp)" }}>
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            SOLUZIONI VIDEO <br />
            PER MICROSOFT TEAMS
          </h1>
          <h3 className="text-lg lg:text-4xl font-semibold text-torch-500 text-center drop-shadow-md">
            Eleva la tua connessione umana <br /> con le nostre soluzioni video
            per Microsoft Teams
          </h3>
          <button className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Scopri di più
          </button>
        </div>
      </section>
      <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <p className="">
          A volte capisci di aver centrato il punto con un solo sguardo.
        </p>
        <p>
          Il valore della{" "}
          <span className="text-torch-500">connessione umana</span> rende le
          soluzioni video fondamentali nel business.
        </p>
        <p>
          Ecco perchè le nostre soluzioni di collaboration con{" "}
          <span className="text-torch-500">Microsoft</span> offrono scelte per
          qualsiasi tipo di esigenza.
        </p>
        <p>
          Dispositivi Teams per le room, periferiche USB personali e soluzioni
          di interoperabilità video per dispositivi legacy è quello che troverai
          da noi.
        </p>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/videoconference.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              MICROSOFT TEAMS ROOMS PER ANDROID​
            </h1>
            <p className="text-2xl text-center">
              Per la massima semplicità e facilità di configurazione.
              L’appliance all-in-one che esegue Microsoft Teams Rooms su sistema
              operativo Android.​
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/videoconference1.webp"
          invert={true}>
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              MICROSOFT TEAMS ROOMS PER WINDOWS​
            </h1>
            <p className="text-2xl text-center">
              Progettato per offrire un&apos;esperienza Teams semplice e
              flessibile con un apposito PC dedicato, console touch e opzioni
              USB audio e video separate.
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default VideoConferencingPage;
