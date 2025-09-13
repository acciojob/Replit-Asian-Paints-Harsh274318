// Select DOM elements
let boxId = document.querySelectorAll(".grid-item");
let colorbtn = document.querySelector("#change_button");
let boxNum = document.querySelector("#block_id");
let colorName = document.querySelector("#colour_id");
let resetBtn = document.querySelector("#reset_button");

// Listen for click event on Change button
colorbtn.addEventListener("click", changecolor);

// Function to change the color of the selected grid item
function changecolor() {
    let boxNumValue = +boxNum.value;  // Convert to number
    let colorValue = colorName.value;

    // Fix the range condition for boxNumValue
    if (boxNumValue >= 1 && boxNumValue <= 9) {
        for (let t of boxId) {
            let str = t.innerText;
            
            // Check if the box number matches the inner text of the grid item
            if (str == boxNumValue) {
                // Set the background color to the value from input
                t.style.backgroundColor = colorValue;
            }
        }
    } else {
        alert("Please enter a number between 1 and 9.");
    }
}

// Listen for click event on Reset button
resetBtn.addEventListener("click", resetColors);

// Function to reset all grid item colors to transparent
function resetColors() {
    for (let s of boxId) {
        s.style.backgroundColor = "transparent";  // Reset all grid item backgrounds
    }
}

// Debugging function to log the current background color
function logBackgroundColor() {
    for (let t of boxId) {
        console.log('Current background-color of box #' + t.innerText + ':', t.style.backgroundColor);
    }
}

// Cypress Test (if you're running this in the Cypress testing framework):
// This is just for test purposes, replace it with your test script
// Cypress test function that interacts with the page and checks the background color
function runCypressTest() {
    // Wait for the page to load (you can adjust the timeout here)
    cy.visit(baseUrl + "/main.html");
    cy.wait(1000);  // Wait for the page to load completely

    // Interact with the input fields and buttons
    cy.get("input#block_id").type("3");
    cy.get("input#colour_id").type("red");
    cy.get("#change_button").click();
    
    // Wait for the color to change (adjust the wait time if necessary)
    cy.wait(1000);
    
    // Check the background color of grid item #3 (expected to be red)
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(2)  // Check the third item (index 2)
      .should("have.css", "background-color", "rgb(255, 0, 0)", { timeout: 10000 });
    
    // Ensure other grid items are still transparent
    cy.get(".grid-container").find(".grid-item").eq(1).should("have.css", "background-color", "rgba(0, 0, 0, 0)");
}
