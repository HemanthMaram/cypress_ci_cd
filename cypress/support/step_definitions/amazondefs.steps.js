import HomePage from "../pages/homePage";
import ValidateProducts from "../pages/validateProducts.page";
import ApplyFilters from "../pages/applyFilters.page";

const homePage = new HomePage();
const validateProducts = new ValidateProducts();
const applyFilters = new ApplyFilters();

// Step to launch Amazon webpage
Given(`the User launches the Amazon webpage`, () => {
  homePage.launchURL("https://www.amazon.in");
});
When(`the User searches for a Product in the search box`,()=>{
    homePage.searchProducts('mobile phone under 15000')
})
And(`the User filters the results based on the brand`,()=>{
    applyFilters.brandFilter('realme')
    applyFilters.priceFilter(5000)
})
Then(`the User fetches the name and price of the first product`,()=>{
    validateProducts.fetchFirstProductName()
    validateProducts.fetchfirstProductPrice()
})       



       
        