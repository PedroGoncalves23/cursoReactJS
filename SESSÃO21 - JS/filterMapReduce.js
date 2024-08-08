const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros
.filter(valor => valor % 2 === 0) // FILTRAR APENAS OS Nº PARES
.map(valor =>  valor * 2) // MULTIPLICAR CADA Nº POR 2
.reduce((ac, valor) =>  ac + valor) // SOMAR TUDO E RETORNAR APENAS A SOMA

console.log(numerosPares)