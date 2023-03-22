var container =document.createElement("div");
//container.setAttribute("class","container");
container.className="container";
var calculator =document.createElement("div");
calculator.className="calculator";


container.append(calculator);

function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    ele.setAttribute(attrname3,attrvalue3);
    return ele;
}
var input=inputs("input","type","text","id","output-screen","placeholder","0","class","main");

//calculator.append(input);

//document.body.append(container);

function buttons(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele2=document.createElement(tagname);
    ele2.setAttribute(attrname,attrvalue);
    ele2.setAttribute(attrname1,attrvalue1);
    ele2.setAttribute(attrname2,attrvalue2);
    ele2.setAttribute(attrname3,attrvalue3);
    return ele2;
}

var button=buttons("input","type","button","value","del","onclick","del()","class","main1");
var button1=buttons("input","type","button","value","Clear","onclick","Clear()","class","main1");
var button2=buttons("input","type","button","value","%","onclick","display('%')","class","main1");
var button3=buttons("input","type","button","value","/","onclick","display('/')","class","main1");
var button4=buttons("input","type","button","value","7","onclick","display('7')","class","main1");
var button5=buttons("input","type","button","value","8","onclick","display('8')","class","main1");
var button6=buttons("input","type","button","value","9","onclick","display('9')","class","main1");
var button7=buttons("input","type","button","value","*","onclick","display('*')","class","main1");
var button8=buttons("input","type","button","value","4","onclick","display('4')","class","main1");
var button9=buttons("input","type","button","value","5","onclick","display('5')","class","main1");
var button10=buttons("input","type","button","value","6","onclick","display('6')","class","main1");
var button11=buttons("input","type","button","value","-","onclick","display('-')","class","main1");
var button12=buttons("input","type","button","value","1","onclick","display('1')","class","main1");
var button13=buttons("input","type","button","value","2","onclick","display('2')","class","main1");
var button14=buttons("input","type","button","value","3","onclick","display('3')","class","main1");
var button15=buttons("input","type","button","value","+","onclick","display('+')","class","main1");
var button16=buttons("input","type","button","value",".","onclick","display('.')","class","main1");
var button17=buttons("input","type","button","value","0","onclick","display('0')","class","main1");
var button18=buttons("input","type","button","value","=","onclick","calculate('=')","class","main1");




 //document.body.append(button,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,
   // button12,button13,button14,button15,button16,button17,button18 );
    
    
    
    calculator.append(input,button,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,
         button12,button13,button14,button15,button16,button17,button18);

    document.body.append(container);

let outputscreen=document.getElementById("output-screen");
function display(num){
    outputscreen.value +=num;
}
function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("Invaild Input")
    }
}
function Clear(){
    outputscreen.value = "";
}
function del(){
    outputscreen.value =outputscreen.value.slice(0,-1);
} 