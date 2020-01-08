describe("Index page", () => {
    /*
    * Visits the page before each test
    */
    beforeEach(() => {
      cy.log(`Visiting http://localhost:3000`);
      cy.visit("/");
    });

    /**
    * Header section
    */
    it("should have a logo", () => {
    cy.get(".title").should("have.length", 1);
   });
});