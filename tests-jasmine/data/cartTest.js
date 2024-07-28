import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart',()=>{
    // beforeEach(() => {
    //     // Clear the cart before each test
    //     cart.length = 0;

    //     // Create a mock element for the quantity selector
    //     const mockElement = document.createElement('input');
    //     mockElement.className = 'js-quantity-selector-e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    //     mockElement.value = 1;
    //     document.body.appendChild(mockElement);
    // });

    // afterEach(() => {
    //     // Remove the mock element after each test
    //     const mockElement = document.querySelector('.js-quantity-selector-e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    //     if (mockElement) {
    //         mockElement.remove();
    //     }
    // });


    
    it('adds an existing product to the cart',()=>{

    });
    
    it('adds a new product to the cart',()=>{
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        // console.log(localStorage.getItem('cart'));
        loadFromStorage();
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(1); 
    });

});