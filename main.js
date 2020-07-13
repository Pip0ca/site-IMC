function calcular() {
  let altura = document.getElementById("altura");
  let peso = document.getElementById("peso");
  var resultado = peso.value / (altura.value ^ 2);
  var showResultado = document.getElementById("resultado");

  if (isNaN(resultado)) {
    showResultado.innerText = "Favor insira um número";
    altura.style.border = "1px solid #ea0000";
    peso.style.border = "1px solid #ea0000";
  } else {
    showResultado.innerText = `${resultado.toFixed(2)}`;
    aplicaEstilo(showResultado);
  }
}

function aplicaEstilo(componente) {
  componente.style.backgroundColor = "#131313";
  componente.style.border = "none";
  componente.style.borderRadius = "10px";
  componente.style.color = "#fff";
  componente.style.padding = "10px";
  componente.style.textAlign = "center";
  componente.style.width = "100px";
}
