// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap

$(document).ready(function(){

  $("input.btn.btn-success").on("click", function() {
    $('#error-field').html('');
    if($('#name-field input').val() ===''){
      $('#error-field').append('<br><div class="alert alert-danger">Oh snap! No name</div>')
    }
    if($('#email-field input').val() ==='') {
       $('#error-field').append('<br><div class="alert alert-danger">Oh snap! No email!</div>')
    }
    if($('#email-field input').val() !=='' && $('#name-field input').val() !=='')  {
      $('#error-field').append('<br><div class="alert alert-success">Thanks!</div>')
    }
  })
});
