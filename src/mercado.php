<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fazendo Compra</title>
    <link rel="stylesheet" href="css/style2.css">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>

        <!-- Modal -->
        <div id="myModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="produto-nome"></h5>
                <button type="button" class="close" id="btnClose" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="quant">
                    <input type="text" placeholder="Quantidade" id="qtd">
                    <input type="text" readonly id="info_modal">
                    <button type="button" class="btn btn-primary" id="btnAdd">Adicionar</button>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div class="container-menu">
            <nav>
                <ul>
                    <a href="#">
                       <li style="color: #3498db;">IgorZzZ</li>
                    </a>
                    <a href="#">
                        <li><img src="img/whatsapp.png"> Contato</li>
                    </a>
                    <a href="#about" class="sobre">
                        <li><img src="img/info.png"> Sobre</li>
                    </a>
                    <a href="#">
                        <li><img src="img/github.png"> Github</li>
                    </a>
                    <a href="#">
                        <li><img src="img/linkedin.png"> Linkedin</li>
                    </a>
                </ul>
            </nav>
        </div>

        <div class="container-shop">
            <div class="container-prod">
                <div class="header">
                    <p>Produtos</p>
                </div>
                <div class="info-prods">
                    <ul id="lista">
                        <!-- <li><img src="img/butter.png"> Manteiga</li>
                        <li><img src="img/water.png"> Refrigerante</li>
                        <li><img src="img/chocolate-bar.png"> Chocolate</li>
                        <li><img src="img/food.png"> Café</li> -->
                    </ul>
                </div>
            </div>
            <div class="container-buy">
                <div class="header">
                   <p>Compras</p>
                </div>
                <div class="info-prods">
                    <ul id="info_buy">
                        
                    </ul>
                </div>
            </div>
        </div>

        <div class="container-about" id="about">
            
        </div>

        <!-- <div class="container-progress">
            <div class="progress">
                <div class="progress-bar"></div>
            </div>
        </div> -->


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <!-- jQuery -->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="js/mdb.min.js"></script>
    <!-- Your custom scripts (optional) -->
    <script type="text/javascript"></script>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/mercado.js"></script>
    
    <script>
        jQuery(document).ready(function($) {
            //Efeito dislizante
            $(".sobre").click(function(event){
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
            });
        });
    </script>

</body>
</html>