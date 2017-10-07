export default class Product {
    constructor(id, key, quantity, brandName, description, price, image) {
        this.id = id;
        this.quantity = quantity;
        this.brandName = brandName;
        this.description = description;
        this.price = price;
        this.image = image;
        this.key = key;
    }
    id: string;
    key: string;
    quantity: string;
    brandName: string;
    description: string;
    price: string;
    image: string;
}
