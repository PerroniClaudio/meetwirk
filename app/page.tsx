"use client";

type Props = {};

function Home({}: Props) {
  return (
    <main
      className="min-h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/images/6178721.webp)" }}>
      <div className="min-h-screen w-full bg-neutral-900/60 px-8 py-16 flex flex-col gap-8 items-center justify-center ">
        <h1 className="text-6xl lg:text-8xl font-bold text-center text-gray-50 drop-shadow-md">
          La soluzione <br /> migliore per il tuo <br /> business?
        </h1>

        <button className="bg-torch-500 text-gray-50 px-8 py-4 text-4xl font-extrabold rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
          Scegliamola insieme
        </button>
      </div>
    </main>
  );
}

export default Home;
