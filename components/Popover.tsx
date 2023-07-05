import React, {useRef} from "react";
import { VirtualElement, createPopper } from "@popperjs/core";
import { type } from "os";

type Props = {
  pathId: string;
};

const Popover = ({pathId}: Props) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  // const btnRef = React.createRef();
  // const popoverRef = React.createRef();
  const btnRef = useRef<Element | VirtualElement>(null);
  const popoverRef = useRef<Element | VirtualElement>(null);
  const openTooltip = () => {
    if(btnRef.current && popoverRef.current){
      createPopper(btnRef.current, popoverRef.current as HTMLElement, {
        placement: "bottom"
      });
      setPopoverShow(true);
    }
  };
  const closeTooltip = () => {
    setPopoverShow(false);
  };
  return (
    <div>
      <a
        href="/" className={`h-full p-3 ${pathId === "/" ?  "text-gray-50 font-extrabold" : ""} hover:bg-torch-600 transition-colors duration-200`}
        // className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        ref={btnRef as React.RefObject<HTMLButtonElement>}
      >
        Home
      </a>
      <div
        className={
          (popoverShow ? "" : "hidden ") +
          "bg-blueGray-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
        }
        ref={popoverRef as React.RefObject<HTMLDivElement>}
      >
        <div>
          <div
            className="bg-blueGray-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
          >
            blueGray tooltip title
          </div>
          <div className="text-white p-3">
            {"And here's some amazing content. It's very engaging. Right?"}
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="flex flex-wrap">
    //     <div className="w-full text-center">
    //       <button
    //         className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
    //         onMouseEnter={openTooltip}
    //         onMouseLeave={closeTooltip}
    //         ref={btnRef as React.RefObject<HTMLButtonElement>}
    //       >
    //         bottom blueGray
    //       </button>
    //       <div
    //         className={
    //           (popoverShow ? "" : "hidden ") +
    //           "bg-blueGray-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
    //         }
    //         ref={popoverRef as React.RefObject<HTMLDivElement>}
    //       >
    //         <div>
    //           <div
    //             className="bg-blueGray-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
    //           >
    //             blueGray tooltip title
    //           </div>
    //           <div className="text-white p-3">
    //             {"And here's some amazing content. It's very engaging. Right?"}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Popover;