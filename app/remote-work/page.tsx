import React from "react";
import ImageComponent from "@/components/ImageComponent";

type Props = {};

function RemoteWorkPage({}: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="w-screen min-h-[45vh] bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: "url(/images/landing/landing5.webp)" }}
      >
        <div className="h-full min-h-[45vh] w-full bg-neutral-900/80 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
          <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
            REMOTE WORK
          </h1>

          {/* <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
            Contattaci
          </a> */}
        </div>
      </section>

      <div  className="bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
        <div className="container mx-auto px-8 py-32 flex flex-col gap-4 text-center text-gray-800 text-xl lg:text-3xl">
          <p>
            Che i vostri dipendenti lavorino dalla camera da letto, dalla spiaggia
            o dall’aeroporto, le nostre cuffie, le videocamere per
            videoconferenze, i vivavoce e i telefoni da tavolo, aiutano il vostro
            team a sentirsi come se tutti fossero nella stessa stanza.
          </p>

          <p>
            Che si tratti di piccolo spostamenti quotidiani o di viaggi di affari
            più lunghi, alcuni lavoratori hanno bisogno di rimanere connessi anche
            in viaggio.
          </p>

          <p>
            Ecco perchè le nostre soluzioni vengono progettate per essere
            facilmente impacchettate o riposte, in modo tale da poterle utilizzare
            ovunque.
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-4 bg-torch-500">
        <ImageComponent imageUrl="/images/landing/remotework1.webp">
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              PER UN{"'"}ESPERIENZA DI LAVORO FLESSIBILE E ACCESSIBILE OVUNQUE
            </h1>
            <p className="text-2xl text-center">
              Una ricerca mostra che il 97% dei dipendenti di un’azienda può
              essere classificato secondo sei diversi stili di lavoro.{" "}
            </p>
            <p className="text-2xl text-center">
              Ognuno con le proprie esigenze di spazio-lavoro e con i propri
              requisiti tecnologici.
            </p>
            <p className="text-2xl text-center">
              Identificate gli stili di lavoro all’ interno della vostra
              azienda. Fornite ai dipendenti gli strumenti audio e video più
              adatti al lavoro.
            </p>
          </div>
        </ImageComponent>

        <ImageComponent
          imageUrl="/images/landing/remotework2.webp"
          invert={true}
        >
          <div className="flex flex-col gap-4 mx-auto items-center justify-center py-16 px-8 lg:px-32">
            <h1 className="text-4xl font-bold text-torch-500 text-center">
              GARANTIAMO LA PRIVACY PER FARTI LAVORARE OVUNQUE TU VOGLIA
            </h1>
            <p className="text-2xl text-center">
              Gli spazi condivisi sono rumorosi.
            </p>
            <p className="text-2xl text-center">
              Rispondere alle chiamate di lavoro da caffetterie, mezzi pubblici
              o in mezzo al traffico può essere fastidioso.
            </p>
            <p className="text-2xl text-center">
              Ma ora i vostri dipendenti possono ricreare una zona tranquilla
              praticamente ovunque.
            </p>
            <p className="text-2xl text-center">
              Le nostre soluzioni audio e video, bloccano le distrazioni,
              riducono il rumore al minimo e ottimizzano la scarsa
              illuminazione.
            </p>
            <p className="text-2xl text-center">
              Finalmente le vostre chiamate potranno essere ascoltate
              chiaramente e rimarranno comunque private.
            </p>
          </div>
        </ImageComponent>
      </section>
    </main>
  );
}

export default RemoteWorkPage;
