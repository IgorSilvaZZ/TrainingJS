function ValidaForm(form){
    if(form.txtNome.value == "" ||  form.txtNome.value.lenght < 3){
        alert("Informe um Nome Válido!");
        form.txtNome.focus();
        return false;
    }
    if(form.txtRepresentante.value == ""){
        alert("Insira um Representante!");
        form.txtRepresentante.focus();
        return false;
    }
    if(form.txtInteresse.value == ""){
        alert("Insira um Interesse!");
        form.txtInteresse.focus();
        return false;
    }
    if(form.txtPedido.value == ""){
        alert("Insira um valor do Pedido!");
        form.txtPedido.focus();
        return false;
    }
    if(form.txtContato.value == ""){
        alert("Insira um Contato!");
        form.txtContato.focus();
        return false;
    }
    if(form.txtTelefone.value == ""){
        alert("Insira um Telefone!");
        form.txtTelefone.focus();
        return false;
    }
    if(form.txtCelular.value == ""){
        alert("Insira Numero de Celular!");
        form.txtCelular.focus();
        return false;
    }
    if(form.txtFax.value == ""){
        alert("Insira o Fax!");
        form.txtFax.focus();
        return false;
    }
    if(form.txtEmail.value == "" || form.txtEmail.lenght < 3){
        alert("Insira um Email Válido!");
        form.txtEmail.focus();
        return false;
    }
    if(form.txtEndereco.value == ""){
        alert("Insira o Endereço!");
        form.txtEndereco.focus();
        return false;
    }
    if(form.txtBairro.value == ""){
        alert("Insira o Bairro");
        form.txtBairro.focus();
        return false;
    }
    if(form.txtCidade.value == ""){
        alert("Insira a Cidade!");
        form.txtCidade.focus();
        return false;
    }
    if(form.txtUf.value == ""){
        alert("Insira a Uf!");
        form.txtUf.focus();
        return false;
    }
    if(form.txtCep.value == ""){
        alert("Insira o Cep!");
        form.txtCep.focus();
        return false;
    }
    if(form.txtNasc.value == ""){
        alert("Insira a Data de Nascimento!");
        form.txtNasc.focus();
        return false;
    }
    if(form.txtSexo.value == ""){
        alert("Insira o Sexo!");
        form.txtSexo.focus();
        return false;
    }
    if(form.txtCpf.value == ""){
        alert("Insira o Cpf!");
        form.txtCpf.focus();
        return false;
    }
    if(form.txtCivil.value == ""){
        alert("Insira o Estado Civil!");
        form.txtCivil.focus();
        return false;
    }
    if(form.txtCargo.value == ""){
        alert("Insira o Cargo!");
        form.txtCargo.focus();
        return false;
    }
    true;

}