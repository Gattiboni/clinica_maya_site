import { area } from "./area";
import { dor } from "./dor";
import { post } from "./post";
import { profissional } from "./profissional";
import { programa } from "./programa";
import { siteConfig } from "./siteConfig";

/** Os seis tipos de documento do modelo de conteúdo (esqueleto v3). */
export const schemaTypes = [siteConfig, area, profissional, dor, programa, post];

/** Tipos com um único documento: sem criar, duplicar ou apagar no Studio. */
export const SINGLETONS = new Set(["siteConfig"]);
