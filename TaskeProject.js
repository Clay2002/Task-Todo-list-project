

function dark(){


    let title = document.getElementById("title");
    let darkColor= document.getElementById("darkmode");
    let dateColor = document.getElementById("date");
    let button = document.getElementById("darkmode-button");
    let list = document.getElementById("list");
    let container2 = document.getElementById("container-2");
    let container3 = document.getElementById("container-3");



    


  
    if (button.innerHTML === 'ON'){
       
       
        button.innerHTML = "OFF"

        title.style["color"] = "black";
        darkColor.style["color"] = "black";
        dateColor.style["color"] = "black";
        list.style["color"] = "black";
        container2.style["color"] = "black";
        container3.style["color"] = "black";

        title.style["background-color"] = "#e6eaee";
        darkColor.style ["background-color"] = "#e6eaee";
        dateColor.style ["background-color"] = "#e6eaee";
        list.style ["background-color"] = "#e6eaee";
        container2.style["background-color"] = "#e6eaee";
        container3.style["background-color"] = "#e6eaee";
       

    } else {button.innerHTML = "ON"

        title.style["color"] = "#B3B3B3";
        darkColor.style["color"] = "#B3B3B3";
        dateColor.style["color"] = "#B3B3B3";
        list.style ["color"] = "#B3B3B3";
        container2.style["color"] = "#B3B3B3";
        container3.style["color"] = "#B3B3B3";

        title.style["background-color"] = "#404040";
        darkColor.style ["background-color"] = "#404040";
        dateColor.style ["background-color"] = "#404040";
        list.style ["background-color"] = "#404040";
        container2.style  ["background-color"] = "#404040";
        container3.style  ["background-color"] = "#404040";
      

};

};




//displays the date month / day / year

var date = new Date();
var current_date = (date.getMonth()+1) + "-" 
+ date.getDate() + "-" + date.getFullYear(); 
document.getElementById("date").innerHTML = current_date;


    

////////////////////////


function getInputValue() {



    let inputValue = document.getElementById("textInput1").value;
    document.getElementById("output").innerHTML = inputValue;
    
};

function getInputValue2(){

    let inputValue2 = document.getElementById("textInput2").value;
    document.getElementById("output2").innerHTML = inputValue2;
}

function getInputValue3(){

    let inputValue3 = document.getElementById("textInput3").value;
    document.getElementById("output3").innerHTML = inputValue3;


}

function getInputValue4(){
    
    let inputValue4 = document.getElementById("textInput4").value;
    document.getElementById("output4").innerHTML = inputValue4;
   
}


function makeDel(){

    const element1 = document.getElementById("addButton1");
    element1.innerHTML = "Change";


    var button = document.createElement("button");
    button.innerHTML = "delete";
 


    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.id = 'mainButton'
   
document.getElementById('mainButton').onclick = function(){


    const mainButton = document.getElementById('mainButton');
    const output = document.getElementById('output');

    mainButton.remove();
    output.remove();

};

};
//button 2

function del2(){

    const element2 = document.getElementById("addButton2");
    element2.innerHTML = "Change";

    var button2 = document.createElement("button");
    button2.innerHTML = "delete";

    var body2 = document.getElementsByTagName("body")[0];
    body2.appendChild(button2);
    button2.id = 'mainButton2'

    document.getElementById('mainButton2').onclick = function(){


        const mainButton2= document.getElementById('mainButton2');
        const output2 = document.getElementById('output2');
    
        mainButton2.remove();
        output2.remove();
    
    };
    

};


//button 3
function del3(){


    const element3 = document.getElementById("addButton3");
    element3.innerHTML = "Change";

    var button3 = document.createElement("button");
    button3.innerHTML = "delete";

    var body3 = document.getElementsByTagName("body")[0];
    body3.appendChild(button3);
    button3.id = 'mainButton3'


    document.getElementById('mainButton3').onclick = function(){

        const mainButton3= document.getElementById('mainButton3');
        const output3 = document.getElementById('output3');
    
        mainButton3.remove();
        output3.remove();
    
    };
    
};


//button 4 
function del4(){


    const element4 = document.getElementById("addButton4");
    element4.innerHTML = "Change";

    var button4 = document.createElement("button");
    button4.innerHTML = "delete";

    var body4 = document.getElementsByTagName("body")[0];
    body4.appendChild(button4);
    button4.id = 'mainButton4'

    document.getElementById('mainButton4').onclick = function(){

        const mainButton4= document.getElementById('mainButton4');
        const output4 = document.getElementById('output4');
    
        mainButton4.remove();
        output4.remove();
    
    };
    
};


function checkbox(){






const checklist1 = document.getElementById("checklist-1")
const checkbox1 = document.getElementById("checkbox1")

checklist1.style.textDecoration = "line-through";



};

function checkbox2(){
const checklist2 = document.getElementById("checklist-2")
const checkbox2 = document.getElementById("checkbox2")

checklist2.style.textDecoration = "line-through";


};


function checkbox3(){
    const checklist3 = document.getElementById("checklist-3")
    const checkbox3 = document.getElementById("checkbox3")
    
    checklist3.style.textDecoration = "line-through";
    
    
    };
   
    function checkbox4(){


     
        const checklist4 = document.getElementById("checklist-4");
        const checkbox4 = document.getElementById("checkbox4");
        

        checklist4.style.textDecoration = "line-through";

  
    
    };









   
//local storage




