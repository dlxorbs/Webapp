$(function () {

    let Bodyheight = $(window).innerHeight();     
    console.log( $(window).innerHeight());

$('.container').on("scroll",function () { 
     
     let nowtop =  $('#etccon').offset().top;

     console.log(nowtop)


     if(nowtop < 180 && nowtop > 0 || nowtop < -10){
          $('.now').css({'position' : 'fixed',
          'z-index' : '5',
          'padding-top' : '22px',
        
  
          })
   
          $('#etccon').css({'padding-top': "150px"})
          $('.holder').css({'height' : nowtop,
                              'opacity': (nowtop)*0.01})   
          $('.header_sm').css({ 
               'top': '74px'    
          })

        if(nowtop < -28){
          $('.now').css({  'background-color':'#062031',
                         'transition': '0.1s'})
        }else if( nowtop >= 0 || nowtop > -28) {
          $('.now').css({  'background-color':'#06203100'})
     }

     } else if(nowtop > -1 && nowtop <= 0){
          $('.now').css({
               'position' : 'relative',
          'z-index' : '5',
          'padding-top' : '44px',
          })
          $('#etccon').css({'padding-top': "0px"})

          $('.holder').css({
     
          'height' : '95px',
          'opacity': '1'})  
        
     }


     // else{
     //      $('.now').css({'position' : 'absolute',
     //      'background-color' : ' #06203100',
     //      'z-index' : '5',
     //      'padding-top' : '44px',

     //      })

     //      $('.holder').fadeIn(500)
     //      $('#etccon').css({'margin-top': '220px'})                
     //      $('.header_sm').css({ 
     //      'position ' : 'sticky'    
     //      })

     // }
//    $('#weekdaycon').each( function (i, high) { 
//      let eachposition = $('#weekdaycon').position().top;
//      console.log(eachposition);
// });


});


   
});