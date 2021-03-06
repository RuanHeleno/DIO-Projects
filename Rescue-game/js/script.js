function start() {
    $("#inicio").hide();

    $("#fundoGame").append([
        "<div id='jogador' class='anima1'></div>",
        "<div id='inimigo1' class='anima2'></div>",
        "<div id='inimigo2'></div>",
        "<div id='amigo' class='anima3'></div>",
        "<div id='placar'></div>",
        "<div id='energia'></div>",
        "<div id='tempo'></div>"
    ]);

    //Variáveis do jogo
    let jogo = {}
    let TECLA = {
        W: 87,
        S: 83,
        D: 68
    }
    let velocidade = 5;
    let posicaoY = parseInt(Math.random() * 334);
    let podeAtirar = true;
    let fimdejogo = false;
    let pontos = 0;
    let energiaAtual = 3;
    let tempoSoma = 0;
    let tempo = 0;
    let somDisparo = document.getElementById("somDisparo");
    let somExplosao = document.getElementById("somExplosao");
    let musica = document.getElementById("musica");
    let somGameover = document.getElementById("somGameover");
    let somPerdido = document.getElementById("somPerdido");
    let somResgate = document.getElementById("somResgate");

    //Música em loop
    musica.addEventListener("ended", function () {
        musica.currentTime = 0;
        musica.play();
    }, false);
    musica.play();

    //Verifica se o usuário pressionou alguma tecla	
    jogo.pressionou = [];

    $(document).keydown(function (e) {
        jogo.pressionou[e.which] = true;
    });

    $(document).keyup(function (e) {
        jogo.pressionou[e.which] = false;
    });

    //Game loop
    jogo.timer = setInterval(loop, 30);

    function loop() {
        movefundo();
        movejogador();
        moveinimigo1();
        moveinimigo2();
        moveamigo();
        colisao();
        placar();
        tempoDeJogo();
        energia();
    }

    function movefundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda - 1);
    }

    //Ações do Player
    function movejogador() {
        if (jogo.pressionou[TECLA.W]) {
            let topo = parseInt($("#jogador").css("top"));
            if (topo <= 0) $("#jogador").css("top", topo + 10);
            else $("#jogador").css("top", topo - 10);
        } else if (jogo.pressionou[TECLA.S]) {
            let topo = parseInt($("#jogador").css("top"));
            if (topo >= 434) $("#jogador").css("top", topo - 10);
            else $("#jogador").css("top", topo + 10);
        }

        if (jogo.pressionou[TECLA.D]) disparo();
    }

    function disparo() {
        if (!podeAtirar) return
        somDisparo.play();
        podeAtirar = false;
        topo = parseInt($("#jogador").css("top"));
        posicaoX = parseInt($("#jogador").css("left"));
        tiroX = posicaoX + 200;
        topoTiro = topo + 42;

        $("#fundoGame").append("<div id='disparo'></div");
        $("#disparo").css("top", topoTiro);
        $("#disparo").css("left", tiroX);

        let tempoDisparo = window.setInterval(executaDisparo, 30);

        function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left", posicaoX + 15);

            if (posicaoX > 900) {
                window.clearInterval(tempoDisparo);
                tempoDisparo = null;
                $("#disparo").remove();
                podeAtirar = true;
            }
        }
    }

    //Ações I.A.
    function moveinimigo1() {
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", posicaoX - velocidade);
        $("#inimigo1").css("top", posicaoY);

        if (posicaoX <= 0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
        }
    }

    function moveinimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left", posicaoX - 3);

        if (posicaoX <= 0) $("#inimigo2").css("left", 775);
    }

    function moveamigo() {
        posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left", posicaoX + 1);

        if (posicaoX > 906) $("#amigo").css("left", 0);
    }

    //Colisão
    function colisao() {
        let colisao1 = ($("#jogador").collision($("#inimigo1")));
        let colisao2 = ($("#jogador").collision($("#inimigo2")));
        let colisao3 = ($("#disparo").collision($("#inimigo1")));
        let colisao4 = ($("#disparo").collision($("#inimigo2")));
        let colisao5 = ($("#jogador").collision($("#amigo")));
        let colisao6 = ($("#inimigo2").collision($("#amigo")));

        if (colisao1.length > 0) {
            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
            explosao1(inimigo1X, inimigo1Y);

            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
            if (energiaAtual > 0) energiaAtual--;
        }

        if (colisao2.length > 0) {
            inimigo2X = parseInt($("#inimigo2").css("left"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            explosao2(inimigo2X, inimigo2Y);

            $("#inimigo2").remove();
            reposicionaInimigo2();
            if (energiaAtual > 0) energiaAtual--;
        }

        if (colisao3.length > 0) {
            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));

            explosao1(inimigo1X, inimigo1Y);
            $("#disparo").css("left", 950);

            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
            velocidade += 0.3
            pontos += 1;
        }

        if (colisao4.length > 0) {
            inimigo2X = parseInt($("#inimigo2").css("left"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            $("#inimigo2").remove();

            explosao2(inimigo2X, inimigo2Y);
            $("#disparo").css("left", 950);
            reposicionaInimigo2();
            pontos += 1;
        }

        if (colisao5.length > 0) {
            somResgate.play();
            reposicionaAmigo();
            $("#amigo").remove();
            pontos += 2;
        }

        if (colisao6.length > 0) {
            amigoX = parseInt($("#amigo").css("left"));
            amigoY = parseInt($("#amigo").css("top"));
            explosao3(amigoX, amigoY);
            $("#amigo").remove();

            reposicionaAmigo();
        }
    }

    function explosao1(inimigo1X, inimigo1Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao1'></div");
        $("#explosao1").css("background-image", "url(imgs/explosao.png)");
        let div = $("#explosao1");
        div.css("top", inimigo1Y);
        div.css("left", inimigo1X);
        div.animate({
            width: 200,
            opacity: 0
        }, "slow");

        let tempoExplosao = window.setInterval(removeExplosao, 1000);

        function removeExplosao() {
            div.remove();
            window.clearInterval(tempoExplosao);
            tempoExplosao = null;
        }
    }

    function explosao2(inimigo2X, inimigo2Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao2'></div");
        $("#explosao2").css("background-image", "url(imgs/explosao.png)");
        let div2 = $("#explosao2");
        div2.css("top", inimigo2Y);
        div2.css("left", inimigo2X);
        div2.animate({
            width: 200,
            opacity: 0
        }, "slow");

        let tempoExplosao2 = window.setInterval(removeExplosao2, 1000);

        function removeExplosao2() {
            div2.remove();
            window.clearInterval(tempoExplosao2);
            tempoExplosao2 = null;
        }
    }

    function explosao3(amigoX, amigoY) {
        somPerdido.play();
        $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
        $("#explosao3").css("top", amigoY);
        $("#explosao3").css("left", amigoX);
        let tempoExplosao3 = window.setInterval(resetaExplosao3, 1000);

        function resetaExplosao3() {
            $("#explosao3").remove();
            window.clearInterval(tempoExplosao3);
            tempoExplosao3 = null;
        }
    }

    function reposicionaInimigo2() {
        let tempoColisao4 = window.setInterval(reposiciona4, 5000);

        function reposiciona4() {
            window.clearInterval(tempoColisao4);
            tempoColisao4 = null;

            if (fimdejogo == false) $("#fundoGame").append("<div id=inimigo2></div");
        }
    }

    function reposicionaAmigo() {
        let tempoAmigo = window.setInterval(reposiciona6, 6000);

        function reposiciona6() {
            window.clearInterval(tempoAmigo);
            tempoAmigo = null;

            if (fimdejogo == false) $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
        }
    }

    //PLACAR
    function placar() {
        $("#placar").html("<h2> Score: " + pontos + "</h2>");
    }

    //VIDA
    function energia() {
        $("#energia").css("background-image", `url(imgs/energia${energiaAtual}.png)`);
        if (energiaAtual == 0) gameOver();
    }

    //CONTADOR
    function tempoDeJogo() {
        tempoSoma += 30
        if (tempoSoma % 350 === 0) tempo++
        $("#tempo").html("<h2> Tempo: " + tempo + "</h2>");
    }

    //GAMEOVER
    function gameOver() {
        fimdejogo = true;
        musica.pause();
        somGameover.play();

        window.clearInterval(jogo.timer);
        jogo.timer = null;
        window.clearInterval(tempo);

        $("#jogador").remove();
        $("#inimigo1").remove();
        $("#inimigo2").remove();
        $("#amigo").remove();

        $("#fundoGame").append("<div id='fim'></div>");
        $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
    }
}

//RESTART
function reiniciaJogo() {
    somGameover.pause();
    $("#fim").remove();
    start();
}