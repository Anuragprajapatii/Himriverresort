// this is the hamberger option for the responsive website 

      
// let navcallbtn=document.querySelector(".nav-call");
// navcallbtn.addEventListener('click',()=>{
//     window.open("ref:919024860746")
// })
    

// this is the enquery form which is receved by the owner 
    function watsapp(){
       
         let name=document.getElementById("name").value;
         var number=document.getElementById("number").value;
         if(name,number == ""){
            alert("fill the given details");
            return 0;
         }
         var peoples=document.getElementById("peoples").value;
         var checkin=document.getElementById("checkin").value;
         var checkout=document.getElementById("checkout").value;
     
        

      
            var watsappurl="https://wa.me/919024860746?text="+"name of customer:- "+name+"%0a"+
         "mobile number:- "+number+
         "%0a"+"number of people:-"+peoples+"%0a"
         +"check in date:- "+checkin+"%0a"+
         "check out date:- "+checkout;

         window.open(watsappurl,"_blank").focus();
        

       
    }
    //this is for not the empty form 
        


//   thisis the call button and watsapp chat buttons 
    function FixedWastsappbtn(){
        window.open("https://wa.me/919024860746");
    }
    function FixedCallbtn(){
        window.open("tel:9024860746");
    }

    // this is the gallery of main image 

    const mainpageofimages =[
        {
            img:"/images/edited/Screenshot_2024-03-02-20-35-04-82_a23b203fd3aafc6dcb84e438dda678b6.jpg",
        }, 
        {
            img:"/images/edited/wedding14.jpg",
        },
        {
            img:"https://static.readytotrip.com/upload/information_system_24/2/0/5/item_2059017/photo_71346798.jpg",
        },
        {
            img:"/images/edited/Screenshot_2024-03-02-20-47-37-32_40deb401b9ffe8e1df2f1cc5ba480b12.jpg",
        }, {
            img:"https://lh5.googleusercontent.com/p/AF1QipMzP01lrLOCrmki_pZ4pqpwWsx0yhbsOywkhSB0=w253-h188-k-no",
        },  {
            img:"https://lh5.googleusercontent.com/p/AF1QipOrC6YKRMHau_Kip_5LjqRFemnT7o9u7ykeyxg=w253-h189-k-no",
        }, {
            img:"https://q-xx.bstatic.com/xdata/images/hotel/max500/337647010.jpg?k=7a441e220326f8f6d96b3d6f63edf9b62e99d7448805d75a904fce63e7ed246f&o=",
        }, {
            img:"https://lh5.googleusercontent.com/p/AF1QipO0j2dC_LBmyq_LJR0ujrU18l7WR7e0wk5g2sg=w253-h189-k-no",
        }, {
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/98/a6/f7/caption.jpg?w=1100&h=-1&s=1",
        }, 
        {
            img:"/images/edited/birthday-image-facebook.jpg",
        }, 
        {
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/98/a6/91/caption.jpg?w=900&h=-1&s=1",
        }, 
        {
            img:"link"
        },
    ];
    let imagesHTML='';

