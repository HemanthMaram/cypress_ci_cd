Feature: Search and Filter Products on Amazon

    Scenario: Fetch the first product name and price after filtering by brand
        Given the User launches the Amazon webpage
        When the User searches for a Product in the search box
        And the User filters the results based on the brand
        Then the User fetches the name and price of the first product
       