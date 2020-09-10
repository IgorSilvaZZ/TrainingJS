var price;
var total = 0;

//Objetos dos Produtos.
var tempero = {
    nome : "Tempero Completo Arisco 300g",
    preco : 2.45,
    imagem: "img/tempero.png",
    codigo :  "888320320",
    dataHora: "05/07 - 14:11"
};

var caldo = {
    nome: "Caldo Arisco",
    preco : 1.20,
    imagem: "img/caldo.png",
    codigo: "529660620",
    dataHora: "05/10 - 11:31"
};

var maionese = {
    nome: "Maionese Arisco Pote 500G",
    preco: 3.81,
    imagem: "img/maionese.jpg",
    codigo: "155342629",
    dataHora: "12/12 - 15:00"
};

//Função para mudar o valor de acordo com a quantidade.
function Mudar(){
    var info = document.getElementById("info");
    var qtd = document.getElementById("quantidade").value;
    var quantidade = parseFloat(qtd);
    var result;
    var total;
    var select = document.getElementById("select");
    var option = select.options[select.selectedIndex];
    if(option.value == "Tempero"){
        result = quantidade * tempero.preco;
        price = result;
        //Converte para nossa moeda nacional.
        total = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        /* result.toFixed(2); */
        info.value = quantidade + " X " + tempero.preco + " = " + total; 
    }
    if(option.value == "Caldo"){
        result = quantidade * caldo.preco;
        price = result;
        //Converte para nossa moeda nacional.
        total = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        info.value = quantidade + " X " + caldo.preco + " = " + total;
    }
    if(option.value == "Maionese"){
        result = quantidade * maionese.preco;
        price = result;
        //Converte para nossa moeda nacional.
        total = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        info.value = quantidade + " X " + maionese.preco + " = " + total;
    }
    if(option.value == null){
        info.value = "";
    }
}

//Identificar qual produto foi selecionado e apresentar as informações sobre.
function carregarProdutos(){
    var imgProd = document.getElementById("imgProd");
    var select = document.getElementById("select");
    var option = select.options[select.selectedIndex];
    var titulo = document.getElementById("titulo");
    var codigo = document.getElementById("codigo");
    var info = document.getElementById("info");
    var data = document.getElementById("data");

    if(option.value == "Tempero"){
        imgProd.src = tempero.imagem;
        titulo.innerHTML = tempero.nome;
        codigo.innerHTML = tempero.codigo;
        data.innerHTML = tempero.dataHora;
    }
    if(option.value == "Caldo"){
        imgProd.src = caldo.imagem;
        titulo.innerHTML = caldo.nome;
        codigo.innerHTML = caldo.codigo;
        data.innerHTML = caldo.dataHora;
        info.innerHTML = caldo.preco;
    }
    if(option.value == "Maionese"){
        imgProd.src = maionese.imagem;
        titulo.innerHTML = maionese.nome;
        codigo.innerHTML = maionese.codigo;
        data.innerHTML = maionese.dataHora;
        info.innerHTML = maionese.preco;
    }

}
carregarProdutos();

//Relogio
/* function Horas(){
    var reg = new Date();
    var hora = reg.getHours();
    var min = reg.getMinutes();
    var sec = reg.getSeconds();

    if(hora < 10){
        hora = "0"+hora;
    }
    if(min < 10){
        min = "0"+min;
    }

    if(sec<10){
        sec = "0"+sec;
    }

    var horas = "Horas: "+hora+ ":"+min+":"+sec;
    document.getElementById("relogio").innerHTML = horas;
    var timer = setInterval(Horas,1000);

}
window.addEventListener("load",Horas); */
    

document.getElementById("registrar").addEventListener("click", () =>{
    var reg = document.getElementById("regProd");
    var titulo = document.getElementById("titulo").innerHTML;
    var info = document.getElementById("info").value;
    var preco = document.getElementById("preco");
    var p = document.createElement('p');
    var result;
    p.style.fontSize = "22px";
    p.style.marginTop = "-2%";
    p.innerHTML = titulo +  " "+info;
    reg.append(p);
    total = total + price;
    result = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    preco.value = result;
});