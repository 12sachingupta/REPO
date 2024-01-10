$(document).ready(function() {
var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
$(window).on('load resize', function(){
if ($(window).width() < 1023 ) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            setTimeout(function(){$('#preloader img').fadeIn();}, 1);
            setTimeout(function(){$('#preloader').fadeIn();}, 1);
            setTimeout(function(){$('#preloader div p').show();}, 200);
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            setTimeout(function(){$('#preloader img').fadeOut();}, 400);
            setTimeout(function(){$('#preloader').fadeOut();}, 900);
            $('#preloader div p').hide();
        }
        if (isTouchDevice) {
          $('.custom-cursor').hide();
        }else{
        $(document).mouseleave(function () {
           $('.custom-cursor').hide();
        });
        $(document).mouseenter(function () {
           $('.custom-cursor').show();
        });
        };
}else{
if (isTouchDevice) {
  $('.custom-cursor').hide();
}else{
$(document).mouseleave(function () {
   $('.custom-cursor').hide();
});
$(document).mouseenter(function () {
   $('.custom-cursor').show();
});
};
$("#home-video")&& $("#vincere-video")&& $("#vincere-video-loop").on("canplay", function() {
    setTimeout(function(){$('#preloader img').fadeOut();}, 400);
    setTimeout(function(){$('#preloader').fadeOut();}, 900);
});
};
});
$('body').addClass('page-load');
setTimeout(function(){$('.home .section-nav').addClass('hvr-puls'); }, 300);

$('#navigation').fadeOut();
$('#nav-glitch').fadeOut();
$('#menu-icon').on('click', function() {
  if (!$(this).hasClass('close')) { 
    $(this).addClass('close'); 
    setTimeout('$( "#navigation" ).addClass("slow-move"); ', 300);
  $( "body" ).addClass('menu-open'); 
  $('#navigation').fadeIn();
  } else { // если есть
    $(this).removeClass('close'); 
    $( "body" ).removeClass('menu-open');
    $('#navigation').fadeOut();
  $("#navigation").delay(800);
   setTimeout('$( "#navigation" ).removeClass("slow-move"); ', 300);

  }
});

$("#logo").click(function() {
    $('#menu-icon').removeClass('close'); 
    $( "body" ).removeClass('menu-open');
    $('#navigation').fadeOut();
    fullpage_api.moveTo(1);
    $('.section.home').find('.fp-tableCell').hide();
    setTimeout(function(){$('.section.home').find('.fp-tableCell').fadeIn('slow');}, 500);
    $('.section.home').find('.loop').trigger('play');
});

$("#mob-logo").click(function() {
    $('#menu-icon').removeClass('close'); 
    $( "body" ).removeClass('menu-open');
    $('#navigation').fadeOut();
    fullpage_api.moveTo(1);
    $('.section.home').find('.fp-tableCell').hide();
    setTimeout(function(){$('.section.home').find('.fp-tableCell').fadeIn('slow');}, 500);
    $('.section.home').find('.loop').trigger('play');
});

    $("#navigation li a").click(function() {
    var sectionzg = $(this).attr('data-menu');
    $('.'+sectionzg).find('.loop').trigger('play');
    $('.'+sectionzg).find('video')[0].currentTime = 0;
     $('#menu-icon').removeClass('close');
     $('body').removeClass('menu-open');
     $('#navigation').fadeOut();
     $("#navigation").delay(800);

  });


$('textarea.custom-hover').blur(function()          
{                   
  if( $(this).val() ) {                  
      $(this).addClass('sp-l');
    }
});

$(".email-feid").keyup(function(e) {
    this.value = this.value.replace(/[^-a-zA-Z0-9_.,@/]+/, '');
});


$(document).on('click', '.active .arrow-nav.custom-hover', function(){
fullpage_api.moveSectionDown();       
});

