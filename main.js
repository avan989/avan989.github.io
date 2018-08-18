

//Jquery
$(document).ready(function(){

   var scroll = $('.scroll');
   //scrolling
   scroll.click(function(event){
    event.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top}, 1000);
   });

   //opening dropdown menu
   var openDropDown = $('#headerButton');
   var closeDropDownMenu = $('#dropDownMenuItems');

   openDropDown.click(function(event){
     closeDropDownMenu.css({visibility: "visible", opacity: "1"});
   });

   //closing drop down menu item
   closeDropDownMenu.click(function(event){
     closeDropDownMenu.css({visibility: "hidden", opacity: "0"});
   });

});
