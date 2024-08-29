// let altura = document.querySelector("#altura");
// let peso = document.querySelector("#peso");
// let imc1 = document.querySelector ("#resultado")



// function calculandoImc (peso,altura){

//     let imc = peso.value/(altura.value * altura.value)
//     if (imc < 18){ 
//         console.log('Seu imc é de',imc.toFixed(2),'Kg/m2'+'. Você está abaixo do peso.')
//     }
//     else if (imc > 18 && imc <28){
//         console.log('Seu imc é de',imc.toFixed(2),'Kg/m2'+'. Você está no peso ideal.')
//     }
//     else {
//         console.log('Seu imc é de',imc.toFixed(2),'Kg/m2'+'. Você está acima do peso')
//     }
// }

function calculandoImc() {

    let altura = document.getElementById("altura");
    let valorAltura = altura.value;

    let peso = document.getElementById("peso");
    let valorPeso = peso.value;

    let imc = valorPeso / (valorAltura * valorAltura)

    if (imc < 18) {
        alert(`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está abaixo do peso.`)
    }
    else if (imc > 18 && imc < 28) {
        alert(`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está no peso ideal.`)
    }
    else {
        alert(`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está acima do peso.`)
    }
}

