function imprimir(msg) {
    number = Math.floor(Math.random() * (1, 5))
    number = number * 1000
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(msg), number); 
    });
}

async function teste() {
    try {
        const a = await imprimir("Oi 1");
        console.log(a)

        setTimeout(function() {
            console.log("Estava pendente", a)
        }, 1100)

        const b = await imprimir("Oi 2");
        console.log(b + " em: " + number + " milesegundos")
        const c = await imprimir("Oi 3");
        console.log(c + " em: " + number + " milesegundos")
        const d = await imprimir("Oi 4");
        console.log(d + " em " + number + " milessegundos")
    } catch(e) {
        console.log(e)
    }
}

teste();    
console.log("Vou executar isso primeiro");
