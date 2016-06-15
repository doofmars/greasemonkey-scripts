// ==UserScript==
// @name        Watch Later and Hide
// @namespace   doofmars
// @description Adds option for "Watch Later and Hide" to the subscription page
// @include     http*://*youtube.com/feed/subscriptions*
// @version     1
// @grant       metadata
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var listView = '.section-list';
var gridView = '.shelf-content';

$(document).ready(function() {
    //Determine if we have grid or list view in the shelf
    var shelf = $(gridView);
    if (shelf.length === 0) {
        shelf = $(listView);
    }
    
    //Add control to each item of the shelf
    shelf.children('li').each(function(index, el) {
        var section = $(this);
        var link = $('<a>', {
            'data-video-ids': section.find('.addto-watch-later-button').attr('data-video-ids'),
            class: 'yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button spf-nolink hide-until-delayloaded addto-watch-later-button yt-uix-tooltip',
            text: 'Watch Later and Hide',
            title: 'Click to add this video to Watch Later and Hide it from your subscriptions',
            click: function() {
                setTimeout(function() {
                    //Function to prevent the closing of multiple tragets
                    var toClose = section.find('.yt-uix-menu-close-on-select');
                    if (toClose.length === 1) {
                        section.find('.yt-uix-menu-close-on-select').trigger('click');
                    } else {
                        console.log(toClose.length);
                        alert('Close target not found!');
                    }
                }, 500);
            }
        });
        var hide = $('<a>', {
            text: 'Hide video  ',
            title: 'Click to Hide video from your subscriptions',
            click: function() {
                //Function to prevent the closing of multiple tragets   
                var toClose = section.find('.yt-uix-menu-close-on-select');
                if (toClose.length === 1) {
                    section.find('.yt-uix-menu-close-on-select').trigger('click');
                } else {
                    alert('Close target not found!');
                }
            }
            
        } );

        section.find('.yt-lockup-content').append(hide);
        section.find('.yt-lockup-content').append(link);
    });
});
