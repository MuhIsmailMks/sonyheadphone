const navbar = document.querySelector('.navbar');
const selectModels = document.querySelector('.models_images');
const selectModelImg = document.querySelector('.seledted_models');
const modelImageContainer = document.querySelector('.model_image img')
const modelNameImageContainer = document.querySelector('.model_image .model_name');
const swiperContainer = document.querySelector('.swiper-wrapper');

let topScroll = window.pageYOffset;
let widthScreen = window.screen.width;

if(widthScreen < 1000){
    navbar.classList.add('active');
} else { 
    if(topScroll > 50){
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active')
    } 

    window.addEventListener('scroll', () => {  
    let topScroll = window.pageYOffset;
            if(topScroll > 50){
                navbar.classList.add('active');
            } else {
                navbar.classList.remove('active')
            }
   })
}

//  select models 
selectModelImg.addEventListener('click', (e) => {
    let targ = e.target;

    let idModel = targ.id;
    let modelsName = targ.dataset.modelname
    modelNameImageContainer.innerHTML = `${modelsName}`
    modelImageContainer.setAttribute('src', targ.src)


    // imagesModels
    let modelsImg = []; 
    models.forEach(model => {   
        modelsImg.push(model[idModel])
    });

    const filterModel = modelsImg.filter(modelFil => modelFil != undefined);

    // console.log(filterModel[0]);  
    
    selectModels.innerHTML = `${filterModel[0]}`
})

selectModels.addEventListener('click',(e) => {
    let targ = e.target;
    console.log(targ);

    if(targ.className === 'w-100 h-100'){
        modelImageContainer.setAttribute('src', targ.src)
    }  
})

// data product
products.forEach(product => {
    const newSwiper = document.createElement('div');

    newSwiper.innerHTML = ` 
    <div class="swiper-slide">
         <div class="product position-relative">
            <div class="image w-100 d-flex align-items-center justify-content-center">
            <img src="${product.imgLink}" alt="">
            </div>
            <div class="price">${product.price}</div>
            <div class="name_product text-center">${product.nameProduct}</div>
            <div class="line my-3"></div>
            <div class="about_product my-4 w-100">${product.aboutProduct}</div>
            <div class="see_more d-flex align-items-center w-50">See More<img src="img/nextProductBtn.png" alt=""></div>
        </div> 
        </div> 
    `
    
    swiperContainer.innerHTML += newSwiper.innerHTML
    console.log(newSwiper);

}) 


// swiper scroll
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    centeredSlides :"true",
    spaceBetween: 10,
    breakpoints: {
        // when window width is <= 499px
        499: {
             slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        1000:{ 
             slidesPerView: 2,
             spaceBetweenSlides: 50
        },
        1200:{ 
             slidesPerView: 3,
             spaceBetweenSlides: 350
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });
