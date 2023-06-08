function calculaMedia() {
    let numero = document.getElementById("numero1")
    const numero1 = Number(numero.value)

    numero = document.getElementById("numero2")
    const numero2 = Number(numero.value)

    numero = document.getElementById("numero3")
    const numero3 = Number(numero.value)
    // alert('Número 1 é ' + numero1 + '\nNúmero 2 é ' + numero2 + '\nNúmero 3 é ' + numero3)

    let mediaAritmetica = 0
    mediaAritmetica = (numero1 + numero2 + numero3) / 3
    alert("\nA média aritmética dos 3 números digitados é:\n\n" + mediaAritmetica)
}