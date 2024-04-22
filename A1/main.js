const botoes = document.querySelectorAll(".botao");
//Declara quais elementos vão ser lidos. O script vai ler todos que tiverem a classe "botao".
const textos = document.querySelectorAll(".abra-conteudo");

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