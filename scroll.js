$(function () {

    let Bodyheight = $(window).innerHeight();     
    console.log( $(window).innerHeight());

     $('.container').on("scroll",function() { 
          
          let etctop =  $('#etccon').offset().top;
          let containertop =  $('.container').scrollTop();
          let nowheight = $('.now').innerHeight();

          let maxmintop =  $('#maxmin').offset().top;
          let maxminheight = $('#maxmin').innerHeight();
          let weatherbottom = nowheight - maxminheight
          let maxminbottom = maxminheight + maxmintop;


          let weathertop =  $('#weather').offset().top;
          let weatherheight = $('#weather').innerHeight();
          let tempbottom = weatherbottom - weatherheight;

          let temptop =  $('#temp').offset().top;
          let tempheight = $('#temp').innerHeight();
          let tempcalc = tempbottom - tempheight;
     
        
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



 
               if( etctop <= 165 && etctop >= 149){
                    if( etctop < maxminbottom && etctop > maxmintop+10 ){
                         $('#maxmin, .mainicon').css({
                              'opacity' : (etctop-100)/300,
                              'transition' : '0.1s'
     
                         })
                    }else if(etctop <= maxmintop+10){
                         $('#maxmin, .mainicon').css({ 
                              'opacity' : '0',
                              'transition' : 'none'
     
                         })
                    }else{
                         $('#maxmin, .mainicon').css({
                              'opacity' : '1',
                              'transition' : 'none'
     
                         })
               
               }

               console.log( 1-(etctop-100)/100)
               console.log(etctop)
         
          }


                    
          //weather사라지게 스크롤값에 따라
          if(etctop < tempbottom){
               
               if( etctop <= weatherbottom && etctop > weathertop ){
                    $('#weather').css({
                         'opacity' : etctop * (1/(weatherheight*10*2))
                         
             

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