/*width + resize*/
$(window).on('load resize', function(){
if ($(window).width() < 1023 ) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            setTimeout(function(){$('#preloader img').fadeIn();}, 1);
            setTimeout(function(){$('#preloader').fadeIn();}, 1);
            setTimeout(function(){$('#preloader div p').show();}, 200);
        }
        if (window.matchMedia("(orientation: portrait)").matches) {
            setTimeout(function(){$('#preloader img').fadeOut();}, 400);
            setTimeout(function(){$('#preloader').fadeOut();}, 900);
            $('#preloader div p').hide();
        }

    $("video source").each(function() {
          $(this).attr("data-src",$(this).attr("src"));
          $(this).removeAttr("src");
          console.log($(this)[0].outerHTML);
        });

      $(document).on('click', '.active .arrow-nav.custom-hover ', function(){
        $('.active .mob-bg').addClass('glitch');
        });
    $('.section-nav .nav-title p').on('click', function() {
      $('.active .section-nav').addClass('show-des');
      $('header').fadeOut();
      $('footer').addClass('popup');
    });
    $('.section-nav .nav-title span').on('click', function() {
      $('.active .section-nav').addClass('show-des');
      $('header').fadeOut();
      $('footer').addClass('popup');
    });
    $('div.close-popup').on('click', function() {
      $('header').fadeIn();
      $('footer').removeClass('popup');
    });
      if($('.active .section-nav').is('.show-des')){
        $('header').fadeOut(); 
      }else{
        $('header').fadeIn();  
      }

    if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(e) {
        var rotY = Math.round(e.beta);
        var rotX = Math.round(e.gamma);
        var rotZ = Math.round(e.alpha);
        wrapperWidth = $('body').width();
        setTimeout(function(){
            normalizeData(rotY, rotX, rotZ)
          }, 1);
         function normalizeData(_g, _b, _z){
         zgY = _g;
         zgX =  Math.round(_b * 1.2);
         zgZ = _z;
         zgNav =  Math.round(-zgX * 1.88);

        /* zgP = (zgY * zgX);
         q =  zgP / wrapperWidth;
         t = q *2;*/
          if(zgX < 25 && zgX  > -25){
            $('.active .mob-bg').css('transform', 'translate3d('+zgX +'%, 0 ,0 )');
            $('#menu-line-mob li').css('transform', 'translate3d('+zgNav +'%, 0 ,0 )');
            $('.360arrowst2').css('transform', 'rotate('+zgNav +'deg)');
          }
        }   
      });
    };

    }else{
      $('.active .loop').trigger('play');
      if($('.active .section-nav').is('.show-des')){
        $('header').fadeIn(); 
      }else{
        $('header').fadeIn();  
      }

            setTimeout(function(){$('#preloader img').fadeOut();}, 400);
            setTimeout(function(){$('#preloader').fadeOut();}, 900);
            $('#preloader div p').hide();

    $("video source").each(function() {
        $(this).attr("src",$(this).attr("data-src"));
        $(this).removeAttr("data-src");
        console.log($(this)[0].outerHTML);
      });
    $('.active').find('.loop').trigger('play');
 

    $('.section-nav figure').on('click', function() {
      $('.active .section-nav').addClass('show-des');
      $('.active .section-nav').removeClass('hvr-puls');
    }); 
    
    $('div.close-popup').on('click', function() {
      $('.active .section-nav').removeClass('show-des');
      setTimeout("$('.section-nav').addClass('hvr-puls');", 300); 
    });

};
});


  $('div.close-popup').on('click', function() {
  $('.active .section-nav').removeClass('show-des');
  setTimeout("$('.section-nav').addClass('hvr-puls');", 300); 
});

  

  $('.close-popup-bg').on('click', function() {
  $('.active .section-nav').removeClass('show-des');
  setTimeout("$('.section-nav').addClass('hvr-puls');", 300);  
});

