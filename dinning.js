const dinningimage =[
    {img:"/images/edited/Screenshot_2024-03-02-20-35-04-82_a23b203fd3aafc6dcb84e438dda678b6.jpg",},
    {img:"/images/edited/Screenshot_2024-03-02-20-49-19-82_3d9111e2d3171bf4882369f490c087b4.jpg",},
    {img:"/images/edited/dinner-newyear.jpg",},
    {img:"/images/edited/dinning-4.jpg",},
    {img:"/images/edited/dinning-6.jpg",},
    {img:"/images/edited/dinning-2.jpg",},
    {img:"/images/edited/dinner.webp",},
    {img:"/images/edited/dinning-1.jpg",},
    // {img:"/",},
]

let dinningHTML='';

dinningimage.forEach((product)=>{
    dinningHTML +=`
     <div class="dinning-gallery">
        <img src="${product.img}" alt="">
    </div>
    `
    document.querySelector(".dinning-gallery").innerHTML=dinningHTML;
})