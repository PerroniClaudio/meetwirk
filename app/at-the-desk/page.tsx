import React from "react";

type Props = {};

function AtTheDeskPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing7.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            AT THE DESK
          </h1>

          <button className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Scopri di più
          </button>
        </div>
      </section>

      <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
        <p className="">
          Assicuratevi che le conversazioni e i rumori circostanti non vengano
          percepiti dall’altro capo della chiamata.
        </p>
        <p>
          I nostri microfoni sono in grado di bloccare i rumori esterni e
          ottimizzare la chiarezza della chiamata, in modo tale che si senta
          solo la vostra voce. Forte e chiara.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 container mb-8">
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            FOCALIZZATI SUL LAVORO, NON SUL RUMORE ​
          </h1>
          <p>
            Dal recinto acustico dei nostri telefoni fissi, alla cancellazione
            attiva e passiva del rumore delle nostre cuffie, i rumori esterni
            vengono bloccati in modo che possiate concentrarvi sulla
            conversazione.​
          </p>
          <p>
            I nostri microfoni sono in grado di eliminare il rumore e riportare
            la conversazione al centro dell’attenzione.
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            LAVORA CON <br /> FLESSIBILITÀ
          </h1>
          <p>
            Le vostre conversazioni e i rumori circostanti non verranno uditi
            dall’altro capo della chiamata. I nostri microfoni bloccano il
            rumore e ottimizzano la voce, così si sentirà solo la vostra voce,
            forte e chiara.​
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            PROVA IL VERO COMFORT
          </h1>
          <p>
            Ergonomici, realizzati per il massimo comfort. Le nostre soluzioni
            sono progettate secondo le esigenze degli utenti per un utilizzo
            ottimale.
          </p>
        </div>
        <div className="bg-neutral-900 p-8 rounded text-white flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-torch-500 text-center">
            AUMENTA LA SCELTA
          </h1>
          <p>
            Con cavo o senza fili? Cuffie o no? Suono mono o stereo? Telefono
            fisso, PC, e connessione mobile. Scegli quello che è più adatto a
            te.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AtTheDeskPage;
