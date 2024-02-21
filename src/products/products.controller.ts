import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{
    //productsService is an instance of the class ProductsService which we use in this controller
    constructor(private readonly productsService: ProductsService){}

    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDescription: string, 
        @Body('price') prodPrice: number,
    ) {
        const generatedId = this.productsService.insertProduct(prodTitle, prodDescription, prodPrice);
        return {id: generatedId};
    }

    @Get()
    getAllProducts(){
        return this.productsService.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string, 
        @Body('title') prodTitle: string, 
        @Body('description') prodDescription: string, 
        @Body('price') prodPrice: number,
    ){
        this.productsService.updateProduct(prodId, prodTitle, prodDescription, prodPrice);
        return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string){
        this.productsService.deleteProduct(prodId);
        return null;
    }
}