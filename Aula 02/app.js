/********************************************************************************************************
 * Objetivo: Realizar cálculo de médias escolares em Node.JS (Condicionais, Tratamento de Erros, Variáveis)
 * Autor: Tiago Guimarães
 * Data: 30/07/25
 * Versão: 1.1
 *********************************************************************************************************/

let nomeAluno = "";
let nota = 0;
let index = 0;
let resultado;

const readline = require("readline");
const ENTRADA_DE_DADOS = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startApp() {
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

function addNotas() {
  if (index < 4) {
    ENTRADA_DE_DADOS.question(`Digite a nota ${index + 1}: `, (valor) => {
      let notaAtual = Number(valor);

      if (isNaN(notaAtual) || notaAtual < 0 || notaAtual > 10) {
        console.log("Entrada inválida");
        ENTRADA_DE_DADOS.close();
      } else {
        nota += notaAtual;
        index++;
        addNotas();
      }
    });
  } else {
    resultado = (nota / 4).toFixed(1);
    console.log(`O aluno ${nomeAluno} está ${checkStatus(resultado)}. A média foi de ${resultado}`);
    ENTRADA_DE_DADOS.close();
  }
}

function checkStatus(resultado) {
  if (resultado < 5) {
    return "REPROVADO";
  } else if (resultado >= 5 && resultado < 7) {
    return "em EXAME";
  } else {
    return "APROVADO";
  }
}

startApp();