mainpageofimages.forEach((product,index) => {

    if(product.img==="link"){

        imagesHTML += ` <div class="gallery-images" > <a href="/html links/fullgallery.html" class="show-more">Show More</a></div>`;
    }
    else{
    imagesHTML +=`
     <div class="gallery-images " >
                <img src="${product.img}" alt=""   onclick= "inlargeimage(this.src);">
            </div>`;}
            document.querySelector(".gallery")
            .innerHTML = imagesHTML;            
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

let imagescroller=document.querySelector(".gallery");
let scrollbtnright=document.querySelector(".float-right-btn");
let scrollbtnpriv=document.querySelector(".float-priv-btn");
let addshowmore=document.querySelector(".for-java-script");
let createancle=document.createElement('a');
const node = document.createTextNode("Show More >>");
createancle.appendChild(node);

imagescroller.addEventListener('wheel',(eve)=>
{
    eve.preventDefault();
    imagescroller.style.scrollBehavior="smooth";
    imagescroller.scrollLeft +=eve.deltaY;
});


scrollbtnright.addEventListener('click',(next)=>{
   imagescroller.scrollLeft += 370;
   imagescroller.style.scrollBehavior="smooth";
   addshowmore.appendChild(createancle);
   addshowmore.classList.add("open-gallery");


});
scrollbtnpriv.addEventListener('click',()=>{
    imagescroller.scrollLeft -= 370;
    imagescroller.style.scrollBehavior="smooth";
 });

 let himriverresort =document.querySelector(".himriverresort");
 himriverresort.addEventListener('click',()=>{
    window.open("mainpage.html");
 })


// this is the java script written for the google reviews 

 let addreviewbtn=document.querySelector(".add-review-btn");
 addreviewbtn.addEventListener('click',()=>{
    window.open("https://www.google.com/search?gs_ssp=eJzj4tFP1zfMyKiwyK0oMzRgtFI1qDC2NLA0NDcxNrBINTA3MTO3MqiwNLU0MQOKm5hYWhompxl6SWVk5ioUZZalFikUpRbnF5UAOcUZmdmpxRkAg8gX8Q&q=him+river+resort+rishikesh&oq=him+river+resort+ris&gs_lcrp=EgZjaHJvbWUqGAgBEC4YFBivARjHARiHAhiABBiYBRiaBTIGCAAQRRg5MhgIARAuGBQYrwEYxwEYhwIYgAQYmAUYmgUyDQgCEAAYkQIYgAQYigUyCAgDEAAYFhgeMgoIBBAAGIAEGKIEMgoIBRAAGIAEGKIEMgYIBhBFGD0yBggHEEUYPNIBCTc5NjFqMGoxNagCCbACAQ&sourceid=chrome&ie=UTF-8#lrd=0x3909174308e07467:0x9594639044991cf1,3,,,,")
 })

const googlereviews=[
    // {
    //     // profile:"https://lh3.googleusercontent.com/a-/ALV-UjVA1cnLgd_UXd2vNEYyqFRv20bWbp8ebwOnhAXO49bmNSjDjKQ=s80-rp-mo-br100",
    //     // name:"Pranav Bisariya",
    //     // history:"a month ago",
    //     // text:"Perfect place to stay if you are seeking something out of hustle bustle of city. Their hut shaped rooms provide good experience. Holy river is flowing right in front of the resort where you can reach easily and can have fun.They serve tasty food. No issue of parking.Recommended overall.",
    // },
    {
        profile:"https://lh3.googleusercontent.com/a/ACg8ocI2yLWxJIS1iL_19IxnbbORnV10ieaT1ifzM1D3lAD77oMaAxk=s40-c-rp-mo-br100",
        name:"Eunice Ho",
        history:"a month ago ",
        text:"Had a great time on my yoga retreat here surrounded by nature and practising mindfulness. The location is peaceful and the staff are friendly and helpful. The food was also amazing.",
    },
    {
        profile:"https://lh3.googleusercontent.com/a-/ALV-UjXAItJ2kXADk6RZ9gGVpIivt51Adg4LTnCf6aoqZwZGBTu3JqZFeg=s40-c-rp-mo-br100",
        name:"Sanjay Negi",
        history:"3 weeks ago ",
        text:"We have wonderful stay here with our family. The place is full of natural beauty and surrounding by green hills. Resort have a wonderful river.",
    },
    {
        profile:"https://lh3.googleusercontent.com/a/ACg8ocLGJwc065hadtgaCE6SLO3mRIo6CGN9Pyyzmgfst-YNx1Ax_g=s40-c-rp-mo-br100",
        name:"Manish Jangir",
        history:"a month ago ",
        text:"I was really nice stay and food taste and quality is also very good.Location of the resort is great, it’s very close to Ganga Ji river and one another river is in front of the resort.",
    },
    {
        profile:"https://lh3.googleusercontent.com/a/ACg8ocJFmqdXOcf_5RYiDpoPYvh8Lp5DHSW8zJ3JeGwsF6UxBZa-mds=s40-c-rp-mo-br100",
        name:"aman sharma",
        history:"a month ago ",
        text:"I stayed first time , Room service was very satisfactory , Food was awesome , gardening, evening breakfast arrangement at garden was awesome , this is my personally view I am much statiafied.",
    },
    {
        profile:"https://lh3.googleusercontent.com/a-/ALV-UjVkXK8qI38Ih0f6UwJZxFxb7WpFCfx9g1EtCR43M2W2WbNppkr43g=s40-c-rp-mo-ba3-br100",
        name:"Jitendra Prasad",
        history:"3 weeks ago",
        text:"Very good setting. Ideal for summer as located on the bank of a river tributary to Ganges. Saw a group of ghurud or kakhad which lives in high slopes of Himalayas from our balcony",
    },
    {
        profile:"https://lh3.googleusercontent.com/a-/ALV-UjUKQoZLiBAeuvZZTTOfwxY-lEvxDBta5_DoEkD2O-T-XHI7I9exyg=s40-c-rp-mo-br100",
        name:"GANESH AGRAWAL",
        history:"3 months ago",
        text:"It's very comfortable stey because property and area very peaceful and beautiful. In front of river, mountains and jungle. it's perfect for family and couple.overall experience is great.,👍and easy exxecble.",
    },
    
];

let googlereviewsHTML='';

googlereviews.forEach( (review)=>{

    googlereviewsHTML +=`
       <div class="review-container">
            <div class="container-for-review">
                <span><img src="${review.profile}" alt=""></span>
                <span class="text-align"><p>${review.name}</p><p>${review.history}</p></span>
                
            </div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <div class="review-given">
                <p>${review.text}</p>
            </div>
            <div class="google-image">
                <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" alt="">
            </div>
         </div>
    `
    document.querySelector(".review-content-display")
    .innerHTML=googlereviewsHTML;
});

let ReviewContainer = document.querySelector(".review-content-display");
ReviewContainer.addEventListener('wheel',(event)=>{
    event.preventDefault();
    ReviewContainer.style.scrollBehavior="smooth";
    ReviewContainer.scrollLeft +=event.deltaY;
})


document.addEventListener('scroll',()=>{
    var onscroll=document.querySelector('.nav-bar');
    let imagelogo=document.querySelector('.logo-image-responsive');
    let bars=document.getElementById("hamberger")
    if(window.scrollY > 0){
        onscroll.classList.add('nav-onscroll');
        imagelogo.style.display="flex";
        bars.style.display="flex";
        onscroll.style.visibility="visible";
    }
    else{
        onscroll.classList.remove('nav-onscroll');
        onscroll.style.visibility="hidden";
        imagelogo.style.display="none";
        bars.style.display="none";
    }
})


let mudhouse=document.querySelector(".mudhouse");
let riverside=document.querySelector(".riverside");
let gardenview=document.querySelector(".gardenview");
let standard=document.querySelector(".standard");

mudhouse.addEventListener('click',()=>{ window.open("/html links/book-mudhouse.html")})
riverside.addEventListener('click',()=>{ window.open("/html links/book-deluxgardenview.html")})
gardenview.addEventListener('click',()=>{ window.open("/html links/book-deluxgardenview.html")})
standard.addEventListener('click',()=>{ window.open("/html links/book-standardriverseide.html")})


// let googlereview = document.querySelector(".review-content-display")
// setInterval((event) => {
//     // event.preventDefault();
//     googlereview.style.scrollBehavior="smooth";
//     googlereview.scrollLeft += 240;
// },1000);

