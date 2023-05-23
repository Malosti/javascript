let num = document.getElementById('txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionarNumero(){

    // Usa funções para validar se o número está no intervalo desejado e se o mesmo já não se encontra na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        
        // criando elemento 'option' para exibir o número adicionado
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        res.innerHTML = ''
       

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot

        res.innerHTML += `<p>Ao todo, temos ${tot} elementos.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}<p>`
        res.innerHTML += `<p>A soma entre os valores é ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores é ${media}</p>`
        
    }
}
