

// Define the initial date
let currentDate = new Date(2024, 5, 29); // June 29, 2024

// Function to update the date display
function updateDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    document.getElementById('currentDate').innerText = `${month} ${day}`;
}

// Function to increment the date
function increment() {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDate();
}

// Function to decrement the date
function decrement() {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDate();
}

// Call updateDate initially to display the initial date
updateDate();
