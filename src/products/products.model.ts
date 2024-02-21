export class Product{
    // id: string;
    // title: string;
    // description: string;
    // price: number;

    // constructor(id: string, title: string, description: string, price: number){
    //     this.id = id;
    //     this.title = title;
    //     this.description = description;
    //     this.price = price;
    // }

    //ts has a shortcut for all this duplication
    constructor(public id: string, public title: string, public description: string, public price: number){}
}