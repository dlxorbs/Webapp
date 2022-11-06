
$(function(){
    let = url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst'+
    '?serviceKey=pYHDTmgYzZjveoevXJ45BoAaA4IqnHc1nSH6O8I5ZXLwGiBYEZL6OPRUGFcFsbXmaykNTzmT/VksWUXGU4Ip8w==&numOfRows=10&pageNo=1'+ 
    '&regId=11B00000&tmFc=202211060600&dataType=JSON'



    let urls = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'+
    '?serviceKey=pYHDTmgYzZjveoevXJ45BoAaA4IqnHc1nSH6O8I5ZXLwGiBYEZL6OPRUGFcFsbXmaykNTzmT%2FVksWUXGU4Ip8w%3D%3D&numOfRows=200&pageNo=1 '
    +'&base_date=20221106&base_time=1100&nx=60&ny=127&dataType=JSON&fcstTime=1700'


$.getJSON(urls ,function (data) {


    console.log(data)
    });

})