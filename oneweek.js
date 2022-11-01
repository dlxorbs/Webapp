 

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

for(let i in Icon){
    $('.weekday:eq('+i+')').append('<img class = "icon-sm" src = '+ Icon[i] +' >')
}
    let day = ["일","월","화","수","목","금","토"]
    
    for(let i in Date){
        $('.weekday:eq('+i+')').append('<span class = "date" >'+day[Date[i]]+'</span>')
    }
   


    

 

    //min max로 너비 비율 지정하고 시작라인 선정?
    let weekmax = Math.round(Math.max.apply(null,Max))
    let weekmin = Math.round(Math.min.apply(null,Min))




    console.log(weekmin)
    console.log(weekmax)

    let graphwidth = Math.round(120/(weekmax - weekmin))
    console.log(graphwidth)
    
    for(let i in Date){
        let cav = $('<canvas class = "bar"/>')
        let maxtext = $('<span>'+Math.round(Max[i])+'</span>')
        let mintext = $('<span>'+Math.round(Min[i])+'</span>')
        
        $('.cav').eq(i).append(mintext)
  
        $('.cav').eq(i).append(cav)
      
        $('.cav').eq(i).append(maxtext)
 
        var ctx = cav[0].getContext('2d');
    
        cav.attr('width', '120')  
        cav.attr('height', '2')  
        


        // ctx.beginPath();
        // ctx.moveTo(0,20)
        // ctx.lineTo(120,20)
        // ctx.lineCap = 'round';
        // ctx.strokeStyle = '#ffffff';
        // ctx.stroke();

        
    
 
        var grad= ctx.createLinearGradient( (Min[i]-weekmin)*graphwidth,20,(Max[i]-weekmin)*graphwidth,20);

        grad.addColorStop(0, "#4AD9ED");
        grad.addColorStop(1, "#E7F99E");
        
        ctx.strokeStyle = grad;

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.moveTo((Math.round(Min[i])-weekmin)*graphwidth,1);
        ctx.lineTo((Math.round(Max[i])-weekmin)*graphwidth,1);
        ctx.stroke();

        
    
    }

 

   




    
})

