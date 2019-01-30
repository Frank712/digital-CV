$(function () {
  'use strict';

  $('nav.event-menu i.fa-crosshairs').hide();
  $('div.event-program .info-course:first').show();
  var firstA = $('nav.event-menu a:first');
  var firstI = $('nav.event-menu a:first i:first');
  var secondI = $('nav.event-menu a:first i:nth-child(2)');
  $(firstA).addClass('activelink');
  $(firstI).show();
  $(secondI).hide();

  $('.event-menu a').on('click', function() {
    $('nav.event-menu i.fa').show();
    $('.hidden-course').hide();
    $('nav.event-menu a').removeClass('activelink')
    $('nav.event-menu i.fa-crosshairs').hide();
    var enlace = $(this);
    var classDiv = enlace.attr('href');
    $(this).addClass('activelink');
    $(this.firstChild).show();
    $(this.childNodes[1]).hide();
    $(classDiv).fadeIn(750);
    return false;
  });
  
  $('div.event-detail').on('mouseover', function () {
    var id = $(this).attr('id');
    $('.logo-hide').hide();
    var id_logo = '#' + id + '-logo';
    $(id_logo).show();
  });

  $('div.event-detail').on('mouseleave', function () {
    $('.logo-hide').hide();
  });

});
