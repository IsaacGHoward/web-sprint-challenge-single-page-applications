describe('Visit Form', function(){
    it('Should navigate to the webpage, and then the pizza form', function(){
        cy.visit('localhost:3000');
        cy.get('button')
            .click();
    })
})
describe('Enter Name', function(){
    it('Enters name in form', function(){
        cy.get(':nth-child(2) > input')
            .type("Example Name");
    })
})
describe('Select Toppings', function(){
    it('Enters toppings into form', function(){
        cy.get('#pepperoni')
            .check();
        cy.get('#mushroom')
            .check();
    })
})
describe('Submit Form', function(){
    it('Submits the form', function(){
        cy.get('button')
            .click();
    })
})