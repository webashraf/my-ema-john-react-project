import { getShoppingCart } from "../../utilities/fakedb";

const cardLoaderData = async () =>{
    const lodedProducts = await fetch('http://localhost:4000/products');
    const products = await lodedProducts.json();
    const saveCard = [];
    const storedCard = getShoppingCart();

    
    for(const id in storedCard){
        const addedProduct = products.find(pd => pd._id === id);
        if (addedProduct) {
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            saveCard.push(addedProduct)
        }
    }
    return saveCard;
}

export default cardLoaderData;