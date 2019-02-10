function imageSuccess(response){
    console.log(response.data.urls.regular);

    $("body").css("background-image", "url(" + response.data.urls.regular + ")");

  
}
function imageFail(error){
    console.log(error)
}

axios({
method:'get',
 url:
 'https://api.unsplash.com/photos/random?client_id=09e3a799e388b4dd1580e0935f22ae35fa2d41cf069e83975e3cf8ac2258350f'
}).then(imageSuccess)
.catch(imageFail);


