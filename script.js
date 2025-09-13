
        let boxId = document.querySelectorAll(".grid-item");
        let boxByClass = document.querySelectorAll(".Item-box")
        let colorbtn = document.querySelector("#change_button")
        let boxNum = document.querySelector("#block_id")
        let colorName = document.querySelector("#colour_id");
        let resetBtn = document.querySelector("#reset_button");
           
        colorbtn.addEventListener("click",changecolor);
        function changecolor(){
            let boxNumValue = +boxNum.value;
            let colorValue = colorName.value;
           
            for(t of boxId){
                  let str = t.innerText;                    
                if(str == boxNumValue && 1 <= boxNumValue <= 9 ){
                    t.style.backgroundColor = colorValue;
                    
                }
                
            }
        }
        resetBtn.addEventListener("click", resetColors);
        function resetColors(){
             for(let s of boxId){
             s.style.backgroundColor = "rgba(0, 0, 0, 0)";
             }
            
        }
    