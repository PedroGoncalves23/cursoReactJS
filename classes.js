class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`${this.nome} está falando!!`);
    }
}

const p1 = new Pessoa('Pedro', 22);
console.log(p1);
p1.falar();