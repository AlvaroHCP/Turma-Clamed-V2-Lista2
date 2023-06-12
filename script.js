function promptFloat(mensagemInput) {
    let numeroFloat = 0
    while (true) {
        numeroFloat = prompt(mensagemInput)
        try {
            numeroFloat = numeroFloat.replace(",", ".")
        } catch {
            continue
        }
        if (isNaN(parseFloat(numeroFloat))) {
            alert("Digite somente números!")
        } else {
            return Number(numeroFloat)
        }
    }
}

function promptInteiro(mensagemInput) {
    let numeroInteiro
    while (true) {
        numeroInteiro = prompt(mensagemInput)

        if (numeroInteiro.includes(",") || numeroInteiro.includes(".") || isNaN(parseInt(numeroInteiro))) {
            alert("Digite somente números inteiros!")
        } else {
            return Number(numeroInteiro)
        }
    }
}

function promptChar(mensagemInput) {
    let char
    while (true) {
        char = prompt(mensagemInput)
        if (isNaN(parseFloat(char))) {
            return char.trim()
        } else {
            alert("Digite somente letras!")
        }
    }
}

function capturaNomeSobrenomeIdade() {
    var nome, sobrenome, idade

    while (true) {
        nome = prompt("Digite o nome do aluno:")
        sobrenome = prompt("Digite o sobrenome do aluno:")
        idade = prompt("Digite a idade do aluno: (Digite somente números inteiros!)")

        if (isNaN(parseFloat(nome)) && isNaN(parseFloat(sobrenome)) && isNaN(parseInt(idade)) == false) {
            break
        } else {
            alert("Digite informações válidas!")
        }
        // try {
        //     nonExistentFunction();
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     console.log("Continues")
        // }

        // if (typeof nome == "string") {
        //     break
        // }
    }

    let nomeCompleto = nome + " " + sobrenome
    alert("\nO nome do aluno é: " + nomeCompleto + "\n\nSua idade é: " + idade)

    // Usando JQuery para estilizar dinamicamente
    // $("main").css("color", "red")
    $("main").css("margin-top", "50px")
    // Usando JQuery para adicionar um elemento no arquivo HTML
    $("#cadastro-aluno").append("<h1>Aluno Cadastrado:</h1><div style=\"border: 3px solid red;\"><h3>" + nomeCompleto + "</h3> <h4>" + idade + " anos</h4>");
}

function calculaIMC() {
    var altura, peso

    while (true) {
        altura = prompt("Digite sua altura em m: (digite ponto como separador de casas decimais)")
        peso = prompt("Digite seu peso em kg: (digite ponto como separador de casas decimais)")

        if (isNaN(parseFloat(altura)) == false && isNaN(parseFloat(peso)) == false) {
            break
        } else {
            alert("Digite apenas números!")
        }
    }

    const imc = Number(peso) / Number(altura ** 2)
    alert("O seu IMC é: " + imc)
}

function lerPromptMediaAritmetica() {
    const quantidade = promptInteiro("Insira o número de valores que serão utilizados no cálculo da Média Aritmética.")
    let numero = promptInteiro("Insira o primeiro número:")
    for (i = 0; i < quantidade - 1; i++) {
        numero += promptInteiro("Insira o próximo número")
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