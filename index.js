const navbar = document.querySelector('.navbar');
const selectModels = document.querySelector('.models_images');
const selectModelImg = document.querySelector('.seledted_models');
const modelImageContainer = document.querySelector('.model_image img')
const modelNameImageContainer = document.querySelector('.model_image .model_name');
const swiperContainer = document.querySelector('.swiper-wrapper');

let topScroll = window.pageYOffset;
let widthScreen = window.screen.width;

// responsive navbar 
if(widthScreen < 1000){
    navbar.classList.add('active');
} else { 
    if(topScroll > 50){
        navbar.classList.add('active');
    } else {
        navbar.classList.add('active')
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

// active navbar link
window.addEventListener('scroll', () => {
    const sectionContent = document.querySelectorAll('.section-page');
    const navbarLinks = document.querySelectorAll('ul li a');
    let currentSection = '';

    sectionContent.forEach(section => {
        const sectionTop = section.offsetTop; 
        if (scrollY > sectionTop ) {
          currentSection = section.getAttribute('id');
        }  
    });
 
    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').slice(1) === currentSection){
            link.classList.add('active');
        }
    })
 
})
// select model image (thumbnail clicked)
selectModelImg.addEventListener('click', (e) => {
    let targ = e.target;

    let idModel = targ.id;
    let modelsName = targ.dataset.modelname;
    modelNameImageContainer.innerHTML = `${modelsName}`;
    modelImageContainer.setAttribute('src', targ.src);

    const selectedModelImgs = models[idModel];

    selectModels.innerHTML = selectedModelImgs
      .map(src => `
        <div class="model_img h-100 position-relative">
          <img src="${src}" alt="" class="w-100 h-100">
        </div>
      `).join('');
});

// select image from model gallery
selectModels.addEventListener('click', (e) => {
    let targ = e.target; 
    if(targ.className === 'w-100 h-100'){
        modelImageContainer.setAttribute('src', targ.src);
    }  
});

// data product
const fragment = document.createDocumentFragment()

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
   
    swiperContainer.innerHTML += newSwiper.innerHTML ;
}) 
 

// swiper scroll
const swiper = new Swiper('.swiper', { 
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
