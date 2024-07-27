const hr = document.getElementById("horas")
const min = document.getElementById("minutos")
const seg = document.getElementById("segundos")

let hora = 0
let minutos = 0
let segundos = Number(seg.textContent) || 0

var botaoIniciar = document.getElementById("iniciar")
var botaoZerar = document.getElementById("zerar")
var marcador = document.querySelector("#marcador")

botaoIniciar.disabled = false
botaoZerar.disabled = true
marcador.disabled = true

marcador.addEventListener("click", function () {
    var esseTexto = (hora + ":" + minutos + ":" + segundos)
    var mainDiv = document.querySelector("#listaDeMarcações");
    var layoutDeMarcacao = document.createElement("div")
    var paragrafo = document.createElement("p");
    var botaoDeletar = document.createElement("button")
    var icone = document.createElement("i")

    layoutDeMarcacao.classList.add("layoutDeMarcacao")
    paragrafo.classList.add("paragrafo");
    botaoDeletar.classList.add("botaoDeletar")
    icone.className = "fa fa-trash"

    paragrafo.textContent = esseTexto;

    mainDiv.appendChild(layoutDeMarcacao)
    layoutDeMarcacao.appendChild(paragrafo);
    layoutDeMarcacao.appendChild(botaoDeletar)
    botaoDeletar.appendChild(icone)

    console.log(esseTexto)

    $(".botaoDeletar").hide()

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
        })

        $(".botaoDeletar").mouseleave(function () {
            $(this).css({
                "background-color": "#ffffff00",
                "border": ""
            });

        })
    }

    var trashIcons = document.querySelectorAll(".botaoDeletar");
    trashIcons.forEach(function (i) {
        i.addEventListener("click", function () {
            this.closest(".layoutDeMarcacao").remove();
        });
    });

    mostrarEEsconder()

})

function comece() {

    botaoIniciar.disabled = true
    botaoZerar.disabled = false
    marcador.disabled = false

    const relogio = setInterval(function time() {

        segundos++

        if (segundos > 59) {
            segundos = 0
            minutos++
        }
        if (minutos > 59) {
            minutos = 0
            hora++
        }

        hr.textContent = hora
        min.textContent = minutos
        seg.textContent = segundos

        hr.textContent = hora < 10 ? "0" + hora : hora;
        min.textContent = minutos < 10 ? "0" + minutos : minutos;
        seg.textContent = segundos < 10 ? "0" + segundos : segundos;

    }, 1000)


    document.getElementById("zerar").addEventListener("click", function () {
        botaoIniciar.disabled = false
        botaoZerar.disabled = true
        marcador.disabled = true

        hora = 0;
        minutos = 0;
        segundos = 0;

        hr.textContent = "00";
        min.textContent = "00";
        seg.textContent = "00";

        clearInterval(relogio);


    });

}
