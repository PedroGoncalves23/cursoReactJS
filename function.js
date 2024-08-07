function falaOi(nome) {
    console.log(`Olá ${nome}`)
}

falaOi("Pedro")

const nome = function(nome) {
    console.log(nome)
}

nome("Pedro 2")

const funcaoArrow = (nome) => {
    console.log(`Oi ${nome}, sou uma arrow function`)
}

funcaoArrow("Pedro")