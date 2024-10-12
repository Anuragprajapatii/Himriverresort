const exteriorimage=[
    {img:"/images/edited/Screenshot_2024-03-02-20-38-36-09_a23b203fd3aafc6dcb84e438dda678b6.jpg",},
    {img:"/images/edited/luxeryriverside-1.jpeg",},
    {img:"/images/edited/IMG_20231002_145256.jpg",},
    {img:"/images/edited/IMG_20240607_083813.jpg",},
    {img:"/images/edited/Screenshot_2024-03-02-20-47-37-32_40deb401b9ffe8e1df2f1cc5ba480b12.jpg",},
    {img:"/images/edited/Screenshot_2024-03-02-20-53-12-10_3d9111e2d3171bf4882369f490c087b4.jpg",},
    {img:"/images/edited/luxeryriverside-7.jpg",},
    {img:"/images/edited/exterior.jpg",},
    {img:"/images/edited/exterior-1.jpg",},
    

]

let exteriorHTML='';
exteriorimage.forEach((product)=>{
    exteriorHTML +=`
    <div class="image-dimention">
        <img src="${product.img}" alt="">
    </div>
    `
    document.querySelector(".gallery-flex-images").innerHTML=exteriorHTML;
});