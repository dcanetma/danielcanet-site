$(function () {
  $("a.toggle-mode").on("click", function (event) {
    event.preventDefault();
    $("body").toggleClass("dark-mode");
  });
});
