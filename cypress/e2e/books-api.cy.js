
import BooksApiClient from "../pageObjects/api/BookApiClient.page"

describe('Books API Tests with Object Model', () => {
    const baseUrl = 'https://simple-books-api.glitch.me';
    let apiClient;
    let orderId;
  
    before(() => {
      const email = `test${Date.now()}@example.com`;
      BooksApiClient.authenticate('Test Client', email)
        .then((response) => {
          BooksApiClient.authToken = response.body.accessToken;
        });
        BooksApiClient.getBookDetails(1).then((response) =>{
          expect(response.body.available).to.eq(true);
        })
    });

   
  
    beforeEach(() => {
      BooksApiClient.createOrder(1, 'John Doe')
        .then((response) => {
          orderId = response.body.orderId;
        });
    });
  
    afterEach(() => {
      if (orderId) {
        BooksApiClient.deleteOrder(orderId);
      }
    });

    it('Book ID',()=>{
      BooksApiClient.getBookDetails(1).then((response) =>{
        expect(response.body.available).to.eq(true);
        if (response.body.available) {
          // Step 2: Create order if book is available
          BooksApiClient.createOrder(1).then((orderResponse) => {
            expect(orderResponse.status).to.eq(201); // or 200 depending on your API
            expect(orderResponse.body).to.have.property('orderId');
            cy.log('Order created successfully:', orderResponse.body.orderId);
          });
       
        }
      })
      
    })
    

    it.only('should verify API status', () => {   
      let bookId = null    
      BooksApiClient.getBookDetails(1).then((getResponse) => {       
        expect(getResponse.body['available']).to.eq(true);       
        bookId = getResponse.body['id']       
        BooksApiClient.createOrder(bookId, 'John Doe').then((response) => {            
          expect(response.status).to.eq(201);       
         });  
         });   
         
        });
  
    describe('Basic API Checks', () => {
      it('should verify API status', () => {
        BooksApiClient.getStatus()
          .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('OK');
          });
      });
  
      it('should fetch book list', () => {
        BooksApiClient.getBooks()
          .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array').that.is.not.empty;
          });
      });
    });
  
    describe('Order Management', () => {
      it('should create and verify order', () => {
        expect(orderId).to.be.a('string');
        
        BooksApiClient.getOrder(orderId)
          .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.customerName).to.eq('John Doe');
          });
      });
  
      it('should update an order', () => {
        BooksApiClient.updateOrder(orderId, { customerName: 'Bilal' })
          .should((response) => {
            expect(response.status).to.eq(204);
          });
  
          BooksApiClient.getOrder(orderId)
          .should((response) => {
            expect(response.body.customerName).to.eq('Bilal');
          });
      });
  
      it('should delete an order', () => {
        BooksApiClient.deleteOrder(orderId)
          .should((response) => {
            expect(response.status).to.eq(204);
          });
  
          BooksApiClient.getOrder(orderId)
          .should((response) => {
            expect(response.status).to.eq(404);
          });
      });
    });
  });
  