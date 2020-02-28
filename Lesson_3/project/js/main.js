const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
  }
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    new Promise((res, rej) => {
      return fetch(API)
        .then(result=>result.json())
        .then(data=>{
          this.goods = [...data]
          this.render();
        })
        .catch(error => {
          console.log('Error:', error);
        })
    })
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class Cart {
  constructor(container = '.cart-body'){
    this.container = container
    this.goodsCart = []
    this.sum = 0
    this.countGoods = 0
    this._fetchGoodsCart()
    this.render()
  }
  _fetchGoodsCart(){
    //get goods from server or localStorage
  }
  render(){
    //show the cart
  }
  addGoodInCart(product){
    this.goodsCart.push(product)//get product and push in our arr with goods in cart
  }
  removeGoodFromCart(product){
    this.goodsCart = this.goodsCart.filter(good => good.id !== product.id) // filter arr goods in cart and check id from our products
  }
  setCountGoods(){
    this.countGoods = this.goodsCart.length // count length our arr with goods
  }
  setSum(){ //addition all price of aur products which contain in goodsCart
    this.goodsCart.reduce((init, item) => {
      return init + item
    })
  }
}
const cart = new Cart()
new ProductList();

// const products = [
//   {id: 1, title: 'Notebook', price: 1000},
//   {id: 2, title: 'Mouse', price: 100},
//   {id: 3, title: 'Keyboard', price: 250},
//   {id: 4, title: 'Gamepad', price: 150},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${item.title}</h3>
//                     <p>${item.price} \u20bd</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`;
//
// const renderProducts = list => {
//   document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
