"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

type Props = {};

export default function ServiziPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col bg-bottom bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing3.webp)" }}>
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            I NOSTRI SERVIZI
          </h1>
          <h3 className="text-lg lg:text-4xl font-semibold text-torch-500 text-center drop-shadow-md">
            Decenni di esperienza per garantire il successo della migrazione,
            dell’implementazione, dell’adozione e assistenza di Microsoft Teams.
          </h3>
          <h3 className="text-lg lg:text-2xl font-semibold text-torch-500 text-center drop-shadow-md">
            Saremo in grado di trovare il percoso ottimale più adatto alle
            vostre esigenze.
          </h3>
          {/* <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Contattaci
          </a> */}
        </div>
      </section>

      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-screen flex min-h-[40vh]"
        >
          <SwiperSlide>
            <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
              <h2 className="text-2xl lg:text-4xl font-bold text-torch-500 cursor-default">
                Progettazione e design
              </h2>
              <p>
                Accelerare la trasformazione digitale attraverso la revisione delle
                capacità attuali e la previsione dei requisiti futuri per la strategia
                aziendale
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-xl lg:text-3xl">
              <h2 className="text-2xl lg:text-4xl font-bold text-torch-500 cursor-default">
                Distribuire e ottimizzare
              </h2>
              <p>
                Ti guidiamo nel tuo viaggio Microsoft, aiutandoti a sperimentare le
                sue funzionalità e capire come sfruttarle al meglio così che i tuoi
                dipendenti saranno più produttivi e sicuri da qualsiasi luogo.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <h2 className="text-2xl lg:text-4xl font-bold hover:text-torch-500 cursor-default">
          Progettazione e design
        </h2>
        <p>
          Accelerare la trasformazione digitale attraverso la revisione delle
          capacità attuali e la previsione dei requisiti futuri per la strategia
          aziendale
        </p>
      </div>
      <div className="bg-neutral-900 text-gray-50">
        <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-xl lg:text-3xl">
          <h2 className="text-2xl lg:text-4xl font-bold hover:text-torch-500 cursor-default">
            Distribuire e ottimizzare
          </h2>
          <p>
            Ti guidiamo nel tuo viaggio Microsoft, aiutandoti a sperimentare le
            sue funzionalità e capire come sfruttarle al meglio così che i tuoi
            dipendenti saranno più produttivi e sicuri da qualsiasi luogo.
          </p>
        </div>
      </div> */}
    </main>
  );
}
