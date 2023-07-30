// Pedir pelo whatsapp

function pedirWhatsapp() {
    const numeroWhats = '+55 85 99999 9999'
    const mensagem = 'Olá vim pelo site e gostaria de fazer um pedido'
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${encodeURIComponent(mensagem)}`
    window.open(linkWhatsapp, '_blank')
}

// add evento aos botoes
let btn_whats = document.getElementById('pedWhats')
btn_whats.addEventListener('click', pedirWhatsapp)

// Funcao ver cardapio

function verCardapio() {
    //url de loja parceira (ifood, ubereats)
    const caminhoCard = 'cardapio.html'
    window.open(caminhoCard, '_blank')
}

let btn_cardapio = document.getElementById('cardapio')
btn_cardapio.addEventListener('click', verCardapio)