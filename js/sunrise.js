
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
   
   
    let dt          = data.dt
    

    let srx         = Math.round((sunrise - td)/60);
    let ssx         = Math.round((sunset - td)/60);
    let now         = (dt -td)/60
    let sunhigh     = Math.round((srx + ssx)/2);

    let st =  $('.sun').innerWidth()/1440

    let t = st.toFixed(4);

    console.log(data)


    console.log(now*t)


    //일출 일몰 정보제공

    $('.sunrise').append('<p>오전</p>')
    $('.sunrise').append('<p>'+ moment(sunrise*1000).format('hh:mm') +'</p>')

    $('.sunset').append('<p>오후</p>')
    $('.sunset').append('<p>'+ moment(sunset*1000).format('hh:mm') +'</p>')


    //일출그래프 생성


    $('.cavcon').append(cav)



    let color = '#FFDF97';

    if( sunrise < dt && sunset > dt){
        color = '#FFDF97'
    }else{
        color = '#FFF8CE'
    }


    
    var ctx = cav[0].getContext('2d');

       cav.attr('width', '333')  
       cav.attr('height', '80')  
   
    // ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);


    ctx.beginPath();
    // ctx.arc(srx*st, 40, 4 , 0, 2*Math.PI)
    // ctx.arc(ssx*st, 40, 4 , 0, 2*Math.PI)
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
       let h =  20 * Math.cos(((sunhigh)/360 *  Pi * (i)+Pi/2)/1440) + 40
        ctx.lineTo( st*i, h)
       ctx.lineWidth = 1;
    }

    ctx.stroke();

    
    ctx.beginPath();
    let h =  20 * Math.cos(((sunhigh)/360 *  Pi * (now)+Pi/2)/1440) + 40

    ctx.arc( now*st , h , 6, 0, 2*Math.PI )

    ctx.fillStyle = color;
    ctx.fill();

    console.log(sunhigh)
    console.log( srx)





    // let h =  20 * Math.sin(((ssx + srx)/720 * Pi * (now-sunhigh)+Pi/4)/1440) + 40

});
