let boxId = document.querySelectorAll(".grid-item");
let colorbtn = document.querySelector("#change_button");
let boxNum = document.querySelector("#block_id");
let colorName = document.querySelector("#colour_id");
let resetBtn = document.querySelector("#reset_button");

colorbtn.addEventListener("click", changecolor);

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

resetBtn.addEventListener("click", resetColors);

function resetColors() {
    for (let s of boxId) {
        s.style.backgroundColor = "transparent";  // Reset all grid item backgrounds
    }
}
