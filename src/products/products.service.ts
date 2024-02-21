import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";

//making this class injectable means we can use it in multiple places (controllers for eg)
@Injectable()
export class ProductsService{
    private products: Product[] = [];
    //function inserts a new product into products array
    insertProduct(title: string, description: string, price: number){
        const prodid = Math.random().toString();
        const newProduct = new Product(prodid, title, description, price);
        this.products.push(newProduct);
        return prodid;
    }

    getAllProducts(){
        return [...this.products];
    }

    getSingleProduct(prodId: string){
        const product = this.findProduct(prodId)[0];
        return {...product};
    }

    updateProduct(prodId: string, title: string, description: string, price: number){
        const product = this.findProduct(prodId)[0];
        const index = this.findProduct(prodId)[1];
        const updatedProduct = {...product};
        if (title){
            updatedProduct.title = title;
        }
        if (description){
            updatedProduct.description = description;
        }
        if (price){
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id == id)
        const product = this.products[productIndex];
        if (!product){
            throw new NotFoundException('Could not find the product');
        }
        return [product, productIndex];
    }

    deleteProduct(id: string){
        const [product, index] = this.findProduct(id);
        this.products.splice(index, 1);
    }
}