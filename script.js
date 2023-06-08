function calculaMediaAritmetica() {
    let numero = document.getElementById("numero1")
    const numero1 = Number(numero.value)

    numero = document.getElementById("numero2")
    const numero2 = Number(numero.value)

    numero = document.getElementById("numero3")
    const numero3 = Number(numero.value)
    // alert('Número 1 é ' + numero1 + '\nNúmero 2 é ' + numero2 + '\nNúmero 3 é ' + numero3)

    let mediaAritmetica = 0
    mediaAritmetica = (numero1 + numero2 + numero3) / 3
    alert("\nA Média Aritmética dos 3 números digitados é:\n\n" + mediaAritmetica)
}

function calculaMediaPonderada() {
    let numero = document.getElementById("numero1")
    const numero1 = Number(numero.value)
    numero = document.getElementById("peso1")
    const peso1 = Number(numero.value)

    numero = document.getElementById("numero2")
    const numero2 = Number(numero.value)
    numero = document.getElementById("peso2")
    const peso2 = Number(numero.value)

    numero = document.getElementById("numero3")
    const numero3 = Number(numero.value)
    numero = document.getElementById("peso3")
    const peso3 = Number(numero.value)
    // alert('Número 1 é ' + numero1 + '\nNúmero 2 é ' + numero2 + '\nNúmero 3 é ' + numero3)

    let mediaPonderada = 0
    mediaPonderada = ((numero1 * peso1) + (numero2 * peso2) + (numero3 * peso3)) / 3
    alert("\nA Média Ponderada dos 3 números digitados é:\n\n" + mediaPonderada)
}