/* end width + resize*/
  timer = 0;
  $('#fullpage').fullpage({
   licenseKey:'EAC5E57E-5742438A-9D8D3DB9-D32CAB4E',
    lockAnchors: true,
    scrollingSpeed: 0,
    fitToSection: false,
    fitToSectionDelay: 0,
    touchSensitivity: 5,
    keyboardScrolling: false,
    recordHistory: false,
    lazyLoading: false,
    normalScrollElements: '.srl-grid',

    onLeave: function(origin, nextIndex, direction){ 


    if ($(window).width() < 1023 ) {

          if(nextIndex.index == 1   || nextIndex.index == 3  || nextIndex.index == 5  || nextIndex.index == 7  || nextIndex.index == 9  ){ 
              setTimeout(function(){fullpage_api.moveSectionDown();}, 1);
          } else{
            
          };

    } else {

          if(nextIndex.index == 1   || nextIndex.index == 3  || nextIndex.index == 5  || nextIndex.index == 7  || nextIndex.index == 9  ){ 
              $('.active .section-nav').removeClass('show-des');
              curZFanSection = nextIndex.anchor;
              $('.'+curZFanSection).find('video')[0].currentTime = 0;
              $('.'+curZFanSection).find('.animation-video').trigger('play');

              var videotime = $('.'+curZFanSection).find('video')[0].duration;
              var zgtout = Math.round( videotime * 1000 );

              timer = setTimeout(function(){fullpage_api.moveSectionDown();}, zgtout);
          } else {
              clearTimeout(timer);
              $('.active .section-nav').removeClass('show-des');
              $('.loop').trigger('play');
              setTimeout("$('.section-nav').addClass('hvr-puls');", 100);
          };


    };
    },
    afterLoad: function(origin,  nextIndex,  direction){

    nSec = nextIndex.anchor;
    nSecan = nSec+'-an';


          $("ul#navigation li a.contacts-nav").click(function() {
              var sectionzgNewC = $(this).attr('data-menu');
              clearTimeout(timer);
              $('#menu-icon').fadeOut();
              setTimeout(function(){$('.section.contacts').find('.fp-tableCell').fadeOut('slow');}, 500);
              setTimeout(function(){$('.section.contacts').find('.fp-tableCell').fadeIn('slow');$('#menu-icon').fadeIn();}, 1000);
              timerC = setTimeout(function(){ fullpage_api.moveTo(sectionzgNewC);}, 1000);
           });

          $("#navigation li a").click(function() {
              var sectionzgNew = $(this).attr('data-menu');
              clearTimeout(timer);
              anVideo= $('.'+nSecan).find('video')[0];
              if(anVideo){
                $(this).currentTime = 0;
              };
              $('#menu-icon').fadeOut();
              fullpage_api.moveTo(nSecan);
              timerN = setTimeout(function(){ fullpage_api.moveTo(sectionzgNew);}, 2000);
              setTimeout(function(){$('.'+nSec).find('.fp-tableCell').fadeOut('slow');}, 1000);
              setTimeout(function(){$('.section').find('.fp-tableCell').fadeIn('slow');$('#menu-icon').fadeIn();}, 2000);
              setTimeout(function(){$('.'+sectionzgNew).find('.fp-tableCell').fadeOut('slow');}, 500);
              setTimeout(function(){$('.'+sectionzgNew).find('.fp-tableCell').fadeIn('slow');}, 2500);
           });


    $(window).on('load resize', function(){
      $("#navigation li p").on('click', function() {
          $('#menu-icon').removeClass('close');
          $('body').removeClass('menu-open');
          $('#navigation').fadeOut(800);
          var sectionzgNew = $(this).attr('data-menu');
          clearTimeout(timer);
          fullpage_api.moveTo(sectionzgNew);
        }); 
    });

      $('.active .mob-bg').addClass('glitch');
      setTimeout(function(){$('.mob-bg').removeClass('glitch');}, 500);

     
    }

});

$(".natus-vincere .arrow-nav.back").click(function() {
    $('.active .mob-bg').addClass('glitch');
    setTimeout(function(){fullpage_api.moveTo(1, 0);}, 1);
});

$(".dmarket .arrow-nav.back").click(function(){
    $('.active .mob-bg').addClass('glitch');
    setTimeout(function(){fullpage_api.moveTo(3, 0);}, 1);
});
$(".es_forse .arrow-nav.back").click(function(){
    $('.active .mob-bg').addClass('glitch');
    setTimeout(function(){fullpage_api.moveTo(5, 0);}, 1);
});
$(".dream_team .arrow-nav.back").click(function(){
    $('.active .mob-bg').addClass('glitch');
    setTimeout(function(){fullpage_api.moveTo(7, 0);}, 1);
});
$(".contacts .arrow-nav.back").click(function(){
    $('.active .mob-bg').addClass('glitch');
    setTimeout(function(){fullpage_api.moveTo(9, 0);}, 1);
});

fullpage_api.setAllowScrolling(false);

$(document).mousemove(function (e){
  $(".custom-cursor").css({
    left: e.pageX - 20,
    top: e.pageY - 20
  });
});

$('.custom-hover').hover(
function(){
  $('.custom-cursor').addClass('hvr');
  },
function(){
  $('.custom-cursor').removeClass('hvr');
  });

$('.close-popup-bg').hover(
function(){
  $('.custom-cursor').addClass('close-p');
  },
function(){
  $('.custom-cursor').removeClass('close-p');
  });

});