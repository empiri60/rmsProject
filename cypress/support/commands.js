
import ProductListing from "../pageObjects/products/ProductListing.page";

Cypress.Commands.add('AddProductToShoppingCart',()=>{
    for (let i = 0; i < 3; i++) {
        ProductListing.selectProduct(i);
        ProductListing.addToCart();
        ProductListing.navigateBack();
        ProductListing.navigateBack();
    }

})