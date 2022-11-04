
$(function(){
    let = url = 'https://pro.openweathermap.org/data/2.5/weather?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'
$.getJSON(url ,function (data) {

    console.log(data)
        let visibility = data.visibility;
        let sight     = visibility/1000;


        $('.sight').append('<sapn class = kilometer>'+ sight +' km </span>')
        
    }
);

})