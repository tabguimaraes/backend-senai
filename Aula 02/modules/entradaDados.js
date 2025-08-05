// const { addNotas } = require("./addNotas.js");

import { createInterface } from "readline";
import { addNotas } from "./addNotas.js";

export let nomeAluno = "";

export const ENTRADA_DE_DADOS = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function startApp() {
  ENTRADA_DE_DADOS.question("Digite o nome do aluno: ", (valor) => {
    nomeAluno = String(valor).toUpperCase();

    if (nomeAluno === "") {
      console.log("ERRO: O campo nome não pode estar vazio.");
      ENTRADA_DE_DADOS.close();
    } else {
      addNotas();
    }
  });
}
