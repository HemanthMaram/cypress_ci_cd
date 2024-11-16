class HomePage {
  get HomePageElements() {
    return require("../locators/amazonLocators.locators");
  }

  launchURL() {
    cy.visit("/");
    cy.screenshot()
  }

  searchProducts(input) {
    cy.get(this.HomePageElements.Search_TextBox).type(input);
    cy.screenshot();
    cy.get(this.HomePageElements.Search_Submit_Button).click();
    cy.get(this.HomePageElements.Validate_Search_Text)
      .invoke("text")
      .then((text) => {
        cy.log(text);
        expect(text).includes(input);
        cy.screenshot()
      });
  }
}
export default HomePage;
