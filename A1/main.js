const botoes = document.querySelectorAll(".botao");
//Declara quais elementos vão ser lidos. O script vai ler todos que tiverem a classe "botao".
const textos = document.querySelectorAll(".abra-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-17t12:00:00");
const tempoObjetivo2 = new Date("2025-12-08t00:00:00");
const tempoObjetivo3 = new Date("2024-12-19t12:00:00");
const tempoAtual = new Date;

for(let i=0;i <botoes.length;i++){
    //Variável "i" é igual a 0, mas enquanto essa variável for menor que a quantidade de elementos nessa lista, aumentamos o valor de "i", ou seja, i será a quantidade de botões.
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
        }
        //Remove a classe "ativo" de todos os botões.
        botoes[i].classList.add("ativo");
        //Adiciona a classe ativo só no botão clicado.
        textos[i].classList.add("ativo");
    }
}


contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
contadores[2].textContent = calculaTempo(tempoObjetivo3);


function calculaTempo(tempoObjetivo){
    let tempoAtual= new Date();
    let tempoFinal= tempoObjetivo - tempoAtual;
    let segundos= Math.floor(tempoFinal/1000);
    let minutos= Math.floor(segundos/60);
    let horas= Math.floor(minutos/60);
    let dias= Math.floor(horas/24);

    segundos %=60;
    minutos %=60;
    horas %=24;

    return dias+" dia "+horas+" hora "+minutos+" minutos "+segundos+" segundos ";
}