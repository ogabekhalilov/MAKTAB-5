let signBox = document.querySelector(".signInBox")
let Loading = document.querySelector(".Loading")
let login = document.getElementById("login")
let parol = document.getElementById("parol")
let logo = document.getElementById("h1")
let error = document.getElementById("error")
let soat = document.getElementById("h2")


const Register = () =>{
    let name = document.getElementById("name").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    
    localStorage.setItem("name",name);
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
}

let fullname = localStorage.getItem("name")
let usname = localStorage.getItem("username")
let pss = localStorage.getItem("password")
console.log(fullname,usname,pss )






const SignIN = () => {
    if (parol.value === pss && login.value === usname) {
        console.log("Parol va login to'g'ri!");
        error.style.display = "none";

        Loading.style.display = "block";
        setTimeout(() => {
            window.location = "./main.html";
        }, 5000)

    } else {
        error.style.display = "block"
    }

}


const Open = () => {
    signBox.style.top = "100px"
}

const Close = () => {
    signBox.style.top = "-400px"
}

function checkPercentage() {
    var inputValue = document.getElementById("inputNumber").value;
    var resultElement = document.getElementById("result");
   
    if (   inputValue >= 10 ) {
      
        resultElement.textContent = "$ 30.000 so'm shtraf ";
       
    } 
    
    if (   inputValue >= 20) {
      
      resultElement.textContent = "$ 60.000 so'm shtraf ";
     
  } 
  if (   inputValue >= 30) {
      
      resultElement.textContent = "$ 90.000 so'm shtraf";
     
  } 
  if (   inputValue >= 40) {
      
      resultElement.textContent = "$ 100.000 so'm shtraf";
     
  } 
    else {
       
     
    
    }
}
// setInterval(() => {
//     let date = new Date();
//     console.log(date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate());
//     console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
//     soat.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
// }, 1000)



   




