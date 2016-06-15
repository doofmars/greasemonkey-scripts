// ==UserScript==
// @name        hide these videos layout fix
// @namespace   doofmars
// @description Fixes the misalignment of the "Hide these videos" on the subscription page.
// @version     1
// @include     http*://*youtube.com*
// @grant       GM_addStyle
// ==/UserScript==


GM_addStyle( ".yt-uix-button-menu-action-menu { right 100px !important; left: 1px !important; top: -10px !important; width: 300px !important;}" );
GM_addStyle( ".yt-ui-menu-content  { margin-top: -40px !important; margin-left: 30px !important; width: 100px !important}" );
//GM_addStyle( ".yt-uix-button, .yt-uix-button-size-default, .yt-uix-button-lockup-action-menu, .yt-uix-button-empty, .yt-uix-button-has-icon no-icon-markup, .yt-uix-menu-trigger { padding-left: 20px !important; padding-right: 20px !important; height: 50px !important; }" );
