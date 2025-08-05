import { calcularMedia } from "./calcularMedia.js";
import { checkStatus } from "./checkStatus.js";
import { nomeAluno } from "./entradaDados.js";
import { media } from "./calcularMedia.js";
import { ENTRADA_DE_DADOS } from "./entradaDados.js";

export function exibirResultado() {
  calcularMedia();
  console.log(`O aluno ${nomeAluno} está ${checkStatus(media)}. A média foi de ${media}`);
  ENTRADA_DE_DADOS.close();
}
