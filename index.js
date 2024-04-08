const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let d1 = document.querySelector("#d1");
let d2 = document.querySelector("#d2");
let d3 = document.querySelector("#d3");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");
c1.addEventListener("mouseenter",function(){
    d1.style.color="white";
    
})
c1.addEventListener("mouseleave",function(){
    d1.style.color="black";

})
c2.addEventListener("mouseenter",function(){
    d2.style.color="white";
    
})
c2.addEventListener("mouseleave",function(){
    d2.style.color="black";

})
c3.addEventListener("mouseenter",function(){
    d3.style.color="white";
    
})
c3.addEventListener("mouseleave",function(){
    d3.style.color="black";

})

let el1 =document.querySelector("#el1");
let el2 =document.querySelector("#el2");
let el3 =document.querySelector("#el3");
let el4 =document.querySelector("#el4");
let lo = document.querySelector("#imo");
let v1 = document.querySelector("#v1");
let v2= document.querySelector("#v2");
let v3= document.querySelector("#v3");
let vd4= document.querySelector("#vd4");

el1.addEventListener("mouseenter",function(){
    lo.style.visibility="visible";
    v1.style.opacity=1;
    v2.style.opacity=0;
    v3.style.opacity=0;
    vd4.style.opacity=0;
})
el1.addEventListener("mouseleave",function(){
    lo.style.visibility="hidden";
    v1.style.opacity=0;
    v2.style.opacity=0;
    v3.style.opacity=0;
    vd4.style.opacity=0;

})
el2.addEventListener("mouseenter",function(){
    lo.style.visibility="visible";
    v1.style.opacity=0;
    v2.style.opacity=1;
    v3.style.opacity=0;
    vd4.style.opacity=0;

})
el2.addEventListener("mouseleave",function(){
   
    lo.style.visibility="hidden";
    v1.style.opacity=0;
    v2.style.opacity=0;
    v3.style.opacity=0;
    vd4.style.opacity=0;

})
el3.addEventListener("mouseenter",function(){
    lo.style.visibility="visible";
    v1.style.opacity=0;
    v2.style.opacity=0;
    v3.style.opacity=1;
    vd4.style.opacity=0;
})
el3.addEventListener("mouseleave",function(){
    lo.style.visibility="hidden";
    v1.style.opacity=0;
    v2.style.opacity=0;
    v3.style.opacity=0;
    vd4.style.opacity=0;
})
el4.addEventListener("mouseenter",function(){
    lo.style.visibility="visible";
    v1.style.opacity=0;
    v2.style.opacity=0;
    v3.style.opacity=0;
    vd4.style.opacity=1;
})
el4.addEventListener("mouseleave",function(){
    lo.style.visibility="hidden";
    v1.style.opacity=0;
    v2.style.opacity=0;
    v3.style.opacity=0;
    vd4.style.opacity=0;
})
swiper();
function swiper(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

let a1 = document.querySelector("#a1");
let bef1 = document.querySelector("#before");
let v = 0;




a1.addEventListener("mouseenter",function(){
    bef1.style.left=0;
    
}

);

a1.addEventListener("mouseleave",function(){

    bef1.style.left=100+"%";
    
    setTimeout(function(){
        bef1.style.left=-100+"%";
       
    },3000);
    

}





);


    







let a2 = document.querySelector("#a2");
let bef2 = document.querySelector("#before2");

a2.addEventListener("mouseenter",function(){
    bef2.style.left=0;
    
}

);
a2.addEventListener("mouseleave",function(){

    bef2.style.left=100+"%";
   

setTimeout(function(){
    bef2.style.left=-100+"%";
   
},3000);
}



);
let cr = document.querySelector("#cross");
let hm = document.querySelector("#ham");



let menu = document.querySelector("#menu");
let full = document.querySelector("#full");
let ni = document.querySelector("#nav img");

let flag = 0;
menu.addEventListener("click",function(){
    if(flag ==0)
    {
    full.style.top=0+"px";
    full.style.transitionDuration=0.8+"s";
    ni.style.visibility="hidden";
    cr.style.display="contents";
    hm.style.display="none";
   
    flag=1;
    }
    else{
        full.style.top=-200+"%";
    full.style.transitionDuration=0.8+"s";
    ni.style.visibility="visible";
    cr.style.display="none";
    hm.style.display="contents";
    
    flag=0;
    }



});


 loaderanimation();
function loaderanimation()

{
    let hol = document.querySelector("#hol");
let ss = document.querySelector("#ss");
let sd = document.querySelector("#sd");
gsap.to(hol,{
    opacity:1,transitionDuration:1,delay:1  
  });
  gsap.to(hol,{
    opacity:0,transitionDuration:1,delay:2
  });
  gsap.to(ss,{
    opacity:1,transitionDuration:1,delay:3.5
  });
  gsap.to(ss,{
    opacity:0,transitionDuration:1,delay: 5
  });
  gsap.to(sd,{
    opacity:1,transitionDuration:1,delay:6.5
  });
  gsap.to(sd,{
    opacity:0,transitionDuration:1,delay:8
  });


gsap.to("#ldr",{
   y:-1000,duration: 2,delay: 9
});
}




