
import ProductListing from "../pageObjects/products/ProductListing.page";
import ShoppingCart from "../pageObjects/cart/Shopping.Cart.page";

Cypress.Commands.add('AddProductToShoppingCart',()=>{
    for (let i = 0; i < 3; i++) {
        ProductListing.selectProduct(i);
        ProductListing.addToCart();
        ProductListing.navigateBack();
        ProductListing.navigateBack();
 }

})

Cypress.Commands.add('NavigateToShoppingCart',()=>{
    ShoppingCart.navigate();
})

Cypress.Commands.add('VerifyItemsCount',()=>{
    ShoppingCart.verifyItemsCount();
})