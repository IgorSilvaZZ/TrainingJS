//Modals
var modal = document.getElementById("mymodal");
var modalAdd = document.getElementById("modalAdd");

//Botões do Modal
var btnClose = document.getElementById("btnClose");
var btnCloseAdd = document.getElementById("btnCloseAdd");

//Inputs do Modal de Edição e de Comprar
var title = document.querySelector('input[name="title"]');
var name = document.querySelector('input[name="nome"]');
var price = document.querySelector('input[name="price"]');


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
                        modal.style.display = "block";
                        modal.style.paddingRight = "17px";
                        modal.style.marginTop = "120px";
                        modal.className = "modal fade show";
                        modal_titulo.innerHTML = elemento.nome;

                        title.value = elemento.titulo;
                        name.value = elemento.nome;
                        price.value = elemento.preco;

                    })

                })

            });
        }
    });
}

btnClose.addEventListener("click", () => {
    modal.style.display = "none";
    modal.className = "modal fade";
})

produtsAll();