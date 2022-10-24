
 //일출 일몰 그래프 생성 sys.sunrise
 let = url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'

 
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
    

    let srx = (sunrise - td)/60;
    let ssx = (sunset - td)/60;
    let now =( dt -td)/60
    let risegap = sunrise - td;
    let sunhigh     = (srx + ssx)/2;

    let st =  $('.sun').innerWidth()/1440

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
   
    // ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.beginPath() 
    ctx.arc( srx*t , 40, 6, 0, 2*Math.PI )
    ctx.fillStyle = color;
    ctx.fill();

    ctx.beginPath() 
    ctx.arc( ssx*t , 40, 6, 0, 2*Math.PI )

    ctx.fillStyle = color;
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(0,40)
    ctx.lineTo(333,40)
    ctx.strokeStyle = color;
    ctx.stroke();


    let Pi = Math.PI;


    ctx.moveTo(0, 40)

    ctx.beginPath();
    for(let i=0; i < 1440; i++){
       let h = 40 + 20 * Math.sin( i * 2 * Pi/1440 + Pi/1440 * sunhigh)
       ctx.lineTo( st*i, h)
       ctx.lineWidth = 2;
    //    ctx.arc(st*i,h,0.25,0,2*Math.PI)
    }
    ctx.stroke();


    console.log(srx)






//      ctx.moveTo(-100,60)
//      ctx.bezierCurveTo(-100,60,0,Math.sin(Pi/2)*30+60, srx*t,Math.sin(Pi/2)*30)
//      ctx.stroke();


//      ctx.beginPath() 
//      ctx.moveTo(ssx*t,30)
//      ctx.bezierCurveTo(ssx*t,30,333,Math.sin(Pi/2)*30+60,400,60)
//      ctx.stroke();
    

//      ctx.beginPath() 
//      ctx.moveTo(srx*t,30)
//      ctx.bezierCurveTo(srx*t,30,sunhigh*t ,(ssx-srx/2)*t,ssx*t,30)
//      ctx.stroke();

//      ctx.beginPath() 
//      ctx.arc( now*t , Math.sin(Pi/(2*(sunhigh))*now)*30, 6, 0, 2*Math.PI )
//      ctx.fillStyle = color;
//      ctx.fill();

    console.log((ssx-srx/2)*t)




});
