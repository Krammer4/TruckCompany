// МАШИНА-----------------------------------------------------
const car = document.querySelector('.info-car');

function carMove (){
    car.style.transform = "translateX(-1500px)";
    
    setTimeout(function carReturn(){car.style.transform = "translateX(2000px)";
car.style.transition = "none"}, 1500);
setTimeout(function carReturn(){car.style.transform = "translateX(0px)";
car.style.transition = "all 3s ease 0s"}, 2000);
}
car.addEventListener("click", carMove);

//ЯЗЫК===========================================================
const lang = document.querySelectorAll('.header-lang-name');

console.log(lang);

lang.forEach((el)=>{
    function langSwitch(){
       
        if(el.target.className = "header-lang-name active"){
           console.log('Привет!')
        };
    };
    
    el.addEventListener("click", langSwitch);
})     

const wrapper = document.querySelector('.wrapper');
console.log(wrapper.scrollTop);

const header = document.querySelector('.header')
if(wrapper.scrollTo >= 508){
    header.style.position = "relative";
    header.style.display = "none";
};

// МЕНЮ БУРГЕР==================================================

const isMobile = {
Android :function(){
return navigator.userAgent.match(/Android/i);
},
BlackBerry: function(){
return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function(){
return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function(){
return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function(){
return navigator.userAgent.match(/IEMobile/i);
},
any: function(){
return (
isMobile.Android()||
isMobile.BlackBerry()||
isMobile.iOS()||
isMobile.Opera()||
isMobile.Windows())
},
};

const menu = document.querySelector('.menu-pos-row')

if(isMobile.any()){
document.body.classList.add("touch");
menu.classList.toggle("passive");
}else{
document.body.classList.add("pc");
}

const burgerIcon = document.querySelector('.menu-burger');
const main = document.querySelector('.main');


function burgerShow(){
    if(menu.classList.contains("passive")){
        menu.classList.remove("passive");
        menu.classList.add("active");
        document.body.classList.toggle("lock");
        header.style.display = "none";
        main.style.marginTop = "100px";
    }
    else{
        menu.classList.remove("active");
        menu.classList.add("passive");
        header.style.display = "block";
        main.style.marginTop = "0px";
        document.body.classList.toggle("lock");
    }
}


burgerIcon.addEventListener("click", burgerShow);


let menuBtn = document.querySelector('.menu-burger');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
})
