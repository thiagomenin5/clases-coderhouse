export default class ProductManager{

    constructor(){
    this.products = [];
    this.id = 0;
    }
    getProducts(){
        return this.products;
    }
    addProduct({title,description,price,thumbnail,code,stock}){
        const codeExist = this.products.find((product)=>product.code === code);
        if(codeExist){
            throw new Error('El producto ya existe');
        }
        const newProduct = {title,description,price,thumbnail,code,stock,id:this.id++};
        this.products.push(newProduct);
    }
    getProductById(id){
        const product = this.products.find((product)=>product.id === id);
        if(!product){
            throw new Error('El producto no existe');
        }
        return product;
    }

}
