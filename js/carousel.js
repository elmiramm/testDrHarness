$(document).ready(function (){
   $("#carousel1").owlCarousel({
      center: true,
      loop: true,
      autoWidth: true,
      items: 7,
      responsiveClass: true,
      responsive:{
         0:{
            items:1
         },
         640:{
            items:5
         },
         960:{
            items:7
         }
      }
   })
})