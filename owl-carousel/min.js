$('.owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },

    425: {
      items: 2
    },

    768: {
      items: 3
    },
  }
})

$(document).ready(function(){
  let owl = $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false 
  });

  // Стрілки
  $(".custom-next").click(function(){
    owl.trigger("next.owl.carousel");
  });

  $(".custom-prev").click(function(){
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next, .custom-prev").on("mouseenter", function() {
    owl.trigger("stop.owl.autoplay");
  });

  $(".custom-next, .custom-prev").on("mouseleave", function() {
    owl.trigger("play.owl.autoplay", [4000]);
  });
});