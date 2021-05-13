function initMap() {
    var options = {
        center: {lat: 53.643101, lng:-113.575374},
        zoom: 19,
        mapTypeId: 'satellite'
    }
  
    map = new google.maps.Map(document.getElementById('map'), options);
    
    const marker = new google.maps.Marker({
        position: {lat: 53.643101, lng:-113.575374},
        map: map
    })
  
  }