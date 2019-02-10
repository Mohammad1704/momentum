axios({
    method : 'get',
    url : 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
})
.then((Response)=> {
    console.log(Response.data.quoteText)
    $('#qoutes').text('❝ '+Response.data.quoteText+' ❞')
});