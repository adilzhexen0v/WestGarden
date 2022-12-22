const navBtn = document.querySelector('.header__btn-additional');
const navBtnEffect = document.querySelector('.hover__btn');
const navBtnText = document.querySelector('.header__btn-additional span');
const navQuick = document.querySelector('.header__quick');
const shadowBlock = document.querySelector('.shadow');

const transitionIn = () => {
     navBtnEffect.style.display = 'flex';
     setTimeout(() => {
         navBtnEffect.style.left = '-8px'; 
     }, 1);
     navBtnText.style.transform = 'translate(12px)';
};

const transitionOut = () => {
     navBtnEffect.style.left = '-36px'; 
     navBtnText.style.transform = 'translate(0px)';
     setTimeout(() => {
         navBtnEffect.style.display = 'none'; 
     }, 300);
};



navBtn.addEventListener('mouseenter', transitionIn);
navBtn.addEventListener('mouseleave', transitionOut);


const openQuickNav = () => {
     navQuick.style.right = 0;
     shadowBlock.style.display = 'block';
     setTimeout(() => {
          shadowBlock.style.opacity = '0.4'; 
     }, 1);
};

const closeQuickNav = () => {
     navQuick.style.right = '-16%';
     shadowBlock.style.opacity = 0;
     setTimeout(() => {
          shadowBlock.style.display = 'none';
     }, 300);
};

navBtn.addEventListener('click', openQuickNav);
shadowBlock.addEventListener('click', closeQuickNav);