export function checkStatus(media) {
  if (media < 5) {
    return "REPROVADO";
  } else if (media >= 5 && media < 7) {
    return "em EXAME";
  } else {
    return "APROVADO";
  }
}
