function juntarTextos() {
  const entrada1 = document.getElementById("entrada1");
  const entrada2 = document.getElementById("entrada2");
  const entrada3 = document.getElementById("entrada3");
  const vetor = [entrada1.value, entrada2.value, entrada3.value];
  let resposta = join(vetor);
  alert(resposta);
}

function join(vetor) {
  let resposta = "";
  for (let index = 0; index < vetor.length; index++) {
    resposta += concat(index, vetor[index], vetor.length);
  }
  return resposta;
}

function concat(index, element, length) {
  let resposta = "";
  resposta += element;
  if (index + 1 < length) {
    resposta += ",";
  }
  return resposta;
}
