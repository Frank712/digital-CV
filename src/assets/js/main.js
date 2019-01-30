$(function () {
  'use strict';

  var map = L.map('mapid').setView([19.423775, -98.973929], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([19.423775, -98.973929]).addTo(map)
    .bindPopup('Hello!<br> I\'m here .')
    .openPopup();

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
