// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for(const category in menu){
        // Create an element to represent the category
        const categoryElement = document.createElement('div');
        // Set the text content of the category element to the category name
        categoryElement.classList.add('category');
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;
        // Append the category element to the menu container
        categoryElement.appendChild(categoryHeader);
        // Create an element to represent a list of items
        const itemList = document.createElement('ul');
        
        // Loop through the items in the category and create list items
        menu[category].forEach(item =>{
            // Create a list item element
            const listItem = document.createElement('li');
            // Set the text content of the list item element to the item name
            listItemm.textContent = item;
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));
            // Append the list item to the list of items
            itemList.appendChild(listItem);
        });
        // Append a list of items element to the menu container
        categoryElement.appendChild(itemList);
        menuContainer.appendChild(categoryElement);
        
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
