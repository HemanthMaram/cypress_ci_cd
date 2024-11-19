class ApplyFilters {
  get ApplyFiltersLocators() {
    return require("../locators/amazonLocators.locators");
  }

  brandFilter(selectedBrand) {
    cy.get(this.ApplyFiltersLocators.Brands_List).each((ele) => {
      cy.wrap(ele)
        .invoke("attr", "aria-label")
        .then((val) => {
          if (val == selectedBrand) {
            cy.wrap(ele).find(this.ApplyFiltersLocators.Brand_CheckBox).click();
            cy.log('Hi')
          }
        });
    });
    cy.screenshot()
  }

  priceFilter(minPrice) {
    let lowerBound;

    cy.get(this.ApplyFiltersLocators.PriceSlider)
      .first()
      .as("range")
      .invoke("attr", "aria-valuetext")
      .then((val) => {
        lowerBound = +val.slice(1).replace(/,/g, "");
        cy.log(lowerBound);
      });

    cy.get("@range")
      .invoke("val", 20)
      .trigger("input", { force: true })
      .trigger("change", { force: true });

    cy.get(this.ApplyFiltersLocators.FilterPriceRange_Button).click();

      cy.screenshot()
  }
}

module.exports = ApplyFilters;
