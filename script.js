let num1;
let oper;
let num2;
function operate (num1,oper,num2){
    const cal={
        "+":(num1,num2)=>(+num1)+(+num2),
        "-":(num1,num2)=>(+num1)-(+num2),
        "*":(num1,num2)=>(+num1) * (+num2),
        "/":(num1,num2)=>(+num1)/(+num2),
    }
    return cal[oper](num1,num2);
}
val=operate(10,"/",11);
console.log(val);