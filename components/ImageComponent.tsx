import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  imageUrl: string;
  invert?: boolean;
};

function ImageComponent({ imageUrl, children, invert }: Props) {
  let rowClass = "lg:flex-row";

  if (invert) {
    rowClass = "lg:flex-row-reverse";
  }

  return (
    <div className={`flex items-stretch flex-col ${rowClass}`}>
      <div className="lg:w-1/2  bg-neutral-900 text-white flex flex-col items-center justify-center">
        {children}
      </div>
      <div
        className="hidden w-0 lg:flex lg:w-1/2  bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>
    </div>
  );
}

export default ImageComponent;
