let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.6,
    engordar(p=0){
        this.peso += p
        console.log(`Engordou ${p} kilos, agora você pesa ${this.peso}`)
    }
}

amigo.engordar(5)