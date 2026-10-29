"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

/** Sanity Studio embutido. Único client component do scaffold. */
export function Studio() {
  return <NextStudio config={config} />;
}
