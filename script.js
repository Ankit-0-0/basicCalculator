let num1="";
let oper='';
let num2='';
let display='';

function operate(num1,oper,num2){
    const cal={
        "+":(num1,num2)=>(+num1)+(+num2),
        "-":(num1,num2)=>(+num1)-(+num2),
        "*":(num1,num2)=>(+num1) * (+num2),
        "/":(num1,num2)=>(+num1)/(+num2),
    }
    return `${cal[oper](num1,num2)}`;
}
function deletekey(){
    if (num2!='')
        num2=num2.slice(0,-1);
    else if(oper!='')
        oper=''
    else if(num1!='')
         num1=num1.slice(0,-1);
         
}

function operatorManager(currdiv){
if(num2!='')
             {
                if(oper=="/" && num2=="0")
                {
                    num1=''
                    num2=''
                    oper=''
                    document.querySelector("span").textContent="dumbbbbb";
                    return;
                }
                
                num1=(operate(num1,oper,num2));
              num2=''
              if(currdiv.textContent=="=")
                 {
                     oper='';
                  }
                }
         if(currdiv.textContent!="="){
              if(num1=='')
                 num1+=0;
            oper=currdiv.textContent;
}
}

function numberManager(currdiv){
    if(oper==''){
                num1+=currdiv.textContent;
            }
            else{
                num2+=currdiv.textContent;
            }
}

function displayManager(){
     display=num1+oper+num2;
     document.querySelector("span").textContent=display;
}

const keys=document.querySelector(".keypad");

keys.addEventListener("click",event=>{
        const currdiv=event.target;
     if(currdiv.classList.contains("num"))
        {
            numberManager(currdiv);
        }
    else   if(currdiv.classList.contains("oper"))
         {
          operatorManager(currdiv);
          }

   else if(currdiv.classList.contains("clear")){
       num1="";
       oper="";
       num2="";
     }

   else if(currdiv.classList.contains("delete"))
       deletekey();

        displayManager();
           
      })