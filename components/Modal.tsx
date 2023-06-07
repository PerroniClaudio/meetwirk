"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  document.body.classList.add("overflow-hidden");

  const onDismiss = useCallback(() => {
    document.body.classList.remove("overflow-hidden");
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-gray-50/60 "
      onClick={onClick}>
      <div
        ref={wrapper}
        className="absolute w-full flex flex-col items-center justify-center lg:p-16">
        <button
          onClick={onDismiss}
          className="fixed top-4 right-4 z-50 bg-transparent h-8 w-8 flex flex-col items-center justify-center">
          <FaTimes className="text-torch-500" />
        </button>
        {children}
      </div>
    </div>
  );
}
