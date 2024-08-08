function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min ) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (msg == "Conexão com o BD") reject("error...")
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi("Conexão com o BD", rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi("Buscando dados no BD", rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log("Exibindo dados do  BD");
    })
    .catch(e => {
        console.log(e);
    });

