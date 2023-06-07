import React from "react";
import Modal from "@/components/Modal";
import pages from "@/data/pages.json";

type Props = {};

function LandingDynamicId({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const page = pages.pages.find((page) => page.slug === params.slug);

  if (!page) {
    return <Modal>Page not found</Modal>;
  }

  return (
    <Modal>
      <div
        className="bg-center bg-cover bg-no-repeat h-screen w-screen lg:h-[80vh] lg:w-3/4 relative"
        style={{ backgroundImage: `url(/images/landing/${page.image})` }}>
        {/* <div className="absolute inset-0 flex flex-col gap-8 bg-neutral-900/80 text-gray-50 px-4 py-8 lg:p-8 2xl:p-16 2xl:py-24"> */}
        <div className="absolute inset-0 flex flex-col  justify-center gap-8 bg-neutral-900/80 text-gray-50 p-4 lg:p-8">
          <div className="w-1/6 lg:w-1/12 bg-torch-500 h-6"></div>
          <h1 className="text-4xl 2xl:text-6xl text-center lg:text-left font-bold lg:w-1/2">
            {page.title}
          </h1>
          <hr className="border border-t-4" />
          <div className="flex flex-col gap-2 text-md 2xl:text-xl font-semibold text-center lg:text-left overflow-y-auto">
            <p>{page.description}</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="bg-torch-500 text-gray-50 text-2xl px-8 py-4 rounded-full shadow-md hover:bg-torch-600 transition-colors duration-300">
              Contattaci
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LandingDynamicId;
