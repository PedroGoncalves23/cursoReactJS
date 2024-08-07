const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

///////////////////////////////////////

const pessoas = [
    {nome: 'Pedro', idade: 22},
    {nome: 'Luccas', idade: 78},
    {nome: 'José', idade: 35},
    {nome: 'Matheus', idade: 99},
    {nome: 'Vanderson', idade: 10},
]

const pessoas50anos = pessoas.filter( obj => obj.idade > 50)
console.log(pessoas50anos)