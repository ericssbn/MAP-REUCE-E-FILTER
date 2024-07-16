const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterVegan = document.querySelector('.filter-vegan')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi = myLi + `
    <li>
    <img src=${product.src}>
    <p>${product.name}</p>
    <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
    `
    })
    list.innerHTML = myLi
}

function mapAll() {
    const newPrice = menuOptions.map((product) => ({
        name: product.name,
        price: product.price * 0.9,
        vegan: product.vegan,
        src: product.src,

    }))
    showAll(newPrice)
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
    <p>O valor total dos itens é  ${formatCurrency(totalValue)}</p>
        </li>
    `}

function filterVeganItens() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
sumAll.addEventListener('click', sumAllItens)
filterVegan.addEventListener('clilck', filterVeganItens)

