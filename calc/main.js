function calcular() {
  var valor1 = Number(document.getElementById('valor1').value)
  var valor2 = Number(document.getElementById('valor2').value)
  var operacion = Number(document.getElementById('operacion').value)

  switch (operacion) {
    case 1:
      sumar(valor1, valor2)
      break;
    case 2:
      restar(valor1, valor2)
      break;
    case 3:
      multiplicar(valor1, valor2)
      break;
    case 4:
      dividir(valor1, valor2)
      break;
    default:
      imprimirMensaje('Operador inválido')
      break;
  }
}

function imprimirMensaje(mensaje) {
  document.getElementById('mensaje').innerHTML = mensaje
}

function reiniciar() {
  document.querySelectorAll('input').forEach(input => input.value = '')
}

function sumar(a, b) {
  if (a < 0 || b < 0) {
    imprimirMensaje('Ambos numeros deben ser mayor que 0')
  } else {
    var suma = a + b
    imprimirMensaje("El resultado de " + a + " + " + b + " es: " + suma)
  }
}
function restar(a, b) {
  if (a < 0 || b < 0 || b < a) {
    imprimirMensaje('Ambos numeros deben ser mayor que 0, y el segundo valor debe ser mayor al primero')
  } else {
    var resta = a - b
    imprimirMensaje("El resultado de " + a + " - " + b + " es: " + resta)
  }
}
function multiplicar(a, b) {
  if (a < 0 || b < 0) {
    imprimirMensaje('Ambos numeros deben ser mayor que 0')
  } else {
    var multiplicar = a * b
    imprimirMensaje("El resultado de " + a + " * " + b + " es: " + multiplicar)
  }
}
function dividir(a, b) {
  if (a < 1 || b < 1 || b > a) {
    imprimirMensaje('Ambos numeros deben ser mayor que 0, y el segundo valor debe ser menor al primero')
  } else {
    var dividir = a / b
    imprimirMensaje("El resultado de " + a + " / " + b + " es: " + dividir)
  }
}