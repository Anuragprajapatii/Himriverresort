const explorerishikesh=[
    {
        img:"/images/edited/lakshman-jhula-1.jpg",
        place:'Laxman Jhula',
        content:'One of the most visited, the Lakshmana Jhula is a suspended bridge, extending from one bank of the Ganges to the other. The bridge is mythological significant because it is where Lakshman crossed the Ganga through on jute-rope-made bridge.',
    },
    {
        img:'/images/edited/ramjhula.webp',
        place:'Ram Jhula',
        content:'Ram Jhula is a popular tourist destination, and is known for its stunning views of the Ganges River and the surrounding mountains. The bridge is also a popular spot for yoga and meditation, and is home to several ashrams and temples.',
    },
    {
        img:'/images/edited/Neelkanth-Mahadev.jpg',
        place:'Neelkanth Mahadev Temple',
        content:'Neelkanth Mahadev Temple - is a Hindu temple dedicated to Nilkanth (Lord Shiva). The temple is situated at a height of 1330 meters and is located about 32 km from Rishikesh in the Pauri Garhwal district of Uttarakhand.',
    },
    {
        img:'/images/edited/Parmarth_Niketan.jpg',
        place:'Parmarth Niketen Ashram',
        content:'As the largest ashram in Rishikesh, Parmarth Niketan provides a clean, pure and sacred atmosphere as well as abundant, beautiful gardens to thousands of pilgrims, who come from all corners of the Earth. The daily activities at Parmarth Niketan include daily yoga specializing .Daily activities also include Ganga aarti at sunset attended by hundreds of visitors each day.',
    },
    {
        img:'/images/edited/laxmanjhula temple.jpg',
        place:'Lakshman Temple',
        content:'Lakshman Temple is believed to be the place where Lord Lakshmana meditated to attain spiritual enlightenment. The temple is also believed to be the place where Lord Rama and Lakshmana constructed a jute bridge across the Ganges River. This bridge is now known as Lakshman Jhula.',
    },
    {
        img:'/images/edited/Janki_Jhula.jpg',
        place:'Janki Setu',
        content:'Janki Setu, also known as Janki Bridge, is a three-lane suspension bridge across the Ganges River in Rishikesh, Uttarakhand, India. It was opened to the public in 2018 and is the first three-lane bridge in Uttarakhand.',
    },
    {
        img:'/images/edited/vashista-gufa.jpg',
        place:'Vashishta Gufa',
        content:'Vashishta Gufa, situated on the banks of the Ganga River, is a popular place for meditation lovers. This is the cave where great Sage Vashishta said to have meditated. He was also among the seven great sages (Saptarishis) and the guru of Lord Ram.',
    },
    {
        img:'/images/edited/kunjapuri.jpg',
        place:'Kunja Puri Temple',
        content:'Located on a hillock around 15 km away from Rishikesh Kunjapuri Devi Temple is one of the most revered Shakti Peeths of Goddess Shakti in Garhwal Himalayas. The Temple also offers panoramic views of snow capped mountains and peaks such as Swarga Rohini, Gangotri, Banderpunch and Chaukhamba.',
    },
    {
        img:'/images/edited/triveni ghat.jpg',
        place:'Triveni Ghat',
        content:'TriveniGhat is the holy confluence of river Ganga, river Yamuna and river Saraswati. The huge statue of lord Shiva sitting in bull and the statue of Krishna-Arjun in chariot depicting the initiation of Mahabharata war captivate you. Evening Aarati at TriveniGhat is popular among the people',
    },
    {
        img:'/images/edited/Beatles-Ashram-2.jpg',
        place:'Beatles Ashram',
        content:'The training centre was designed to suit Western habits and was described variously as "luxurious" and "seedy".It was built to accommodate several dozen people and each of its stone bungalows contained five rooms.In addition to several stone huts, there were accommodation blocks, known as puri.The Maharishis residence was a long, modern-style bungalow located away from the other buildings.',
    }
]

let ExploreRishikeshHTML ='';

explorerishikesh.forEach((exp)=>{
    ExploreRishikeshHTML +=`
    <div class="rishikesh-place-container">
            <div class="place-image">
                <img src="${exp.img}" alt="">
            </div>
            <div class="about-place">
                <h2>${exp.place}</h2>
                <p>${exp.content}</p>
            </div>
        </div>`
            document.querySelector(".explore-rishikesh-flex")
            .innerHTML=ExploreRishikeshHTML;
        });