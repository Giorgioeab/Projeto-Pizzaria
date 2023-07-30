let carrinho = []

function incrementQuantity(itemId) {
    const quantityElement = document.querySelector(`#${itemId} .quantity`)
    const currentQuantity = parseInt(quantityElement.textContent)
    quantityElement.textContent = currentQuantity + 1;
    
}

function decrementQuantity(itemId) {
    const quantityElement = document.querySelector(`#${itemId} .quantity`)
    const currentQuantity = parseInt(quantityElement.textContent)
    if (currentQuantity > 1){
        quantityElement.textContent = currentQuantity -1;}
}

function carregarCarrinhoDoLocalStorage(){
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo){
        carrinho = JSON.parse(carrinhoSalvo)
        atualizarDivCarrinho()
    }
}

function salvarCarrinhoNoLocalStorage(){
    localStorage.setItem('carrinho', JSON.stringify('carrinho'))
}

function exibirMensagemDeConfirmacao (nome){
    alert(`Você adicionou ${nome} ao carrinho`)
}

function atualizarDivCarrinho(){
    exibirDivCarrinho()

    const carrinhoCointainer = document.getElementById('carrinho-container')
    carrinhoCointainer.innerHTML = ''
    
    const carrinhoTitulo = document.createElement('h1')
    carrinhoTitulo.innerHTML = 'Itens adiconados no carrinho'
    
    const tabela = document.createElement('table')
    tabela.innerHTML = `
        <tr>
            <th>QNT</th>
            <th>ITEM</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
        </tr>
    `
    let totalPedido = 0

    for (const item of carrinho){
        const precoTotalPorItem = item.preco*item.quantidade
        const linhaItem = document.createElement('tr')
        linhaItem.innerHTML = `
            <td>${item.quantidade}</td>
            <td>${item.nome}</td>
            <td>${item.preco.toFixed(2)}</td>
            <td>${precoTotalPorItem}</td>
        `
        tabela.appendChild(linhaItem)
        totalPedido += precoTotalPorItem
    }
    const carrinhoTotal = document.createElement('div')
    carrinhoTotal.innerHTML = `Total do pedido: R$${totalPedido.toFixed(2)}`

    const btn_fazerPedido = document.createElement('button')
    btn_fazerPedido.innerText = 'Ir para carrinho'
    btn
}
