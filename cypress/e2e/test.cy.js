describe('Check localhost', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('has TODO title', () => {
        cy.title().should('include', 'TODO');
    });

    it('should allow adding a new task', () => {
        const testValue = 'Buy groceries';
        cy.get('.todo-input') 
            .type(testValue); 
        cy.get('.add-button').click(); 
        cy.get('.todo-item').should('have.length', 1); 
        cy.get('.todo-text').should('contain', testValue); 
    });

    it('should allow marking a task as completed', () => {
        const testValue = 'Finish homework';
        cy.get('.todo-input').type(testValue);
        cy.get('.add-button').click();
        cy.get('.todo-checkbox').click(); 
        cy.get('.todo-text').should('have.class', 'completed'); 
    });

    it('should allow deleting a task', () => {
        const testValue = 'Clean the house';
        cy.get('.todo-input').type(testValue);
        cy.get('.add-button').click();
        cy.get('.delete-button').click(); 
        cy.get('.todo-item').should('have.length', 0); 
    });

    it('should clear input field after adding a task', () => {
        const testValue = 'Learn Cypress';
        cy.get('.todo-input') 
            .type(testValue); 
        cy.get('.add-button').click(); 
        cy.get('.todo-input').should('have.value', ''); 
    });
    
});
