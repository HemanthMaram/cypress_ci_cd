Feature: Validate the Amazon webpage

Scenario Outline: Search for a product with a range from a particular brand and fetch the first product name and price
    Given User launches the amazon webpage
    When User search for product
    # Then User filter the products for the <brand> brand

    Examples:
        | searchProduct       | brand  |
        | mobiles under 15000 | realme |
