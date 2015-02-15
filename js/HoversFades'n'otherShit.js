$("#menubuttn").click(function(){
  $("#menubuttn").toggleClass("close");
  $("#nav").toggleClass("closed");
}); 

$(document).ready(function(){ 
  $('.description').delay(2100).fadeIn(1000);
  $('#loader').delay(2100).animate({opacity:'1'});
  $('header').addClass('bgcolor');
});


$('.service').hover(
       function(){ $(this).find( '.no-hover' ).animate({opacity:'0'}).addClass('off');
       $(this).find( '.hover' ).removeClass('off').animate({opacity:'1'}) },
       function(){ $(this).find( '.no-hover' ).removeClass('off').animate({opacity:'1'})
       ;$(this).find( '.hover' ).animate({opacity:'0'}).addClass('off') }
);
$('.service').hover(
       function(){ $(this).find( '.no-hover' ).addClass('off');$(this).find( '.hover' ).removeClass('off') },
       function(){ $(this).find( '.no-hover' ).removeClass('off');$(this).find( '.hover' ).addClass('off') }
);
$('.button').hover(
     function(){$(this).animate({backgroundColor: '#ee3823'},600);
                $(this).animate({backgroundColor: '#fdb818'},600);
                $(this).animate({backgroundColor: '#2ba0a3'},600);


   },
     function(){$(this).animate({backgroundColor: '#fdb818'},600);
                $(this).animate({backgroundColor: '#ee3823'},600);
                 $(this).animate({backgroundColor: 'rgba(0,0,0,0)'},600);
   }
);
$('.coltransition').hover(
     function(){$(this).animate({color: '#ee3823'},600);
                $(this).animate({color: '#fdb818'},600);
                $(this).animate({color: '#2ba0a3'},600);


   },
     function(){$(this).animate({color:'#fdb818'},600);
                $(this).animate({color:'#ee3823'},600);
                 $(this).animate({color:'black'},600);
   }
);
$('.coltransitionwhite').hover(
     function(){$(this).animate({color: '#ee3823'},600);
                $(this).animate({color: '#fdb818'},600);
                $(this).animate({color: '#2ba0a3'},600);


   },
     function(){$(this).animate({color:'#fdb818'},600);
                $(this).animate({color:'#ee3823'},600);
                 $(this).animate({color:'white'},600);
   }
);
$('.case').hover(
     function(){$(this).find( '.black,' ).animate({color: '#ee3823'},600);
                $(this).find( '.black' ).animate({color: '#fdb818'},600);
                $(this).find( '.black' ).animate({color: '#2ba0a3'},600);


   },
     function(){$(this).find( '.black' ).animate({color:'#fdb818'},600);
                $(this).find( '.black' ).animate({color:'#ee3823'},600);
                 $(this).find( '.black' ).animate({color:'white'},600);
   }
);