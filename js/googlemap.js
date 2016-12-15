function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('contacts__map'), {
          center: {lat: 55.753939, lng: 37.620795},
          scrollwheel: false,
          zoom: 17
        });
        var marker = new google.maps.Marker({
   map: map,
   // Define the place with a location, and a query string.
   place: {
     location: {lat: 55.753939, lng: 37.620795},
     query: 'Google, Красная Площадь, Москва'

   },
   // Attributions help users find your site again.
   attribution: {
     source: 'Google Maps JavaScript API',
     webUrl: 'https://developers.google.com/maps/'
   }
 });
      }
