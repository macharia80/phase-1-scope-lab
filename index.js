// Write your solution in this file!
var customerName = 'bob';

// A button to make the customer name all capital letters
function upperCaseCustomerName() {
    // Take the name and make it ALL CAPS
    window.customerName = window.customerName.toUpperCase();
}

// A way to write down who our best customer is
function setBestCustomer() {
    // Write "not bob" as our best customer
    window.bestCustomer = 'not bob';
}

// A way to change who our best customer is
function overwriteBestCustomer(newFavorite) {
    // Erase the old best customer and write the new one
    window.bestCustomer = newFavorite;
}

// Write down a customer we don't like (and lock it so it can't change)
const leastFavoriteCustomer = 'some value';
// Try to change the locked customer (this will fail)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = `new value`;
    // This won't work because we locked it!
    // leastFavoriteCustomer = 'new value'; // This line is commented out to avoid errors
}
    // This won't work because we locked it!
    // leastFavoriteCustomer = 'new value'; // This line is commented out to avoid errors
