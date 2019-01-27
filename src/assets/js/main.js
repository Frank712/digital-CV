$(function () {
  'use strict';

  $('div.event-program .info-course:first').show();

  $('.event-menu a').on('click', function() {
    $('.hidden-course').hide();
    var enlace = $(this);
    var classDiv = enlace.attr('href');
    $(classDiv).fadeIn(1000);
    return false;
  });
  
  $('div.event-detail').on('mouseover', function () {
    var id = $(this).attr('id');
    $('.logo-hide').hide();
    var id_logo = '#' + id + '-logo';
    console.log(id_logo);
    $(id_logo).show();
  });

  $('div.event-detail').on('mouseleave', function () {
    $('.logo-hide').hide();
  });


});
