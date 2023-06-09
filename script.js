function capturaNomeSobrenomeIdade() {
    const nome = prompt("Digite o nome do aluno:")
    const sobrenome = prompt("Digite o sobrenome do aluno:")
    const idade = prompt("Digite a idade do aluno:")
    let nomeCompleto = nome + " " + sobrenome
    alert("\nO nome do aluno é: " + nomeCompleto + "\n\nSua idade é: " + idade)

    // Usando JQuery para estilizar dinamicamente
    // $("main").css("color", "red")
    $("main").css("margin-top", "70px")
    // Usando JQuery para adicionar um elemento no arquivo HTML
    $("#cadastro-aluno").append("<h1>Aluno Cadastrado:</h1><div style=\"border: 3px solid red;\"><h3>" + nomeCompleto + "</h3> <h4>" + idade + " anos</h4>");
}

function lerPromptMediaAritmetica() {
    const quantidade = Number(prompt("Insira o número de valores que serão utilizados no cálculo da Média Aritmética."))
    let numero = Number(prompt("Insira o primeiro número:"))
    for (i = 0; i < quantidade - 1; i++) {
        numero += Number(prompt("Insira o próximo número"))
    }
    let mediaAritmetica = numero / quantidade
    alert("A Média Aritmética é " + mediaAritmetica)
}

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