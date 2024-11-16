class ValidateProducts {
  get ValidateProductsLocators() {
    return require("../locators/amazonLocators.locators");
  }

  fetchFirstProductName() {
    cy.get(this.ValidateProductsLocators.First_Product_Name)
      .first()
      .then((prod) => {
        cy.log(prod.text());
        cy.addTestContext(`First Mobile Name : ${prod.text()}`);
      });
    cy.screenshot()
  }
  fetchfirstProductPrice() {
    cy.get(this.ValidateProductsLocators.First_Product_Price)
      .first()
      .then((prod) => {
        let price = +prod.text().slice(1).replace(/,/g, "");
        cy.log(price);
        cy.addTestContext(`First Mobile Price : ${price}`);
      });
    cy.screenshot()
  }
}
export default ValidateProducts;
