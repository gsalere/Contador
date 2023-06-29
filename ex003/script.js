function result(){

    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if(inicio >fim){
        alert("Por favor, insira os valores corretamente!")
    }else if(passo == 0){
        alert("Impossível contar")
    }
    else{
        for(var i = inicio; i <fim; i+=passo){
            console.log(i)
            res.innerHTML += `👉${i}`
        }
            res.innerHTML += `🏁<br>`
    } 
}

