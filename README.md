# Airbnb Search and Filter Project

Welcome to the GitHub repository for the Airbnb Search and Filter project. This project involves prototyping a new and improved search and filter experience for Airbnb, ensuring users can easily find listings that match their criteria.

## Contents

- [Introduction](#introduction)
- [Starter Code](#starter-code)
- [Deliverable](#deliverable)
- [Level Up (Extra Credit)](#level-up-extra-credit)

## Introduction

In this project, I worked to enhance the search and filter functionality for this Airbnb prototype website. The goal was to ensure that the correct search results are displayed based on the user's search term and filtering options.

## Starter Code

The existing code in `provided.js` implements the search feature and shows results to the user. This code calls the three functions defined in `script.js`, which I completed. My task was to filter the search results based on the user's query and filtering options.

## Deliverable

Below are the two main filtering functions I completed, along with an extra credit function.

### 1. filterByCity(targetCity, listingCityArray)

This function filters listings by city name.

**Parameters:**
- `targetCity` (String): The city to filter by (e.g., "San Diego").
- `listingCityArray` (Array): An array of city names from the listings (e.g., ["Lake Tahoe", "San Diego", "Chicago"]).

**Return:**
- An array with each index from `listingCityArray` where the city matches `targetCity`, ignoring capitalization/case.

### 2. filterByPrice(minPrice, maxPrice, listingPriceArray)

This function filters listings by price range.

**Parameters:**
- `minPrice` (Number): The minimum price (e.g., 100).
- `maxPrice` (Number): The maximum price (e.g., 300).
- `listingPriceArray` (Array): An array of prices from the listings (e.g., [132, 430, 73, 198]).

**Return:**
- An array with each index from `listingPriceArray` where the price is between the `minPrice` and `maxPrice` specified by the user.

## Level Up (Extra Credit)

For extra credit, I implemented the `filterByTypes` function.

### 3. filterByTypes(targetTypes, listingTypeArray)

This function filters listings by type.

**Parameters:**
- `targetTypes` (Array): The types of listings to filter by (e.g., ["entire-place", "private-room"]).
- `listingTypeArray` (Array): An array of listing types from the listings (e.g., ["entire-place", "private-room", "shared-room"]).

**Return:**
- An array with each index from `listingTypeArray` where the type of listing matches ANY of the `targetTypes`.

## Technologies Used

- **HTML5 & CSS3:** For structuring and styling the web pages.
- **JavaScript:** For adding interactivity and enhancing the user experience.

