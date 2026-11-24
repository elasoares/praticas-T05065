/* 
        
        Atividade 5: Projeto Integrado - Loja Virtual Interativa
*/

console.log("Atividade 1: Eventos Básicos de Clique");

const botaoAdicionar = document.getElementById("btn-adicionar-carrinho");
botaoAdicionar.addEventListener("click", function(){
    document.getElementById("aviso-livro").textContent  = "Livro no carrinho.";
});
/* ============================================================= */
function cadastrar(){
    const msg =  document.getElementById("msg-cadastrar");
    msg.textContent = "Você foi cadastrada com sucesso!";
    msg.style.color = "green";
    msg.style.fontWeight = "bolder";
}

/* ============================================================= */
let quantidade = 1;

const mais = document.getElementById("btn-mais");
const menos = document.getElementById("btn-menos");
const qtd = document.getElementById("qtd");
qtd.textContent = quantidade;


mais.addEventListener('click' , ()=>{
    quantidade++;
    
    /* quantidade = quantidade + 1;
    quantidade += 1; */
    
    qtd.textContent = quantidade;
});

menos.onclick = function(){
    if(quantidade > 1) {
        quantidade--;
    }
     qtd.textContent = quantidade;
} ;


/* ============================================================= */
console.log("Atividade 2: Eventos de Mouse e Interação Visual");
const card = document.getElementById('card');


/* card.addEventListener('mouseenter', ()=>{
    card.style.backgroundColor = "red";
    card.style.borderRadius = "50px";
});

card.addEventListener('mouseleave', ()=>{
    card.style.backgroundColor = "burlywood";
    card.style.borderRadius = "0px";
});
*/

const info = document.getElementById("visualizar-info");
const img = document.getElementById("img");


card.addEventListener('mouseenter', ()=>{
   info.style.display = "block";
   img.style.width= "220px";
   img.style.height= "220px";
   
   card.style.width= "220px";
   
});

card.addEventListener('mouseleave', ()=>{
    info.style.display = "none";
    
    card.style.width= "200px";
    img.style.width= "200px";
    img.style.height= "200px";
});


/* ============================================================= */
console.log("Atividade 3: Eventos de Formulário e Validação");

const campoEmail = document.getElementById("campoEmail");
const campoMsg = document.getElementById("msg-input-email");

const campoSenha = document.getElementById("senha");
const campoMsgSenha = document.getElementById("msg-input-senha");


const formLogin = document.getElementById("formLogin");
const msgForm = document.getElementById("msg-form");

campoEmail.addEventListener('input', ()=>{
    if(campoEmail.value.includes("@") && campoEmail.value.includes(".com")){
        campoMsg.textContent = "Email válido";
        campoMsg.style.color = "green";
        campoMsg.style.fontWeight = "bolder";
    }else{
        campoMsg.textContent = "Email inválido";
        campoMsg.style.color = "red";
        campoMsg.style.fontWeight = "bolder";
        
    }
});


campoSenha.addEventListener('input', function(){
    let tamanho = campoSenha.value.length;
    if(tamanho < 4){
        campoMsgSenha.textContent = "🔴 Fraca";
    }else if(tamanho < 8){
        campoMsgSenha.textContent = "🟡 Média";
        
    }else{
        campoMsgSenha.textContent = "🟢 Forte";
    }
});


formLogin.addEventListener( 'submit', (event)=>{
    event.preventDefault();
    msgForm.textContent = "Logado com sucesso!"
    msgForm.style.color = "green";
    msgForm.style.fontWeight = "bolder";
} );

/* ============================================================= */
console.log("Atividade 4: Eventos de Teclado e Interação Avançada");

const campoBusca = document.getElementById("campoBusca");
const resultado = document.getElementById("resultado");
const produtos = ["Pão Francês", "Pão de Queijo", "Bolo de chocolate", "Croissant", "Sonho de geleia de morango", "Sonho de chocolate", "Sonho de creme leite", "Bolo de cenoura"];

function tirarAcentos(texto){
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


campoBusca.addEventListener('keyup', ()=>{ 
    let textoDigitado = tirarAcentos(campoBusca.value.toLowerCase());
    resultado.innerHTML = "";

    let encontrou = false;


    produtos.forEach((produto) => {
        let itemSemCaracteres = tirarAcentos(produto.toLowerCase());

        if(itemSemCaracteres.includes(textoDigitado)){
            resultado.innerHTML +=   "<p>" + produto + "</p>";
            encontrou = true;
        }
        
    });

    
    if( encontrou === false){
        resultado.innerHTML += `
        <p>
            Produto não localizado.
        </p>
    `;
    }

 });