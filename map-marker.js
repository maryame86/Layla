// Initialize and add the map
function initMap() {
    // The location of Layla
    var layla = {
      lat: 51.521260,
      lng: -0.171312
    };
    // The map, centered at Layla
    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 18,
        center: layla
      });
    // The marker, positioned at Layla
    var marker = new google.maps.Marker({
      position: layla,
      map: map
    });
  }
  