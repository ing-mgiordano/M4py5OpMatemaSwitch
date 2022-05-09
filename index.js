function calcularResult() {
	const num1 = parseInt(document.getElementById('input-num1').value);
	const num2 = parseInt(document.getElementById('input-num2').value);
	let oper = document.getElementById('Opciones').value;
	

	switch (oper) {
		case 'Suma':
			document.getElementById('resultado').innerHTML = `El resultado de la ${oper} es ${num1 + num2}`;
			break;
		case 'Resta':
			document.getElementById('resultado').innerHTML = `El resultado de la ${oper} es ${num1 - num2}`;
			break;
		case 'Multiplicacion':
			document.getElementById('resultado').innerHTML = `El resultado de la ${oper} es ${num1 * num2}`;
			break;
		case 'Division':
			document.getElementById('resultado').innerHTML = `El resultado de la ${oper} es ${num1 / num2}`;
			break;
		default:
			document.getElementById('resultado').innerHTML = `No ha seleccionado una operacion matematica`
			break;
	}
	

	console.log(num1, num2, oper, result)
}
