let idadeIfElse = 18;

if(idadeIfElse <= 11){
    console.log("Você é uma criança.");

}else if(idadeIfElse >= 12 && idadeIfElse <= 17){
    console.log("Você é uma adolescente.");
}else {
    console.log("Você é adulto.");
}
// ==================
let idadeCarteira = 20;

if(idadeCarteira >= 18){
    console.log("Pode tirar a carteira de motorista.");
}else{
    console.log("Ainda não pode dirigir.");
}
//==================

let nota = 4;

if(nota >= 9){
    console.log("Excelente!");
}else if(nota >= 7 ){
    console.log("Aprovado!");
}else if(nota >= 5){
    console.log("Recuperação!");
}else{
    console.log("Reprovado!");
}
//==================

let estoque = 5;

if(estoque === 0){
    console.log("Esgotado!");

} else if(estoque <= 5){
    console.log("Ùtimas unidades! Corre!");

}else{
    console.log("Disponível");
}

let usuarioAtual = null;

if(usuarioAtual != null){
    console.log("Usuário(a) " + usuarioAtual + " logado");
}else if(usuarioAtual == null){
    console.log("Usuário não logado");
}

/* if / else if / else - aninhados */

let temPassagem = true;
let temDocumento = false;

if(temPassagem){
    if(temDocumento){
        console.log("Pode embarcar! 🛫 ");
    }else{
        console.log("Tem passagem, mas falta o documento.");
    }
}else {
    console.log("Sem passagem, não pode entrar nem na fila.");

}


/* Operador ternário */
// (condição) ? paraValoresVERDADEIROS : paraValoresFALSO;
let idadeTernario = 12;

let situacao = (idadeTernario >= 18) ? "Maior de idade" : "Menor de idade" ;
console.log(situacao);

/* let situacao2;

if(idadeTernario >= 18){
    situacao2 = "Maior de idade";
    console.log(situacao2);
}else{
    situacao2 = "Menor de idade";
    console.log(situacao2);
} */

/* switch */
let statusSwitch = "pagamento";

switch(statusSwitch){
    case "preparando":
        console.log("Seu pedido está sendo preparado.");
        break;
    case "saiu":
        console.log("Saiu para entrega");
        break;
    case "entregue":
        console.log("Pedido entregue! Bom apetite!");
        break;
    default: 
        console.log("Status desconhecido.");
}

/*  Laço de repetição: FOR */

/* for(começo; condição; passo){
} */

for(let i = 1; i <= 5; i++ ){
    console.log("Contador " + i + " Incremento");
}

console.log("=============================================");

for(let i = 5; i >= 1; i-- ){
    console.log("Contador " + i + " Decremento");
}

console.log("=============================================");

for(let i = 0; i <= 10 ; i+=2){
    console.log("Contador par: " + i);
}


console.log("=============================================");
/*  Laço de repetição: while - enquanto*/

/* 
while( condição ){
    //código ser executado
    passo
} 
    */

let energia = 5;

while(energia > 0 ){
    console.log("Contator while: " + energia );
    energia--;
}
console.log("=============================================");

let i = 1;

while (i <= 5){
    console.log("Contator while: " + i );
    i++;
}

console.log("=============================================");

 /*  Laço de repetição: do - while | fazer - enquanto*/

/* 
do {
    // bloco código a ser executado
    passo
} while( condição );
*/

let iDoWhile = 1;

do{
    console.log("Número: " + iDoWhile);
    iDoWhile++;
}while(iDoWhile <= 5);

console.log("=============================================");

let contadorDoWhile = 10;

while(contadorDoWhile < 5){
    console.log("Gerar a o código do while.");
}

do{
    console.log("Gerar a o código do do...while.");
}while(contadorDoWhile < 5);

console.log("=============================================");
    // Array/Vetor   0       1         2
let tentativas = ["1234", "0000", "senha123"];
let inicial = 0; // 1 - 2
let senha; 

do{

    senha = tentativas[inicial];
    console.log("Tentando: " + senha);
    inicial++;

}while(senha !== "1234");

console.log("Senha correta! Acesso liberado!");


console.log("=============================================");
/* Laço de repetição for...of */

/* 
    for(variável filho (let) of lista){
        //bloco de código a ser executado.
    }
*/

                //0        1         2           3          4        5        6          7         8
let alunos = ["Marcio", "Daiane", "Sonalli", "Jonathan", "Arwin", "Cleber", "Rodrigo", "Diego", "Amanda"];

console.log(alunos[0]);
console.log(alunos);

for (let aluno of alunos){
    console.log("Presente: " + aluno);
}
console.log("=============================================");

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

console.log("=============================================");

let notas = [8, 7, 9, 6, 8];
let soma = 0;

for(let nota of notas){
    soma = soma + nota;
}

console.log("Soma das notas: " + soma);
console.log("Média: " + (soma / notas.length));
console.log("Média: " + (soma / 4));


console.log("=============================================");
let palavra = "ABC";
console.log(palavra);

for (let letra of palavra){
    console.log(letra);
}

console.log("=============================================");
/* Laço de repetição for - break*/
let alunosForBreak = ["Ana", "Jessica", "Pedro", "Matheus"];

for(let i = 0; i < alunosForBreak.length; i++){
    console.log(`Verificando: ${alunosForBreak[i]}`);

    if(alunosForBreak[i] === "Pedro"){
        console.log("Achei o Pedro! Pode parar.");
        break;
    }

    console.log("Continuando o laço de repetição...");
}


