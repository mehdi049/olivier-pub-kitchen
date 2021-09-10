$(function () {
  /** open /close menu */
  $(".navbar-toggler").click(function () {
    let expended = $(this).attr("aria-expanded");
    $(this).attr("aria-expanded", "" + expended === "false");
    $("#navbar-content").toggle(500);
  });

  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-toggler").attr("aria-expanded", "false");
    $("#navbar-content").hide(500);
  });
});
