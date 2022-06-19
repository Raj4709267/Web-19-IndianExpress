let nusers= JSON.parse(localStorage.getItem("users")) || 0

let x= document.querySelector("#form");

x.addEventListener("submit",login);
function login(event){
  event.preventDefault();
  
  if(nusers == 0){
    location.replace("/Web-19-IndianExpress/sign up/sign_up.html")
  }else{
    if(form.email.value != nusers[0].email){
      alert("Email is invalid.")
    }else if(form.pword.value != nusers[0].password){
      alert("Password is invalid.")
    }else{
      location.replace("/Web-19-IndianExpress/premium/premium.html")
    }
  }
  
}