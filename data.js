 
const models =[
    {
        models1 : ` <div class="model_img h-100  position-relative"><img src="img/models1_1.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models1_2.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models1_3.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models1_4.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models1_5.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models1_6.png" alt="" class="w-100 h-100"></div>`
    },
    
    {
        models2 : ` <div class="model_img h-100  position-relative"><img src="img/models2_1.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models2_2.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models2_3.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models2_4.png" alt="" class="w-100 h-100"></div> `
    },
    
    {
        models3 : ` <div class="model_img h-100  position-relative"><img src="img/models3_1.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models3_2.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models3_3.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models3_4.png" alt="" class="w-100 h-100"></div>
        <div class="model_img h-100  position-relative"><img src="img/models3_5.png" alt="" class="w-100 h-100"></div> `
    },
    
]
 

// const products = [

//     [
//         ` <div class="swiper-slide"> 
//         <div class="product position-relative">
//           <div class="image w-100 d-flex align-items-center justify-content-center">
//             <img src="img/product1.png" alt="">
//           </div>
//           <div class="price">$1,999.99</div>
//           <div class="name_product text-center">  MDR-Z1R Signature Series Premium Hi-Res Headphones</div>
//           <div class="line my-3"></div>
//           <div class="about_product my-4 w-100">The ergonomically crafted headphones are designed to comfortably encase your head in sound; preventing any from leaking and effectively delivering powerful lows. The genuine sheepskin ear pads cushion your ears in luxurious softness.</div>
//           <div class="see_more d-flex align-items-center w-50">See More<img src="img/nextProductBtn.png" alt=""></div>
//         </div> 
//       </div>`
//     ],
//     [
//         `<div class="swiper-slide">
//         <div class="product position-relative">
//         <div class="image w-100 d-flex align-items-center justify-content-center">
//           <img src="img/product2.png" alt="">
//         </div>
//         <div class="price">$199.99</div>
//         <div class="name_product text-center">  LinkBuds S Truly Wireless Noise Canceling Earbuds</div>
//         <div class="line my-3"></div>
//         <div class="about_product my-4 w-100">Your LinkBuds S are designed for both style and environmental consciousness.  The Earth Blue model takes it a step further by integrating reclaimed water bottles to give them their distinctive marbled pattern.</div>
//         <div class="see_more d-flex align-items-center w-50">See More<img src="img/nextProductBtn.png" alt=""></div>
//       </div>
//     </div>`
//     ],
//     [
//         ` <div class="swiper-slide">
//         <div class="product position-relative">
//         <div class="image w-100 d-flex align-items-center justify-content-center">
//           <img src="img/product3.png" alt="">
//         </div>
//         <div class="price">$199.99</div>
//         <div class="name_product text-center">Float Run Open-Ear Wireless Headphones</div>
//         <div class="line my-3"></div>
//         <div class="about_product my-4 w-100">With an innovative off-ear design, you won’t have to worry about pressure or stuffiness becoming uncomfortable, even on long runs.</div>
//         <div class="see_more d-flex align-items-center w-50">See More<img src="img/nextProductBtn.png" alt=""></div>
//       </div>
//     </div> `
//     ],
//     [
//         ` <div class="swiper-slide">
//         <div class="product position-relative">
//         <div class="image w-100 d-flex align-items-center justify-content-center">
//           <img src="img/product4.png" alt="">
//         </div>
//         <div class="price">$1,999.99</div>
//         <div class="name_product text-center">IER-Z1R Signature Series Premium Hi-Res In-ear Headphones</div>
//         <div class="line my-3"></div>
//         <div class="about_product my-4 w-100">To deliver music with true emotional impact that takes your breath away, By paying attention to the smallest details, you can distinguish every nuance and subtle characteristics, in astonishingly faithful sound reproduction.</div>
//         <div class="see_more d-flex align-items-center w-50">See More<img src="img/nextProductBtn.png" alt=""></div>
//       </div>
//     </div> `
//     ],
//     [
//         `<div class="swiper-slide">
//         <div class="product position-relative">
//         <div class="image w-100 d-flex align-items-center justify-content-center">
//           <img src="img/product5.png" alt="">
//         </div>
//         <div class="price">$249.99</div>
//         <div class="name_product text-center">LinkBuds Truly Wireless Earbuds – Teams Certified Version</div>
//         <div class="line my-3"></div>
//         <div class="about_product my-4 w-100">The Sony LinkBuds feature a comfortable open-ring design that naturally blends ambient sound with digital sound. Stay authentically connected to everyday life while listening to music, taking calls, gaming, and more, all with dynamic sound.</div>
//         <div class="see_more d-flex align-items-center w-50">See More<img src="img/nextProductBtn.png" alt=""></div>
//       </div>
//     </div> `
//     ],
//     [
//         ` <div class="swiper-slide">
//         <div class="product position-relative">
//         <div class="image w-100 d-flex align-items-center justify-content-center">
//           <img src="img/product6.png" alt="">
//         </div>
//         <div class="price">$29.99</div>
//         <div class="name_product text-center">MDR-EX110AP Wired In-ear Headphones with Microphone</div>
//         <div class="line my-3"></div>
//         <div class="about_product my-4 w-100">Enjoy upgraded sound quality with integrated mic and smartphone playback control.1 The 9mm driver units have increased efficiency and deliver extended frequency response with powerful bass while the hybrid silicone ear buds ensure a secure fit.</div>
//         <div class="see_more d-flex align-items-center w-50">See More<img src="img/nextProductBtn.png" alt=""></div>
//       </div>
//     </div> `
//     ]    
// ]

