//your JS code here. If required.
let changeBtn = document.getElementById("change_button");
    let resetBtn = document.getElementById("Reset");
    let blockInput = document.getElementById("block_id");
    let colorInput = document.getElementById("colour_id");
    let gridItems = document.querySelectorAll(".grid-item");

    function resetGrid() {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    }
    changeBtn.addEventListener("click", () => {
      let blockId = blockInput.value;
      let color = colorInput.value.trim();

      if (!blockId || !color) {
        alert("Please enter both Block ID and Color!");
        return;
      }

      resetGrid();

      let block = document.getElementById(blockId);
      if (block) {
        block.style.backgroundColor = color;
      } else {
        alert("Invalid Block ID! Please enter between 1 to 9.");
      }
    });

    resetBtn.addEventListener("click", resetGrid);