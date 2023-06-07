"use client";
import React from "react";
import pages from "@/data/pages.json";
import { useRouter } from "next/navigation";

type Props = {};

function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const router = useRouter();
  const page = pages.pages.find((page) => page.slug === params.slug);

  if (!page) {
    return <div>Page not found</div>;
  }

  router.push(`/${page.slug}`);

  return <></>;
}

export default page;
