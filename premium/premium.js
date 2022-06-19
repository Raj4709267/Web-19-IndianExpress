// search css
function openSearch(event) {
  event.preventDefault()
document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
document.getElementById("myOverlay").style.display = "none";
}

// search function
document.querySelector("#form").addEventListener("submit",searching);

function searching(event){
    event.preventDefault();
    let text=document.querySelector("#form>input").value
    document.getElementById("myOverlay").style.display = "none";
    let i="https://"
    let link=`${i}indianexpress.com/?s=${text}`
    console.log(link)
    
    
         window.location.href=link        
}

// date
let date=new Date();
let bob=date.toString().split(" ")

document.querySelector("#date").innerHTML=bob[0]+", "+bob[1]+" "+bob[2]+", "+bob[3]


// ******************************************

let arr=["Sharad Pawar as a President Condidate? Amid oppn chorus,the Unathused Stalwart","Ezplained The Agnipath Scheme For a Recuiting Solider-- What is it how will it work?","Congress protest: Police Attacked kc Venugopal; broke Chidamram's  rib alleges Surjewala"];

let cdata=document.querySelector("#content");

let increment = document.querySelector("#increase");
  let pagenum = 0;
  increment.addEventListener("click", function () {

    if (pagenum == arr.length - 1) {
        pagenum = 0;
      } else {
        pagenum++;
      }
    cdata.innerText=arr[pagenum];
  });
  setInterval(function () {increment.click();},1000);