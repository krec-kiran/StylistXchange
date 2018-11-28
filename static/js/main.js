

const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(function() {
  $('#message').fadeOut('slow');
}, 3000);

$(function () {
    $('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD'
    })
});
