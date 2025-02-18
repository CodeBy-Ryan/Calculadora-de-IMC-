function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    let dicas = document.getElementById("dicas");

    if (!peso || !altura || altura <= 0) {
        resultado.innerHTML = "Preencha os campos corretamente!";
        resultado.style.color = "red";
        dicas.innerHTML = "";
        return;
    }

    let imc = (peso / (altura * altura)).toFixed(2);
    let categoria = "";
    let cor = "";

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        cor = "#FFA500";
        dicas.innerHTML = "Dica: Uma alimentação equilibrada pode ajudar a atingir o peso ideal.";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
        cor = "#008000";
        dicas.innerHTML = "Ótimo! Mantenha uma alimentação saudável e exercícios regulares.";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
        cor = "#FFD700";
        dicas.innerHTML = "Dica: Evite alimentos ultraprocessados e pratique atividades físicas.";
    } else if (imc < 34.9) {
        categoria = "Obesidade Grau I";
        cor = "#FF4500";
        dicas.innerHTML = "Dica: Busque orientação de um profissional para melhorar sua saúde.";
    } else {
        categoria = "Obesidade Grau II ou III";
        cor = "#B22222";
        dicas.innerHTML = "Dica: Consulte um médico para um plano de saúde adequado.";
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> - <span style="color: ${cor};">${categoria}</span>`;
}
