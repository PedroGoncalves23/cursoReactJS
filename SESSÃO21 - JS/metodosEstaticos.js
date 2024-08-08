class CaixaSom {
    constructor(som) {
        this.som = som;
        this.volume = 0
    }

    aumentarVolume() {
        this.volume += 4
    }

    diminuirVolume() {
        this.volume -= 2
    }


    // METODO ESTATICO
    // ELE SÓ É USADO DIRETO NA CLASSE, NAO PODENDO SER CHAMADO DIRETO NO CAIXAR1
    static pausar() {
        return "pausei"
    }
}

const caixa1 = new CaixaSom("CAIXA TESTE")


caixa1.aumentarVolume()
caixa1.diminuirVolume()
console.log(CaixaSom.pausar())
console.log(caixa1)