let displayValue = 0;

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){

    //EVENT LISTENER

    btn.addEventListener("click", function (event){

        const classes = event.currentTarget.classList;

        if(classes.contains("increase")){
            displayValue ++;
            document.getElementById("display-value").textContent = displayValue;
        }else if(classes.contains("decrease")){
            displayValue --;
            document.getElementById("display-value").textContent = displayValue;

        }else{
            //RESET BUTTON
            displayValue = 0;
            document.getElementById("display-value").textContent = displayValue;
        }

        //SPECIAL COLORS FOR DISPLAY VALUES

        if(displayValue>0){
            document.getElementsByTagName("h1")[0].style.color = "white";
        }
        if(displayValue<0){
            document.getElementById("display-value").style.color = "white";
        }
        if(displayValue==0){
            document.getElementsByTagName("h1")[0].style.color = "black";
        }        

    });

});
