// Manhattan Pocket Parks - Google Maps Implementation
function initMap() {
  // Park locations data
  const parkLocations = [
    {
      name: "Paley Park",
      location: { lat: 40.7604, lng: -73.9747 },
      address: "53rd Street between Madison & Fifth"
    },
    {
      name: "Greenacre Park",
      location: { lat: 40.7567, lng: -73.9703 },
      address: "East 51st Street between 2nd & 3rd"
    },
    {
      name: "McGraw-Hill Pocket Park",
      location: { lat: 40.7595, lng: -73.9819 },
      address: "West 48th Street & 6th Avenue"
    },// Manhattan Pocket Parks - Google Maps Implementation
function initMap() {
  // Park locations data
  const parkLocations = [
    {
      name: "Paley Park",
      location: { lat: 40.7604, lng: -73.9747 },
      address: "53rd Street between Madison & Fifth"
    },
    {
      name: "Greenacre Park",
      location: { lat: 40.7567, lng: -73.9703 },
      address: "East 51st Street between 2nd & 3rd"
    },
    {
      name: "McGraw-Hill Pocket Park",
      location: { lat: 40.7595, lng: -73.9819 },
      address: "West 48th Street & 6th Avenue"
    },
    {
      name: "Tudor City Greens",
      location: { lat: 40.7494, lng: -73.9724 },
      address: "East 42nd Street & 1st Avenue"
    },
    {
      name: "50th Street Commons",
      location: { lat: 40.7612, lng: -73.9866 },
      address: "West 50th Street near 8th Avenue"
    },
    {
      name: "550 Madison Park",
      location: { lat: 40.7616, lng: -73.9738 },
      address: "East 55th Street & Madison Avenue"
    },
    {
      name: "Septuagesimo Uno",
      location: { lat: 40.7797, lng: -73.9819 },
      address: "West 71st Street between Broadway & West End"
    },
    {
      name: "Amster Yard",
      location: { lat: 40.7537, lng: -73.9709 },
      address: "East 49th Street between 2nd & 3rd"
    },
    {
      name: "Berlin Wall Remnant Park",
      location: { lat: 40.7577, lng: -73.9775 },
      address: "520 Madison Avenue"
    },
    {
      name: "Labyrinth of Contemplation",
      location: { lat: 40.7122, lng: -74.0158 },
      address: "Battery Park City"
    }
  ];

  // Check if we're on a park detail page or the map page
  const mapElement = document.getElementById('park-map');
  if (!mapElement) return;

  // Create the map centered on Manhattan
  const map = new google.maps.Map(mapElement, {
    center: { lat: 40.7580, lng: -73.9855 },
    zoom: 13,
    mapTypeControl: false,
    streetViewControl: false
  });

  // Create an info window to share between markers
  const infoWindow = new google.maps.InfoWindow();
  
  // Create markers for each park
  const markers = parkLocations.map((park, i) => {
    // Create marker
    const marker = new google.maps.Marker({
      position: park.location,
      map: map,
      title: park.name,
      label: {
        text: (i + 1).toString(),
        color: '#ffffff'
      },
      animation: google.maps.Animation.DROP
    });

    // Create info window content
    const contentString = `
      <div class="map-popup">
        <h3>${park.name}</h3>
        <p>${park.address}</p>
      </div>
    `;

    // Add click listener to open info window
    marker.addListener("click", () => {
      infoWindow.setContent(contentString);
      infoWindow.open(map, marker);
    });

    return marker;
  });

  // If we're on a single park page, zoom to that park
  if (window.currentParkName) {
    // Find the park in our data
    const currentPark = parkLocations.find(park => park.name === window.currentParkName);
    if (currentPark) {
      // Zoom in to the specific park
      map.setCenter(currentPark.location);
      map.setZoom(17);
      
      // Find the marker and open its info window
      const markerIndex = parkLocations.findIndex(park => park.name === window.currentParkName);
      if (markerIndex >= 0) {
        google.maps.event.trigger(markers[markerIndex], 'click');
      }
    }
  }

  // Add park list interactivity (if on map page)
  const parkListItems = document.querySelectorAll('.list-item');
  if (parkListItems.length > 0) {
    parkListItems.forEach((item, index) => {
      if (index < parkLocations.length) {
        item.addEventListener('mouseenter', function() {
          map.setCenter(parkLocations[index].location);
          map.setZoom(16);
          google.maps.event.trigger(markers[index], 'click');
        });
      }
    });
  }
}
    {
      name: "Tudor City Greens",
      location: { lat: 40.7494, lng: -73.9724 },
      address: "East 42nd Street & 1st Avenue"
    },
    {
      name: "50th Street Commons",
      location: { lat: 40.7612, lng: -73.9866 },
      address: "West 50th Street near 8th Avenue"
    },
    {
      name: "550 Madison Park",
      location: { lat: 40.7616, lng: -73.9738 },
      address: "East 55th Street & Madison Avenue"
    },
    {
      name: "Septuagesimo Uno",
      location: { lat: 40.7797, lng: -73.9819 },
      address: "West 71st Street between Broadway & West End"
    },
    {
      name: "Amster Yard",
      location: { lat: 40.7537, lng: -73.9709 },
      address: "East 49th Street between 2nd & 3rd"
    },
    {
      name: "Berlin Wall Remnant Park",
      location: { lat: 40.7577, lng: -73.9775 },
      address: "520 Madison Avenue"
    },
    {
      name: "Labyrinth of Contemplation",
      location: { lat: 40.7122, lng: -74.0158 },
      address: "Battery Park City"
    }
  ];

  // Check if we're on a park detail page or the map page
  const mapElement = document.getElementById('park-map');
  if (!mapElement) return;

  // Create the map centered on Manhattan
  const map = new google.maps.Map(mapElement, {
    center: { lat: 40.7580, lng: -73.9855 },
    zoom: 13,
    mapTypeControl: false,
    streetViewControl: false
  });

  // Create an info window to share between markers
  const infoWindow = new google.maps.InfoWindow();
  
  // Create markers for each park
  const markers = parkLocations.map((park, i) => {
    // Create marker
    const marker = new google.maps.Marker({
      position: park.location,
      map: map,
      title: park.name,
      label: {
        text: (i + 1).toString(),
        color: '#ffffff'
      },
      animation: google.maps.Animation.DROP
    });

    // Create info window content
    const contentString = `
      <div class="map-popup">
        <h3>${park.name}</h3>
        <p>${park.address}</p>
      </div>
    `;

    // Add click listener to open info window
    marker.addListener("click", () => {
      infoWindow.setContent(contentString);
      infoWindow.open(map, marker);
    });

    return marker;
  });

  // If we're on a single park page, zoom to that park
  if (window.currentParkName) {
    // Find the park in our data
    const currentPark = parkLocations.find(park => park.name === window.currentParkName);
    if (currentPark) {
      // Zoom in to the specific park
      map.setCenter(currentPark.location);
      map.setZoom(17);
      
      // Find the marker and open its info window
      const markerIndex = parkLocations.findIndex(park => park.name === window.currentParkName);
      if (markerIndex >= 0) {
        google.maps.event.trigger(markers[markerIndex], 'click');
      }
    }
  }

  // Add park list interactivity (if on map page)
  const parkListItems = document.querySelectorAll('.list-item');
  if (parkListItems.length > 0) {
    parkListItems.forEach((item, index) => {
      if (index < parkLocations.length) {
        item.addEventListener('mouseenter', function() {
          map.setCenter(parkLocations[index].location);
          map.setZoom(16);
          google.maps.event.trigger(markers[index], 'click');
        });
      }
    });
  }
}