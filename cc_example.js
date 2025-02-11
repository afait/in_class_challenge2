// Task 1

let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Notebook", price: 5, category:"Stationary"}
];

// function getProductsbyCategory(products, category_name) {
//     return products.filter(product => product.category === category_name);
// };

// console.log(getProductsbyCategory(products, "Electronics"));

// Task 2
console.log(products)
console.log("*".repeat(20))
function applyDiscount(price, discountRate) {
    return products.map(product => ({
        ...product, // Taking apart the product objects
        price: product.price - (product.price * discountRate)
    }
    ))
}

console.log(applyDiscount(...products, 0.1));
console.log("*".repeat(20))
console.log(products)
