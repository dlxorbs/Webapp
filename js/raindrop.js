
$(function(){


    let = urld = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=37.5667&lon=126.9783&cnt=10&appid=cc20170b0ec2d8890b503eaeeee1f93f&units=metric&lang=kr'


    let Raindrop = [

    ]

    let day = ["일","월","화","수","목","금","토"]

$.getJSON(urld ,function (data) {

    // Daily에서 강우확률 pop 도출

        for(let i = 0; i < 7; i++){



            let dom = $('<div> </div>')

                      
            let dt      = data.list[i].dt
            let time    = moment(dt*1000).lang("ko").day()

            dom.append('<h4>'+ day[time] + '</h4>')


            let pop = data.list[i].pop *100;

            Raindrop.push(Math.round(pop))


            dom.append( '<p>'+Raindrop[i]+'% </p>')
    
            $('.raindrop').append(dom)


        }

        
        let maxlocation = Raindrop.indexOf(Math.max(...Raindrop))


        $('.raindrop>div').eq(maxlocation).css({
            'color' : '#FF7A00'
        })
    
        console.log(Raindrop.indexOf(Math.max(...Raindrop)))


   

    });


})