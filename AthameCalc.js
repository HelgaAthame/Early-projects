
var currentResultWindow=document.getElementById('currentValue');

var arrayButtons=document.getElementsByClassName('button');

for (var index=0; index<arrayButtons.length; index++) {
 arrayButtons[index].addEventListener('click', onButtonClick);
}

function onButtonClick (eventObject) {

	var currentButton=eventObject.currentTarget;
  operation(currentButton);
}

var argument1='0';
var argument2=null;
var actionMark=null;

function operation(buttonCurrent) {
		if (buttonCurrent.className === 'buttonNumber button') {
			if (argument1 === '0') {
				if (actionMark === null){
					if (buttonCurrent.innerHTML==='.'){
						argument1='0.';
						currentResultWindow.innerHTML='0';
					}
					else{
						argument1 = buttonCurrent.innerHTML;
						currentResultWindow.innerHTML=argument1;
          }
        }
				else{
					if(argument2==='0'){
						if (buttonCurrent.innerHTML==='.') {
							argument2='0.';
							currentResultWindow.innerHTML=argument1+actionMark+'0';
						}
						else {
							argument2=buttonCurrent.innerHTML;
							currentResultWindow.innerHTML=argument1+actionMark+argument2;
          	}
          }
					else if (argument2===null){
						if(buttonCurrent.innerHTML==='.') {
							argument2='0.';
							currentResultWindow.innerHTML=argument1+actionMark+'0';
            }
						else {
							argument2=buttonCurrent.innerHTML;
							currentResultWindow.innerHTML=argument1+actionMark+argument2;
						}
					}
					else{
						if(buttonCurrent.innerHTML==='.'){
							if (argument2.includes('.')===true){
         	   }
							else{
								argument2=argument2+buttonCurrent.innerHTML;
							//currentResultWindow.innerHTML=argument1+actionMark+argument2;
           	 }
            }
						else {
							argument2=argument2+buttonCurrent.innerHTML;
							currentResultWindow.innerHTML=argument1+actionMark+argument2;
            }
					}
				}
			}
			else if (argument2=== null){
				if (actionMark===null) {
					if (buttonCurrent.innerHTML==='.'){
						if (argument1.includes('.')===true){
						}
						else{
							argument1 = argument1 + buttonCurrent.innerHTML;
							//currentResultWindow.innerHTML=argument1;
          	}    
          }  
					else {
						argument1=argument1+buttonCurrent.innerHTML;
						currentResultWindow.innerHTML=argument1;
					}
				}
      
				else {
					if (buttonCurrent.innerHTML==='.'){
						argument2= '0.';
						currentResultWindow.innerHTML=argument1+actionMark+'0.';
					}
					else{
						argument2 = buttonCurrent.innerHTML;	
						currentResultWindow.innerHTML=argument1+actionMark+argument2;
          }
      	}	
			}
			else if(argument2==='0'){
				if (buttonCurrent.innerHTML==='.'){
					argument2='0.';
				}
				else{
					argument2=buttonCurrent.innerHTML;
        }
				currentResultWindow.innerHTML=argument1+actionMark+argument2;
        
			}
			else {
				if (buttonCurrent.innerHTML==='.'){
					argument2=argument2+buttonCurrent.innerHTML;
				}
				else{
					argument2=argument2+buttonCurrent.innerHTML;
					currentResultWindow.innerHTML=argument1+actionMark+argument2;
        }
			}
		}
		
		if (buttonCurrent.className==='buttonOperation button') {
			
			if (buttonCurrent.innerHTML=== '+') {
				makeAction ('+');
      }

			else if(buttonCurrent.id=== 'minus'){
				makeAction ('-');
			}

			else if(buttonCurrent.id=== 'multiplyButton'){
				makeAction ('*');
			}
			else if(buttonCurrent.id ==='devideButton'){
				makeAction ('/');
			}
			else if(buttonCurrent.innerHTML==='='){
				if (argument2===null){
					if (argument1==='0'){
						currentResultWindow.innerHTML='0';
       		}
					else {
						currentResultWindow.innerHTML=argument1;
						actionMark=null;
          }
     		}
				else if (argument2==='0'){
					if (actionMark==='/'){
						window.alert('it cannot be devided by zero');
						argument2=null;
						currentResultWindow.innerHTML=argument1+actionMark;
					}
					else {
						updatePastOperations();
						currentResultWindow.innerHTML=result();
						argument1=currentResultWindow.innerHTML;
						argument2=null;
						actionMark=null;
					}
				}
				else {
					updatePastOperations();
					currentResultWindow.innerHTML=result();
					argument1=currentResultWindow.innerHTML;
					argument2=null;
					actionMark=null;
				}
			}

			else if (buttonCurrent.innerHTML==='c'){
				if (argument1==='0'){
					if (argument2===null){
					}
					else{
						updatePastOperations();
						currentResultWindow.innerHTML=('0');
						argument2=null;
						actionMark=null;
          }
				}
				else{
					updatePastOperations();
					currentResultWindow.innerHTML=('0');
					argument1='0';
					argument2=null;
					actionMark=null;
       	}
      }

			else if(buttonCurrent.innerHTML==='%'){
				if (actionMark===null) {
					argument1=argument1/100;
					currentResultWindow.innerHTML=argument1;
					updatePastOperations();
				}
				else if (argument2===null){
				}
				else {
					argument2=argument1*argument2/100;
					currentResultWindow.innerHTML=argument1+actionMark+argument2;
				}
			}

			else if(buttonCurrent.id==='sqrt'){
				if (argument1>=0){
					if (actionMark===null){
						argument1=Math.sqrt(argument1);
						updatePastOperations();
						currentResultWindow.innerHTML=argument1;
          }
					else {
					}
				}
				else {
				window.alert('you cannot extract the square root of a negative number');				}
				}

			else if(buttonCurrent.id==='backSpace'){
				if (currentResultWindow.innerHTML==='0'){
				}
				if (argument1==='0'){
					if (actionMark===null){
					}
					else if (argument2===null){
						var tempResult=currentResultWindow.innerHTML;
						currentResultWindow.innerHTML=tempResult.slice(0, -1);
						actionMark=null;
					}
					else {
						var termResult=currentResultWindow.innerHTML;
						currentResultWindow.innerHTML=termResult.slice(0, -1);
						argument2= argument2.slice(0, -1);
					}
					
				}
				else if(actionMark===null){
					if (argument1.length<2) {
						argument1='0';
						currentResultWindow.innerHTML='0';
					}
					else {
						var testResult=currentResultWindow.innerHTML;
						currentResultWindow.innerHTML=testResult.slice(0,-1);
						//argument1= argument1.slice(0, -1);
            argument1=currentResultWindow.innerHTML;
					}
				}
				else if (argument2===null){
					var textResult=currentResultWindow.innerHTML;
					currentResultWindow.innerHTML=textResult.slice(0,-1);
					actionMark=null;
				}
				else {
					if (argument2.length<2){
						argument2=null;
						currentResultWindow.innerHTML=argument1+actionMark;
					}
					else{
						var teamResult=currentResultWindow.innerHTML;
						currentResultWindow.innerHTML=teamResult.slice(0,-1);
						argument2=argument2.slice(0,-1);
					}
				}
			}
    }
//console.log('privet'+argument1+actionMark+argument2);
}

