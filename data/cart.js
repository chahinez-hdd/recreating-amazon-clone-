 export const cart =[];

export function addToCart(productId){
    let matchingItem;
            
            cart.forEach((cartItem)=>{
                if(cartItem.productId===productId)
                    matchingItem=cartItem;
            });
            
            let idProductSelector=document.querySelector(`.js-quantity-selector-${productId}`);

            if(matchingItem)
                matchingItem.quantity+=Number(idProductSelector.value);
            else 
                cart.push({
                    productId,
                    quantity:Number(idProductSelector.value)
                });
}