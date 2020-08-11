/*
    
-- Created by KP, 2020.
-- Ilustraciones(ANTI) - SCRIPT

*/

window.onload = init();

function init() {
   open_navbar();
}

function open_navbar() {
   // vars
   var icon_menu = document.getElementById('icon_menu_navbar'),
       close_menu = document.getElementById('close_navbar'),
       container_navbar = document.getElementById('container_navbar'),
       box_behind = document.getElementById('box_behind_navbar');

   // function click
   icon_menu.addEventListener('click', function() {
      container_navbar.classList.add('active');
      box_behind.classList.add('active');
      document.body.style.overflow = 'hidden';

      close_menu.addEventListener('click', function() {
         container_navbar.classList.remove('active');
         box_behind.classList.remove('active');
         document.body.style.overflowY = 'scroll';
      });
   });
}