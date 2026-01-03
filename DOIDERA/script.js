// Variável global para controlar o estado
let desab = false;

document.addEventListener('DOMContentLoaded', function () {
    const botoes1 = document.querySelectorAll('.botaoTeste');
    const botoes2 = document.querySelectorAll('.botaoTeste2');

    // Configuração do Botão 1
    botoes1.forEach(function (botao) {
        botao.addEventListener('click', function () {
            if (desab) {
                alert('AGORA NÃO TEM VOLTA');
                document.fullscreenElement || document.documentElement.requestFullscreen();
                return;
            } 
            desab = true;
            window.open('https://imgs.search.brave.com/n79C52UHNJe011XQMNL_eXmdfovkEjRN-z1hYAyMGJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YnVzcXVlbS1jb25o/ZWNpbWVudG8tdjAt/Z2RieHdyYTcyZnBk/MS5qcGVnP3dpZHRo/PTYzOCZmb3JtYXQ9/cGpwZyZhdXRvPXdl/YnAmcz0yM2RhYzFl/ODI3YjAzM2EwNzYw/N2FiNTBmNzgxYWNk/NDU5ZjM3NGJj', '_blank');            }
        );
    });

    // Configuração do Botão 2
    botoes2.forEach(function (botao) {
        botao.addEventListener('click', function () {
            if (desab) {
                alert('AGORA NÃO TEM VOLTA');
                document.fullscreenElement || document.documentElement.requestFullscreen();
                return;
            }

            // ATIVA O BLOQUEIO
            desab = true;
            window.open('https://www.youtube.com/watch?v=GMgsFZ4rkEI&t=14s', '_blank');
        });
    });
});

function entrar(){
    document.getElementById("entrada").style.display = "none";
    document.getElementById("principal").style.display = "flex";

    const audio = document.getElementById('meuAudio');
    audio.play().catch(err => console.log("Erro ao tocar o áudio:", err));
}

function mudarTitulos(){
    document.querySelectorAll("h1, h2, h3, button").forEach(h => h.innerText = "AGORA NÃO TEM VOLTA");
    document.title = "AGORA NÃO TEM VOLTA";
}
