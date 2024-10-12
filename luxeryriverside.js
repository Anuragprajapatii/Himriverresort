let h1=document.querySelector(".text-on-image");
let hamberger=document.querySelector(".hamberger-menu");
hamberger='true';
function clickham(){
 
    if(hamberger==='true'){
        let navbar=document.querySelector(".nav-bar");
            navbar.classList.add('nav-bar-responsive');
            navbar.classList.remove('nav-bar');
            hamberger="false";
        }
    else{
        let navbar2=document.querySelector(".nav-bar-responsive")
            navbar2.classList.remove('nav-bar-responsive');
            navbar2.classList.add('nav-bar');
            hamberger="true";
        }}




const luxeryriverside= [
   {
    img:"/images/edited/luxeryriverside-1.jpeg",
   },
   {
    img:"/images/edited/luxeryriverside-7.jpg",
   },  {
    img:"/images/edited/luxeryriverside-3.jpg",
   },  {
    img:"/images/edited/luxeryriverside-6.jpeg",
   },  {
    img:"/images/edited/luxeryriverside-5.jpeg",
   },  {
    img:"/images/edited/luxeryriverside-4.jpeg",
   },  {
    img:"/images/edited/luxeryriverside-2.jpg",
   },  {
    img:"/images/edited/luxeryriverside-8.jpg",
   },  {
    img:"/images/edited/luxeryriverside-9.jpg",
   },  {
    img:"/images/edited/luxeryriverside-10.jpg",
   } 
];

// const galleryofvideos = [
//     {
//         vdo:"/images/edited/deluxriverside-video-1.mp4",
//     },
//     {
//         vdo:"/images/edited/deluxriverside-video-2.mp4",
//     },
//     {
//         vdo:"/images/edited/himriverresort-video-3.mp4",
//     },
//     {
//        vdo:"/images/edited/himriverresort-video-2.mp4",
//     },
//     {
//         vdo:"/images/edited/deluxriverside-video-1.mp4",
//     },
//     {
//         vdo:"/images/edited/deluxriverside-video-2.mp4",
//     },
//     {
//         vdo:"/images/edited/himriverresort-video-3.mp4",
//     },
//     {
//        vdo:"/images/edited/himriverresort-video-2.mp4",
//     },
// ];

let imagesHTML='';

luxeryriverside.forEach((product) => {
    imagesHTML +=`
     <div class="gallery-images " >
                <img src="${product.img}" alt=""   onclick= "inlargeimage(this.src);">
            </div>`
            document.querySelector(".image-dimention")
            .innerHTML = imagesHTML;            
});

// let videosHTML='';

// galleryofvideos.forEach((main)=>{
//     videosHTML +=`
//     <div class="video-gallery">
//                 <video controls src="${main.vdo}" autoplay loop muted onclick="pausevideo(this.src);" ">
                
//                 </video>
//             </div>
//     `
//     document.querySelector(".video")
//     .innerHTML = videosHTML; 
// });


function inlargeimage(pic){
       let fullimage=document.querySelector(".inlargeimage");
       let fullimg=document.getElementById("fullimg");
       let cutbtn=document.querySelector(".fullscreencut");
       fullimage.style.display="flex";
       cutbtn.style.display="flex"
       fullimg.src=pic;
       
}
function fullimagecut(){
    let fullimage=document.querySelector(".inlargeimage");
    let fullimg=document.getElementById("fullimg");
    let cutbtn=document.querySelector(".fullscreencut");
    fullimage.style.display="none";
    cutbtn.style.display="none"

}

let scrollcontainer = document.querySelector(".video");

scrollcontainer.addEventListener('wheel',(eve)=>{
   eve.preventDefault();
   scrollcontainer.style.scrollBehavior="smooth";
   scrollcontainer.scrollLeft +=eve.deltaY;
});

function pausevideo(name){
//   let pause=document.querySelector("video");
  console.log(name);
  
}

function FixedWastsappbtn(){
    window.open("https://wa.me/918630395701");
}