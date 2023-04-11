class ProductManager {
    constructor(){
        this.productList = [];
    }
    getEventos = ()=>{
        return this.productList;
    }
    addProduct = (title,description,price,thumbnail,code,stock) =>{
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (this.productList.lenght===0) {
            product.id =1;
        }
        else{
            product.id = this.productList[this.productList.lenght-1].id+1;
        }
    }
}
const productManagerTest =new ProductManager();
productManagerTest. addProduct

console.log(ProductManager);