// ==UserScript==
// @name    Watch Later and Hide
// @namespace   doofmars
// @description Adds option for "Watch Later and Hide" to the subscription page
// @include   http*://*youtube.com/feed/subscriptions*
// @version   1.1
// @grant     metadata
// @require   https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var delay = 50;

$(document).ready(function() {
  var shelf = $('#contents');
  console.log('loaded');
  //Add control to each item of the shelf
  shelf.children('ytd-item-section-renderer').each(function(index, el) {
    var section = $(this);
    var link = $('<a>', {
      text: 'Watch Later and Hide',
      title: 'Click to add this video to Watch Later and Hide it from your subscriptions',
      click: function() {
        setTimeout(function() {
          section.find('.dropdown-trigger').trigger('click');
        }, delay * 1);
        setTimeout(function() {
          $('ytd-menu-service-item-renderer.style-scope:nth-child(1)').trigger('click');
        }, delay * 2);
        setTimeout(function() {
          section.find('.dropdown-trigger').trigger('click');
        }, delay * 3);
        setTimeout(function() {
          $('ytd-menu-service-item-renderer.style-scope:nth-child(3)').trigger('click');
        }, delay * 4);
        
      }
    }).css('font-size', '14pt').css('float', 'left');
    
    var hide = $('<a>', {
      text: 'Hide video  ',
      title: 'Click to Hide video from your subscriptions',
      click: function() {
        setTimeout(function() {
          section.find('.dropdown-trigger').trigger('click');
        }, delay * 1);
        setTimeout(function() {
          $('ytd-menu-service-item-renderer.style-scope:nth-child(3)').trigger('click');
        }, delay * 2);
      }
      
    } ).css('font-size', '14pt').css('float', 'left');
    
    section.find('.text-wrapper').append(hide);
    section.find('.text-wrapper').append(link);
  });
});
