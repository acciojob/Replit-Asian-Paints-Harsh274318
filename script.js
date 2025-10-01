 let boxId = document.querySelectorAll(".grid-item");
        let colorbtn = document.querySelector("#change_button");
        let boxNum = document.querySelector("#block_id");
        let colorName = document.querySelector("#colour_id");
        let resetBtn = document.querySelector("#reset_button");

        colorbtn.addEventListener("click", changecolor);

        function changecolor() {
            let boxNumValue = +boxNum.value;  // Convert to number
            let colorValue = colorName.value;

            // Ensure the box number is between 1 and 9
            if (boxNumValue >= 1 && boxNumValue <= 9) {
                for (let t of boxId) {
                    let str = t.innerText;
                    if (str == boxNumValue) {
                        t.style.backgroundColor = colorValue;  // Set background color directly
                    }
					else {
					t.style.backgroundColor = "transparent";            }
        }
                }
            }
			

        // Reset the colors of all boxes
        resetBtn.addEventListener("click", resetColors);

        function resetColors() {
            for (let s of boxId) {
                s.style.backgroundColor ="transparent";  
            }
        }