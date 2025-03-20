let shoppingList = []; // Array para armazenar os itens da lista
let total = 0; // Variável para armazenar o valor total da lista

// Função para adicionar item à lista
function addItem() {
    let itemName = document.getElementById('itemName').value;
    let itemPrice = parseFloat(document.getElementById('itemPrice').value);

    if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Por favor, insira um nome válido para o item e um preço maior que 0.');
        return;
    }

    // Adicionando item à lista
    shoppingList.push({ name: itemName, price: itemPrice });
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';

    updateList();
}

// Função para excluir um item específico
function deleteItem(index) {
    shoppingList.splice(index, 1);
    updateList();
}

// Função para atualizar a lista de compras e o total
function updateList() {
    let listElement = document.getElementById('shoppingList');
    listElement.innerHTML = '';

    total = 0; // Resetando o total

    shoppingList.forEach((item, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
            <button onclick="deleteItem(${index})">
                <img src="lixo.png" alt="Excluir">
            </button>
        `;

        listElement.appendChild(li);

        // Somando o preço para o total
        total += item.price;
    });

    document.getElementById('totalPrice').textContent = total.toFixed(2);
}
