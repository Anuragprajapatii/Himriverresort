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

        function FixedCallbtn(){
            window.open("rel:8630395701");
        }



const mudhouse=[
    {
     img:"https://lh3.googleusercontent.com/p/AF1QipOFkN8XgZL0btB03b1_BxzAzyhfl_rprdTCoxc=s0",
    },
    {
        img:"https://lh3.googleusercontent.com/p/AF1QipP2C8ClvEFYwokvtkOjx00pm_v3MKdzEZgaKrM=s0",
       },
       {
        img:"https://lh5.googleusercontent.com/p/AF1QipNIepJ4G-xaJoKoKWp7XH3B2Zr8BrhzfQfBBq8=w253-h189-k-no",
       },{
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/b8/8e/c6/him.jpg?w=1200&h=-1&s=1",
       },{
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/98/a6/f7/caption.jpg?w=1100&h=-1&s=1",
       },{
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/98/a6/fa/caption.jpg?w=1100&h=-1&s=1",
       },{
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/98/a6/91/caption.jpg?w=900&h=-1&s=1",
       },{
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/75/74/dc/him-river-resort.jpg?w=1200&h=-1&s=1",
       },{
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/02/d8/9c/him-river-resort.jpg?w=1200&h=-1&s=1",
       },{
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/d5/b2/him-river-resort.jpg?w=1200&h=-1&s=1",
       },{
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/8c/07/5b/him-river-resort.jpg?w=1200&h=-1&s=1",
       },{
        img:"",
       },{
        img:"",
       },{
        img:"",
       },{
        img:"",
       },

];

let mudhouseHTML='';

mudhouse.forEach((product) => {
    mudhouseHTML +=`
     <div class="gallery-images " >
                <img src="${product.img}" alt=""   onclick= "inlargeimage(this.src);">
            </div>`
            document.querySelector(".gallery")
            .innerHTML = mudhouseHTML;            
});




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



