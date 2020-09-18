//Todos os Ids e Inputs importantes dentro do html
const ids = {
    modal: document.getElementById("mymodal"),
    btnClose: document.getElementById("btnClose"),
    btnCloseAdd: document.getElementById("btnCloseAdd"),
    modalAdd: document.getElementById("modalAdd"),
    title: document.querySelector('input[name="title"]'),
    nameProduto: document.querySelector('input[name="nome"]'),
    price: document.querySelector('input[name="price"]'),
    headerProduto: document.querySelector(".header")
}


//Função de Listar Produtos do Banco(MongoDB) com fetch
function produtsAll(){
    
    let lista = document.getElementById("lista");

    fetch('http://localhost:3001/api/produtos').then((res) => {
        if(res.status === 200){
            res.json().then((produtos) => {
                const products = produtos.map((prods)=> {
                    var prodsAll = {
                        id: prods._id,
                        titulo: prods.titulo,
                        nome: prods.nome,
                        preco: prods.preco
                    }
                   return prodsAll;
                });

                products.map((elemento) => {
                    li = document.createElement("li");
                    li.append(elemento.nome);
                    lista.append(li);

                    li.addEventListener("click", () => {
                        let modal_titulo = document.getElementById("produto-nome");
                        ids.modal.style.display = "block";
                        ids.modal.style.paddingRight = "17px";
                        ids.modal.style.marginTop = "120px";
                        ids.modal.className = "modal fade show";
                        modal_titulo.innerHTML = elemento.nome;

                        ids.title.value = elemento.titulo;
                        ids.nameProduto.value = elemento.nome;
                        ids.price.value = elemento.preco;

                        change(elemento.preco);

                    })

                })

            });
        }
    });
}

//Abrindo Modal de Criação de Produto
ids.headerProduto.addEventListener("click", () => {
    ids.modalAdd.style.display = "block";
    ids.modalAdd.style.paddingRight = "17px";
    ids.modalAdd.style.marginTop = "120px";
    ids.modalAdd.className = "modal fade show";
});

//Fechando Modal de Criação de Produto
ids.btnCloseAdd.addEventListener("click", () => {
    ids.modalAdd.style.display = "none";
    ids.modalAdd.className = "modal fade";
})

//Fechando Modal de Edição/Compra Produto
ids.btnClose.addEventListener("click", () => {
    ids.modal.style.display = "none";
    ids.modal.className = "modal fade";
    document.getElementById("qtd").value = "";
    document.getElementById("info_modal").value = "";
})

//Função de mudar o campo de acordo com a quantidade
var change = function (price){
    document.getElementById("qtd").addEventListener("keyup", () =>{
        let quantidade = document.getElementById("qtd").value;
        let resultado = quantidade * price;
        document.getElementById("info_modal").value = resultado;
        
    });
}

produtsAll();