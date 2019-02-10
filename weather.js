
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

    $('h2').text('weather in ' + response.data.name +' is  ' + response.data.weather[0].main+ ' and \n'+response.data.weather[0].icon);

})

.catch((Error) => {
    console.log(error);
});

