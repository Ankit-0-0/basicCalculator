let num1="";
let oper='';
let num2='';
let display='';
let justcalculated=false;

function operate(num1,oper,num2){
    const cal={
        "+":(num1,num2)=>(+num1)+(+num2),
        "-":(num1,num2)=>(+num1)-(+num2),
        "*":(num1,num2)=>(+num1) * (+num2),
        "/":(num1,num2)=>(+num1)/(+num2),
    }
    return  (+cal[oper](num1, num2).toFixed(10)).toString();
}
function deletekey(){
    justcalculated=false;
    if (num2!='')
        num2=num2.slice(0,-1);
    else if(oper!='')
        oper=''
    else if(num1!='')
         num1=num1.slice(0,-1);

    if(display.at(-1)=='.')
        document.querySelector(".dot").disabled=false;

         
}

function operatorManager(currdiv){
    document.querySelector(".dot").disabled=false; 
  if(num2!='')
             {
                if(oper=="/" && (+num2)==0)
                {
                    num1=''
                    num2=''
                    oper=''
                    document.querySelector("span").textContent="dumbbbbb";
                    return "1";
                }
                
                num1=(operate(num1,oper,num2));
              num2=''
              if(currdiv.textContent=="=")
                 {
                     oper='';
                     justcalculated=true;
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
             if(justcalculated==true){
                num1=currdiv.textContent;
                justcalculated=false;
             }
            else num1+=currdiv.textContent;
            }
           
            else{
                num2+=currdiv.textContent;
            }
         
}

function displayManager(){
     display=num1+oper+num2;
     document.querySelector("span").textContent=display;

     if(display.at(-1)==oper||display=='')
        document.querySelector(".dot").disabled=false;
    
}

function dotManager(currdiv){
    if(oper==''){
        if (justcalculated == true||num1=='') {
            num1 = '0.';
            justcalculated = false;
        }
        else{
             num1+=".";
        }
    }
       
    else if(num2=='')
          num2='0.'
    else{
        num2+='.';
    }
currdiv.disabled="true";
}



const keys=document.querySelector(".keypad");

keys.addEventListener("click",event=>{

        const currdiv=event.target;
        let errortracer=0;
        
     if(currdiv.classList.contains("num"))
        {
            numberManager(currdiv);
        }
    else   if(currdiv.classList.contains("oper"))
         {
        
         errortracer = operatorManager(currdiv);
          }

   else if(currdiv.classList.contains("clear")){
       num1="";
       oper="";
       num2="";
       
     }

   else if(currdiv.classList.contains("delete"))
       deletekey();
    else if(currdiv.classList.contains('dot'))
        dotManager(currdiv);
        
     if(errortracer!=1)
        displayManager();
           
      })