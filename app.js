alert("Boas Vindas ao Site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemErro = "Erro! Preencha Todos os Campos";
alert(mensagemErro);

nome = prompt("Qual é Seu Nome e Idade?");
idade = prompt("Qual é a Sua Idade?")
console.log(nome, idade);
if (idade >= 18){
    alert("Vocé já pode tirar Habilitação!!");
}else (idade <= 18){
    alert("Você é menor de idade ")
}