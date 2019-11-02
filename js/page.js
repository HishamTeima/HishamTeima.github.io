$(document).ready(function() {

    $(".toggle").click(function(i){
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
         $('.menu').toggleClass('active')
         $('.menu li a').click(function(){
        
         })
    });
    $(function (){
      //smoothly scroll to element 
     $('ul li a').click(function (e){
         e.preventDefault();
         $('html,body').animate({
             scrollTop: $('#' + $(this).data('scroll')).offset().top
         },1000);
     });
    
    });
    
});