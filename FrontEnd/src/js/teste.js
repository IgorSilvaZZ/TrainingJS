var price;
var total = 0;
var vetor = [];
    vetor = [
        tempero = {
            nome: "Tempero Arisco",
            price: 2.45
        },
        caldo ={
            nome: "Caldo Arisco",
            price: 3.30
        },
        maionese = {
            nome: "Maionese Arisco",
            price: 4.50
        }
    ];

function Mudar(){
    let info = document.getElementById("info");
    let qtd = document.getElementById("quantidade").value;
    let quantidade = parseFloat(qtd);
    let result;
    let total;
    let select = document.getElementById("select");
    let option = select.options[select.selectedIndex];
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]['nome'] == option.value){
            result = quantidade * vetor[i]['price'];
            price = result;
            //Converte para nossa moeda nacional.
            total = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            info.value = quantidade + " X " + vetor[i]['price'] + " = " + total;
        }
    }
    
}
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
