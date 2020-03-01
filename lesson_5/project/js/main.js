const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    searchLine:'',
    catalogUrl: '/catalogData.json',
    isVisibleCart:false,
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    cartProducts:[]
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    getTotalCartPrice(){
      let result = 0
      this.cartProducts.forEach(element => {
        result += element.price * element.count
      });
      return result
    },
    getTotalCartCountGoods(){
      let result = 0
      this.cartProducts.forEach(element => {
        result += element.count
      });
      return result
    },
    addProduct(product) {
      if (this.cartProducts.length === 0) {
        product.count = 1
        this.cartProducts.push(product)
      } else {
        let cartHasEl = this.cartProducts.filter(el => el.id_product === product.id_product)
        if (cartHasEl.length !== 0) {
          cartHasEl[0].count++
        } else {
          product.count = 1
          this.cartProducts.push(product)
        }
      }
    },
    changeVisibleCart(){
      this.isVisibleCart = !this.isVisibleCart
    },
    filterGoods(){
      this.products.forEach((product) =>{
      let userInputRegExp = new RegExp(this.searchLine, 'gi');
        if(product.product_name.search(userInputRegExp) === -1){
            product.show = false
        } else {
          product.show = true
        }
      })
    }
  },
  // хук жизненного цикла
  mounted(){
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          el.show = true
          this.products.push(el);
        }
      });
      console.log('this.products: ', this.products);
  },
  
});
