var setaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}


function RolarParaEsquerda(){
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}