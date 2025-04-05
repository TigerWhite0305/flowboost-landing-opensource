(function ($) {
  "use strict";

  // Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();
  
    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
     }
  });

  // Inizializza la modale se il trigger esiste
  const modalTrigger = $("#modal_trigger");
  if (modalTrigger.length) {
    modalTrigger.leanModal({
      top: 100,
      overlay: 0.6,
      closeButton: ".modal_close"
    });
  }

  // Toggle menu dropdown mobile
  const menuTrigger = $(".menu-trigger");
  if (menuTrigger.length) {
    menuTrigger.on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Animazione di caricamento pagina
  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });


  // Frequently Asked Questions Toggle
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });



  //Scroll top button

  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);


})(window.jQuery);
