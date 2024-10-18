const hr = document.getElementById("horas");
const min = document.getElementById("minutos");
const seg = document.getElementById("segundos");
const ms = document.getElementById("milissegundos");

let hora = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let startTime;
let elapsedTime = 0;
let interval;

var botaoIniciar = document.getElementById("iniciar");
var botaoZerar = document.getElementById("zerar");
var marcador = document.querySelector("#marcador");

botaoIniciar.disabled = false;
botaoZerar.disabled = true;
marcador.disabled = true;

marcador.addEventListener("click", function () {
    var esseTexto = `${hora < 10 ? "0" + hora : hora}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}:${milissegundos < 10 ? "0" + milissegundos : milissegundos}`;
    var mainDiv = document.querySelector("#listaDeMarcações");
    var layoutDeMarcacao = document.createElement("div");
    var paragrafo = document.createElement("p");
    var botaoDeletar = document.createElement("button");
    var icone = document.createElement("i");

    layoutDeMarcacao.classList.add("layoutDeMarcacao");
    paragrafo.classList.add("paragrafo");
    botaoDeletar.classList.add("botaoDeletar");
    icone.className = "fa fa-trash";

    paragrafo.textContent = esseTexto;

    mainDiv.appendChild(layoutDeMarcacao);
    layoutDeMarcacao.appendChild(paragrafo);
    layoutDeMarcacao.appendChild(botaoDeletar);
    botaoDeletar.appendChild(icone);

    console.log(esseTexto);

    $(".botaoDeletar").hide();

    function mostrarEEsconder() {
        $(".layoutDeMarcacao").mouseenter(function () {
            $(this).find(".botaoDeletar").show();
            $(this).css({
                "border": "solid 1px gray",
                "background-color": "rgba(255, 255, 255, 0.225)",
                "border-radius": "5px"
            });
        });

        $(".layoutDeMarcacao").mouseleave(function () {
            $(this).find(".botaoDeletar").hide();
            $(this).css({
                "border": "",
                "background-color": "",
                "border-radius": ""
            });
        });

        $(".botaoDeletar").mouseenter(function () {
            $(this).css({
                "background-color": "rgba(128, 128, 128, 1)",
                "border": "2px solid rgba(192, 192, 192, 1)"
            });
        });

        $(".botaoDeletar").mouseleave(function () {
            $(this).css({
                "background-color": "#ffffff00",
                "border": ""
            });
        });
    }

    var trashIcons = document.querySelectorAll(".botaoDeletar");
    trashIcons.forEach(function (i) {
        i.addEventListener("click", function () {
            this.closest(".layoutDeMarcacao").remove();
        });
    });

    mostrarEEsconder();
});

function comece() {
    botaoIniciar.disabled = true;
    botaoZerar.disabled = false;
    marcador.disabled = false;

    startTime = performance.now();
    interval = setInterval(updateTime, 10);

    document.getElementById("zerar").addEventListener("click", function () {
        botaoIniciar.disabled = false;
        botaoZerar.disabled = true;
        marcador.disabled = true;

        hora = 0;
        minutos = 0;
        segundos = 0;
        milissegundos = 0;
        elapsedTime = 0;

        hr.textContent = "00";
        min.textContent = "00";
        seg.textContent = "00";
        ms.textContent = "00";

        clearInterval(interval);
    });
}

function updateTime() {
    const now = performance.now();
    elapsedTime = now - startTime;

    milissegundos = Math.floor(elapsedTime % 1000 / 10);
    segundos = Math.floor((elapsedTime / 1000) % 60);
    minutos = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hora = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    hr.textContent = hora < 10 ? "0" + hora : hora;
    min.textContent = minutos < 10 ? "0" + minutos : minutos;
    seg.textContent = segundos < 10 ? "0" + segundos : segundos;
    ms.textContent = milissegundos < 10 ? "0" + milissegundos : milissegundos;
}
