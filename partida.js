alert("Bem vindo ao Blackjack do Gui! Cheque seu Console para mais detalhes!")
console.log("Bem vindo ao Blackjack do Gui!")

let cartasDoJogador = []
let cartasDoComputador = []

if (confirm("Deseja participar do Blackjack do Gui?")){

    let validaCartaInicial = false

    while(!validaCartaInicial){
        cartasDoJogador.push(comprarCarta())
        cartasDoJogador.push(comprarCarta())
        cartasDoComputador.push(comprarCarta())
        cartasDoComputador.push(comprarCarta())

        if ((cartasDoJogador[0].texto.includes("A") && cartasDoJogador[1].texto.includes("A") || cartasDoComputador[0].texto.includes("A") && cartasDoComputador[1].texto.includes("A"))){
            cartasDoJogador = []
            cartasDoComputador = []
        } else {
            validaCartaInicial = true
        }
    }

    let comprando = true

    while (comprando){
        let pontos = 0
        let totalTextoCarta = "";

        for (let cartaValorJogador of cartasDoJogador) {
            totalTextoCarta += cartaValorJogador.texto + ""
            pontos += cartaValorJogador.valor
        }

        if(pontos > 21){
            comprando = false
        } else {
            let continuaComprando = confirm(`Suas cartas sao ${totalTextoCarta}. A carta do computador e ${cartasDoComputador[0].texto}. Deseja continuar comprando?`)
            if(continuaComprando) {
                cartasDoJogador.push(comprarCarta())
            } else {
                comprando = false
            }
        }
    }

let somatorioPontosDoJogador = 0
let somatorioTextoDoJogador = ""

let somatorioPontosDoComputador = 0
let somatorioTextoDoComputador = ""

for (let cartaValorJogador of cartasDoJogador){
    somatorioPontosDoJogador += cartaValorJogador.valor
    somatorioTextoDoJogador += cartaValorJogador.texto + ""
}

for (let cartaValorComputador of cartasDoComputador){
    somatorioPontosDoComputador += cartaValorComputador.valor
    somatorioTextoDoComputador += cartaValorComputador.texto + ""
}

if(somatorioPontosDoJogador < 21){
    while(somatorioPontosDoComputador <= 21 && somatorioPontosDoComputador < somatorioPontosDoJogador)
    cartasDoComputador.push(comprarCarta())
    somatorioPontosDoComputador += cartasDoComputador[cartasDoComputador.length - 1].valor
}

let resultado = ""

if(somatorioPontosDoJogador > somatorioPontosDoComputador && somatorioPontosDoJogador <= 21){
    alert("Parabéns, você ganhou!!!")
} else if( somatorioPontosDoJogador < somatorioPontosDoComputador && somatorioPontosDoComputador <= 21){
    alert("Não foi dessa vez! O Computador ganhou!")
}else if( somatorioPontosDoJogador === somatorioPontosDoComputador){
    alert("Empate! Tente novamente!")
} else if(somatorioPontosDoJogador > 21){
    alert("Você estourou! O Computador ganhou!")
} else if(somatorioPontosDoComputador > 21){
    alert("Parabéns, você ganhou!!!")
}

console.log(`Valor do Jogador ${somatorioTextoDoJogador} - com total de ${somatorioPontosDoJogador}. Valor do Computador ${somatorioTextoDoComputador} - com total de ${somatorioPontosDoComputador}!`)
}else{
    alert("A partida acabou! Jogue novamente!")
    console.log("A partida acabou! Jogue novamente!")
}

