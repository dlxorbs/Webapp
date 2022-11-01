$(function(){
 var canvas = $('<canvas class = "cloud"></canvas>')

 $('.ui-page').append(canvas)
 setInterval(() => {

    let i = 0 ;
     
    let dx = i++
    

    $('.cloud').css({
        'right' : dx +'px'
    })
 }, 1000);

})