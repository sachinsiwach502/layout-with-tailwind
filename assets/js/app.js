let current = new Date(2024, 5, 29);

function updateDate() {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = current.getDate();
    let month = months[current.getMonth()];
    document.getElementById("currentDate").textContent = `${month} ${date}`;
}

function increment() {
    current.setDate(current.getDate() + 1);
    handleChange();
}
function decrement() {
    current.setDate(current.getDate() - 1);
    handleChange();
}

function handleChange() {
    if (current.getDate > 31) {
        current.setDate(1);
        current.setMonth(current.getMonth() + 1);
    } else if (current.getDate() < 1) {
        current.setDate(30);
        current.setMonth(current.getMonth() - 1);
    }
    updateDate();
}

updateDate();