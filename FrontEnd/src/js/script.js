//Todos os Ids e Inputs importantes dentro do html
const ids = {
    modal: document.getElementById("mymodal"),
    btnClose: document.getElementById("btnClose"),
    btnCloseAdd: document.getElementById("btnCloseAdd"),
    modalAdd: document.getElementById("modalAdd"),
    btnCad: document.getElementById("btnCad"),
    btnEditModal: document.getElementById("btnEditModal"),
    btnDelete: document.getElementById("btnDelete"),
    title: document.querySelector('input[name="title"]'),
    nameProduto: document.querySelector('input[name="nome"]'),
    price: document.querySelector('input[name="price"]'),
    headerProduto: document.querySelector(".header"),
}


//Função de Listar Produtos do Banco(MongoDB) com fetch
function produtsAll(){
    
    let lista = document.getElementById("lista");
    
    lista.innerHTML = "";

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

                    li.addEventListener("click", () =>{
                        
                        oneProduct(elemento.id);

                    });

                })

            });
        }else{
            alert("Erro ao Listar");
        }
    }).catch((erro) =>{
        alert("Ocorreu um erro no Servidor: "+erro);
    });
}

produtsAll();

//Abrindo Modal de Criação de Produto
ids.headerProduto.addEventListener("click", () => {
    openModalAdd();
});

//Fechando Modal de Criação de Produto
ids.btnCloseAdd.addEventListener("click", () => {
    exitModalAdd();
})

//Fechando Modal de Edição/Compra Produto
ids.btnClose.addEventListener("click", () => {
    exitModal();
})


//Função de Cadastrar Produto
ids.btnCad.addEventListener("click", (e) =>{
    e.preventDefault();//Evitar Refresh

    let titleAdd = document.querySelector("input[name='titleAdd']").value;
    let nomeAdd = document.querySelector("input[name='nameAdd']").value;
    let priceAdd = document.querySelector("input[name='priceAdd']").value;

    fetch('http://localhost:3001/api/produtos', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            titulo: titleAdd,
            nome: nomeAdd,
            preco: priceAdd
        })
    }).then((res) => {
        if(res.status == 200){
            alert("Cadastrado com sucesso");
        }else{
            alert('Ocorreu um erro ao cadastrar');
        }
        exitModalAdd();
        produtsAll();
    }).catch((error)=>{
        alert("Ocorreu um erro no servidor");
    });

});

//Função para Deletear Produto
const deleteProduto = function(idProduto){
    ids.btnDelete.addEventListener("click", () =>{
        fetch(`http://localhost:3001/api/produto/${idProduto}`, {
            
            method: 'delete',
            headers: { 'Content-type': 'aplication/json' }

        }).then((res) =>{
            if(res.status == 200){
                alert("Excluido com Sucesso");
            }else{
                alert("Ocorreu um Erro ao excluir Produto");
            }
            exitModalEdit();
            produtsAll();
        }).catch((error) =>{
            alert("Ocorreu um erro no Servidor "+error);
            exitModalEdit();
        });
    });
}

const oneProduct = function(idProduto){
    fetch(`http://localhost:3001/api/produto/${idProduto}`).then((res) =>{
            if(res.status == 200){
                res.json().then((produto) =>{

                    /* console.log(produto._id);
                    alert(produto._id); */

                    var div_buttons = document.getElementById("buttons");
                    div_buttons. innerHTML = "";
                    let modal_titulo = document.getElementById("produto-nome");
                    openModal();
                    modal_titulo.innerHTML = produto.nome;

                    ids.title.value = produto.titulo;
                    ids.nameProduto.value = produto.nome;
                    ids.price.value = produto.preco;

                    change(produto.preco);

                    let btnAdd = document.createElement("button");
                    btnAdd.className = "btn btn-primary";
                    btnAdd.innerHTML = "Adicionar";

                    let buttonEdit = document.createElement("button");
                    buttonEdit.innerHTML = "Editar";
                    buttonEdit.className = "btn btn-primary";
                    
                    div_buttons.append(btnAdd);
                    div_buttons.append(buttonEdit);


                    buttonEdit.addEventListener("click", () =>{
                        updateProduto(produto._id);
                    });

                    /* document.querySelector().addEventListener("click", () =>{
                        updateProduto(produto._id);
                        console.log("Click");
                    }); */

                    
                    /* deleteProduto(produto.id); */
                });
            }
    }).catch((error) => {
        alert("Erro ao Carregar Produto "+error);
    });
}

//Função para Atualizar Produto
const updateProduto = function(idProduto){
    
    fetch(`http://localhost:3001/api/produto/${idProduto}` , {
            
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                titulo: document.getElementById("titleEdit").value,
                nome: document.getElementById("nomeEdit").value,
                preco: document.getElementById("priceEdit").value
            })

    }).then((res) =>{
        if(res.status == 200){
            alert("Atualizado com Sucesso");
        }else{
            alert("Ocorreu um erro ao Atualizar");
        }
        exitModal();
        produtsAll();
    }).catch((erro) =>{
        alert("Erro no Servidor "+erro);
        exitModal();
    });
    
}


//Função para abrir Modal dos Produtos
const openModal = function(){
    ids.modal.style.display = "block";
    ids.modal.style.paddingRight = "17px";
    ids.modal.style.marginTop = "120px";
    ids.modal.className = "modal fade show";
}

//Função para abrir Modal de Compra/Edit
const openModalAdd = function(){
    ids.modalAdd.style.display = "block";
    ids.modalAdd.style.paddingRight = "17px";
    ids.modalAdd.style.marginTop = "120px";
    ids.modalAdd.className = "modal fade show";
    document.querySelector("input[name='titleAdd']").value = "";
    document.querySelector("input[name='nameAdd']").value = "";
    document.querySelector("input[name='priceAdd']").value = "";
}

const exitModal = function(){
    ids.modal.style.display = "none";
    ids.modal.className = "modal fade";
    document.getElementById("qtd").value = "";
    document.getElementById("info_modal").value = "";
}

//Função para fechar Modal de Cadastrar Produto
const exitModalAdd = function(){
    ids.modalAdd.style.display = "none";
    ids.modalAdd.className = "modal fade";
}


//Função de limpar inputs de Adicionar Produto
const clearAdd = function(){
    document.querySelector("input[name='titleAdd']").value = "";
    document.querySelector("input[name='nameAdd']").value = "";
    document.querySelector("input[name='priceAdd']").value = "";
}

//Função de mudar o campo de acordo com a quantidade
const change = function (price){
    document.getElementById("qtd").addEventListener("keyup", () =>{
        let quantidade = document.getElementById("qtd").value;
        let resultado = quantidade * price;
        document.getElementById("info_modal").value = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
        
    });
}
