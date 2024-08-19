let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado=false;
let contaCliques=0;

botao.addEventListener("mouseover", e =>{
    if(estaQuebrado===false) //se está quebrado é falso
    botao.style.background="green";
    botao.style.color="white"
});

botao.addEventListener("mouseout", e =>{
    if(!estaQuebrado) //se não está quebrado
    botao.style.background="blue";
});

botao.addEventListener("click", e =>{
    contaCliques=contaCliques+1; //ou contaCliques++;
    if(contaCliques>=5){
    botao.style.background="red";
    botao.innerHTML="Quebrei!"
    estaQuebrado=true;
    }
});