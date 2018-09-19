    // Initialize and add the map
function initMap() {

    var centerPosition = {lat: 43.2575417, lng: -79.9210381};
  // The map, centered at Uluru
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: centerPosition, disableDefaultUI: true,
        styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#707070"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
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
                "color": "#be2026"
            },
            {
                "lightness": "0"
            },
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
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff000a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "-52"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]});

    var pinks = {lat: 43.2575417, lng: -79.9188494};
    var westend = {lat: 43.2530756, lng: -79.9214894};
    var boston = {lat: 43.2572284, lng: -79.9277257};
    var lava = {lat: 43.263337, lng: -79.900821};
    var mike = {lat: 43.2576609, lng: -79.9266731};
    var architect = {lat: 43.2644898, lng: -79.8654974};

    var pinksMark = new google.maps.Marker({position: pinks, map: map});
    var westendMark = new google.maps.Marker({position: westend, map: map});
    var bostonMark = new google.maps.Marker({position: boston, map: map});
    var lavaMark = new google.maps.Marker({position: lava, map: map});
    var mikeMark = new google.maps.Marker({position: mike, map: map});
    var architectMark = new google.maps.Marker({position: architect, map: map});

    var pinksInfo = new google.maps.InfoWindow({
        content: "<h4>Pinks Burgers</h4><hr class='hr-primary'>" + 
        "<p><em>10% off non-alcoholic purchases Saturday through to Tuesday.</em></p>"
    });

    var westendInfo = new google.maps.InfoWindow({
        content: "<h4>West End Pub</h4><hr class='hr-primary'>" + 
        "<p><em>10% off all regularly priced food items every day.</em></p>"
    });

    var bostonInfo = new google.maps.InfoWindow({
        content: "<h4>Boston Pizza</h4><hr class='hr-primary'>" + 
        "<p><em>10% off all food purchases Sunday through to Thursday.</em></p>"
    });

    var lavaInfo = new google.maps.InfoWindow({
        content: "<h4>Lava Pizza</h4><hr class='hr-primary'>" + 
        "<p><em>Free drinks and delivery with every order (Note: quantity of drinks ranges from 1-4 and is dependent on order size).</em></p>"
    });

    var mikeInfo = new google.maps.InfoWindow({
        content: "<h4>Mike's Campus Barber Shop</h4><hr class='hr-primary'>" + 
        "<p><em>Free shampoo service with the purchase of a haircut.</em></p>"
    });

    var architectInfo = new google.maps.InfoWindow({
        content: "<h4>Architect Hair Design</h4><hr class='hr-primary'>" + 
        "<p><em>10% off a Men’s Haircut.</em></p>"
    });

    pinksMark.addListener('click', function(){
        pinksInfo.open(map, pinksMark);
    });    

    westendMark.addListener('click', function(){
        westendInfo.open(map, westendMark);
    });    

    bostonMark.addListener('click', function(){
        bostonInfo.open(map, bostonMark);
    });    

    lavaMark.addListener('click', function(){
        lavaInfo.open(map, lavaMark);
    });

    mikeMark.addListener('click', function() {
        mikeInfo.open(map, mikeMark);
    });    

    architectMark.addListener('click', function() {
        architectInfo.open(map, architectMark);
    });
}