var produtos = [];
var modal = document.getElementById("myModal");
var btnClose = document.getElementById("btnClose");
var preco;
var total;
var buy_name;
var buy_image;

produtos = [
    manteiga = {
        titulo: " Manteiga",
        nome: "Manteiga Qualy",
        price: 4.00,
        image: "img/butter.png"
    },
    refrigerante = {
        titulo: " Refrigerante",
        nome: "Coca-Cola",
        price: 5.50,
        image: "img/water.png"
    },
    chocolate = {
        titulo: " Chocolate",
        nome: "Nestle",
        price: 3.00,
        image: "img/chocolate-bar.png"
    },
    cafe = {
        titulo: " Café",
        nome: "Pilão",
        price: 6.00,
        image: "img/food.png"
    }
];

//let teste = document.querySelector(".info-prods").getElementsByTagName("li");
for(let i=0; i<produtos.length; i++){
    let lista = document.getElementById("lista");
    let li = document.createElement('li');
    let image = document.createElement('img');
    let nomeProduto = produtos[i]['titulo']
    let qtd = document.getElementById("qtd");
    let info = document.getElementById("info_modal");
    let btnAdd = document.getElementById("btnAdd");
    image.src = produtos[i]['image']
    li.append(image);
    li.append(nomeProduto);
    lista.append(li);
    modal.style.transition = "all .4s";
    li.addEventListener("click", () => {
        let modal_titulo = document.getElementById("produto-nome");
        modal.style.display = "block";
        modal.style.paddingRight = "17px";
        modal.style.marginTop = "120px";
        modal.className = "modal fade show";
        modal_titulo.innerHTML = produtos[i]['nome'];

        qtd.addEventListener("blur", () => {
            let result = parseFloat(qtd.value) * produtos[i]['price']
            total = result;
            preco = produtos[i]['price']
            buy_name = produtos[i]['nome']
            buy_image = produtos[i]['image']
            let tot = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            info.value = tot
        });
        qtd.value = "";
        info.value = "";
    })
}



btnClose.addEventListener("click", () => {
    modal.style.display = "none";
    modal.className = "modal fade";
})


btnAdd.addEventListener("click", () => {
    let info_buy = document.getElementById("info_buy");
    let desc_buy = document.createElement('li');
    let totInput = document.getElementById("input_tot")
    let image = document.createElement('img');
    image.src = buy_image;
    total = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    total = " "+ buy_name + " " + total
    desc_buy.append(image); 
    desc_buy.append(total);
    info_buy.append(desc_buy);
}); 

/* let audio = document.getElementById("menu-list");
audio.addEventListener("mouseover", () =>{
    document.querySelector('audio').play();
}) */