 

//일주일 간의 날씨


let urld = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'
$.getJSON(urld, function(data){


    let Max = [
       
    ]

    let Min= [

    ]


    let Icon = [

    ]
    let Date = [

    ]




    console.log (data)


    for(let i = 0; i < 7; i++){
   
        let temp = data.list[i].temp;
        let min = data.list[i].temp.min;
        let max = data.list[i].temp.max;

        Max.push(max);
        Min.push(min);

      
        //min max를 array로 빼와서 최댓값 최솟값 구하기

 

        let dt      = data.list[i].dt
        let time    = moment(dt*1000).lang("ko").day()
        let icon    = data.list[i].weather[0].icon
        let imgURL  = './weather/' + icon + '.svg'

        Icon.push(imgURL);
        Date.push(time);
        console.log(time)
      
    }

    
    console.log (Icon)

//이거도 수정 필요

    
for(let i in Date){
        $('.info > .weekday:eq('+i+')').append('<span class = "date" >'+Date[i]+'</span>')
    }
for(let i in Icon){
            $('.info > .weekday:eq('+i+')').append('<img class = "icon_sm" src = '+ Icon[i] +' >')
        }


    

 

    //min max로 너비 비율 지정하고 시작라인 선정?
    let weekmax = Math.round(Math.max.apply(null,Max))
    let weekmin = Math.round(Math.min.apply(null,Min))

    
    console.log(weekmin)
    console.log(weekmax)

    let graphwidth = Math.round(120/(weekmax - weekmin+1))
    console.log(graphwidth)
    

    let cav = $('<canvas class = "bar"/>')
 
    $('.cav').append(cav)
        var ctx = cav[0].getContext('2d');

        $('.bar').attr('width', '120')  
        $('.bar').attr('height', '40')  
        

        ctx.beginPath();
        ctx.moveTo(0,20)
        ctx.lineTo(120,20)
        ctx.strokeStyle = 'red';
        ctx.stroke();




    
})

