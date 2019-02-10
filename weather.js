
axios({
    method : 'get',
    url : 'http://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&lang=ar&appid=53706e2ddb37ee361ef5dc850625424f'
})

.then((response) => {
    console.log(response);
// if(response.data.weather.main === "Clouds"){
//     let Clouds= '☁️';
//     response.data.weather.main = Clouds;
// }
// for(let i=response.data.weather[0];i>=response.data.weather)
    $('#weather1').text(' ' + response.data.name );
    $('#weather2').append( ''+response.data.main.temp+ '°  '+' ☁️');
    $('#weather3').append(''+response.data.main.humidity+'%');

})

.catch((Error) => {
    console.log(error);
});

