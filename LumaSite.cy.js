describe ('Demoblaze',() =>{
    it('Login with correct credential and then logout',()=>{
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#login2').click();
        cy.wait(1000);
        cy.get('#loginusername').type('Liviu');
        cy.get('#loginpassword').type('Testing1234');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(4000);
        cy.get('#logout2').click();
       
    })

    it('Adding some products in cart', () => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('.active > .nav-link').click();
        cy.get(':nth-child(2) > .card > :nth-child(1) > .card-img-top').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.wait(5000);
        cy.get('#cartur').click();
        
    })

    it('Login with incorrect credentials', () => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#login2').click();
        cy.wait(1000);
        cy.get('#loginusername').type('Alex');
        cy.get('#loginpassword').type('testing');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(4000);

    })

    it('Verify if About Us button works', () => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(3500);

    })

})