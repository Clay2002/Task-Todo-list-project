


function dark(){


    let title = document.getElementById("title");
    let darkColor= document.getElementById("darkmode");
    let dateColor = document.getElementById("date");
    let button = document.getElementById("darkmode-button");

  
    if (button.innerHTML === 'ON'){
       
       
        button.innerHTML = "OFF"

        title.style["color"] = "black";
        darkColor.style["color"] = "black";
        dateColor.style["color"] = "black";

        title.style["background-color"] = "#e6eaee";
        darkColor.style ["background-color"] = "#e6eaee";
        dateColor.style ["background-color"] = "#e6eaee";


    } else {button.innerHTML = "ON"

        title.style["color"] = "#B3B3B3";
        darkColor.style["color"] = "#B3B3B3";
        dateColor.style["color"] = "#B3B3B3";

        title.style["background-color"] = "#404040";
        darkColor.style ["background-color"] = "#404040";
        dateColor.style ["background-color"] = "#404040";
};


};


function add(){

    
    let x = document.createElement("DIV");
    x.setAttribute("type", "text");
    
    document.body.appendChild(x);
    
   
}

//displays the date month / day / year

var date = new Date();
var current_date = (date.getMonth()+1) + "-" 
+ date.getDate() + "-" + date.getFullYear(); 
document.getElementById("date").innerHTML = current_date;


    

////////////////////////





function getInputValue() {


    let inputValue = document.getElementById("textInput1").value;
    document.getElementById("output").innerHTML = inputValue;




    var button = document.createElement("button");
    button.innerHTML = "-";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);



}

