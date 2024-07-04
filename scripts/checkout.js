import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import formatCurrency from './utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from '../data/deliveryOptions.js';
import { renderOrderSummary } from "./checkout/orderSummary.js";
//console.log(dayjs());
// const today=dayjs();
// const deleveryDate=today.add(7,'days');
// console.log(deleveryDate.format('dddd , MMMM D'));

export function reviewFunction(){
    let totalPriceItems=0;
    let totalItemsQuantity=0;
                
        cart.forEach((cartItem)=>{
            let priceItem;
            products.forEach(product =>{
                if(cartItem.productId===product.id) 
                    priceItem=product.priceCents;
            });
            totalPriceItems+=(cartItem.quantity*priceItem);
            totalItemsQuantity+=cartItem.quantity;
        });

        document.querySelector('.js-payment-summary')
            .innerHTML=
                `
                <div class="payment-summary-title">
                Order Summary
                </div>

                <div class="payment-summary-row">
                <div>Items (${totalItemsQuantity}):</div>
                <div class="payment-summary-money">$${(totalPriceItems/100).toFixed(2)}</div>
                </div>

                <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">$4.99</div>
                </div>

                <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">${(totalPriceItems/100).toFixed(2)}</div>
                </div>

                <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">$${(totalPriceItems/1000).toFixed(2)}</div>
                </div>

                <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">$${(Number((totalPriceItems/100).toFixed(2)) + Number((totalPriceItems/1000).toFixed(2))).toFixed(2) }</div>
                </div>

                <button class="place-order-button button-primary">
                Place your order
                </button>
                `;
}
reviewFunction();

renderOrderSummary();

