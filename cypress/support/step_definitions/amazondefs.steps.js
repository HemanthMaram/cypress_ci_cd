import HomePage from "../pages/homePage";
import ValidateProducts from "../pages/validateProducts.page";
import ApplyFilters from "../pages/applyFilters.page";

const homePage = new HomePage();
const validateProducts = new ValidateProducts();
const applyFilters = new ApplyFilters();

// Step to launch Amazon webpage
Given(`User launches the amazon webpage`, () => {
  homePage.launchURL("https://www.amazon.in");
});

// Step to search for a specific product
When("User search for product", () => {
  cy.log(`Searching for product:`);
//   homePage.searchProducts(productToSearch);
});
