"use client";

type Props = {};

function Home({}: Props) {
  return (
    <main
      className="min-h-screen bg-center"
      // bg-cover bg-no-repeat"
      // style={{ backgroundImage: "url(/images/6178721.webp)" }}
    >
      <div className="min-h-screen w-full bg-neutral-900/60 px-8 py-16 flex flex-col gap-8 items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/images/6178721.webp)" }}>
        <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
          La soluzione <br /> migliore per il tuo <br /> business?
        </h1>

        <a href="#contact-us" className="bg-torch-500 text-gray-50 px-8 py-4 text-4xl font-extrabold rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
          Scegliamola insieme
        </a>
      </div>
      
      {/* Questa parte non mi piace. Bisogna trovare un altro modo di inserire queste informazioni */}
      {/* <div className=" bg-neutral-100"
      > */}
      <div  className="bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: "url(/images/onde-bianche.webp)" }}>
        <div className="container mx-auto px-8 py-32 flex flex-col gap-8 text-center text-xl lg:text-3xl">
          <p className="">
            Siamo di fronte a un cambiamento culturale che richiede all’azienda di
            rivedere le tradizionali modalità di lavoro spostando il focus su un
            approccio fondato sulla condivisione e sulla comunicazione fluida ed
            istantanea.
          </p>

          <p>
            Questa rivoluzione si attua grazie a strumenti di collaboration, come
            piattaforme di messaggistica e strumenti alternativi alla telefonia
            tradizionale, in grado di interfacciarsi ai sistemi di posta
            elettronica, a strumenti di condivisione e alle applicazioni
            aziendali.
          </p>

          <p>
            Se adeguatamente integrati, gli strumenti di collaboration possono
            garantire diversi vantaggi sia all’azienda che ai dipendenti,
            migliorando il flusso del lavoro, produttività ed efficienza
            complessiva.
          </p>

          <p>
            Un nuovo modo di lavorare che necessita di un’ottima connettività e
            strumenti hardware dedicati agli utenti e ai workplace.
          </p>

          {/* <p>
            Ti forniamo prodotti audio e video di livello professionale, per
            collaborare efficacemente - ovunque ti trovi.
          </p> */}
        </div>
      </div>

      <div className="bg-[url(/images/6178721.webp)] py-8">
        <div className="w-fit m-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:gap-x-32 xl:gap-y-10 text-xl font-semibold text-gray-50">
          <a href="/by-platform" 
            // className="flex justify-center p-4 rounded-full bg-black hover:bg-torch-500 transition-colors duration-200"
            className="text-center bg-torch-500 text-gray-50 px-4 py-4 font-bold rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300"
            >
            BY DIGITAL PLATFORM
          </a>
          <a href="by-industry" 
            className="text-center bg-torch-500 text-gray-50 px-4 py-4 font-bold rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300"
          >
            BY INDUSTRY
          </a>
          <a href="by-workspace" 
            className="text-center bg-torch-500 text-gray-50 px-4 py-4 font-bold rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300"
          >
            BY WORKSPACE
          </a>
          <a href="servizi" 
            className="text-center bg-torch-500 text-gray-50 px-4 py-4 font-bold rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300"          
          >
            SERVICES
          </a>
        </div>
      </div>

    </main>
  );
}

export default Home;
