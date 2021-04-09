const topRestaurants = [
  {
    "name": "El Barrio",
    "longitude": -86.8030741,
    "latitude": 33.5169035
  },
  {
    "name": "Moose's Tooth",
    "longitude": -149.86878140741,
    "latitude": 61.1905345745827
  },
  {
    "name": "Little Miss BBQ-University",
    "longitude": -111.9891506,
    "latitude": 33.4216084
  },
  {
    "name": "The Root Cafe",
    "longitude": -92.2735151687866,
    "latitude": 34.7341998705672
  },
  {
    "name": "Howlin' Ray's",
    "longitude": -118.239716,
    "latitude": 34.061517
  },
  {
    "name": "Denver Biscuit Co.",
    "longitude": -104.949098,
    "latitude": 39.740384
  },
  {
    "name": "Eat Noodle",
    "longitude": -73.19202,
    "latitude": 41.1784
  },
  {
    "name": "Indochine",
    "longitude": -77.9069137573242,
    "latitude": 34.2391777038574
  },
  {
    "name": "Maple Street Biscuit Company - San Marco",
    "longitude": -81.6539008666204,
    "latitude": 30.3038463782095
  },
  {
    "name": "Atlanta Breakfast Club",
    "longitude": -84.39546,
    "latitude": 33.7649
  },
  {
    "name": "Marugame Udon",
    "longitude": -157.82583338341013,
    "latitude": 21.2796073993372
  },
  {
    "name": "Fork",
    "longitude": -116.203056,
    "latitude": 43.616389
  },
  {
    "name": "Girl & The Goat",
    "longitude": -87.64797390222085,
    "latitude": 41.88415330470642
  },
  {
    "name": "The Eagle",
    "longitude": -86.15402,
    "latitude": 39.77175
  },
  {
    "name": "Zombie Burger + Drink Lab",
    "longitude": -93.6133659690309,
    "latitude": 41.5904255234634
  },
  {
    "name": "Doo-Dah Diner",
    "longitude": -97.3364484,
    "latitude": 37.679603
  },
  {
    "name": "Hammerheads",
    "longitude": -85.73655,
    "latitude": 38.23858
  },
  {
    "name": "Cochon Butcher",
    "longitude": -90.0670981407166,
    "latitude": 29.9422358658609
  },
  {
    "name": "Screen Door",
    "longitude": -122.64164,
    "latitude": 45.52309
  },
  {
    "name": "Thames Street Oyster House",
    "longitude": -76.59162,
    "latitude": 39.28214
  },
  {
    "name": "Neptune Oyster",
    "longitude": -71.05594,
    "latitude": 42.36321
  },
  {
    "name": "Dime Store",
    "longitude": -83.0479924085636,
    "latitude": 42.3308060633157
  },
  {
    "name": "Bar La Grassa",
    "longitude": -93.278594,
    "latitude": 44.98954
  },
  {
    "name": "Lanning's Downtown Grill",
    "longitude": -95.61576,
    "latitude": 37.0349
  },
  {
    "name": "Joe's Kansas City Bar-B-Que",
    "longitude": -94.620753657734,
    "latitude": 39.044461224899
  },
  {
    "name": "The Burger Dive",
    "longitude": -108.50535,
    "latitude": 45.78296
  },
  {
    "name": "Block 16",
    "longitude": -95.937772,
    "latitude": 41.257445
  },
  {
    "name": "Yardbird Southern Table & Bar",
    "longitude": -115.170111842838,
    "latitude": 36.1223280184553
  },
  {
    "name": "Federal Cafe & Bar",
    "longitude": -2.23845871616618,
    "latitude": 53.4841106387037
  },
  {
    "name": "Casa d'Paco",
    "longitude": -74.16309,
    "latitude": 40.72529
  },
  {
    "name": "Cocina Azul",
    "longitude": -106.658516,
    "latitude": 35.095403
  },
  {
    "name": "Levain Bakery",
    "longitude": -73.980299,
    "latitude": 40.779961
  },
  {
    "name": "Midwood Smokehouse",
    "longitude": -80.81485,
    "latitude": 35.22092
  },
  {
    "name": "Mezzaluna",
    "longitude": -96.78871,
    "latitude": 46.87941
  },
  {
    "name": "Brassica",
    "longitude": -83.00294,
    "latitude": 39.97638
  },
  {
    "name": "Cafe Kacao",
    "longitude": -97.5348099,
    "latitude": 35.5039299
  },
  {
    "name": "Screen Door",
    "longitude": -122.64164,
    "latitude": 45.52309
  },
  {
    "name": "Reading Terminal Market",
    "longitude": -75.1588545174235,
    "latitude": 39.953341464505
  },
  {
    "name": "Los Andes Restaurant",
    "longitude": -71.4371953681014,
    "latitude": 41.8332008774112
  },
  {
    "name": "167 Raw",
    "longitude": -79.9333269,
    "latitude": 32.7794563
  },
  {
    "name": "Josiah's Coffeehouse and Cafe",
    "longitude": -96.727398,
    "latitude": 43.543602
  },
  {
    "name": "Hattie B's Hot Chicken - Midtown",
    "longitude": -86.7966029393197,
    "latitude": 36.1513871522975
  },
  {
    "name": "The Breakfast Klub",
    "longitude": -95.38048,
    "latitude": 29.73843
  },
  {
    "name": "Red Iguana",
    "longitude": -111.9124903,
    "latitude": 40.7719136
  },
  {
    "name": "Knotty Pig BBQ, Burger & Chili House",
    "longitude": -95.9004669189453,
    "latitude": 36.1409873962402
  },
  {
    "name": "Mazari Kebab and More",
    "longitude": -76.1461033,
    "latitude": 36.8567585
  },
  {
    "name": "Pike Place Chowder",
    "longitude": -122.34112,
    "latitude": 47.60939
  },
  {
    "name": "167 Raw",
    "longitude": -79.9333269,
    "latitude": 32.7794563
  },
  {
    "name": "Blue's Egg - Milwaukee",
    "longitude": -88.0076330155134,
    "latitude": 43.03430316632
  },
  {
    "name": "Rib & Chop House",
    "longitude": -104.81827,
    "latitude": 41.13197
  }
];

export default topRestaurants;