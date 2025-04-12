/*Aula 01 Desafios
alert("Boas Vindas ao Site!"); //Alert Inicial
//Variaveis Definidas
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemErro = "Erro! Preencha Todos os Campos";
alert(mensagemErro);

//Função para mudar variavel nome e idade e mandar alerta conforme a mudança
nome = prompt("Qual é Seu Nome e Idade?");
idade = prompt("Qual é a Sua Idade?")
console.log(nome, idade);
if (idade >= 18){
    alert("Vocé já pode tirar Habilitação!!");
}else{
    alert("Você é menor de idade!!")
}*/

/*Aula 02 Desafios 1 - Alura
nome = prompt("Qual é seu Nome?");
alert(`Bem-Vindo a Experiencia de programação: ${nome}`)
diaSemana = prompt("Qual é o dia da semana?");
//converter tudo para respostas minusculas
diaSemana = diaSemana.toLowerCase();
if (diaSemana == "sabado" || diaSemana == "sábado" || diaSemana == "domingo"){
    alert("Bom Final de Semana!!");
}else{
    alert("Boa Semana!!");
}
*/

/*Desafio 2 - Alura
numero = prompt("Digite um numero")
if (numero > 0) {
    alert(`O Numero que voce digitou é positivo: ${numero}`);
}else{
    alert(`O Numero que vocé digitou é negativo: ${numero}`)
}
*/

/*Desafio 3 - Alura
let nome = prompt("Digite Seu Nome")
alert(`Bem-Vindo ao teste: ${nome}`)
let saldo = 1000;
alert(`Você Pode Ganhar: ${saldo} em dinheiro`)
numero = prompt("Escolha um numero de 1 a 30");
numeroSorte = 27
let saldoAcumulado = 0;

if (numero == numeroSorte){
    alert(`Você Acertou o Numero da Sorte ${numeroSorte}`)
    saldoAcumulado = saldoAcumulado + 1000;
    alert(`Seu Saldo Atual é de: ${saldoAcumulado} Parabens Por Ganhar`)
}else{
    alert(`Você Errou o Numero da Sorte digitou: ${numero}`)
}
*/