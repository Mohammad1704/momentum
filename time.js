axios({
    method : 'get',
    url : 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js'
})

.then( (response) => {console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
  $('#time').text(moment().format(' h:mm A'))
  $('#date').text(moment().format('MMMM Do  YYYY '))
})
