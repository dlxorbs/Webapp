$(function(){
    let = url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'
 // 마우스를 클릭하거나 마우스가 기타 컨테이너 안에 들어갔을 경우에는 
 var defaultTime = 0
 
     $('#etccon').on("tabhold ", function(){
 
         defaultTime = setInterval(function() {
             const child = $('#etccon')
                     
             console.log(child.index())
                     
             child.sortable();
 
             $('#etccon > div').addClass('vibration')
             
          }, 3000);
 
             })
     
 
   
 
 
  
 
 
 
  
 
 
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
 
        $('#temp').text(Math.round(temp) + '°C');
        $('#weather').text(weather);
        $('#city').text(city);
        $('#maxmin').text('최고' + Math.round(temp_max) + '°C' + '/' + '최저' + Math.round(temp_min) + '°C');
        $('.mainicon').attr('src', imgURL)
 
 
        if(sunrise < dt && dt < sunset){
         $('.container').toggleClass('day')
         
        }else{
         $('.container').toggleClass('night')
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
         // dom.append('<p>'+ weather + '</p>')
 
 
         //합계 평균
 
         // var sum = 0
         // if( i % 8 >= 0 && i % 8 < 1){
         //     let temp = data.list[i].main.temp;
         //     sum += temp
            
         //     dom.append('<p>'+ Math.round(sum) + '</p>')
         //     console.log(temp)
         // }if( i % 8 >= 1 && i % 8 <2 ){
         //     let temp = data.list[i].main.temp;
         //     sum += temp
            
         //     dom.append('<p>'+ Math.round(sum) + '</p>')
         //     console.log(temp)
         // }if( i % 8 <= 2){
         //     let temp = data.list[i].main.temp;
         //     sum += temp
            
         //     dom.append('<p>'+ Math.round(sum) + '</p>')
         //     console.log(temp)
         // }
         $('#forecast').append(dom)
 
 
     }
     
 })
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

 
 //대기질 오염지수 직접 계산 
 
     let urlf = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'
     $.getJSON(urlf, function(data){
 
 
 
 
     console.log(data)
 
         var bpl = [
 
         ]
 
         var bph = [
          
                     ];
         var ih = [
          
                     ];       
         var il = [
          
                     ];
     
     
         console.log(bpl)
         console.log(bph)
         console.log(ih)
         console.log(il)
                    
        
         let ppm = 10**(-3)
 
 let c = [
         ppm* Math.round(data.list[0].components.so2),
         ppm* Math.round(data.list[0].components.co),
         ppm* Math.round(data.list[0].components.o3),
         ppm* Math.round(data.list[0].components.no2),
         data.list[0].components.pm10,
         data.list[0].components.pm2_5
         ]
 
 console.log(c)
 
 
 //SO2 변환
 if(c[0] <= 0.02){
         ih[0]  = 50;
         il[0]  = 0;
         bph[0] = 0.02;
         bpl[0] = 0;
 }else if( 0.02 < c[0] && c[0] <= 0.05){
         ih[0]  = 100;
         il[0]  = 51;
         bph[0] = 0.05;
         bpl[0] = 0.021;
 }else if( 0.05 < c[0] && c[0] <= 0.15){
         ih[0]   = 250;
         il[0]   = 101;
         bph[0]  = 0.15;
         bpl[0]  = 0.051;
 }else if( 0.15 < c[0] && c[0] <= 1){
         ih[0]   = 500;
         il[0]   = 251;
         bph[0]  = 1;
         bpl[0]  = 0.151;
 }
 
 
 
 
 //CO변환          0	2	2.1	9	9.1	15	15.1	50  
 if(c[1] <= 2){
         ih[1]  = 50;
         il[1]  = 0;
         bph[1] = 2;
         bpl[1] = 0;
 }else if( 2 < c[1] && c[1] <= 9){
         ih[1]  = 100;
         il[1]  = 51;
         bph[1] = 9;
         bpl[1] = 2;
 }else if( 9 < c[1] && c[1] <= 15){
         ih[1]  = 250;
         il[1]  = 101;
         bph[1] = 15;
         bpl[1] = 9;
 }else if( 15 < c[1] && c[1] <= 50){
         ih[1]  = 500;
         il[1]  = 251;
         bph[1] = 50;
         bpl[1] = 15;
 }
 
 //O3 변환
 
 if(c[2] <= 0.03){
         ih[2]  = 50;
         il[2]  = 0;
         bph[2] = 0.03;
         bpl[2] = 0;
 }else if( 0.03 < c[2] && c[2] <= 0.09){
         ih[2]  = 100;
         il[2]  = 51;
         bph[2] = 0.09;
         bpl[2] = 0.031;
 }else if( 0.09 < c[2] && c[2] <= 0.15){
         ih[2]  = 250;
         il[2]  = 101;
         bph[2] = 0.15;
         bpl[2] = 0.091;
 }else if( 0.15 < c[2] && c[2] <= 0.6){
         ih[2]  = 500;
         il[2]  = 251;
         bph[2] = 0.6;
         bpl[2] = 0.151;
 }
 
 
 //NO2 변환
 
 if(c[3] <= 0.03){
         ih[3]  = 50;
         il[3]  = 0;
         bph[3] = 0.03;
         bpl[3] = 0;
 }else if( 0.03 < c[3] && c[3] <= 0.06){
         ih[3]  = 100;
         il[3]  = 51;
         bph[3] = 0.06;
         bpl[3] = 0.031;
 }else if( 0.06 < c[3] && c[3] <= 0.2){
         ih[3]  = 250;
         il[3]  = 101;
         bph[3] = 0.2;
         bpl[3] = 0.061;
 }else if( 0.2 < c[3] && c[3] <= 2){
         ih[3]  = 500;
         il[3]  = 251;
         bph[3] = 2;
         bpl[3] = 0.21;
 }
 
 
 
 //PM10 변환
 
 if(c[4] <= 30){
         ih[4]  = 50;
         il[4]  = 0;
         bph[4] = 30;
         bpl[4] = 0;
 }else if( 30 < c[4] && c[4] <= 80){
         ih[4]  = 100;
         il[4]  = 51;
         bph[4] = 80;
         bpl[4] = 31;
 }else if( 80 < c[4] && c[4] <= 150){
         ih[4]  = 250;
         il[4]  = 101;
         bph[4] = 150;
         bpl[4] = 81;
 }else if( 150 < c[4] && c[4] <= 600){
         ih[4]  = 500;
         il[4]  = 251;
         bph[4] = 600;
         bpl[4] = 151;
 }
 
 //PM2.5 변환
 
 if(c[5] <= 15){
         ih[5]  = 50;
         il[5]  = 0;
         bph[5] = 15;
         bpl[5] = 0;
 }else if( 15 < c[5] && c[5] <= 35){
         ih[5]  = 100;
         il[5]  = 51;
         bph[5] = 35;
         bpl[5] = 16;
 }else if( 35 < c[5] && c[5] <= 75){
         ih[5]  = 250;
         il[5]  = 101;
         bph[5] = 75;
         bpl[5] = 36;
 }else if( 75 < c[5] && c[5] <= 500){
         ih[5]  = 500;
         il[5]  = 251;
         bph[5] = 500;
         bpl[5] = 76;
 }
 
 
 //계산식
 
 let ip = [
 
 ]
 
 for(let i = 0; i < 6; ++i ){
 
     let cal = ((ih[i]-il[i]) / (bph[i]-bpl[i])) * (c[i] - bpl[i]) +il[i];
     
    ip.push( cal );
 
 
 }
 
 
 console.log(ip)
 
 
 
 let cai = Math.round(Math.max.apply(null,ip))*0.28
 
 console.log(Math.max.apply(null,ip))
 
 //cailocator의 위치를 지정
 $('.caibar').append('<div style = "transform:translate('+cai+'px, -50%)" class = "cailocator"/>')
 
  
 
  
 //일출 일몰 그래프 생성 sys.sunrise
 
 
 $.getJSON(url,function (data) {
 
 
     var today = new Date();
     today.setHours(0,0,0,0)
     let td = Math.round(today.getTime()/1000.0);
     console.log(td);
 
     let cav = $('<canvas/>')
     let sunrise     = data.sys.sunrise;
     let sunset      = data.sys.sunset;
     let gap         = (sunset - sunrise); 
    
     let dt      = data.dt
     
 
     let srx = sunrise - td;
     let ssx = sunset - td;
     let now = dt -td
     let risegap = sunrise - td;
     let sunhigh     = (srx + ssx)/2;
 
     let st =  $('.sun').innerWidth()/86400
 
     let t = st.toFixed(4);
 
     console.log(t)
 
 
     console.log(now*t)
 
 
 
 
 
 
 
     //밤낮변경
 
 
     let color = '#FFDF97';
 
     if( sunrise < dt && sunset > dt){
         color = '#FFDF97'
     }else{
         color = '#FFF8CE'
     }
   
 
 
 
 
     $('.cavcon').append(cav)
 
 
     var ctx = cav[0].getContext('2d');
 
        cav.attr('width', '333')  
        cav.attr('height', '80')  
    
 //     ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    //  ctx.beginPath() 
 //     ctx.arc( srx*t , 40, 6, 0, 2*Math.PI )
 //     ctx.fillStyle = color;
 //     ctx.fill();
 
 //     ctx.beginPath() 
 //     ctx.arc( ssx*t , 40, 6, 0, 2*Math.PI )
 
 //     ctx.fillStyle = color;
 //     ctx.fill();
 
 
     ctx.beginPath();
     ctx.moveTo(0,30)
     ctx.lineTo(333,30)
     ctx.strokeStyle = color;
     ctx.stroke();
 
 // 잘모르겠음,.,,,, 노가다로 제작한거라 변경할 필요가 있는데 점 세개를 지나는 곡선을 만들면 될거같은데
     let Pi = Math.PI;
     ctx.beginPath() 
     ctx.moveTo(-100,60)
     ctx.bezierCurveTo(-100,60,0,Math.sin(Pi/2)*30+60, srx*t,Math.sin(Pi/2)*30)
     ctx.stroke();
 
 
     ctx.beginPath() 
     ctx.moveTo(ssx*t,30)
     ctx.bezierCurveTo(ssx*t,30,333,Math.sin(Pi/2)*30+60,400,60)
     ctx.stroke();
     
 
     ctx.beginPath() 
     ctx.moveTo(srx*t,30)
     ctx.bezierCurveTo(srx*t,30,sunhigh*t ,(ssx-srx/2)*t,ssx*t,30)
     ctx.stroke();
 
     ctx.beginPath() 
     ctx.arc( now*t , Math.sin(Pi/(2*(sunhigh))*now)*30, 6, 0, 2*Math.PI )
     ctx.fillStyle = color;
     ctx.fill();
 
     console.log((ssx-srx/2)*t)
 
         }
         
  
 );
 
 
 
 
 
 
 })
 
     
 
 