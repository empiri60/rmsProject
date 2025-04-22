/// <reference types="cypress" />
import Login from '../pageObjects/auth/Login.page';
import BasePage from '../pageObjects/core/Base.page';

describe('Login Tests', () => {
  before(() => {
    cy.fixture('userAccounts.json').then(data => {
      Cypress.env('loginData', data);
    });
  });
  beforeEach(() => {
    BasePage.visit();
  });

  describe('Successful Authentication',()=>{
    it('should authenticate with valid credentials',()=> {
      const { username, password, welcomeMessage } = Cypress.env('loginData').validUser;
      Login.navigateToLogin();
      Login.enterUsername(username);
      Login.enterPassword(password);
      Login.submitLogin();
      Login.verifySuccessfulLogin(welcomeMessage);
    });

  })

  describe('Authentication Failure',()=>{

  it('should display error for invalid credentials', ()=> {
    const { username, password, errorMessage } = Cypress.env('loginData').invalidUser;
    Login.navigateToLogin();
    Login.enterUsername(username);
    Login.enterPassword(password);
    Login.submitLogin();
    cy.on('window:alert', (text) => {
      expect(text).to.equal(errorMessage);
    });
  });

  it('should display error for leave empty email credentials', ()=> {
    const {password } = Cypress.env('loginData').validUser;
    const {emptyInputFieldError} = Cypress.env('loginData').invalidUser;
    Login.navigateToLogin();
    Login.enterPassword(password);
    Login.submitLogin();
    cy.on('window:alert', (text) => {
      expect(text).to.equal(emptyInputFieldError);
    });
  });

  it('should display error for levae Empty password', ()=> {
    const { username } = Cypress.env('loginData').validUser;
    const {emptyInputFieldError} = Cypress.env('loginData').invalidUser;
    Login.navigateToLogin();
    Login.enterUsername(username);
    Login.submitLogin();
    cy.on('window:alert', (text) => {
      expect(text).to.equal(emptyInputFieldError);
    });
  });

  it.only('Should contact form successfully submited',()=>{

    const {SuccessMessage} = Cypress.env('loginData').ContactSuccessfullMessage;
    Login.clickonNavbar()
    Login.contactEmail()
    cy.on('window:alert', (text) => {
      expect(text).to.equal(SuccessMessage);
    });
  })

  

  })


})