console.log("=============================================");
/* Laço de repetição for - continue*/

for(let i = 0; i <= 5 ; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}

console.log("=============================================");
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

console.log("=============================================");
let produtoForContinue = ["Pão", "Bolo", "Sonho", "Salgado"];
let estoqueForContinue = [12, 0, 5, 0];

console.log("================ Disponíveis hoje ====================");

for(let i = 0; i < produtoForContinue.length; i++ ){
    if(estoqueForContinue[i] === 0){
        continue;
    }
    console.log("Produtos disponível: " + produtoForContinue[i]);
}


for(let i = 0; i < produtoForContinue.length; i++ ){
    if(estoqueForContinue[i] === 0){
        break;
    }
    console.log("Produtos disponível: " + produtoForContinue[i]);
}


console.log("=============================================");
/* function - Função*/
/* 
    function nomeDadoAFuncao(){
    //Bloco de código a ser executado
    } 
*/

function saudarFunction(){
    console.log("Olá, seja bem-vindo!");
}
saudarFunction();

function saudarFunctionComParametro(nome){
    console.log(`Olá, ${nome} seja bem-vindo(a)!`);
}
saudarFunctionComParametro("Elaine");
saudarFunctionComParametro("Beatriz");

function apresentarFuncao(nome, idade){
    console.log(`Nome ${nome}, idade ${idade}`);
}

apresentarFuncao("Elaine", 25);
apresentarFuncao("Vitor", 20);


function somarFuncao(a, b){
    let calculo = a + b;
    return calculo;
}

let resultado = somarFuncao(1, 2);
console.log(resultado);

console.log(somarFuncao(5, 2));

console.log("=============================================");
let contador = 1;

let elementoP = document.querySelector("#contador");

function aumentar(){
    contador++;
    elementoP.textContent = contador;
}

function diminuir(){

    if(contador > 1){
        contador--;
    }

   elementoP.textContent = contador;
}


console.log("=============================================");
/* Array/Vetor - Lista*/
/* 
   variavel = [];
*/

let filaArray = ["Bruno", "Cassia"];

console.log(filaArray);

/* for(let fila of filaArray){
    console.log(fila);
} */

//Adicionar ao fim da fila
filaArray.push("Daniel");
console.log(filaArray);

//Adicionar ao início da fila
filaArray.unshift("Socorro");
console.log(filaArray);

//Remove o item do final da fila
filaArray.pop();
console.log(filaArray);

//Remove o item do início da fila
filaArray.shift();
console.log(filaArray);


console.log("=============================================");
/* forEach - por cada*/
/* 
   variável.forEach(function(nome){ // bloco de código });
*/

let alunosForEach = ["Ana", "Jessica", "Pedro", "Matheus"];

alunosForEach.forEach(function(aluno){
    console.log("Presente: " + aluno);
});


let produtosForEach = ["Pão", "Bolo", "Sonho", "Salgado"];

produtosForEach.forEach(function( produto, posicao){
    console.log(`${posicao}: ${produto}`);
});

console.log("=============================================");
/* object - objetos*/
/* 
   variável = {
        propriedade: "valor",
        propriedade: "valor",
        propriedade: "valor"
        método: function(){}
   };
*/

let pessoa = {
    nome: "Maria das Dores",
    idade: 35,
    genero: "f",
    profissao: "Professora",
    cidade: "Fortaleza"    
};


for(let cadaPessoa in pessoa ){
    console.log("- " + cadaPessoa + " :" + pessoa[cadaPessoa]);
}

//Acessar objeto com for in



//Acessar objeto com o ponto "."
console.log(pessoa.nome);
console.log(pessoa.idade);

//Acessar objeto com o colchetes "[]"
let chave = "genero";
console.log(pessoa[chave]);

console.log(pessoa["cidade"]);
console.log(pessoa["profissao"]);

// Alterar o valor da propriedade 
pessoa.nome = "Maria das Graças";
console.log(pessoa.nome);
console.log(pessoa);

pessoa.idade = 30;
console.log(pessoa.idade);
console.log(pessoa);

// Adicionar um novo valor a propriedade
pessoa.email = "maria@gmail.com";
console.log(pessoa.email);
console.log(pessoa);

//Objetos com métodos

let cachorro = {
    nome: "Rex",
    idade: 2,
    latir: function(){
        console.log("Au, au");
    },
    apresentar: function(){
        console.log(`Olá, sou ${this.nome}, idade ${this.idade}`);
    }
};

cachorro.latir();
cachorro.apresentar();

console.log("=============================================");
let alunoObjeto = {
    nome: "João",
    notas: [8, 7, 9],

    calcularMedia: function(){
        let soma = 0;

        for(let nota of notas){
            //soma = soma + nota;
            soma += nota;
        }
        let resultado = soma / notas.length;
        return resultado;
        //return soma / notas.length;
    }
};

console.log(`${alunoObjeto.nome} - Média: ${alunoObjeto.calcularMedia()}`);

console.log("=============================================");
/* for in - percorre por cada propriedade de um objeto*/
/* 
  for(filho in objeto){ // bloco de código }
*/


for(let aluno in alunoObjeto){
    console.log(`${aluno}: ${alunoObjeto[aluno]} `);
}