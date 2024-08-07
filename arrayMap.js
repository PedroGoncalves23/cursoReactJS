const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobroNumeros = numeros.map(valor => valor * 2);
console.log(dobroNumeros)


/////////////////////////////

const pessoas = [
    {nome: 'Pedro', idade: 22},
    {nome: 'Luccas', idade: 78},
    {nome: 'José', idade: 35},
    {nome: 'Matheus', idade: 99},
    {nome: 'Vanderson', idade: 10},
]

const apenasNome = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade}))
const addID = pessoas.map(function(obj, indice) {
    obj.id = indice;
    return obj
})
console.log(apenasNome)
console.log(idades)

console.log(addID)