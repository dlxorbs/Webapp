$(function () {

    let Bodyheight = $(window).innerHeight();     
    console.log( $(window).innerHeight());

     $('.container').on("scroll",function(){ 
          
          let etctop =  $('#etccon').offset().top;

          let etctopdiv =  $('#etccon>div').offset().top;
          let containertop =  $('.container').scrollTop();
          let nowheight = $('.now').innerHeight();

          let maxmintop =  $('#maxmin').offset().top;
          let maxminheight = $('#maxmin').innerHeight();
          let maxmincalc = nowheight - maxminheight

          let weathertop =  $('#weather').offset().top;
          let weatherheight = $('#weather').innerHeight();
          let weathercalc = maxmincalc - weatherheight;

          let temptop =  $('#temp').offset().top;
          let tempheight = $('#temp').innerHeight();
          let tempcalc = weathercalc - tempheight;
     
          console.log()
          // console.log(containertop)


          if(containertop > 24){
               $('.now').addClass('now-scrolled')
               $('#etccon').addClass('etc-scrolled')
               $('#city').removeClass('city-nonescrolled')
               $('#city').addClass('city-scrolled')
               $('.holder').css({
                    'z-index'   : '0',
               })

   
          }
          else if(containertop >= 0 && containertop < 24){
               $('.now').removeClass('now-scrolled')
               $('#etccon').removeClass('etc-scrolled')
               $('#city').addClass('city-nonescrolled')
               $('.holder').css({
                    'z-index'   : '0',
               })
          }

          //maxmin사라지게 스크롤값에 따라
          if(maxmintop >= maxmincalc){
               if( containertop <= 40 && containertop > 24 ){
                    $('#maxmin, .mainicon').css({
                         'opacity' : 1-containertop*(1/40),
                         '-webkit-opacity' : 1-containertop*(1/40),
                         '-moz-opacity' : 1-containertop*(1/40)
                    })
               }else if(containertop > 40 ){
                    $('#maxmin, .mainicon').css({
                         'opacity' : '0',
                         '-webkit-opacity' : '0',
                         '-moz-opacity' : '0'
                    })
               }else{
                    $('#maxmin, .mainicon').css({
                         'opacity' : '1',
                         '-webkit-opacity' : '1',
                         '-moz-opacity' : '1'
                    })
               }
         
          }             
          //weather사라지게 스크롤값에 따라
          if(weathertop >= weathercalc){
               if( containertop <= 60 && containertop > 40 ){
                    $('#weather').css({
                         'opacity' : 0.7-containertop*(1/100),
                         'transition' : '0.2s',
                         // 'transform' : 'scale('+containertop*(1/100)+')'

                    })
               }else if(containertop > 60 ){
                    $('#weather').css({
                         'opacity' : '0',
                         '-webkit-opacity' : '0',
                         '-moz-opacity' : '0',
                         'transition' : 'none',
                         // 'transform' : 'scale(0)'
                    })
               }else{
                    
                    $('#weather').css({
                         'opacity' : '1',
                         '-webkit-opacity' : '1',
                         '-moz-opacity' : '1',
                         'transition' : '0.2s',
                         // 'transform' : 'scale(1)'
                    })
               }
         
          }



          //temp사라지게 스크롤값에 따라
          if(temptop >= tempcalc){
               if( containertop <= 100 && containertop > 70 ){
                    $('#temp').css({
                         'opacity' : 1-containertop*(1/100)

                    })
               }else if(containertop > 100 ){
                    $('#temp').css({
                         'opacity' : '0'

                    })
               }else{
                    $('#temp').css({
                         'opacity' : '1'

                    })
               }
         
          }

          //




          let forecasttop          = $('#forecastcon').offset().top;
   
          let forecastbottom       = forecasttop + $('#forecastcon').outerHeight();
          let weektop              = $('.week').offset().top;
          let weekbottom           = weektop + $('.week').outerHeight();
          let raintop              = $('.rain').offset().top;
          let rainbottom           = raintop + $('.rain').outerHeight();
          let suntop               = $('.sun').offset().top;
          let sunbottom            = suntop + $('.sun').outerHeight();
          let airtop               = $('.air').offset().top;
          let airbottom            = airtop + $('.air').outerHeight();
          let sighttop             = $('.sight').offset().top;
          let sightbottom          = sighttop + $('.sight').outerHeight();



          let scrollheight = $('.scrollside').innerHeight()
    

          if(forecasttop < 63 ){
               $('#forecastcon > .header-sm').css({   
                              'mix-blend-mode': 'normal',
                              'backdrop-filter': 'blur(10px)' 
                         })

               if(forecastbottom >= 110){
                    $('.forescr').css({
                         'height' : 97-(63-Math.round(forecasttop)),
                         'padding-top' : '8px',
                     
                    })
                    $('#forecastcon > .header-sm').css({ 
                         'top': '62px',   
                         'position': 'sticky',
                          
                    })
               }else{
                    $('.forescr').css({
                         'height' : 18,
                         'padding-top' : '8px',
                     
                    })
                    $('#forecastcon > .header-sm').css({ 
                         'top': '75px',   
                         'position': 'relative',
                          
                    })
               }
          }else{
                         
               $('#forecastcon >.header-sm').css({ 
       
                    'mix-blend-mode': 'none',
                    'backdrop-filter': 'none',   
                    
                     })

               $('.forescr').css({
                    'height' : 97,
                    'padding-top' : '0',

               })


               
         
          }


          if(weektop< 63 ){
               $('.week >.header-sm').css({ 
                              'top': '62px',   
                              'z-index' : '5',
                              'mix-blend-mode': 'normal',
                              'backdrop-filter': 'blur(10px)' 
                         })
                         
               // $('.weekscr').css({
               //                'height' : 285-(63-Math.round(weektop)),
               //                'padding-top' : '8px',
                              
                   
               // })        


               if(weekbottom>= 110){
                    $('.weekscr').css({
                         'height' : 285-(63-Math.round(weektop)),
                         'padding-top' : '8px',
                     
                    })
                    $('.week > .header-sm').css({ 
                         'top': '62px',   
                         'position': 'sticky',
                          
                    })
               }else{
                    $('.weekscr').css({
                         'height' : 18,
                         'padding-top' : '8px',
                     
                    })
                    $('.week > .header-sm').css({ 
                         'top': '262px',   
                         'position': 'relative',
                          
                    })
               }

          }else{
                         
               $('.week >.header-sm').css({ 
                    'top': '62px',   
                    'z-index' : '5',
                    'mix-blend-mode': 'none',
                    'backdrop-filter': 'none' 
                     })

                $('.weekscr').css({
                         'height' : 285,
                         'padding-top' : '0',
     
               })
             
         
          }     
          
                          
          console.log(rainbottom)
          
          if(raintop< 63 ){
               $('.rain >.header-sm').css({ 
                              'top': '62px',   
                              'z-index' : '5',
                              'mix-blend-mode': 'normal',
                              'backdrop-filter': 'blur(10px)' 
                         })
                         
               $('.rainscr').css({
                              'height' : 53-(63-Math.round(raintop)),
                              'padding-top' : '8px',
                   
               })       
               
               if(rainbottom>= 110){
                    $('.rainscr').css({
                         'height' : 53-(63-Math.round(raintop)),
                         'padding-top' : '8px',
                     
                    })
                    $('.rain > .header-sm').css({ 
                         'top': '62px',   
                         'position': 'sticky',
                          
                    })
               }else{
                    $('.rainscr').css({
                         'height' : 18,
                         'padding-top' : '8px',
                     
                    })
                    $('.rain > .header-sm').css({ 
                         'top': '29px',   
                         'position': 'relative',
                          
                    })
               }

          }else{
                         
               $('.rain >.header-sm').css({ 
                    'top': '62px',   
                    'z-index' : '5',
                    'mix-blend-mode': 'none',
                    'backdrop-filter': 'none' 
                     })

                $('.rainscr').css({
                         'height' : 53,
                         'padding-top' : '0',
     
               })
             
         
          }     
          

          
          if(suntop< 63 ){
               $('.sun >.header-sm').css({ 
                              'top': '62px',   
                              'z-index' : '5',
                              'mix-blend-mode': 'normal',
                              'backdrop-filter': 'blur(10px)' 
                         })
                         
               $('.sunscr').css({
                              'height' : 141-(63-Math.round(suntop)),
                              'padding-top' : '8px',
                   
               })        

               if(sunbottom>= 110){
                    $('.sunscr').css({
                         'height' : 141-(63-Math.round(suntop)),
                         'padding-top' : '8px',
                     
                    })
                    $('.sun > .header-sm').css({ 
                         'top': '62px',   
                         'position': 'sticky',
                          
                    })
               }else{
                    $('.sunscr').css({
                         'height' : 18,
                         'padding-top' : '8px',
                     
                    })
                    $('.sun > .header-sm').css({ 
                         'top': '116px',   
                         'position': 'relative',
                          
                    })
               }

          }else{
                         
               $('.sun >.header-sm').css({ 
                    'top': '62px',   
                    'z-index' : '5',
                    'mix-blend-mode': 'none',
                    'backdrop-filter': 'none' 
                     })

                $('.sunscr').css({
                         'height' : 141,
                         'padding-top' : '0',
     
               })
             
         
          }     
              
          
          if(airtop< 63 ){
               $('.air >.header-sm').css({ 
                              'top': '62px',   
                              'z-index' : '5',
                              'mix-blend-mode': 'normal',
                              'backdrop-filter': 'blur(10px)' 
                         })
                         
               $('.airscr').css({
                              'height' : 133-(63-Math.round(airtop)),
                              'padding-top' : '8px',
                   
               })   
               
               
               if(airbottom>= 110){
                    $('.airscr').css({
                         'height' : 133-(63-Math.round(airtop)),
                         'padding-top' : '8px',
                     
                    })
                    $('.air > .header-sm').css({ 
                         'top': '62px',   
                         'position': 'sticky',
                          
                    })
               }else{
                    $('.airscr').css({
                         'height' : 18,
                         'padding-top' : '8px',
                     
                    })
                    $('.air > .header-sm').css({ 
                         'top': '110px',   
                         'position': 'relative',
                          
                    })
               }

          }else{
                         
               $('.air >.header-sm').css({ 
                    'top': '62px',   
                    'z-index' : '5',
                    'mix-blend-mode': 'none',
                    'backdrop-filter': 'none' 
                     })

                $('.airscr').css({
                         'height' : 133,
                         'padding-top' : '0',
     
               })
             
         
          }     
          
       
          if(sighttop< 63 ){
               $('.sight >.header-sm').css({ 
                              'top': '62px',   
                              'z-index' : '5',
                              'mix-blend-mode': 'normal',
                              'backdrop-filter': 'blur(10px)' 
                         })
                         
               $('.sightscr').css({
                              'height' : 133-(63-Math.round(sighttop)),
                              'padding-top' : '8px',
                   
               })        

               if(sightbottom>= 110){
                    $('.sightscr').css({
                         'height' : 133-(63-Math.round(sighttop)),
                         'padding-top' : '8px',
                     
                    })
                    $('.sight > .header-sm').css({ 
                         'top': '62px',   
                         'position': 'sticky',
                          
                    })
               }else{
                    $('.sightscr').css({
                         'height' : 18,
                         'padding-top' : '8px',
                     
                    })
                    $('.sight > .header-sm').css({ 
                         'top': '110px',   
                         'position': 'relative',
                          
                    })
               }

          }else{
                         
               $('.sight >.header-sm').css({ 
                    'top': '62px',   
                    'z-index' : '5',
                    'mix-blend-mode': 'none',
                    'backdrop-filter': 'none' 
                     })

                $('.sightscr').css({
                         'height' : 133,
                         'padding-top' : '0',
     
               })
             
         
          }     
              
              
              
      
console.log(etctop)

});


   
});