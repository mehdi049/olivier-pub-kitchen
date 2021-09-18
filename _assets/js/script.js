$(function () {
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-toggler").attr("aria-expanded", "false");
    $("#navbar-content").hide(500);
  });

  $(document).ready(function () {
    $("#nav-section").load("nav.html");
    $("footer").load("footer.html");
  });
});