function makeAction (markPMMD) {
				if (argument2===null){
					if (argument1==='0'){
						argument1='0';
						actionMark=markPMMD;
						currentResultWindow.innerHTML=argument1+markPMMD;
					}
					else {
						actionMark=markPMMD;
						currentResultWindow.innerHTML=argument1+actionMark;
          }
        }
				else {
					updatePastOperations();
					currentResultWindow.innerHTML=result()+markPMMD;
					argument1=result();
					actionMark=markPMMD;
					argument2=null;
				}


}

function result(){
	var resultation;
	if (actionMark==='+') {
		resultation=Number(argument1)+Number(argument2);
  }
	else if (actionMark==='-') {
		resultation=Number(argument1)-Number(argument2);
	}
	else if (actionMark==='*') {
		resultation=Number(argument1)*Number(argument2);
	}
	else if (actionMark==='/') {
		if (argument2==='0'){
			//window.alert('it cannot be devided by zero');
			argument2=null;
			currentResultWindow.innerHTML=argument1+actionMark;
			resultation=argument1;
		}
		else{
			resultation=Number(argument1)/Number(argument2);
    }
	}
	return resultation;
}

function updatePastOperations(){
	var operationRaws=document.getElementsByClassName('lastOperationsRaw');
	for (var ind=0; ind<4; ind++){
		operationRaws[ind].innerHTML=operationRaws[ind+1].innerHTML;
	}
	
	operationRaws[4].innerHTML=currentResultWindow.innerHTML;
}

