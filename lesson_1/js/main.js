const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
    {id: 5, },
];

const renderProduct = (title = 'Имя товара', price = '----') => {
    return `<div class="product-item">
                <div class="imgWrapper">
                    <img src="http://via.placeholder.com/300x200" alt="placeholder">
                </div>
                <div class="textWrapper">
                    <div>
                        <h3>Назавние: ${title}</h3>
                        <p>Цена: ${price}</p>
                    </div>
                    <button class="by-btn">Добавить в корзину</button>
                </div>
            </div>`;
};

const renderProducts = (list) => { 
    document.querySelector('.products').innerHTML = list.map((item) => renderProduct(item.title, item.price)).join('');
};

renderProducts(products);
