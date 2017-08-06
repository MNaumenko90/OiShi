//= ../../bower_components/jquery/dist/jquery.js

//= ../../bower_components/foundation-sites/js/foundation.core.js
//= ../../bower_components/foundation-sites/js/foundation.util.box.js
//= ../../bower_components/foundation-sites/js/foundation.util.keyboard.js
//= ../../bower_components/foundation-sites/js/foundation.util.mediaQuery.js
//= ../../bower_components/foundation-sites/js/foundation.util.motion.js
//= ../../bower_components/foundation-sites/js/foundation.util.nest.js
//= ../../bower_components/foundation-sites/js/foundation.util.timerAndImageLoader.js
//= ../../bower_components/foundation-sites/js/foundation.util.touch.js
//= ../../bower_components/foundation-sites/js/foundation.util.triggers.js

//= ../../bower_components/foundation-sites/js/foundation.reveal.js
//= ../../bower_components/foundation-sites/js/foundation.dropdown.js
//= ../../bower_components/foundation-sites/js/foundation.slider.js
//= ../../bower_components/slick-carousel/slick/slick.js

/*
 * Custom js
 */
 if ($('#slidefilter').length) {
var fixMenu=$('#slidefilter').offset().top;
};
$(document).ready(function(){

$('.counter .min').on('click', function(event) {
 event.preventDefault();
 $(this).parent().find('.sum');
 var value = $(this).parent().find('.sum')[0].innerText.replace( / шт./g, "" );
 if (value > 0) {
  value--;
 }
 $(this).parent().find('.sum')[0].innerHTML = value+' шт.';
});
$('.counter .max').on('click', function(event) {
 event.preventDefault();
 $(this).parent().find('.sum');
 var value = $(this).parent().find('.sum')[0].innerText.replace( / шт./g, "" );
 value++;
 $(this).parent().find('.sum')[0].innerHTML = value+' шт.';
});

$('.foto-close').on('click', function(event) {
 $(this).parents('.basket-prew').remove();
 event.stopPropagation();
});
$('#work-t span').on('click', function(event) {
	event.preventDefault();
	$('#work-t span').removeClass('bold');
	$(this).addClass('bold');
	$('.work-time').html($(this).data('time'));

});
//tabs user.html
  $('#tabs').on('click', 'span', function(event) {
    event.preventDefault();
    $('#tabs span').removeClass('active');
    $(this).addClass('active');
    $('#status-user, #info-user, #edit-user').hide();
    $('#'+$(this).data('tab')).show();
  });
  //end tabs user.html
$('#work-contact span').on('click', function(event) {
  event.preventDefault();
  $('#work-contact span').removeClass('bold');
  $(this).addClass('bold');
  $('#time-line').html($(this).data('hour'));
  $('#work-day').text($(this).data('time'));
  $('#work-contact').removeClass('is-open');

});
$('.menu-cart').on('click', function(event) {
  event.preventDefault();
  $('#sticky-drop-cart').toggleClass('opened')
});
	$('.slider').on('moved.zf.slider', function(){
	    $('#sliderOutput3').html($('#sliderOutput2').val())
	});
	
   // чекбоксы
$('.styled-checkbox').on('click',  function(event) {
    event.preventDefault();
   
    if ($(this).find('input').attr('type') == 'checkbox') {


        $(this).toggleClass('checked');

        var input = $(this).find('input')
        if (input.attr('checked')) {
            console.log(input.attr('checked'))
           input.removeAttr('checked')
        } else {
            console.log(input.attr('checked'))
            input.attr('checked', 'checked')
        }

    } else {
        console.log(2)
        $('.styled-checkbox').removeClass('checked');
        $('.styled-checkbox').find('input').removeAttr('checked');
        $(this).toggleClass('checked');
        
        var input = $(this).find('input')
        if (input.attr('checked')) {
           input.removeAttr('checked')
        } else {
             input.attr('checked', 'checked')
        }
    }
});
// чекбоксы END
    $('#superFilter').on('click', function(event) {
     event.preventDefault();
     $(this).toggleClass('opened')
     $('#susumenu2, #susumenu').toggleClass('anim');
  //    if ($('.main-menu-wrap .column').hasClass('small-19')) {
  //     $('.main-menu-wrap .small-5').animate({
  //      left: -250,
  //    }, 0, function() {
  //    $('.main-menu-wrap .small-5').toggle();
  // });
  //     $('.main-menu-wrap .small-19').removeClass('small-19').addClass('small-24');
  //    } 
  //    else if($('.main-menu-wrap .column').hasClass('small-24')) {
  //      $('.main-menu-wrap .small-5').toggle();
  //     $('.main-menu-wrap .small-24').removeClass('small-24').addClass('small-19');
  //     $('.main-menu-wrap .small-5').animate({
  //      left: 0,
  //      opacity: 1,
  //    }, 500);
  //    }
    });
	



    $('.slidera, .sliderb').slick();
	 $('.sticky-wrap').on('click',  function(event) {
	 	$(this).toggleClass('opened')
	 })


$(document).scroll(function(){

 if ($(document).scrollTop() > fixMenu) {
  $('#slidefilter').addClass('slidenow');
  $('#slidefilter .medium-17, #slidefilter .medium-2').addClass('fixMenu');
 } else {
  $('#slidefilter').removeClass('slidenow');
  $('#sticky-drop-cart').removeClass('is-open');
  $('#slidefilter .medium-17, #slidefilter .medium-2').removeClass('fixMenu');
 }
});

//map
//Местоположение: долгота, широта и коэффициент увеличения
  var latitude = 53.198508,
    longitude = 50.145468,
    map_zoom = 16;

  //Адрес до иконки с маркером
  var marker_url = 'img/logo-map.png';
    
  
  // var main_color = '#fece8d', //основной цвет
  //   saturation_value= -5,//насыщенность
  //   brightness_value= 2; //яркость

  //Стили для элементов на карте
  var style= [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#716464"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#a05519"
            },
            {
                "saturation": "-13"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
];
    
  //Создание точки на карте
  var map_options = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: map_zoom,
        panControl: false,
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style
    }
    //Инициализация карты
  var map = new google.maps.Map(document.getElementById('google-container'), map_options);
  //Добавляем свой маркер местонахождения на карту (свою иконку)      
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map,
      visible: true,
    icon: marker_url,
  });


 });
$(document).foundation();