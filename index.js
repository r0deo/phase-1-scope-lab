// Declare customerName in global scope and initialize it to 'bob'
var customerName = "bob";
const leastFavoriteCustomer = "some value";

// Function that returns the customerName
function getCustomerName() {
    return customerName;
}

// Function that modifies the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function that sets the bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Assuming bestCustomer should be declared globally
}

// Function that overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Modifying the global variable
}

// Function that unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
    // This will result in an error because leastFavoriteCustomer is a constant
    leastFavoriteCustomer = "hi";
}

 