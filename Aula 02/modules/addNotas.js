import { ENTRADA_DE_DADOS } from "./entradaDados.js";
import { exibirResultado } from "./exibirResultado.js";

export let nota = 0;
let index = 0;

export function addNotas() {
  if (index < 4) {
    ENTRADA_DE_DADOS.question(`Digite a nota ${index + 1}: `, (entradaNota) => {
      let notaAtual = Number(entradaNota);

      if (isNaN(notaAtual) || notaAtual < 0 || notaAtual > 10 || notaAtual == "") {
        console.log("Entrada inválida");
        ENTRADA_DE_DADOS.close();
      } else {
        nota += notaAtual;
        index++;
        addNotas();
      }
    });
  } else {
    exibirResultado();
  }
}
