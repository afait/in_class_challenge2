// Task 1

// let products = [
//     {name: "Laptop", price: 1200, category: "Electronics"},
//     {name: "Notebook", price: 5, category:"Stationary"}
// ];

// function getProductsbyCategory(products, category_name) {
//     return products.filter(product => product.category === category_name);
// };

// console.log(getProductsbyCategory(products, "Electronics"));

// // Task 2
// console.log(products)
// console.log("*".repeat(20))
// function applyDiscount(price, discountRate) {
//     return products.map(product => ({
//         ...product, // Taking apart the product objects
//         price: product.price - (product.price * discountRate)
//     }
//     ))
// }

// console.log(applyDiscount(...products, 0.1));
// console.log("*".repeat(20))
// console.log(products)

// Task 3

// let sales = [250, 400, 150, 900, 1200];

// function calculateTotalRevenue(sales) {
//     return sales.reduce((total, sale)=>total+sale, 0)
// }

// console.log(`Total Rev. 2024: $${calculateTotalRevenue(sales)}`);

// Task 4

let employee = {name: "John Doe", salary: 5000, position: "Manager"};

function updateSalary(employee, percentageIncrease) {
    return employee.salary += employee.salary * percentageIncrease
};

console.log(updateSalary(employee, .1));