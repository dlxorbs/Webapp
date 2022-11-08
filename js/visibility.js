
$(function(){
    let = url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'
$.getJSON(url ,function (data) {

    console.log(data)
        let visibility = data.visibility;
        let sight     = visibility/1000;


        $('.sightcon').prepend('<span class = "kilometer">'+ sight +' km </span>')
     
        if(sight <= 10 && 7.5 < sight){
            $('.nowsight').append('현재 매우'+ '<br>' +'좋은 상태입니다.')
        }else if(sight <= 7.5 && 5 < sight){
            $('.nowsight').append('현재'+ '<br>' +'좋은 상태입니다.')
        }else if(sight <= 5 && 2.5 < sight){
            $('.nowsight').append('현재 잘 보이지'+ '<br>' +'않는 상태입니다.')
        }else{
            $('.nowsight').append('운전하기 '+ '<br>' +'위험한 상태입니다.')
        }



    }
);

})