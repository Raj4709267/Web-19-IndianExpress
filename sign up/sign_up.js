let x= document.querySelector("#form");

x.addEventListener("submit",reg);
let arr=[];

function reg(event){
  event.preventDefault();

  if(form.pword.value != form.cpword.value){
    alert("Password and Confirm Password doesn't match.")
  }else{
    let obj={
      email: form.email.value,
      password: form.pword.value,
    }
    arr.push(obj);
    localStorage.setItem("users",JSON.stringify(arr));
    location.replace("../sign in/sign_in.html")
  }
}