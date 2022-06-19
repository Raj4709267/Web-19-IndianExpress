let arr = [
    "Indian football calendar is adjusted according to IPL, this needs to stop: stimac ",
    "How Jan Železný’s magical run-up made Neeraj Chopra believe that he can",
    "With two captains (Mithali and I), sometimes things were not easy because we both had different ideas: Harmanpreet",
  ];
let arr1 = [
    "https://images.indianexpress.com/2022/06/Stimac-2.jpg?resize=450,250",
    "https://images.indianexpress.com/2022/04/Chopra.jpg?resize=450,250",
    "https://images.indianexpress.com/2022/06/Mithali-Harman.jpg?resize=450,250",
  ];
  
  let x= document.querySelector('#big>div:nth-child(1)>img');
  let y= document.querySelector('#big>div:nth-child(1)>h2');
  x.src=arr1[0];
  y.innerText=arr[0];

let increment = document.querySelector("#increase");
  let pagenum = 0;
  increment.addEventListener("click", function () {
    if (pagenum == arr.length - 1) {
      pagenum = 0;
      document.querySelector('#button>p:nth-child('+(pagenum+1)+')').style.backgroundColor= "red" ;
      document.querySelector('#button>p:nth-child('+(pagenum+2)+')').style.backgroundColor= "white" ;
      document.querySelector('#button>p:nth-child('+(pagenum+3)+')').style.backgroundColor= "white" ;
    } else {
      pagenum++;
      document.querySelector('#button>p:nth-child('+(pagenum)+')').style.backgroundColor= "white" ;
      document.querySelector('#button>p:nth-child('+(pagenum+1)+')').style.backgroundColor= "red" ;
    }
    x.src=arr1[pagenum];
    y.innerText = arr[pagenum];
    
  });
  setInterval(function () {increment.click();},3000);
  
  // ***************************************
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


// *************************************

let arrr=["Sharad Pawar as a President Condidate? Amid oppn chorus,the Unathused Stalwart","Ezplained The Agnipath Scheme For a Recuiting Solider-- What is it how will it work?","Congress protest: Police Attacked kc Venugopal; broke Chidamram's  rib alleges Surjewala"];
    let cdata=document.querySelector("#content");
    let incremen=document.querySelector("#increase");
    incremen.addEventListener("click",increase);
    let decrement=document.querySelector("#decrease");
    decrement.addEventListener("click",decrease); 
function increase(){
    for(let i=0;i<arrr.length;i++){
        if(i==arrr.length-1){
            cdata.innerText=arrr[i]; 
        }else{
            cdata.innerText=arrr[i];  
        }
}
 }
 function decrease(){
   
    for(let i=arrr.length-1;i>=0;i--){
        // console.log(arr[i]);
        if(i==0){
            cdata.innerText=arrr[arrr.length-1]; 
        }
        if(i!=0){
            cdata.innerText=arrr[i]; 
            console.log(arrr[i]); 
        }
}
 }