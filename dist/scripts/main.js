"use strict";$(function(){function t(){if(0!=s){var t=$("#clients-list li:first");t.animate({"margin-left":"-320px"},3500,"linear",function(){t.remove().css({"margin-left":"0px"}),$("#clients-list li:last").after(t)})}}var n=$("#clients-list"),e=n.children().length,i=320*e;n.css("width",i);var s=!0,l=0;setInterval(t,l);$(document).on({mouseenter:function(){s=!0},mouseleave:function(){s=!0}},"#clients")});