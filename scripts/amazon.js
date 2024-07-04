import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
//import { reviewFunction } from './checkout.js';
import formatCurrency from './utils/money.js';
let productsHTML='';

products.forEach((product)=>{
    productsHTML+=`
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src= ${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}"
          >
            Add to Cart
          </button>
        </div>
    `;

})

document.querySelector('.js-products-grid')
    .innerHTML=productsHTML;

let firstTime=false;



function updateCartQuantity(productId){
    let cartQuantity=0;
            
            cart.forEach((cartItem)=>{
                cartQuantity+=cartItem.quantity;
            });

            document.querySelector('.js-cart-quantity')
                .innerHTML=cartQuantity;
            
            if(!firstTime){
                addedFunction(productId);
                firstTime=true;
            }
            else{
                addedDisapear(productId);
                firstTime=false;
            }
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button)=>{
        button.addEventListener('click',()=>{
            const productId=button.dataset.productId;
           // let matchingItem;
            
            addToCart(productId);
            updateCartQuantity(productId);
           // reviewFunction();
            
            
           
        });
    });
let id2;
function addedFunction(id){
        document.querySelector(`.js-added-to-cart-${id}`)
        .classList.add('isAdded');

    id2 =setTimeout(()=>{
        document.querySelector(`.js-added-to-cart-${id}`)
        .classList.remove('isAdded');
    },2000); 
}

function addedDisapear(id){
    clearTimeout(id2);
    document.querySelector(`.js-added-to-cart-${id}`)
        .classList.add('isAdded');
    setTimeout(()=>{
        document.querySelector(`.js-added-to-cart-${id}`)
        .classList.remove('isAdded');
    },2000); 

}

updateCartQuantity();

