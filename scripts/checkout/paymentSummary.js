import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { products,getProduct } from "../../data/products.js";
import formatCurrency from '../utils/money.js';
// // import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// import {deliveryOptions} from '../../data/deliveryOptions.js';

export function renderPaymentSummary(){
    let totalPriceItems=0;
    let totalItemsQuantity=0;
    let shippingPriceCents=0;
                
        cart.forEach((cartItem)=>{
            const product=getProduct(cartItem.productId);
            let priceItem=product.priceCents;
           
            products.forEach(product =>{
                if(cartItem.productId===product.id) 
                    priceItem=product.priceCents;
            });
            
            totalPriceItems+=(cartItem.quantity*priceItem);
            totalItemsQuantity+=cartItem.quantity;

            const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);

            shippingPriceCents+=deliveryOption.priceCents;
        });
        //console.log(totalPriceItems);
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
                <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
                </div>

                <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">${formatCurrency(totalPriceItems + shippingPriceCents )}</div>
                </div>

                <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">$${formatCurrency((totalPriceItems + shippingPriceCents)/10)}</div>
                </div>

                <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">$${formatCurrency((totalPriceItems + shippingPriceCents)+((totalPriceItems + shippingPriceCents)/10)) }</div>
                </div>

                <button class="place-order-button button-primary">
                Place your order
                </button>
                `;
}