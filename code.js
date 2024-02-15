// ==UserScript==
// @name         VK Education UX upgrade
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Level up UX to VK Education
// @author       skat45
// @match        https://education.vk.company/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let uid = $("meta[name = 'centrifuge-notify']").attr('content').slice(8);
    let rating_url = '/cabinet/user_' + uid + /progress/;

    $('.js-main-menu').prepend('<li id="skat45_talk" class="technopark__menu__item"><a href="/talk/">Чаты</a></li>');
    $('.js-main-menu').prepend('<li id="skat45_grade" class="technopark__menu__item"><a href="' + rating_url + '">Успеваемость</a></li>');
    $('.js-main-menu').prepend('<li id="skat45_feed" class="technopark__menu__item"><a href="/feed/">Лента</a></li>');

    if (window.location.pathname == '/feed/') {
        $('#skat45_feed').addClass('active');
    }
    if (window.location.pathname == rating_url) {
        $('#skat45_grade').addClass('active');
    }
    if (window.location.pathname == '/talk/') {
        $('#skat45_talk').addClass('active');
    }
    $('.avatar').css('border', '1px solid #999');
})();
