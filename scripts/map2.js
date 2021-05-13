function initMap() {
    var options = {
        center: {lat: 53.928640, lng:-122.768980},
        zoom: 17,
        mapTypeId: 'satellite'
    }
  
    map = new google.maps.Map(document.getElementById('map'), options);
    
    const marker = new google.maps.Marker({
        position: {lat: 53.928640, lng:-122.768980},
        map: map
    })
  
  }