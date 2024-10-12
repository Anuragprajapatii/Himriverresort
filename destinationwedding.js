const wedding = [
    {
        img:"/images/edited/wedding19.jpg",
    },
     {
        img:"/images/edited/wedding3.jpeg",
    },   {
        img:"/images/edited/wedding14.jpg",
    }, {
        img:"/images/edited/wedding9.jpeg",
    }, {
        img:"/images/edited/wedding16.jpg",
    }, {
        img:"/images/edited/wedding11.jpeg",
    },  {
        img:"/images/edited/wedding8.jpeg",
    }, {
        img:"/images/edited/wedding15.jpg",
    },  {
        img:"/images/edited/wedding20.jpg",
    }, {
        img:"/images/edited/wedding23.jpg",
    },  ];

let weddingHTML='';

wedding.forEach((image) => {
    weddingHTML +=`
     <div class="wedding-gallery-images" >
                <img src="${image.img}" alt=""  onclick= "inlargeimage(this.src);">
            </div>
    `
            document.querySelector(".wedding-gallery")
            .innerHTML = weddingHTML;            
});
function inlargeimage(pic){
    let fullimage=document.querySelector(".wedding-inlargeimage");
    let fullimg=document.getElementById("fullimg");
    let cutbtn=document.querySelector(".fullscreencut");
    fullimage.style.display="flex";
    cutbtn.style.display="flex"
    fullimg.src=pic;
    
}
function fullimagecut(){
 let fullimage=document.querySelector(".wedding-inlargeimage");
 let fullimg=document.getElementById("fullimg");
 let cutbtn=document.querySelector(".fullscreencut");
 fullimage.style.display="none";
 cutbtn.style.display="none"

}

let formpopup=document.querySelector(".formhouse")
let background=document.querySelector(".wedding-gallery")
window.setTimeout(()=>{
    formpopup.style.display="flex";
    // background.style.opacity="0.3"
    formpopup.style.position="fixed";
    formpopup.style.opacity="1"  
},4000);

function cuttheform(){
    let cuttheform=document.querySelector(".formhouse")
    cuttheform.style.display="none";
    background.style.opacity="1";
}

let bookbutton=document.querySelector(".show-form")
bookbutton.addEventListener('click',()=>{
    formpopup.style.display="flex";
    // background.style.opacity="0.3"
    formpopup.style.position="fixed";
    formpopup.style.opacity="1"
})

let loadingimg=document.querySelector(".loading");
setTimeout(() => {
    loadingimg.style.display="none";
    
},1500 );


function weddingform(){
    let name=document.querySelector(".name").value;
    var number=document.querySelector(".phone-number").value;
    if(name,number == ""){
       alert("fill the given details");
       return 0;
    }
    var email=document.querySelector(".email").value;
    var date=document.querySelector(".date").value;
    var time=document.querySelector(".time").value;
    var bridename=document.querySelector(".bride-name").value;
    var groomname=document.querySelector(".groom-name").value;
    var peoples=document.querySelector(".peoples").value;

    var watsappurl="https://wa.me/919024860746?text="+
       "       Wedding Booking"+"%0a"+
       "name of customer:- "+name+"%0a"+
       "mobile number:- "+number+"%0a"+
       "Email:- "+email+"%0a"+
       "Date:- "+date+"%0a"+
       "time:- "+time+"%0a"+
       "Bride's Name:- "+bridename+"%0a"+
       "Groom's Name:- "+groomname+"%0a"+
    "number of people:-"+peoples;
    

    window.open(watsappurl,"_blank").focus();}