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
let nome = prompt("Digite Seu Nome");
alert(`Bem-Vindo ao teste: ${nome}`);
let saldo = 1000;
alert(`Você Pode Ganhar: ${saldo} em dinheiro`);
numero = prompt("Escolha um numero de 1 a 30");
numeroSorte = 27
let saldoAcumulado = 0;

if (numero == numeroSorte){
    alert(`Você Acertou o Numero da Sorte ${numeroSorte}`);
    saldoAcumulado = saldoAcumulado + 1000;
    alert(`Seu Saldo Atual é de: ${saldoAcumulado} Parabens Por Ganhar`);
}else{
    alert(`Você Errou o Numero da Sorte digitou: ${numero}`);
}
*/

/*Desafios
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
contador = 1;

while (contador <= 10){
  console.log(contador);
  contador++ 
}
*/
/*Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador = 10;

while(contador >= 0) {
    console.log(contador);
    contador-- 
}
*/
/*Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = prompt("Digite um Numero para contagem:");

while (numero >= 0) {
    console.log(`O numero esta em : ${numero}`);
    numero--;
}
*/
/*Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
numero = prompt("Digite um Numero para começar a contar ate 100");
contador = 0

while (numero >= contador) {
    console.log(`O Numero é: ${contador}`);
    contador++
}*/


/*Condição AND &&
idade = prompt("Digite Sua Idade para Acessar o Site");
acesso = true;

if (idade >= 18 && acesso) {
    alert("Bem-Vindo Ao Site");
} else {
    alert(`Você é menor de idade, não pode acessar ainda: ${idade}`);
}
*/
/*Desafios finais
Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.*/

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = prompt("Qual seu nome?");
alert(`Ola, ${nome}`);
let idade = prompt("Qual sua idade?");


if (idade >= 18) {
    alert(`${nome} Você pode continuar com a calculadora digite 2 numeros para somar:`);
    let valor1 = Number(prompt("Digite o primeiro Valor"));
    let valor2 = Number(prompt("Digite o segundo valor"));

    let resultado = valor1 + valor2;
    let divisao = valor1 / valor2;
    let multi = valor1 * valor2;
    let binario = resultado.toString(2);
    while (binario.length % 4 !== 0) {
        binario = "0" + binario;
    }

    let binarioFormatado = binario.match(/.{1,4}/g).join(" ");

    let hexadecimal = resultado.toString(16);
    let Octal = resultado.toString(8);

    alert(`Soma: ${resultado}; Divisão: ${divisao}; Multiplicação: ${multi}; Binario: ${binarioFormatado}; Hexadecimal: ${hexadecimal}; Octal: ${Octal};`);
    alert(resultado > 0 ? "O número é positivo." : resultado < 0 ? "O número é negativo." : "O número é zero.")
} else {
    alert(`Você ainda não tem idade para usar esta calculadora!!`);

}


// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

// Use um loop while para imprimir os números de 1 a 10 no console.

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.