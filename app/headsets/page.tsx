import React from "react";

type Props = {};

function HeadsetsPage({}: Props) {
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
          Il valore della&nbsp;
          <span className="text-torch-500">connessione umana</span> rende le
          soluzioni video fondamentali nel business.
        </p>
        <p>
          Ecco perchè le nostre soluzioni di collaboration con&nbsp;
          <span className="text-torch-500">Microsoft</span> offrono scelte per
          qualsiasi tipo di esigenza.
        </p>
        <p>
          Dispositivi Teams per le room, periferiche USB personali e soluzioni
          di interoperabilità video per dispositivi legacy è quello che troverai
          da noi.
        </p>
      </div>

      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
        <div className="flex flex-col items-center gap-4">
          <div
            className="rounded-full h-64 w-64  bg-center bg-cover bg-no-repeat "
            style={{
              backgroundImage: "url(/images/landing/headsets1.webp)",
            }}></div>
          <p className="font-semibold text-center">
            Perché scegliere una cuffia certificata Teams? Perché no?​
          </p>
          <div className="flex flex-col gap-2">
            <p>
              Il vostro audio è incredibile perché le nostre cuffie superano i
              severi requisiti di certificazione Microsoft.
            </p>
            <p>
              ​Ora tutto è molto più semplice, con un solo pulsante attivate
              istantaneamente Teams.
            </p>

            <p>
              La vostra giornata lavorativa è appena diventata più semplice.​ ​
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div
            className="rounded-full h-64 w-64  bg-center bg-cover bg-no-repeat "
            style={{
              backgroundImage: "url(/images/landing/headsets2.webp)",
            }}></div>
          <p className="font-semibold text-center">Dispositivi insuperabili.</p>
          <div className="flex flex-col gap-2">
            <p>
              Ascoltate e fatevi sempre ascoltare con un’ incredibile chiarezza
              grazie alle tecnologie integrate per il blocco dei rumori
            </p>
            <p>Le conversazioni saranno più fluide e chiare.</p>
            <p>Semplicemente migliori. </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div
            className="rounded-full h-64 w-64  bg-center bg-cover bg-no-repeat "
            style={{
              backgroundImage: "url(/images/landing/headsets3.webp)",
            }}></div>
          <p className="font-semibold text-center">A voi la scelta.</p>
          <div className="flex flex-col gap-2">
            <p>Con cavo, senza fili, sopra la testa o dietro l'orecchio?</p>
            <p>
              Vi offriamo libertà di scelta con la più ampia gamma di cuffie
              certificate Microsoft Teams.
            </p>
            <p>Dal treno, all'ufficio e ovunque tu sia. ​</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div
            className="rounded-full h-64 w-64  bg-center bg-cover bg-no-repeat "
            style={{
              backgroundImage: "url(/images/landing/headsets4.webp)",
            }}></div>
          <p className="font-semibold text-center">Nessun problema.</p>
          <div className="flex flex-col gap-2">
            <p>Avete bisogno di aiuto per gestire le cuffie?</p>
            <p>
              Con la soluzione software, gestite il loro utilizzo, risolvete i
              problemi e distribuite gli aggiornamenti del firmware, il tutto in
              remoto e dal vostro browser web.
            </p>
            <p>Il management non è mai stato così facile.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeadsetsPage;
