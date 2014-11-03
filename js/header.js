(function() {
  var didScroll = false;

  $(window).on('scroll', function () {
    if (didScroll) return;

    didScroll = true;
    setTimeout(function () {
      $('.navbar-default').toggleClass('navbar-shrink', $(document).scrollTop() >= 100);
      didScroll = false;
    }, 50);
  });
})();
