function tabuada(){
    let numEscolhido = document.getElementById('txtnum')
    let res = document.getElementById('seltab')

    if(numEscolhido.value == 0){
        alert('Escolha um número válido')
    }else{
        let num = Number(numEscolhido.value)
        let c = 1
        res.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }
    }
}