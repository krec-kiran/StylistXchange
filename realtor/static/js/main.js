

const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(function() {
  $('#message').fadeOut('slow');
}, 3000);

$(document).ready( function () {
    $('#table_id').DataTable();
} );
