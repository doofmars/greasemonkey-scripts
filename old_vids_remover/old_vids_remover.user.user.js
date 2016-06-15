// ==UserScript==
// @name        Remove old vids
// @namespace   Mars
// @description Hides videos older than 1 week
// @version     1
// @include     http*://*youtube.com/feed/subscriptions*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant metadata
// ==/UserScript==


var searchstring1 = 'weeks';
var searchstring2 = 'month';

$( document ).ready( function(){
    $('.section-list').children('li').each(function(index, el) {
        //console.log(el);
        //console.log($(this).find('.yt-lockup-meta-info>li:first-child').text());
        if ($(this).find('.yt-lockup-meta-info>li:first-child').text().indexOf(searchstring1) >= 0 || 
            $(this).find('.yt-lockup-meta-info>li:first-child').text().indexOf(searchstring2) >= 0) {
                $(this).css( "background-color", "black" )
        }
    });
});