$('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   responsiveClass:true,
   responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:3,
           nav:false
       },
       1000:{
           items:5,
           nav:true,
           loop:false
       }
   }
})

window.addEventListener('keyup',(e)=>{
   console.log(e);
   if(Number.isInteger(e.key)){
      console.log(e.key);
   }else{
      console.log('key is not integer');
   }
   
})