$(document).ready(function () {
 
  // below is a jquery function the will make the menu apear when the menu icon is clicked on 
  $(".menu__icon").click(function () {
      $(".menu").slideToggle();
      $(".menu__list").animate({
      width:"11%",
      height:"180px",
      opacity:"1"},1500);
    });
    // below is a function that will make the images fade in and out when the page loads
  $("img").fadeOut("slow").fadeIn("slow").fadeOut(500).fadeIn(600)
    });
  