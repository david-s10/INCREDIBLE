


// ---------------------- four menu

const headerMenu = document.querySelector('.header__sidebar');
const headerMenuMob = document.querySelector('.sidebar__icon');
const modalBlockShow = document.querySelector('.btn__action');
const modalBlock = document.querySelector('.section-here-you-can__modal');
const modalCloseBtn = document.querySelector('.modal__close')


headerMenu.addEventListener('mouseover', function(e) {
    document.querySelector('.header__sidebar').classList.add('active')

});

headerMenu.addEventListener('mouseleave', function(e) {
    document.querySelector('.header__sidebar').classList.remove('active')

});

 headerMenuMob.addEventListener('click', function(e) {
    document.querySelector('.header__sidebar').classList.toggle('active')
 });

 modalBlockShow.addEventListener('click', function(e) {
    modalBlock.style.display = "block"
    document.querySelector('body').style.overflow = "hidden"
 });

 window.addEventListener('click', function(e) {
    if (e.target == modalBlock || e.target == modalCloseBtn) {
        modalBlock.style.display = "none";
        document.querySelector('body').style.overflow = "auto"
      }
 });

 //  ------------------------- sroll to top start

 const scrollToTop = document.querySelector('.scroll-top');
 
 scrollToTop.addEventListener('click', onClickBtn);
 window.addEventListener('scroll', onScrollBtn);

 function onScrollBtn(){
     if(window.scrollY > 300 ) {
        scrollToTop.classList.add('_active')
    }else{
        scrollToTop.classList.remove('_active')
     }
 }

 function onClickBtn() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        
    });
 }

//  ------------------------- sroll to top end

//  ------------------------- scroll animation start

const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');

                }
            }
            
        }

    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        
    }

    animOnScroll()
}



//  ------------------------- scroll animation end

 








