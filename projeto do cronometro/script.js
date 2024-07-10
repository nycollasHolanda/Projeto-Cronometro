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
    var link = document.createElement("p");
    link.classList.add("list-group-item", "list-group-item-action");
    link.textContent = esseTexto;

    mainDiv.appendChild(link);
    console.log(esseTexto)

})

function comece() {

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


botaoIniciar.disabled = true
botaoZerar.disabled = false
marcador.disabled = false

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
