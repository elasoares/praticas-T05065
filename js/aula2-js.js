/* === Selecionando pelo ID com - getElementById === */

const titulo = document.getElementById("titulo");
titulo.innerText = "Testando";
titulo.style.color = "orange";
titulo.style.fontSize = "44px";


/* === Selecionando pelo class - querySelector  === */

const botao = document.querySelector(".btn");

/* botao.onclick = function(){
    alert("Cliquei novamente!");
}
 */

/* function teste(){
    alert("Cliquei!");
} */

/* botao.addEventListener('click', function(){
    alert("Eu cliquei novamente!");
}); */


/* === Selecionando pela tag - querySelectorAll  === */

const paragrafo = document.querySelectorAll("p");

console.log(paragrafo);

paragrafo[0].style.backgroundColor = "yellow";

paragrafo.forEach((p, i)=>{
    if(i === 2){
        p.style.backgroundColor = "red";
    }
});

/* === Selecionando pela class - getElementsByClassName  === */

const botaoClass = document.getElementsByClassName('botao');
console.log(botaoClass.length);

/* for(let i = 0; i <= botaoClass.length; i++){
    botaoClass[i].style.backgroundColor = "green";
    botaoClass[i].style.padding = "20px";
    botaoClass[i].style.fontSize = "20px";
} */



/* for( const botao of botaoClass){
    botao.addEventListener('click', function(){
        botao.style.backgroundColor = "pink";
        botao.textContent = "Clicado!";

    });
} */

/* === Selecionando pela TAG - getElementsByTagName  === */
 const div = document.getElementsByTagName('div');
/*
console.log(div);



div[1].style.backgroundColor = "green";

for( const item of div){
    item.style.backgroundColor = "orange";
    item.style.color= "blue";
    item.style.fontSize = "32px";
    item.style.fontWeight = "bold";
}

div[1].style.fontWeight = "normal";
div[0].style.backgroundColor = "yellow";
div[0].style.fontSize = "40px";
 */

/* === Manipulando os elementos com evento de click === */

/* for( const botao of  botaoClass){
    botao.addEventListener('click', function(){
        titulo.textContent = "Botão clicado!";
        titulo.style.backgroundColor = "darkgray";
    });
}
 */

/* botaoClass[0].addEventListener('click', function(){
    titulo.textContent = "Botão clicado 3 clicado funcionouuu!";
    titulo.style.backgroundColor = "darkgray";
    titulo.style.color = "white";
}); */


/* botaoClass[1].addEventListener('click' , function(){
    div[0].classList.toggle("divTeste");
     
    div[0].innerHTML = `
        <h2> Atenção </h2>
        <p> 
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Curabitur faucibus magna eu urna 
            tincidunt, in fringilla nunc 
            fermentum.
        </p> 
    `;
}); */

botaoClass[1].onclick = function(){
    div[0].classList.toggle("divTeste");
     
    div[0].innerHTML = `
        <h2> Atenção </h2>
        <p> 
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Curabitur faucibus magna eu urna 
            tincidunt, in fringilla nunc 
            fermentum.
        </p> 
    `;
}



/* botaoClass[0].addEventListener('click' , function(){
   
    div[0].classList.remove("divTeste");
     
    div[0].innerHTML = ``;
});
 */


/* function mostrarMSG(){
    div[0].classList.add("divTeste");
     div[0].innerHTML = `
        <h2> Atenção </h2>
        <p> 
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Curabitur faucibus magna eu urna 
            tincidunt, in fringilla nunc 
            fermentum.
        </p> 
    `;
    
     div[0].style.color = "red";
    div[0].style.fontSize = "45px";
    div[0].style.display = "none"; 
} */

/* === Manipulando os elementos com eventos === */

const botaoDuploClick = document.getElementById("botaoDuploClick");
const alvo = document.getElementById("alvo");

botaoDuploClick.addEventListener( 'dblclick' , function(){
    alvo.textContent = "Clique duplo detectado!";
});

alvo.addEventListener('mouseover', ()=>{
    alvo.classList.add('alvo');
});

alvo.addEventListener('mouseout', ()=>{
    alvo.classList.remove('alvo');
});


const campo = document.getElementById("campo");
const tela = document.getElementById("tela");
const btnInput = document.getElementById("btnInput");


campo.addEventListener('input', ()=>{
    btnInput.addEventListener("click", ()=>{
        const qtd = campo.value.length;
        tela.textContent = `${campo.value.toLowerCase()} - ${qtd}`;
    });
});


const form = document.getElementById("form");


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    
});
