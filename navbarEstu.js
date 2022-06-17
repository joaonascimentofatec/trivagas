document.write(`
<div style="height: 110px; padding: 0 20%;">
        <a href="index.html">
            <img src="img/LogoTrivagas.png" alt="LogoTrivagas" height="100px" style="padding-top: 5px; float: left;">
        </a>

        <div style="float: right; height: 100%; padding: 40px 0;">
            <a href="estudantePerfil.html" class="botao-azul" id="myBtn" style="font-size: 1.5em; margin-right: 10px;">PERFIL</a>
            <a href="#" class="botao-verde" id="myBtn" style="font-size: 1.5em;">SAIR</a>
        </div>

    </div>

    <!--Modal escolher cadastro -->
    <div id="myModal" class="modal">
        <div class="modal-content" style="text-align:center; padding-top: 40px;padding-bottom: 40px;">
            <span class="close">&times;</span>
            <a href="estudanteCadastro.html" class="botao-azul" id="myBtn" style="font-size: 1.5em; margin-right: 10px;">ESTUDANTE</a>
            <a href="empresaCadastro.html" class="botao-amarelo" style="font-size: 1.5em;">EMPRESA</a>
        </div>
    </div>

`);