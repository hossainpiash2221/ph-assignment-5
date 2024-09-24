
function blog(){
    window.location.href="blog.html";
}

function changeColor(){
    const button = document.getElementById("donation");
    button.style.backgroundColor="#B4F461";
    const button2 = document.getElementById("history");
    button2.style.backgroundColor="white";


    document.getElementById('main').classList.remove('hidden');

}

function changeColor2(){
    const button = document.getElementById("history");
    button.style.backgroundColor="#B4F461";
    const button2 = document.getElementById("donation");
    button2.style.backgroundColor="white";

    document.getElementById('main').classList.add('hidden');


}

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

    const currentDate = new Date().toLocaleDateString();
    const p = document.createElement('p');
    p.innerText= `${donate} is donated for ` + document.getElementById('flood').innerText +  + ` Date: ${currentDate}`;

    p.classList.add('border-2')
    p.classList.add('p-5')
    document.getElementById('transaction').appendChild(p);

})


document.getElementById('donate-money').addEventListener('click',function(event){
    event.preventDefault();
    const quota = getInputValueBYId('quota');
    const quotaBalace=getTextFieldById('quota-balace');
    const myBalance = getTextFieldById('my-balance');


    
   const newquotaBalace=quotaBalace + quota;
  const  newmyBalance=myBalance-quota;

    

    document.getElementById('my-balance').innerText=newmyBalance;
    document.getElementById('quota-balace').innerText=newquotaBalace;
    const br = document.createElement('br');
    const currentDate = new Date().toLocaleDateString();
    const p = document.createElement('p');
    p.innerText= `${quota} is donated for ` + document.getElementById('quota-title').innerText  + ` Date: ${currentDate}`;

    p.classList.add('border-2')
    p.classList.add('p-5')
    document.getElementById('transaction').appendChild(p);
    

})