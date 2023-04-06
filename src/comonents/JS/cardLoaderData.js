import { getShoppingCart } from "../../utilities/fakedb";

const cardLoaderData = async () =>{
    const lodedProducts = await fetch('products.json');
    const products = await lodedProducts.json();
    const saveCard = [];
    const storedCard = getShoppingCart();

    
    for(const id in storedCard){
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            saveCard.push(addedProduct)
        }
    }
    return saveCard;
}

export default cardLoaderData;