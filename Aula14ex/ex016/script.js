function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let intervalo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

   if(inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0){
        res.innerHTML = 'Impossível contar'
   }else{
        res.innerHTML = 'Contando...<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(intervalo.value)
        if(p <= 0){
            alert('Passo inválido, considerando PASSO 1')
            p = 1
        }

        if(i < f){
            // contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}