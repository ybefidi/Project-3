// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(cases) {
  return cases / .1;
}

// Each city object contains the city's name, location and population
var cities = [
  {
    name: "Wyoming",
    location: [43.075968, -107.290284],
    cases: 275
  },
  {
    name: "Wisconsin",
    location: [43.78444, -88.787868],
    cases: 3341
  },
  {
    name: "Washington",
    location: [47.751074, -120.740139],
    cases: 10224
  },
  {
    name: "West Virginia",
    location: [38.597626, -80.454903],
    cases: 611
  },
  {
    name: "Virginia",
    location: [37.431573, -78.656894],
    cases: 5274
  },
  {
    name: "Utah",
    location: [39.32098, -111.093731],
    cases: 2303
  },
  {
    name: "Texas",
    location: [31.968599, -99.901813],
    cases: 13906
  },
  {
    name: "Tennessee",
    location: [35.517491, -86.580447],
    cases: 5308
  },
  {
    name: "Vermont",
    location: [44.558803, -72.577841],
    cases: 679
  },
  {
    name: "South Dakota",
    location: [43.969515, -99.901813],
    cases: 868
  },

  {
    name: "Alaska",
    location: [63.588753, -154.493062],
    cases: 272 
    
    
  },
  {
    name: "Alabama",
    location: [32.318231, -86.902298],
    cases:  3274 
    
  },
  
  {
    name: "Arkansas",
    location: [35.20105, -91.831833],
    cases:  1475      
    
  },
  {
    name: "Arizona",
    location: [34.048928, -111.093731],
    cases:  3539  
     
  },
  {
    name: "California",
    location: [36.778261, -119.417932],
    cases:  22348   
     
  },

  {
    name: "Colorado",
    location: [39.550051, -105.782067],
    cases:  7303  
    
     
  }, 
  {
    name: "Connecticut",
    location: [41.603221, -73.087749],
    cases:  12035    
    
     
  }, 
  {
    name: "District of Columbia",
    location: [38.905985, -77.033418],
    cases:  1959      
     
  }, 

  {
    name: "Delaware",
    location: [38.910832, -75.52767],
    cases:  1761       
     
  }, 

  {
    name: "Florida",
    location: [27.664827, -81.515754],
    cases:  20601 
       
  },  

  {
    name: "Georgia",
    location: [32.157435, -82.907123],
    cases:  13315  
       
  },    
  {
    name: "Hawaii",
    location: [19.898682, -155.665857],
    cases:  504   
       
  },    

  {
    name: "Iowa",
    location: [41.878003, -93.097702],
    cases:  1710   
       
  },      

  {
    name: "Idaho",
    location: [44.068202, -114.742041],
    cases:  1426    
       
  },      

  {
    name: "Illinois",
    location: [40.633125, -89.398528],
    cases:  22025  
       
  },  

  {
    name: "Indiana",
    location: [40.551217, -85.602364],
    cases: 8236
     
  },

  {
    name: "Kansas",
    location: [39.011902, -98.484246],
    cases: 1376 
    
  },


 
  {
    name: "Kentucky",
    location: [37.839333, -84.270018],
    cases: 2041
    
    
  },

  {
    name: "Louisiana",
    location: [31.244823, -92.145024],
    cases: 21016  
    
  },  

  {
    name: "Massachusetts",
    location: [42.407211, -71.382437],
    cases: 26867 
    
  },    
  {
    name: "Maryland",
    location: [39.045755, -76.641271],
    cases: 8224
  },
  {
    name: "Michigan",
    location: [44.314844, -85.602364],
    cases: 28059 
    
    
  },

  {
    name: "Minnesota",
    location: [46.729553, -94.6859],
    cases: 1695  
    
  },

  {
    name: "Missouri",
    location: [37.964253, -91.831833],
    cases: 4686    
    
  },

  {
    name: "Mississippi",
    location: [32.354668, -89.398528],
    cases: 3087   
    
  },

  {
    name: "Montana",
    location: [46.879682, -110.362566],
    cases: 399     
    
  },

  {
    name: "North Carolina",
    location: [35.759573, -79.0193],
    cases: 5024     
    
  },

  {
    name: "North Dakota",
    location: [47.551493, -101.002012],
    cases: 341    
    
  },

  {
    name: "Nebraska",
    location: [41.492537, -99.901813],
    cases: 871    
    
  },

  {
    name: "New Hampshire",
    location: [43.193852, -71.572395],
    cases: 1020      
    
  },

  {
    name: "New Jersey",
    location: [40.058324, -74.405661],
    cases: 0  
    
  },

  {
    name: "New Mexico",
    location: [34.97273, -105.032363],
    cases: 1325     
    
  },

  {
    name: "Nevada",
    location: [38.80261, -116.419389],
    cases: 2836      
    
  },

  {
    name: "New York",
    location: [43.299428, -74.217933],
    cases: 0    
  
  },

  {
    name: "Ohio",
    location: [40.417287, -82.907123],
    cases: 6518      
  
  },

  {
    name: "Oklahoma",
    location: [35.007752, -97.092877],
    cases: 2184        
  
  },

  {
    name: "Oregon",
    location: [43.804133, -120.554201],
    cases: 1633  
    
  },

  {
    name: "Pennsylvania",
    location: [41.203322, -77.194525],
    cases: 25345    
    
  },

  {
    name: "Puerto Rico",
    location: [18.220833, -66.590149],
    cases: 923      
    
  },

  {
    name: "Rhode Island",
    location: [41.580095, -71.477429],
    cases: 2665  
      
  },

  {
    name: "South Carolina",
    location: [33.836081, -81.163725],
    cases: 3563   
      
  },

  {
    name: "Maine",
    location: [45.253783, -69.445469],
    cases: 633
   
  }
];



// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(cities[i].cases)
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Cases: " + cities[i].cases + "</h3>").addTo(myMap);
}
