function comprarCarta(){
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const naipes = ["♦️", "♥️", "♣️", "♠️"]
    const sortearNumero = cartas[Math.floor(Math.random() * 13)]
    const sortearNaipe = naipes[Math.floor(Math.random() * 4) ]
    
    let valor

    if(sortearNumero === "A"){
        valor = 11
    } else if(sortearNumero === "J" || sortearNumero === "Q" || sortearNumero === "K"){
        valor = 10
    } else{
        valor = Number(sortearNumero)
    }

    const carta = {
        texto: sortearNumero + sortearNaipe,
        valor: valor
    }

    return carta
}