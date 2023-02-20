var tentativas = 3;

function sortea() {
    return numeroSecreto = parseInt(Math.random() * 11);
}

var numeroSecreto = sortea();

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");
    var chances = document.getElementById("chances");
    console.log(numeroSecreto);

    if (chute == numeroSecreto) {
        resultado.innerHTML = "Você acertou! número resetado.";
        tentativas = 3;
        chances.innerHTML = "Você tem " + (tentativas) + "/3";
        numeroSecreto = sortea();
    } else if (chute < 0 || chute > 10) {
        resultado.innerHTML = "Você tem que digitar um número de 0 a 10!";
    } else {
        resultado.innerHTML = "Você errou!";
        tentativas--;
        chances.innerHTML = "Você tem " + (tentativas) + "/3";
        if(tentativas == 0) {
            resultado.innerHTML = "Game Over (×﹏×), o número secreto era " + numeroSecreto;
            numeroSecreto = sortea();
            tentativas = 3;
            chances.innerHTML = "Você tem " + (tentativas) + "/3";
        }
    }
}


