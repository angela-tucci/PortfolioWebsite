$(document).ready(function() {
  //scroll to top of page
  $("#homeLink").click(function() {
    $("html, body").animate(
      { scrollTop: $("#container").offset().top },
      "slow"
    );
  });

  //scroll to contact
  $("#contactLink").click(function() {
    $("html, body").animate(
      { scrollTop: $("#contactMe").offset().top },
      "slow"
    );
  });

  //scroll to portfolio
  $("#portfolioLink").click(function() {
    $("html, body").animate(
      { scrollTop: $("#portfolio").offset().top },
      "slow"
    );
  });
});