const products = [
    {
        imgLink : "img/product1.png",
        price : "$1,999.99",
        nameProduct : " MDR-Z1R Signature Series Premium Hi-Res Headphones",
        aboutProduct : "The ergonomically crafted headphones are designed to comfortably encase your head in sound; preventing any from leaking and effectively delivering powerful lows. The genuine sheepskin ear pads cushion your ears in luxurious softness.",
    },
    {
        imgLink : "img/product2.png",
        price : "$199.99",
        nameProduct : "LinkBuds S Truly Wireless Noise Canceling Earbuds",
        aboutProduct : "Your LinkBuds S are designed for both style and environmental consciousness.  The Earth Blue model takes it a step further by integrating reclaimed water bottles to give them their distinctive marbled pattern.",
    },
    {
        imgLink : "img/product3.png",
        price : "$199.99",
        nameProduct : "Float Run Open-Ear Wireless Headphones",
        aboutProduct : "With an innovative off-ear design, you won’t have to worry about pressure or stuffiness becoming uncomfortable, even on long runs.",
    },
    {
        imgLink : "img/product4.png",
        price : "$1,999.99",
        nameProduct : "IER-Z1R Signature Series Premium Hi-Res In-ear Headphones",
        aboutProduct : "To deliver music with true emotional impact that takes your breath away, By paying attention to the smallest details, you can distinguish every nuance and subtle characteristics, in astonishingly faithful sound reproduction.",
    },
    {
        imgLink : "img/product5.png",
        price : "$249.99",
        nameProduct : "LinkBuds Truly Wireless Earbuds – Teams Certified Version",
        aboutProduct : "The Sony LinkBuds feature a comfortable open-ring design that naturally blends ambient sound with digital sound. Stay authentically connected to everyday life while listening to music, taking calls, gaming, and more, all with dynamic sound.",
    },
    {
        imgLink : "img/product6.png",
        price : "$29.99",
        nameProduct : "MDR-EX110AP Wired In-ear Headphones with Microphone",
        aboutProduct : "Enjoy upgraded sound quality with integrated mic and smartphone playback control.1 The 9mm driver units have increased efficiency and deliver extended frequency response with powerful bass while the hybrid silicone ear buds ensure a secure fit.",
    },
]