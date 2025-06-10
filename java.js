//if original price is greater than $100 the item qualifies for a discount
function qualifiesForDiscount(originalPrice) {
  if (originalPrice > 100) {
    return true; 
  } else {
    return false;
  }
}
console.log(qualifiesForDiscount(110)); // true
console.log(qualifiesForDiscount(90));  // false




//if country is not equal to United States add extracharge
function calculateShippingCost(baseCost, country) {
  let extraCharge = 0;
  if (country.toLowerCase() !== "united states") {
    extraCharge = 15;
  }
  return baseCost + extraCharge;
}
console.log(calculateShippingCost(10, "United States")); // 10
console.log(calculateShippingCost(10, "Canada"));         // 25




//divides the order total by 4 to create the equal payment schedule
function splitIntoPayments(totalCost) {
  const monthlyPayment = totalCost / 4;
  return monthlyPayment;
}
console.log(splitIntoPayments(200)); // 50


//if product is red label it qualifies for discount
function hasRedLabel(product) {
  if (product.labelColor === "red") {
    return true;
  } else {
    return false;
  }
}
const product1 = { labelColor: "red" };
const product2 = { labelColor: "blue" };

console.log(hasRedLabel(product1)); // true
console.log(hasRedLabel(product2)); // false
