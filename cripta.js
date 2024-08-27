const botaoCriptar = document.querySelector(".botoes__cripto");
const txtCriptar = document.querySelector(".criptagrafo");
const aviso = document.querySelector(".img-aviso");
const resposta = document.querySelector(".inserir");
const conteudo = document.querySelector(".traducao-conteudo");
const botaoCopiar = document.querySelector(".botao_copiar");
const botDescriptar = document.querySelector(".botoes__descripto");

botaoCriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtCriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Não deve ter acentos e caracteres especiais";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "O texto deve ser todo minúsculo";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resposta.innerHTML = texto;
        botaoCopiar.style.visibility = "inherit";
    }
});

botDescriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtCriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    

     if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Não deve ter acentos e caracteres especiais";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "o texto deve ser todo em minúsculo";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resposta.innerHTML = texto;
        botao_copiar.style.visibility = "inherit"; 
    }
});

//-------Boton de Copiar-------//
botaoCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resposta;
    copiar.select();
    document.execCommand("copy"); 
});