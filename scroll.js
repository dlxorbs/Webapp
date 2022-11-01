$(function () {

    let Bodyheight = $(window).innerHeight();     
    console.log( $(window).innerHeight());

     $('.container').on("scroll",function() { 
          
          let etctop =  $('#etccon').offset().top;
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
                         'opacity' : 1-containertop*(1/40)

                    })
               }else if(containertop > 40 ){
                    $('#maxmin, .mainicon').css({
                         'opacity' : '0'

                    })
               }else{
                    $('#maxmin, .mainicon').css({
                         'opacity' : '1'

                    })
               }
         
          }


                    
          //weather사라지게 스크롤값에 따라
          if(weathertop >= weathercalc){
               if( containertop <= 70 && containertop > 40 ){
                    $('#weather').css({
                         'opacity' : 1-containertop*(1/80)

                    })
               }else if(containertop > 70 ){
                    $('#weather').css({
                         'opacity' : '0'

                    })
               }else{
                    $('#weather').css({
                         'opacity' : '1'

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

          let forecasttop = $('#forecastcon').offset().top;
          let scrollheight = $('.scrollside').innerHeight()
          


          if(forecasttop < 63 && forecasttop > 0){
          
               $('.header_sm').css({ 
                              'top': '62px',   
                              'z-index' : '3'
                         })
     
          }
              
      


});


   
});