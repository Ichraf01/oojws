class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class shoppingCartItem{
    constructor(product, quantity){
        this.product= product;
        this.quantity= quantity;
    }
    
        getTotalPrice() {
            return this.product.price * this.quantity;
        }
    }
    
    class shopCart{
        constructor(){
            this.items=[]
        }
        getTotalItem(){
            return this.items.reduce((total, item) => total + item.quantity, 0);
        }
        addToCart(product,quantity){
        const findprod = this.items.find((item)=>item.product.id===product.id)
        if(findprod){
            findprod.quantity += quantity
        } else{
            this.items.push(new shoppingCartItem(product, quantity))
        }
    }
    removeItem(el){
        this.items = this.items.filter(item=> item.product.id !== el)
    }
    displayItems(){
        this.items.forEach(item => console.log(`product: ${item.product.name}, quantity: ${item.quantity}, total price: ${item.getTotalPrice()}`))
    }
}

const product1= new Product(1, 'lipgloss', 15);
const product2 = new Product(2, 'lipstick', 20);
const product3= new Product(3, 'Glow Drops', 35);

const cart= new shopCart();

cart.addToCart(product1, 6);
cart.addToCart(product2, 8);
cart.addToCart(product3,5);

cart.displayItems();

cart.removeItem(3)

cart.displayItems();