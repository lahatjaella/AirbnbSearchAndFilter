function filterByCity(targetCity, listingCityArray) {
  let cityIndeces = [];
  // Convert targetCity to lowercase
  let lowerCaseTargetCity = targetCity.toLowerCase();

  // Iterate through the listingCityArray
  for (let i = 0; i < listingCityArray.length; i++) {
    // Converts current city in array to lowercase and compares
    if (lowerCaseTargetCity === listingCityArray[i].toLowerCase()) {
      cityIndeces.push(i);
    }
  }
  return cityIndeces; 
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let priceIndeces = [];

  // Iterate through the listingPriceArray
  for (let i = 0; i < listingPriceArray.length; i++) {
    // Compares listing prize to min and max prices
    if ((listingPriceArray[i] > minPrice) && (listingPriceArray[i] < maxPrice)) {
      priceIndeces.push(i);
    }
  }
  return priceIndeces;
  // return [...listingPriceArray.keys()]
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  let typeIndeces = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    for (let j = 0; j < targetTypes.length; j++) {
      if (targetTypes[j] == listingTypeArray[i]) {
        typeIndeces.push(i)
        break;
      }
    }
  }
  return typeIndeces;
  // return [...listingTypeArray.keys()]
}