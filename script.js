function juntarTextos(){
    let lista = []
    lista[0] = document.getElementById("entrada1").value
    lista[1] = document.getElementById("entrada2").value
    lista[2] = document.getElementById("entrada3").value

    document.getElementById("resposta").textContent = lista.join("-")
}