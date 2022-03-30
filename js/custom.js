$(document).ready(function () {

  //popup 
  new VenoBox({
    selector: ".portfolio-link"
  });

  //type
  var typed = new Typed('.type', {
    strings: [" professional web designa", "web designar.", "freelancer"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    loop: true,
  });
  //animated
  AOS.init({
    duration: 2000,
    offset: 50,
    easing: 'ease',
  });
  //scroll

  $(Window).scroll(function () {
    var scrolling = $(this).scrollTop()
    //scroll window bottom to top
    if (scrolling > 350) {
      $('.scroll-top').fadeIn()
    } else {
      $('.scroll-top').fadeOut()
    }

    //nav fixed
    if (scrolling > 350) {
      $('.navbar').addClass('nav-fix')
    } else {
      $('.navbar').removeClass('nav-fix')
    }

  })
  //click scroll top
  $('.scroll-top').click(function () {
    $('html,body').animate({
      scrollTop: '0px',
    }, 1500)
  })
})