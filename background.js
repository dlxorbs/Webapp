
    $(function(){
           

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



