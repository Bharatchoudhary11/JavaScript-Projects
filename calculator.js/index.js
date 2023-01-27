let num1= 5
let num2 =10
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

let sumEl=document.getElementById("sum-el")

function Add(){
    let result =num1+num2
    sumEl.textContent="Sum:"+result
}
function Subtract(){
    let result =num1-num2
    sumEl.textContent="Sum:"+result
}
function Multiply(){
    let result =num1*num2
    sumEl.textContent="Sum:"+result
}
function Divide(){
    let result =num2/num1
    sumEl.textContent="Sum:"+result
}
