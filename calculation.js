
function getInputValueBYId(id){
    const inputValue =document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}

function getTextFieldById(id){
    const textValue =document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}

document.getElementById('donate-now').addEventListener('click',function(event){
    event.preventDefault();
    const donate = getInputValueBYId('noakhali');
    const noakhaliBalace=getTextFieldById('noakhali-balace');
    const myBalance = getTextFieldById('my-balance');


    
   const newnoakhaliBalace=noakhaliBalace + donate;
  const  newmyBalance=myBalance-donate;

    

    document.getElementById('my-balance').innerText=newmyBalance;
    document.getElementById('noakhali-balace').innerText=newnoakhaliBalace;

})