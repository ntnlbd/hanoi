// Search modal opening closing ***********************************************

$('#search-modal').hide();
$('#open-search').click(function(e){
  e.preventDefault();
  $('#search-modal').show();
  $('#search-input').focus();
  $('body').toggleClass('modal-open');
});
$('#close-search').click(function(e){
  e.preventDefault();
  $('#search-modal').hide();
  $('body').toggleClass('modal-open');
});

// Header hiding on scroll ****************************************************

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

// Product images *************************************************************

$(".js-product-active-image-content").hide();
$(".js-product-active-image-content:first").show();

/* if in tab mode */
$(".js-product-image-control").click(function(event) {
  event.preventDefault();

  $(".js-product-active-image-content").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).show();

  $(".js-product-image-control").removeClass("is-active");
  $(this).addClass("is-active");

});
