


function acaoBotao() {
    var numero, fatorial, contador
    numero = prompt("digite o número para calcular o fatorial.")
    fatorial = 1
    for (contador =1; contador <= numero; contador++) {
        fatorial = fatorial * contador  
    }
    document.getElementById("paragrafo").innerText = "o fatorial de " + numero + " é: " + fatorial
}