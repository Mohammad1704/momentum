function imageSuccess(response){
    console.log(response.data.urls.regular);

    $("body").css('background-image', 'url("' +response.data.urls.regular + '")');

  
}
function imageFail(error){
    console.log(error)
}

axios({
method:'get',
 url:
 'https://api.unsplash.com/photos/random?client_id=09e3a799e388b4dd1580e0935f22ae35fa2d41cf069e83975e3cf8ac2258350f'
//  "https://images.unsplash.com/photo-1542838686-d4856db9ef1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjU1NDk0fQ"
// 'https://images.unsplash.com/photo-1542838686-d4856db9ef1e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU1NDk0fQ',
}).then(imageSuccess)
.catch(imageFail);


