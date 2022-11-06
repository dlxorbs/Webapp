$(function(){
    
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
     ppm*data.list[0].components.so2,
     ppm*data.list[0].components.co,
     ppm*data.list[0].components.o3,
     ppm*data.list[0].components.no2,
     10**(-1)*data.list[0].components.pm10,
     10**(-1)*data.list[0].components.pm2_5
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
     bpl[1] = 15.1;
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

 let cal = (((ih[i]-il[i]) / (bph[i]-bpl[i])) * (c[i] - bpl[i])) +il[i];
 
ip.push( cal );


}


console.log(ip)



let cai = Math.round(Math.max.apply(null,ip))

console.log(Math.max.apply(null,ip))

//cailocator의 위치를 지정
$('.caibar').append('<div style = "transform:translate('+cai*0.28+'px, -50%)" class = "cailocator"/>')

if(cai <= 50 && cai >= 0 ){
     $('.caitext').text( Math.round(cai) + ' - ' + '좋음')
     $('.caisuggest').text( '현재대기질 지수는' + ' ' + Math.round(cai) + ' 수준으로 야외활동하기 매우 좋습니다.')
} else if(cai <= 150 && cai > 50 ){
     $('.caitext').text( Math.round(cai) + ' - ' + '보통')
     $('.caisuggest').text( '현재대기질 지수는' + ' ' + Math.round(cai) + ' 수준으로 야외활동하기 좋습니다.')
} else if(cai <= 300 && cai > 150 ){
     $('.caitext').text( Math.round(cai) + ' - ' + '나쁨')
     $('.caisuggest').text( '현재대기질 지수는' + ' ' + Math.round(cai) + ' 수준으로 야외활동을 자제하는 것이 좋습니다.')
} else if(cai <= 500 && cai > 300 ){
     $('.caitext').text( Math.round(cai) + ' - ' + '매우위험')
     $('.caisuggest').text( '현재대기질 지수는 ' + ' ' + Math.round(cai) + ' 수준으로 야외활동을 하지 않는 것이 좋습니다.')
}





})

})