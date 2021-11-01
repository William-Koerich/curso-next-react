export function mega(quantidade = 6, numeros = []) {
  quantidade = +quantidade
  if (quantidade < 6 && quantidade > 60) {
    throw "Quantidade inválida!"
  }

  if (numeros.length === quantidade) {
    return numeros.sort((n1, n2) => n1 - n2)
  }

  const numeroAleatorio = parseInt(Math.random() * 60) + 1

  if (!numeros.includes(numeroAleatorio)) {
    return mega(quantidade, [...numeros, numeroAleatorio])
  } else {
    return mega(quantidade, numeros)
  }
}