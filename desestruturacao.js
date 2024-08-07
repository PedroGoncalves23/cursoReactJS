const numero = [ [1,2,3], [4,5,6], [7,8,9] ]
const numeroUm = numero[1][1]
// console.log(numeroUm)

const dados = {
    nome: 'Pedro',
    sobrenome: 'Gonçalves',
    idade: 22,
    endereco: { 
        rua: 'rua 2',
        bairro: "sla"
    }
};

// realizando a desestruturação 
const imprimir = {nome: primeiroNome, endereco: {rua}} = dados

console.log(primeiroNome, rua)