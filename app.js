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
}