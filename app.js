(function() {
    const items = [
        {id: 'arma_arco', name: 'Arco', image: './icons/arma_arco.png'},
        {id: 'arma_faca', name: 'Faca', image: './icons/arma_faca.png'},
        {id: 'arma_machete', name: 'Machete', image: './icons/arma_machete.png'},
        {id: 'arma_revolver_32', name: 'Revolver (.32)', image: './icons/arma_revolver_32.png'},
        {id: 'arma_revolver_glock', name: 'Revolver (Glock)', image: './icons/arma_revolver_glock.png'},
        {id: 'arma_rifle', name: 'Rifle', image: './icons/arma_rifle.png'},
        {id: 'arma_serra', name: 'Serra', image: './icons/arma_serra.png'},
        {id: 'arma_shuriken', name: 'Shuriken', image: './icons/arma_shuriken.png'},
        {id: 'item_bacia', name: 'Bacia', image: './icons/item_bacia.png'},
        {id: 'item_bola', name: 'Bola', image: './icons/item_bola.png'},
        {id: 'item_caderno', name: 'Caderno', image: './icons/item_caderno.png'},
        {id: 'item_corda', name: 'Corda', image: './icons/item_corda.png'},
        {id: 'item_lanterna', name: 'Lanterna', image: './icons/item_lanterna.png'},
        {id: 'municao_revolver', name: 'Minição Revolver', image: './icons/municao_revolver.png'},
        {id: 'municao_rifle', name: 'Minição Rifle', image: './icons/municao_rifle.png'},
        {id: 'municao_sinalizador', name: 'Minição Sinalizador', image: './icons/municao_sinalizador.png'},
        {id: 'suprimento_agua', name: 'Água', image: './icons/suprimento_agua.png'},
        {id: 'suprimento_salgadinho', name: 'Salgadinho', image: './icons/suprimento_salgadinho.png'}
    ];

    const backpackItems = [];

    const fillBackpack = function (items) {
        const backpack = document.getElementById('rpg-backpack');
        
        backpack.innerHTML = ''; 
        items.forEach(function(item) {
            backpack.innerHTML += 
                `<div class="item" data-amount="${item.amount}">
                    <img src="${item.image}" alt="${item.id}"/>
                    <p>${item.name}</p>
                </div>`
        })
    }

    const itemList = document.getElementById('item-list');
    items.forEach(item => {
        itemList.innerHTML += 
            `<option 
                data-id="${item.id}" 
                data-image="${item.image}"
                data-name="${item.name}"
            >
                    ${item.name}
            </option>`;
    })

    const btnAddItem = document.getElementById('btn-add-item');

    btnAddItem.onclick = function() {
        const selectedItem = itemList[itemList.selectedIndex];
        const itemId = selectedItem.getAttribute('data-id');
        const itemName = selectedItem.getAttribute('data-name');
        const itemImage = selectedItem.getAttribute('data-image');

        const item = backpackItems.find(function (item) {
            return item.id === itemId
        });
        
        if (item === undefined) {
            backpackItems.push({
                id: itemId,
                name: itemName,
                image: itemImage,
                amount: 1
            });
        } else {
            item.amount += 1;
        }

        fillBackpack(backpackItems);
    };
})();
