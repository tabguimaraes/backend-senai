import { nota } from "./addNotas.js";

export let media;

export function calcularMedia() {
  media = (nota / 4).toFixed(1);
}
