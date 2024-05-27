
// Global variable to store users
let users = [];

// Fetch data from the API and populate the global variable
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        users = response.data;
        // Print the list of users to the console
        console.log(users);

        // Print only the names of the users to the console
        users.forEach(user => {
            console.log(user.name);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Function to print the global variable users to the console
function showUsers() {
    console.log(users);
    // Display the names of the users in the DOM
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear previous data
    users.forEach(user => {
        const userItem = document.createElement('p');
        userItem.textContent = user.name;
        userList.appendChild(userItem);
    });
}

// Add event listener to the button to call the showUsers function when clicked
document.getElementById('showUsers').addEventListener('click', showUsers);