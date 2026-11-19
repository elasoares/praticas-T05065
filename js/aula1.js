/* document.getElementById("msg").textContent = "Exibindo Hello, world! no DOM";
document.getElementById("msg").style.fontSize ="35px";
 */
const campoMsg = document.getElementById("msg");
campoMsg.textContent = "Exibindo Hello, world! no DOM";
campoMsg.style.fontWeight = "bold";
campoMsg.style.fontSize = "32px";

/* console.log(document.getElementById("msg").textContent = "Exibindo Hello, world! no DOM"); */

/* 
    document.getElementsByTagName("div")[0].textContent = "Teste com método get-tag";
    document.getElementsByClassName("item")[2].textContent = "Testando o campo item da lista.";
 */

/* 
    document.querySelector("#msg").textContent = "Exibindo Hello, world! no DOM";
    document.querySelector("div").textContent = "Teste";
    document.querySelector(".titulo").textContent = "Testando o campo de título.";

 */


/* ============ Variáveis ============ */

// LET 

let nome = "Alice";
console.log("Bem-vinda " + nome);

nome = "Elaine";
console.log("Bem-vinda " + nome);

// CONST

const nomeConst = "Padaria do Bairro";
console.log(nomeConst);

const anoFundacao = 1988;
console.log(anoFundacao);

/* nomeConst = "Teste";
console.log(nomeConst); */


/* ============ TIPO DE DADOS ============ */

// string (texto)
console.log(" TIPO DE DADOS - STRING ");
let nomePrimeiro = "Elaine";
let sobrenome = 'Soares';

//Template literal
console.log(` Nome: ${nomePrimeiro} | Sobrenome:  ${sobrenome} | Idade: 25 `);

//Concatenação
console.log("Nome: " + nomePrimeiro + " | Sobrenome: " + sobrenome);


console.log(" TIPO DE DADOS - NÚMERO ");
//number (número)
let idade = 25; // inteiro (int - integer)
let altura =  1.64; // decimal (float - double - BigDecimal)

console.log("Valor da variável idade: " + typeof(idade));

let n1 = 1;

console.log(idade + n1);
console.log(`Nome: ${nomePrimeiro}, idade: ${idade}, sua altura: ${altura} `);


//boolean (Boleano)

console.log(" TIPO DE DADOS - BOOLEAN ");

const maiorIdade = idade >= 18;
console.log(idade >= 18);
console.log(idade < 12);
console.log(idade === 20);

console.log("Valor da variável maiorIdade: " + typeof(maiorIdade));

// object(Objeto)

let cadastro = {

    nomeUsuario: "Elaine Soares" ,
    email: "elaine@gmail.com" , 
    cpf: "610.000.000-00", 

    sucesso: function(){
       // alert("Usuário(a) " + this.email + " cadastrado(a) com sucesso!");
    }


}

console.log(cadastro.nomeUsuario);
cadastro.sucesso();

// array ou vetor (Lista)

    // índices  0         1        2
let frutas = ["Maçã", "Laranja", "Uva"];

console.log(frutas);
console.log(frutas[2]);
console.log(frutas.length);

//adiciona no fim da lista
frutas.push("Morango");
console.log(frutas);

//remove o último item da lista
frutas.pop();
console.log(frutas);


//adiciona no início da lista
frutas.unshift("Melão");
console.log(frutas);


//remove item do início da lista
frutas.shift();
console.log(frutas);


// Operador ++

let x = 2;
/* x = x + 1; */
x++;
console.log("Valor de x = " + x);

// Operador --
x--;
console.log("Valor de x = " + x);


// Operador +=
//x = x + 5;
x += 8;
console.log("Valor de x = " + x);

// Operador -=
//x = x - 8;
x -= 8;
console.log("Valor de x = " + x);

// Operador *=
//x = x * 2;
x *= 2;
console.log("Valor de x = " + x);

// Operador /=
//x = x / 2;
x /= 2;
console.log("Valor de x = " + x);


//Operadores de comparação 

let testN1 = "10"; // valor "5" - tipo string ""
let testN2 = 10; // valor 5 - tipo number

/*  "==" ele valida se os dois valores são iguais */
console.log(testN1 == testN2);

/*  "===" ele valida se os dois valores são iguais e os tipos são iguais */
console.log(testN1 === testN2);

/*  "!=" ele valida se os dois valores são diferentes */
console.log(testN1 != testN2); 


/*  "!==" ele valida se os dois valores são diferentes e se os tipos são diferentes*/
console.log(testN1 !== testN2); 

/*  ">" ele compara se o primeiro valor é maior que o segundo*/
console.log(testN1 > testN2); 


/*  "<" ele compara se o primeiro valor é menor que o segundo*/
console.log(testN1 < testN2); 


/*  ">=" ele compara se o primeiro valor é maior que o segundo OU se os dois valores são iguais*/
console.log(testN1 >= testN2); 


/*  "<=" ele compara se o primeiro valor é menor que o segundo OU se os dois valores são iguais*/
console.log(testN1 <= testN2); 


// Operadores lógicos
let temIngresso = true;
let idade1 = 12;

/* && (E) ambas as partes precisam ser verdadeiras */

if(temIngresso && idade1 >= 18){
    console.log("Pode entrar na festa!");
}else{
    console.log("Não pode entrar.");
}


let ehEstudante = false;
let ehIdoso = false;
/* || (OU) pelo menos uma das partes precisam ser verdadeiras */
if(ehEstudante || ehIdoso){
    console.log("Tem direito a desconto!");
}else{
    console.log("Preço normal.");
}

/* ! (operador que inverte valores) */
let ativo = false;


if(!ativo){
    console.log("Usuário não ativo, usuário desativado.");
}else{
    console.log("Usuário ativo.");
}
console.log(!ativo);