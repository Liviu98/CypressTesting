describe('Google Search', () => {
    it('Search on google', () => {
        cy.visit('https://google.com');
        cy.get('#W0wltc').click();
        cy.get('.gLFyf').type('bbc').type('{enter}');
        cy.get('#result-stats').should('exist');

    })
    it('Verification in the URL and make a screenshot', () => {
        cy.visit('https://climate.nasa.gov/ask-nasa-climate/2949/why-milankovitch-orbital-cycles-cant-explain-earths-current-warming/');
        cy.url().should('include', '/2949/');
        cy.screenshot();
    })
    it('Delay with 10 seconds', () => {
        cy.visit('https://google.com');
        cy.get('#W0wltc').click();
        cy.wait(10000);
        cy.get('.gLFyf').type('it took 10 sec');

    })
    it('Search with different attributes', () => {
        cy.visit('https://google.com');
        cy.get('#W0wltc').click();
        cy.get('[alt="Google"]').should('be.visible');

    })
})