let display=document.getElementById('display');

function append(input){
    display.value=display.value+input;
}
function cleardisplay(){
    display.value="";
}
function deletelastelement(){
    DEL=(display.value)
    display.value=DEL.slice(0,-1);
}
function calculate()
{
    try{
        let res=eval(display.value);
        display.value=res;
    
    }

    catch{
        display.value="error";
    }
    }
