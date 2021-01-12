$(document).ready(function () {

  // CIERRE
  // $.fancybox.open({
  //   src: 'cierre.html',
  //   type: 'iframe',
  //   toolbar: false,
  //   smallBtn: true,
  //   opts: {
  //     iframe: {
  //       preload: false,
  //       css: {
  //         width: '500px',
  //       }
  //     }
  //   }
  // });

  // MENU
  $(".open-menu").click(function () {
    $("html").toggleClass("menu-open");
    return false;
  });

  $("#menu .menu-close, #menu-blocker").click(function () {
    $("html").removeClass("menu-open");
    return false;
  });

  $("#menu .video").click(function () {
    $("html").removeClass("menu-open");
  });

  $("#menu .sel span").prepend("<img src='images/menusel.png' />");

  if ($('body').is('#hom')) {

    var $window = $(window);

    $window.on('resize',function () {
      var imgRatio = 1.4;
      if ($window.width() >= 600) {
        imgRatio = 0.58;
      }
      $(".intro").height($(".intro").width() * imgRatio);

    }).trigger("resize");


    function onSlide1() {
      $(".slide img").css({"opacity": 0});
      $(".slide1 .tit").delay(150).animate({"opacity": 1}, 150);
      $(".slide1 .img").delay(350).animate({"opacity": 1}, 150);
      $(".slide1 .txt").delay(550).animate({"opacity": 1}, 150);
    }

    function onSlide2() {
      $(".slide img").css({"opacity": 0});
      $(".slide2 .tit").delay(150).animate({"opacity": 1}, 150);
      $(".slide2 .img").delay(350).animate({"opacity": 1}, 150);
      $(".slide2 .txt").delay(550).animate({"opacity": 1}, 150);
    }

		$(".intro.owl-carousel").owlCarousel({
			loop: true,
      margin: 0,
      mouseDrag: false,
      touchDrag: false,
      autoplay: true,
      animateOut: 'fadeOut',
			autoplayTimeout: 6000,
			autoplaySpeed: 0,
      autoplayHoverPause: false,
      pagination: false,
      navigation: false,
			items: 1,
		}).on('changed.owl.carousel', function(event) {
      switch (event.item.index) {
        case 3:
          onSlide2();
          break;
        case 2:
          onSlide1();
          break;
      }
    });

    onSlide1();

  } else {

    // NANO SCROLLER (Delay para que renderice con el alto correcto)
    if($(".nano").length) {
      setTimeout(function() {
        $(".nano").nanoScroller({ alwaysVisible: true });
      }, 150)
    };

    setTimeout(
      function() {
        if(!$(".nano-pane").is(':visible')) {
          $(".nano .nano-content").css({"padding-right": 0, "right": 0});
        }
      }, 200);

  }

});

