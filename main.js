function calcular() {
  let altura = document.getElementById("altura");
  let peso = document.getElementById("peso");
  var resultado = peso.value / (altura.value ^ 2);
  var showResultado = document.getElementById("valor");
  var showAnalise = document.getElementById("analise");

  if (isNaN(resultado)) {
    showResultado.innerText = "Favor insira um número";
    altura.style.border = "1px solid #ea0000";
    peso.style.border = "1px solid #ea0000";
  } else {
    showResultado.innerText = `${resultado.toFixed(2)}`;
    aplicaEstiloRE(showResultado);  
  }

  if(resultado<18.5){
    showAnalise.innerText = "Você está abaixo do peso";
    
    }
    else if(resultado>=18.5 && resultado<24.9){
      showAnalise.innerText = "Seu peso está ideal";
      
    }
    
    else if(resultado>=25 && resultado<29.9) {
      showAnalise.innerText = "Você está com Obesidade grau I";
      
    }
    else if(resultado>=30 && resultado<39.9) {
      showAnalise.innerText = "Você está com Obesidade grau II";
      
    }
    else if (resultado>40)
    showAnalise.innerText = "Você está com Obesidade grau III";
    
    }


function aplicaEstiloRE(componente) {
  componente.style.backgroundColor = "#ffffff";
  componente.style.border = "none";
  componente.style.borderRadius = "10px";
  componente.style.color = "#000000";
  componente.style.padding = "10px";
  componente.style.textAlign = "center";
  componente.style.width = "100px";
  componente.style.height ="40px";
}

function aplicaEstiloAN(componente){
  
}