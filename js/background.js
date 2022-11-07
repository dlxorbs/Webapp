
    $(function(){
           

        let = url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.5667&lon=126.9783&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'

 
        $.getJSON(url,function (data) {

        $('.container').append('<div class="cloud"><img src="./weather/cloud.png" alt=""></div>')

        function loop() {
                    

            $('.cloud').css({right:-950});
            $('.cloud').animate ({
                right: '100%',
            }, 120000, 'linear',function(){
                loop();
            });
        }
        loop();


        })














  
    })



