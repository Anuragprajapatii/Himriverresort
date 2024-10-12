let hamberger=document.querySelector("#hamberger");
let value=document.querySelector(".nav-onscroll");
value="true";


function hambergerclick()
           
{      
      let navbar=document.querySelector(".nav-onscroll");
      
      let bars=document.querySelector(".fa-bars");
      let x=document.querySelector(".fa-x"); 
      


   if(value==='false') {
    x.classList.add("fa-bars");
    x.classList.remove("fa-x");
    navbar.classList.add("nav-bar");
    navbar.classList.remove("nav-bar-responsive");
    navbar.style.height="46px";
         return value='true';
     }
 
   else { 
  
    bars.classList.remove("fa-bars");
       bars.classList.add("fa-x");
       navbar.classList.add("nav-bar-responsive");
       navbar.classList.remove("nav-bar"); 
       navbar.style.height="33rem";
       return value='false';
    }
  };

  let navcallbtn=document.querySelector(".nav-call");
navcallbtn.addEventListener('click',()=>{
    window.open("tel:919024860746")
})

let logoforhome= document.getElementById('image-logo')
logoforhome.addEventListener('click',()=>{
  window.open("https://himriverrishikesh.com/");
})

