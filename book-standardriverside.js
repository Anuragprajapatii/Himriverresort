const riverside_images =[
    "/images/edited/luxeryriverside-8.jpg",
    "/images/edited/standard-river-side.jpg",
    "/images/edited/standard-riveside-1.jpg",
    "/images/edited/luxeryriverside-3.jpg",
    "/images/edited/luxeryriverside-4.jpeg",
    "/images/edited/luxeryriverside-5.jpeg",
    "/images/edited/luxeryriverside-6.jpeg",
    
 ];
 
 const firstimage = 0;
 const lastimage = riverside_images.length-1;
 let currentimage=0;
 
 let rightbtn=document.querySelector(".right-btn");
 rightbtn.addEventListener('click',()=>{
        const imagetag=document.querySelector("#live-gallery-image");
        currentimage++;
        if(currentimage >= lastimage){
         currentimage=0;
        }
        imagetag.src= riverside_images[currentimage];
 });
 
 let leftbtn=document.querySelector(".left-btn");
 leftbtn.addEventListener('click',()=>{
        const imagetag=document.querySelector("#live-gallery-image");
        currentimage--;
        if(currentimage <= 0){
         currentimage=lastimage;
        }
        imagetag.src= riverside_images[currentimage];
 })

 function bookstandard(){
       var checkin=document.getElementById("checkin-1").value;
       var checkout=document.getElementById("checkout-1").value;
       var peoples=document.getElementById("peoples-1").value;
       var rooms=document.getElementById("rooms").value;
       // var decor=document.getElementById("decor");
       if(checkin,checkout==""){
              alert("Please Enter Checkin/Checkout Date")
    }
       else{var watsappurl="https://wa.me/919024860746?text="+
          "      Book Standard riverview"+"%0a"+
       "check in date:-"+checkin+"%0a"+
       "check out date:- "+checkout+"%0a"+
       "number of Adults:-"+peoples+"%0a"+
       "number of Rooms:-"+rooms;
   
       window.open(watsappurl,"_blank").focus();} }