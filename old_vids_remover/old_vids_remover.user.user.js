// ==UserScript==
// @name    Remove old vids
// @namespace   Mars
// @description Hides videos older than 1 week
// @version   1.1
// @include   http*://*youtube.com/feed/subscriptions*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant metadata
// ==/UserScript==


var searchstring1 = 'weeks';
var searchstring2 = 'month';

function findVids() {
  $('#contents').children('ytd-item-section-renderer').each(function(index, el) {
    if ($(this).find('span.ytd-video-meta-block').text().indexOf(searchstring1) >= 0 || 
      $(this).find('span.ytd-video-meta-block').text().indexOf(searchstring2) >= 0) {
    $(this).css( "background-color", "grey" );
    }
  });
}


$( document ).ready( function(){
  setInterval(findVids, 5000);
});