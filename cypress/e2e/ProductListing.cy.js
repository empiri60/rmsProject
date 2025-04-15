
import ShoppingCart from "../pageObjects/cart/Shopping.Cart.page";
import Checkout from "../pageObjects/cart/Checkout.page";
import LoginPage from "../pageObjects/auth/Login.page";


describe("Cart Operations Suite", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/");
        cy.fixture('userAccounts.json').then(data => {
            Cypress.env('loginData', data);
          });
    });
    describe('Cart Management', () => {

        it("should add products and verify items in cart", () => {
            cy.AddProductToShoppingCart();
            cy.NavigateToShoppingCart()
            cy.VerifyItemsCount()
            
           
        });
        it("should calculate correct total amount", () => {
            cy.AddProductToShoppingCart();
            cy.NavigateToShoppingCart()
            cy.VerifyItemsCount()
            ShoppingCart.verifyCartTotal();
        });
        it("should update total after deleting an item", () => {
            cy.AddProductToShoppingCart();
            cy.NavigateToShoppingCart()
            ShoppingCart.removeItem(0);
            cy.wait(2000);
            ShoppingCart.verifyCartTotal();
        });
    })

    describe('Order Placement', () => {

        it("should complete order placement successfully", () => {
            const { username, password, welcomeMessage } = Cypress.env('loginData').validUser;
            LoginPage.navigateToLogin()
            LoginPage.enterUsername(username)
            LoginPage.enterPassword(password)
            LoginPage.submitLogin()
            LoginPage.verifySuccessfulLogin(welcomeMessage)
            cy.AddProductToShoppingCart();
            cy.NavigateToShoppingCart()
            Checkout.completeCheckout();
            Checkout.verifyOrderConfirmation();
            cy.reload()
        });

    })

});
