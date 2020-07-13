calcular() {
	var altura = document.getElementByID("altura")
	var peso = document.getElementByID("peso")
	var resultado = (peso / (altura ^ 2) )
	var showResultado = document.getElementByID("resultado")
	showResultado.innerText = `${resultado}`;
};
