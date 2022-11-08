
 document.oncontextmenu = function(){return false;}


 
$(function(){

 // 마우스를 클릭하거나 마우스가 기타 컨테이너 안에 들어갔을 경우에는 
 var defaultTime = 0

 
 $('.ui-loader').hide();
 $('#edit').hide()


 function vibration() {
    $('#etccon > div').addClass('vibration');
 }

     $('#etccon').on("taphold", function(){
 
         defaultTime = setInterval(vibration());
      
          $('#edit').show()
          $('#etccon').sortable()
          $('#etccon').sortable( "option", "disabled", false );
 
        })

        $('#edit > button').on("tap touchend click", function(){
                $('#edit').hide()
                clearInterval(defaultTime)

                $('#etccon > div').removeClass('vibration');

                $('#etccon').sortable('disable'); 
        })



 
 //대표예보
  
 
 let = url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'
 
 $.getJSON(url, function (data) {
         console.log(data)
 
 
         let city        = data.name;
         let temp        = data.main.temp;
         let weather     = data.weather[0].description
         let temp_max    = data.main.temp_max;
         let temp_min    = data.main.temp_min;
         let sunrise     = data.sys.sunrise;
         let sunset      = data.sys.sunset;
         let dt          = data.dt
 
 
         let icon = data.weather[0].icon
         console.log(icon)
         let imgURL =  './weather/' + icon + '.svg'
 

         if(icon == '01d' || icon =='01n'){
            $('#weather').text('맑음');
         }else if(icon == '02n' || icon =='02d'){
            $('#weather').text('한때 흐림');
         }else if(icon == '03n' || icon =='03d'){
            $('#weather').text('대체로 흐림');
         }else if(icon == '04n' || icon =='04d'){
            $('#weather').text('흐림');
         }else if(icon == '09n' || icon =='09d'){
            $('#weather').text('소나기');
         }else if(icon == '10n' || icon =='10d'){
            $('#weather').text('비');
         }else if(icon == '11n' || icon =='11d'){
            $('#weather').text('폭풍우');
         }else if(icon == '13n' || icon =='13d'){
            $('#weather').text('눈');
         }else if(icon == '50n' || icon =='50d'){
            $('#weather').text('안개');
         }else{
             $('#weather').text(weather);
         }


        $('#temp').text(Math.round(temp) + '°C');
       
        $('#city').text(city);
        $('#maxmin').text('최고' + Math.round(temp_max) + '°C' + '/' + '최저' + Math.round(temp_min) + '°C');
        $('.mainicon').attr('src', imgURL)
 
 


        if(sunrise < dt && dt < sunset){
         $('.container').toggleClass('day')
         $('.header_sm').toggleClass('daytext')
         $('#city').toggleClass('dayhead')
                  
        }else{
         $('.container').toggleClass('night')
         $('.header_sm').toggleClass('nighttext')
         $('#city').toggleClass('nighthead')

        }
 
 
   
     });
 
 
 //각각 시간의 예보
 let urlt = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'
 $.getJSON(urlt, function(data){
     console.log(data);
 
 
 
 
     for(let i = 0; i < 24; i++){
         // let weather = data.list[i].weather[0].main;
         let temp = data.list[i].main.temp;
         
 
         let dt      = data.list[i].dt
         let time    = moment(dt*1000).format('A hh:mm')
         let icon    = data.list[i].weather[0].icon
         let imgURL  = './weather/' + icon + '.svg'
   
 
         console.log(icon)
 
         let dom = $('<div> </div>')
         dom.append('<h3>'+ time + '</h3>')
         dom.append('<img class = "icon" src = '+ imgURL +' >')
         dom.append('<p>'+ Math.round(temp) + '°C' + '</p>')
         $('#forecast').append(dom)
 
 
     }
     
 })

 //좌우 스크롤 이벤트
     var curDown = false,
         curXPos = 0;
     
     $('#forecast').mousemove(function(m){
         if(curDown){
         this.scrollBy(curXPos - m.pageX, 0)
         }
     });
     
     $('#forecast').mousedown(function(m){
    
         curXPos = m.pageX;
         curDown = true;
     });
     
     $('#forecast').mouseup(function(m){
         curXPos = 0;
         curDown = false;
     });

     
 
 
})