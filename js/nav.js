$( document ).ready(function() {
  // console.log("hello");
  // if(!$('body').hasClass('fp-viewing-section1')) {
  //   console.log("hi");
  //   $(".navigation").css("display","flex");
  // }
  // else if (!$('body').hasClass('fp-viewing-section2')) {
  //   console.log("here");
  //   $(".navigation").css("display","flex");
  // }

  $(".ui-responsiveTitles" ).click(function(event) {
    console.log("hello");
    event.preventDefault();
  });
});
