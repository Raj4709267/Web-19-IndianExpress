let arr = [
    "UPMSP UP Board Class 10th, 12th result 2022: Date, Time and Websites announced",
    "Maharashtra SSC Class 10th results declared; pass percentage comes down to ‘regular range’",
    "WBJEE 2022 result to be released today: Here’s how to check marks",
  ];
let arr1 = [
    "https://images.indianexpress.com/2022/05/BSEB-results.jpg?resize=450,250",
    "https://images.indianexpress.com/2022/06/ch1160699-1-1.jpg?resize=450,250",
    "https://images.indianexpress.com/2022/05/WhatsApp-Image-2022-05-16-at-5.49.02-PM.jpg?resize=450,250",
  ];

  let arrr=["Sharad Pawar as a President Condidate? Amid oppn chorus,the Unathused Stalwart","Ezplained The Agnipath Scheme For a Recuiting Solider-- What is it how will it work?","Congress protest: Police Attacked kc Venugopal; broke Chidamram's  rib alleges Surjewala"];
  
  let x= document.querySelector('#big>div:nth-child(1)>img');
  let y= document.querySelector('#big>div:nth-child(1)>h3');
  x.src=arr1[0];
  y.innerText=arr[0];

  let cdata=document.querySelector("#content");

let increment = document.querySelector(".increase");
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
    cdata.innerText=arrr[pagenum];
    x.src=arr1[pagenum];
    y.innerText = arr[pagenum];
    
  });
  setInterval(function () {increment.click();},1000);

  // ***************************************
  // search css
  function openSearch() {
    event.preventDefault()
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


// search function
document.querySelector("#form").addEventListener("submit",searching);

function searching(){
    event.preventDefault();
    let text=document.querySelector("#form>input").value
    document.getElementById("myOverlay").style.display = "none";
    let i="https://"
    let link=`${i}indianexpress.com/?s=${text}`
    console.log(link)
    
    
         window.location.href=link        
}

//*********** */ date(works)***************************
let date=new Date();
let bob=date.toString().split(" ")

document.querySelector("#date").innerHTML=bob[0]+", "+bob[1]+" "+bob[2]+", "+bob[3]
