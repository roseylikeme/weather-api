let cities = [
    {
        "name": "New York",
        "latitude": 40.7127837,
        "longitude": -74.0059413,
        "state": "New York"
    },
    {
        "name": "Los Angeles",
        "latitude": 34.0522342,
        "longitude": -118.2436849,
        "state": "California"
    },
    {
        "name": "Chicago",
        "latitude": 41.8781136,
        "longitude": -87.6297982,
        "state": "Illinois"
    },
    {
        "name": "Houston",
        "latitude": 29.7604267,
        "longitude": -95.3698028,
        "state": "Texas"
    },
    {
        "name": "Philadelphia",
        "latitude": 39.9525839,
        "longitude": -75.1652215,
        "state": "Pennsylvania"
    },
    {
        "name": "Phoenix",
        "latitude": 33.4483771,
        "longitude": -112.0740373,
        "state": "Arizona"
    },
    {
        "name": "San Antonio",
        "latitude": 29.4241219,
        "longitude": -98.49362819999999,
        "state": "Texas"
    },
    {
        "name": "San Diego",
        "latitude": 32.715738,
        "longitude": -117.1610838,
        "state": "California"
    },
    {
        "name": "Dallas",
        "latitude": 32.7766642,
        "longitude": -96.79698789999999,
        "state": "Texas"
    },
    {
        "name": "San Jose",
        "latitude": 37.3382082,
        "longitude": -121.8863286,
        "state": "California"
    },
    {
        "name": "Austin",
        "latitude": 30.267153,
        "longitude": -97.7430608,
        "state": "Texas"
    },
    {
        "name": "Indianapolis",
        "latitude": 39.768403,
        "longitude": -86.158068,
        "state": "Indiana"
    },
    {
        "name": "Jacksonville",
        "latitude": 30.3321838,
        "longitude": -81.65565099999999,
        "state": "Florida"
    },
    {
        "name": "San Francisco",
        "latitude": 37.7749295,
        "longitude": -122.4194155,
        "state": "California"
    },
    {
        "name": "Columbus",
        "latitude": 39.9611755,
        "longitude": -82.99879419999999,
        "state": "Ohio"
    },
    {
        "name": "Charlotte",
        "latitude": 35.2270869,
        "longitude": -80.8431267,
        "state": "North Carolina"
    },
    {
        "name": "Fort Worth",
        "latitude": 32.7554883,
        "longitude": -97.3307658,
        "state": "Texas"
    },
    {
        "name": "Detroit",
        "latitude": 42.331427,
        "longitude": -83.0457538,
        "state": "Michigan"
    },
    {
        "name": "El Paso",
        "latitude": 31.7775757,
        "longitude": -106.4424559,
        "state": "Texas"
    },
    {
        "name": "Memphis",
        "latitude": 35.1495343,
        "longitude": -90.0489801,
        "state": "Tennessee"
    },
    {
        "name": "Seattle",
        "latitude": 47.6062095,
        "longitude": -122.3320708,
        "state": "Washington"
    },
    {
        "name": "Denver",
        "latitude": 39.7392358,
        "longitude": -104.990251,
        "state": "Colorado"
    },
    {
        "name": "Washington",
        "latitude": 38.9071923,
        "longitude": -77.0368707,
        "state": "District of Columbia"
    },
    {
        "name": "Boston",
        "latitude": 42.3600825,
        "longitude": -71.0588801,
        "state": "Massachusetts"
    },
    {
        "name": "Nashville-Davidson",
        "latitude": 36.1626638,
        "longitude": -86.7816016,
        "state": "Tennessee"
    },
    {
        "name": "Baltimore",
        "latitude": 39.2903848,
        "longitude": -76.6121893,
        "state": "Maryland"
    },
    {
        "name": "Oklahoma",
        "latitude": 35.4675602,
        "longitude": -97.5164276,
        "state": "Oklahoma"
    },
    {
        "name": "Louisville/Jefferson County",
        "latitude": 38.2526647,
        "longitude": -85.7584557,
        "state": "Kentucky"
    },
    {
        "name": "Portland",
        "latitude": 45.5230622,
        "longitude": -122.6764816,
        "state": "Oregon"
    },
    {
        "name": "Las Vegas",
        "latitude": 36.1699412,
        "longitude": -115.1398296,
        "state": "Nevada"
    },
    {
        "name": "Milwaukee",
        "latitude": 43.0389025,
        "longitude": -87.9064736,
        "state": "Wisconsin"
    },
    {
        "name": "Albuquerque",
        "latitude": 35.0853336,
        "longitude": -106.6055534,
        "state": "New Mexico"
    },
    {
        "name": "Tucson",
        "latitude": 32.2217429,
        "longitude": -110.926479,
        "state": "Arizona"
    },
    {
        "name": "Fresno",
        "latitude": 36.7468422,
        "longitude": -119.7725868,
        "state": "California"
    },
    {
        "name": "Sacramento",
        "latitude": 38.5815719,
        "longitude": -121.4943996,
        "state": "California"
    },
    {
        "name": "Long Beach",
        "latitude": 33.7700504,
        "longitude": -118.1937395,
        "state": "California"
    },
    {
        "name": "Kansas",
        "latitude": 39.0997265,
        "longitude": -94.5785667,
        "state": "Missouri"
    },
    {
        "name": "Mesa",
        "latitude": 33.4151843,
        "longitude": -111.8314724,
        "state": "Arizona"
    },
    {
        "name": "Virginia Beach",
        "latitude": 36.8529263,
        "longitude": -75.97798499999999,
        "state": "Virginia"
    },
    {
        "name": "Atlanta",
        "latitude": 33.7489954,
        "longitude": -84.3879824,
        "state": "Georgia"
    },
    {
        "name": "Colorado Springs",
        "latitude": 38.8338816,
        "longitude": -104.8213634,
        "state": "Colorado"
    },
    {
        "name": "Omaha",
        "latitude": 41.2523634,
        "longitude": -95.99798829999999,
        "state": "Nebraska"
    },
    {
        "name": "Raleigh",
        "latitude": 35.7795897,
        "longitude": -78.6381787,
        "state": "North Carolina"
    },
    {
        "name": "Miami",
        "latitude": 25.7616798,
        "longitude": -80.1917902,
        "state": "Florida"
    },
    {
        "name": "Oakland",
        "latitude": 37.8043637,
        "longitude": -122.2711137,
        "state": "California"
    },
    {
        "name": "Minneapolis",
        "latitude": 44.977753,
        "longitude": -93.2650108,
        "state": "Minnesota"
    },
    {
        "name": "Tulsa",
        "latitude": 36.1539816,
        "longitude": -95.99277500000001,
        "state": "Oklahoma"
    },
    {
        "name": "Cleveland",
        "latitude": 41.49932,
        "longitude": -81.6943605,
        "state": "Ohio"
    },
    {
        "name": "Wichita",
        "latitude": 37.688889,
        "longitude": -97.336111,
        "state": "Kansas"
    },
    {
        "name": "Arlington",
        "latitude": 32.735687,
        "longitude": -97.10806559999999,
        "state": "Texas"
    },
    {
        "name": "New Orleans",
        "latitude": 29.95106579999999,
        "longitude": -90.0715323,
        "state": "Louisiana"
    },
    {
        "name": "Bakersfield",
        "latitude": 35.3732921,
        "longitude": -119.0187125,
        "state": "California"
    },
    {
        "name": "Tampa",
        "latitude": 27.950575,
        "longitude": -82.4571776,
        "state": "Florida"
    },
    {
        "name": "Honolulu",
        "latitude": 21.3069444,
        "longitude": -157.8583333,
        "state": "Hawaii"
    },
    {
        "name": "Aurora",
        "latitude": 39.7294319,
        "longitude": -104.8319195,
        "state": "Colorado"
    },
    {
        "name": "Anaheim",
        "latitude": 33.8352932,
        "longitude": -117.9145036,
        "state": "California"
    },
    {
        "name": "Santa Ana",
        "latitude": 33.7455731,
        "longitude": -117.8678338,
        "state": "California"
    },
    {
        "name": "St. Louis",
        "latitude": 38.6270025,
        "longitude": -90.19940419999999,
        "state": "Missouri"
    },
    {
        "name": "Riverside",
        "latitude": 33.9533487,
        "longitude": -117.3961564,
        "state": "California"
    },
    {
        "name": "Corpus Christi",
        "latitude": 27.8005828,
        "longitude": -97.39638099999999,
        "state": "Texas"
    },
    {
        "name": "Lexington-Fayette",
        "latitude": 38.0405837,
        "longitude": -84.5037164,
        "state": "Kentucky"
    },
    {
        "name": "Pittsburgh",
        "latitude": 40.44062479999999,
        "longitude": -79.9958864,
        "state": "Pennsylvania"
    },
    {
        "name": "Anchorage",
        "latitude": 61.2180556,
        "longitude": -149.9002778,
        "state": "Alaska"
    },
    {
        "name": "Stockton",
        "latitude": 37.9577016,
        "longitude": -121.2907796,
        "state": "California"
    },
    {
        "name": "Cincinnati",
        "latitude": 39.1031182,
        "longitude": -84.5120196,
        "state": "Ohio"
    },
    {
        "name": "St. Paul",
        "latitude": 44.9537029,
        "longitude": -93.0899578,
        "state": "Minnesota"
    },
    {
        "name": "Toledo",
        "latitude": 41.6639383,
        "longitude": -83.55521200000001,
        "state": "Ohio"
    },
    {
        "name": "Greensboro",
        "latitude": 36.0726354,
        "longitude": -79.7919754,
        "state": "North Carolina"
    },
    {
        "name": "Newark",
        "latitude": 40.735657,
        "longitude": -74.1723667,
        "state": "New Jersey"
    },
    {
        "name": "Plano",
        "latitude": 33.0198431,
        "longitude": -96.6988856,
        "state": "Texas"
    },
    {
        "name": "Henderson",
        "latitude": 36.0395247,
        "longitude": -114.9817213,
        "state": "Nevada"
    },
    {
        "name": "Lincoln",
        "latitude": 40.8257625,
        "longitude": -96.6851982,
        "state": "Nebraska"
    },
    {
        "name": "Buffalo",
        "latitude": 42.88644679999999,
        "longitude": -78.8783689,
        "state": "New York"
    },
    {
        "name": "Jersey",
        "latitude": 40.72815749999999,
        "longitude": -74.0776417,
        "state": "New Jersey"
    },
    {
        "name": "Chula Vista",
        "latitude": 32.6400541,
        "longitude": -117.0841955,
        "state": "California"
    },
    {
        "name": "Fort Wayne",
        "latitude": 41.079273,
        "longitude": -85.1393513,
        "state": "Indiana"
    },
    {
        "name": "Orlando",
        "latitude": 28.5383355,
        "longitude": -81.3792365,
        "state": "Florida"
    },
    {
        "name": "St. Petersburg",
        "latitude": 27.773056,
        "longitude": -82.64,
        "state": "Florida"
    },
    {
        "name": "Chandler",
        "latitude": 33.3061605,
        "longitude": -111.8412502,
        "state": "Arizona"
    },
    {
        "name": "Laredo",
        "latitude": 27.5305671,
        "longitude": -99.48032409999999,
        "state": "Texas"
    },
    {
        "name": "Norfolk",
        "latitude": 36.8507689,
        "longitude": -76.28587259999999,
        "state": "Virginia"
    },
    {
        "name": "Durham",
        "latitude": 35.9940329,
        "longitude": -78.898619,
        "state": "North Carolina"
    },
    {
        "name": "Madison",
        "latitude": 43.0730517,
        "longitude": -89.4012302,
        "state": "Wisconsin"
    },
    {
        "name": "Lubbock",
        "latitude": 33.5778631,
        "longitude": -101.8551665,
        "state": "Texas"
    },
    {
        "name": "Irvine",
        "latitude": 33.6839473,
        "longitude": -117.7946942,
        "state": "California"
    },
    {
        "name": "Winston-Salem",
        "latitude": 36.09985959999999,
        "longitude": -80.244216,
        "state": "North Carolina"
    },
    {
        "name": "Glendale",
        "latitude": 33.5386523,
        "longitude": -112.1859866,
        "state": "Arizona"
    },
    {
        "name": "Garland",
        "latitude": 32.912624,
        "longitude": -96.63888329999999,
        "state": "Texas"
    },
    {
        "name": "Hialeah",
        "latitude": 25.8575963,
        "longitude": -80.2781057,
        "state": "Florida"
    },
    {
        "name": "Reno",
        "latitude": 39.5296329,
        "longitude": -119.8138027,
        "state": "Nevada"
    },
    {
        "name": "Chesapeake",
        "latitude": 36.7682088,
        "longitude": -76.2874927,
        "state": "Virginia"
    },
    {
        "name": "Gilbert",
        "latitude": 33.3528264,
        "longitude": -111.789027,
        "state": "Arizona"
    },
    {
        "name": "Baton Rouge",
        "latitude": 30.4582829,
        "longitude": -91.1403196,
        "state": "Louisiana"
    },
    {
        "name": "Irving",
        "latitude": 32.8140177,
        "longitude": -96.9488945,
        "state": "Texas"
    },
    {
        "name": "Scottsdale",
        "latitude": 33.4941704,
        "longitude": -111.9260519,
        "state": "Arizona"
    },
    {
        "name": "North Las Vegas",
        "latitude": 36.1988592,
        "longitude": -115.1175013,
        "state": "Nevada"
    },
    {
        "name": "Fremont",
        "latitude": 37.5482697,
        "longitude": -121.9885719,
        "state": "California"
    },
    {
        "name": "Boise",
        "latitude": 43.6187102,
        "longitude": -116.2146068,
        "state": "Idaho"
    },
    {
        "name": "Richmond",
        "latitude": 37.5407246,
        "longitude": -77.4360481,
        "state": "Virginia"
    },
    {
        "name": "San Bernardino",
        "latitude": 34.1083449,
        "longitude": -117.2897652,
        "state": "California"
    },
    {
        "name": "Birmingham",
        "latitude": 33.5206608,
        "longitude": -86.80248999999999,
        "state": "Alabama"
    },
    {
        "name": "Spokane",
        "latitude": 47.6587802,
        "longitude": -117.4260466,
        "state": "Washington"
    },
    {
        "name": "Rochester",
        "latitude": 43.16103,
        "longitude": -77.6109219,
        "state": "New York"
    },
    {
        "name": "Des Moines",
        "latitude": 41.6005448,
        "longitude": -93.6091064,
        "state": "Iowa"
    },
    {
        "name": "Modesto",
        "latitude": 37.63909719999999,
        "longitude": -120.9968782,
        "state": "California"
    },
    {
        "name": "Fayetteville",
        "latitude": 35.0526641,
        "longitude": -78.87835849999999,
        "state": "North Carolina"
    },
    {
        "name": "Tacoma",
        "latitude": 47.2528768,
        "longitude": -122.4442906,
        "state": "Washington"
    },
    {
        "name": "Oxnard",
        "latitude": 34.1975048,
        "longitude": -119.1770516,
        "state": "California"
    },
    {
        "name": "Fontana",
        "latitude": 34.0922335,
        "longitude": -117.435048,
        "state": "California"
    },
    {
        "name": "Columbus",
        "latitude": 32.4609764,
        "longitude": -84.9877094,
        "state": "Georgia"
    },
    {
        "name": "Montgomery",
        "latitude": 32.3668052,
        "longitude": -86.2999689,
        "state": "Alabama"
    },
    {
        "name": "Moreno Valley",
        "latitude": 33.9424658,
        "longitude": -117.2296717,
        "state": "California"
    },
    {
        "name": "Shreveport",
        "latitude": 32.5251516,
        "longitude": -93.7501789,
        "state": "Louisiana"
    },
    {
        "name": "Aurora",
        "latitude": 41.7605849,
        "longitude": -88.32007150000001,
        "state": "Illinois"
    },
    {
        "name": "Yonkers",
        "latitude": 40.9312099,
        "longitude": -73.89874689999999,
        "state": "New York"
    },
    {
        "name": "Akron",
        "latitude": 41.0814447,
        "longitude": -81.51900529999999,
        "state": "Ohio"
    },
    {
        "name": "Huntington Beach",
        "latitude": 33.660297,
        "longitude": -117.9992265,
        "state": "California"
    },
    {
        "name": "Little Rock",
        "latitude": 34.7464809,
        "longitude": -92.28959479999999,
        "state": "Arkansas"
    },
    {
        "name": "Augusta-Richmond County",
        "latitude": 33.4734978,
        "longitude": -82.0105148,
        "state": "Georgia"
    },
    {
        "name": "Amarillo",
        "latitude": 35.2219971,
        "longitude": -101.8312969,
        "state": "Texas"
    },
    {
        "name": "Glendale",
        "latitude": 34.1425078,
        "longitude": -118.255075,
        "state": "California"
    },
    {
        "name": "Mobile",
        "latitude": 30.6953657,
        "longitude": -88.0398912,
        "state": "Alabama"
    },
    {
        "name": "Grand Rapids",
        "latitude": 42.9633599,
        "longitude": -85.6680863,
        "state": "Michigan"
    },
    {
        "name": "Salt Lake",
        "latitude": 40.7607793,
        "longitude": -111.8910474,
        "state": "Utah"
    },
    {
        "name": "Tallahassee",
        "latitude": 30.4382559,
        "longitude": -84.28073289999999,
        "state": "Florida"
    },
    {
        "name": "Huntsville",
        "latitude": 34.7303688,
        "longitude": -86.5861037,
        "state": "Alabama"
    },
    {
        "name": "Grand Prairie",
        "latitude": 32.7459645,
        "longitude": -96.99778459999999,
        "state": "Texas"
    },
    {
        "name": "Knoxville",
        "latitude": 35.9606384,
        "longitude": -83.9207392,
        "state": "Tennessee"
    },
    {
        "name": "Worcester",
        "latitude": 42.2625932,
        "longitude": -71.8022934,
        "state": "Massachusetts"
    },
    {
        "name": "Newport News",
        "latitude": 37.0870821,
        "longitude": -76.4730122,
        "state": "Virginia"
    },
    {
        "name": "Brownsville",
        "latitude": 25.9017472,
        "longitude": -97.4974838,
        "state": "Texas"
    },
    {
        "name": "Overland Park",
        "latitude": 38.9822282,
        "longitude": -94.6707917,
        "state": "Kansas"
    },
    {
        "name": "Santa Clarita",
        "latitude": 34.3916641,
        "longitude": -118.542586,
        "state": "California"
    },
    {
        "name": "Providence",
        "latitude": 41.8239891,
        "longitude": -71.4128343,
        "state": "Rhode Island"
    },
    {
        "name": "Garden Grove",
        "latitude": 33.7739053,
        "longitude": -117.9414477,
        "state": "California"
    },
    {
        "name": "Chattanooga",
        "latitude": 35.0456297,
        "longitude": -85.3096801,
        "state": "Tennessee"
    },
    {
        "name": "Oceanside",
        "latitude": 33.1958696,
        "longitude": -117.3794834,
        "state": "California"
    },
    {
        "name": "Jackson",
        "latitude": 32.2987573,
        "longitude": -90.1848103,
        "state": "Mississippi"
    },
    {
        "name": "Fort Lauderdale",
        "latitude": 26.1224386,
        "longitude": -80.13731740000001,
        "state": "Florida"
    },
    {
        "name": "Santa Rosa",
        "latitude": 38.440429,
        "longitude": -122.7140548,
        "state": "California"
    },
    {
        "name": "Rancho Cucamonga",
        "latitude": 34.10639889999999,
        "longitude": -117.5931084,
        "state": "California"
    },
    {
        "name": "Port St. Lucie",
        "latitude": 27.2730492,
        "longitude": -80.3582261,
        "state": "Florida"
    },
    {
        "name": "Tempe",
        "latitude": 33.4255104,
        "longitude": -111.9400054,
        "state": "Arizona"
    },
    {
        "name": "Ontario",
        "latitude": 34.0633443,
        "longitude": -117.6508876,
        "state": "California"
    },
    {
        "name": "Vancouver",
        "latitude": 45.6387281,
        "longitude": -122.6614861,
        "state": "Washington"
    },
    {
        "name": "Cape Coral",
        "latitude": 26.5628537,
        "longitude": -81.9495331,
        "state": "Florida"
    },
    {
        "name": "Sioux Falls",
        "latitude": 43.5445959,
        "longitude": -96.73110340000001,
        "state": "South Dakota"
    },
    {
        "name": "Springfield",
        "latitude": 37.2089572,
        "longitude": -93.29229889999999,
        "state": "Missouri"
    },
    {
        "name": "Peoria",
        "latitude": 33.5805955,
        "longitude": -112.2373779,
        "state": "Arizona"
    },
    {
        "name": "Pembroke Pines",
        "latitude": 26.007765,
        "longitude": -80.2962555,
        "state": "Florida"
    },
    {
        "name": "Elk Grove",
        "latitude": 38.4087993,
        "longitude": -121.3716178,
        "state": "California"
    },
    {
        "name": "Salem",
        "latitude": 44.9428975,
        "longitude": -123.0350963,
        "state": "Oregon"
    },
    {
        "name": "Lancaster",
        "latitude": 34.6867846,
        "longitude": -118.1541632,
        "state": "California"
    },
    {
        "name": "Corona",
        "latitude": 33.8752935,
        "longitude": -117.5664384,
        "state": "California"
    },
    {
        "name": "Eugene",
        "latitude": 44.0520691,
        "longitude": -123.0867536,
        "state": "Oregon"
    },
    {
        "name": "Palmdale",
        "latitude": 34.5794343,
        "longitude": -118.1164613,
        "state": "California"
    },
    {
        "name": "Salinas",
        "latitude": 36.6777372,
        "longitude": -121.6555013,
        "state": "California"
    },
    {
        "name": "Springfield",
        "latitude": 42.1014831,
        "longitude": -72.589811,
        "state": "Massachusetts"
    },
    {
        "name": "Pasadena",
        "latitude": 29.6910625,
        "longitude": -95.2091006,
        "state": "Texas"
    },
    {
        "name": "Fort Collins",
        "latitude": 40.5852602,
        "longitude": -105.084423,
        "state": "Colorado"
    },
    {
        "name": "Hayward",
        "latitude": 37.6688205,
        "longitude": -122.0807964,
        "state": "California"
    },
    {
        "name": "Pomona",
        "latitude": 34.055103,
        "longitude": -117.7499909,
        "state": "California"
    },
    {
        "name": "Cary",
        "latitude": 35.79154,
        "longitude": -78.7811169,
        "state": "North Carolina"
    },
    {
        "name": "Rockford",
        "latitude": 42.2711311,
        "longitude": -89.0939952,
        "state": "Illinois"
    },
    {
        "name": "Alexandria",
        "latitude": 38.8048355,
        "longitude": -77.0469214,
        "state": "Virginia"
    },
    {
        "name": "Escondido",
        "latitude": 33.1192068,
        "longitude": -117.086421,
        "state": "California"
    },
    {
        "name": "McKinney",
        "latitude": 33.1972465,
        "longitude": -96.6397822,
        "state": "Texas"
    },
    {
        "name": "Kansas",
        "latitude": 39.114053,
        "longitude": -94.6274636,
        "state": "Kansas"
    },
    {
        "name": "Joliet",
        "latitude": 41.525031,
        "longitude": -88.0817251,
        "state": "Illinois"
    },
    {
        "name": "Sunnyvale",
        "latitude": 37.36883,
        "longitude": -122.0363496,
        "state": "California"
    },
    {
        "name": "Torrance",
        "latitude": 33.8358492,
        "longitude": -118.3406288,
        "state": "California"
    },
    {
        "name": "Bridgeport",
        "latitude": 41.1865478,
        "longitude": -73.19517669999999,
        "state": "Connecticut"
    },
    {
        "name": "Lakewood",
        "latitude": 39.7047095,
        "longitude": -105.0813734,
        "state": "Colorado"
    },
    {
        "name": "Hollywood",
        "latitude": 26.0112014,
        "longitude": -80.1494901,
        "state": "Florida"
    },
    {
        "name": "Paterson",
        "latitude": 40.9167654,
        "longitude": -74.17181099999999,
        "state": "New Jersey"
    },
    {
        "name": "Naperville",
        "latitude": 41.7508391,
        "longitude": -88.1535352,
        "state": "Illinois"
    },
    {
        "name": "Syracuse",
        "latitude": 43.0481221,
        "longitude": -76.14742439999999,
        "state": "New York"
    },
    {
        "name": "Mesquite",
        "latitude": 32.76679550000001,
        "longitude": -96.5991593,
        "state": "Texas"
    },
    {
        "name": "Dayton",
        "latitude": 39.7589478,
        "longitude": -84.1916069,
        "state": "Ohio"
    },
    {
        "name": "Savannah",
        "latitude": 32.0835407,
        "longitude": -81.09983419999999,
        "state": "Georgia"
    },
    {
        "name": "Clarksville",
        "latitude": 36.5297706,
        "longitude": -87.3594528,
        "state": "Tennessee"
    },
    {
        "name": "Orange",
        "latitude": 33.7877944,
        "longitude": -117.8531119,
        "state": "California"
    },
    {
        "name": "Pasadena",
        "latitude": 34.1477849,
        "longitude": -118.1445155,
        "state": "California"
    },
    {
        "name": "Fullerton",
        "latitude": 33.8703596,
        "longitude": -117.9242966,
        "state": "California"
    },
    {
        "name": "Killeen",
        "latitude": 31.1171194,
        "longitude": -97.72779589999999,
        "state": "Texas"
    },
    {
        "name": "Frisco",
        "latitude": 33.1506744,
        "longitude": -96.82361159999999,
        "state": "Texas"
    },
    {
        "name": "Hampton",
        "latitude": 37.0298687,
        "longitude": -76.34522179999999,
        "state": "Virginia"
    },
    {
        "name": "McAllen",
        "latitude": 26.2034071,
        "longitude": -98.23001239999999,
        "state": "Texas"
    },
    {
        "name": "Warren",
        "latitude": 42.5144566,
        "longitude": -83.01465259999999,
        "state": "Michigan"
    },
    {
        "name": "Bellevue",
        "latitude": 47.610377,
        "longitude": -122.2006786,
        "state": "Washington"
    },
    {
        "name": "West Valley",
        "latitude": 40.6916132,
        "longitude": -112.0010501,
        "state": "Utah"
    },
    {
        "name": "Columbia",
        "latitude": 34.0007104,
        "longitude": -81.0348144,
        "state": "South Carolina"
    },
    {
        "name": "Olathe",
        "latitude": 38.8813958,
        "longitude": -94.81912849999999,
        "state": "Kansas"
    },
    {
        "name": "Sterling Heights",
        "latitude": 42.5803122,
        "longitude": -83.0302033,
        "state": "Michigan"
    },
    {
        "name": "New Haven",
        "latitude": 41.308274,
        "longitude": -72.9278835,
        "state": "Connecticut"
    },
    {
        "name": "Miramar",
        "latitude": 25.9860762,
        "longitude": -80.30356019999999,
        "state": "Florida"
    },
    {
        "name": "Waco",
        "latitude": 31.549333,
        "longitude": -97.1466695,
        "state": "Texas"
    },
    {
        "name": "Thousand Oaks",
        "latitude": 34.1705609,
        "longitude": -118.8375937,
        "state": "California"
    },
    {
        "name": "Cedar Rapids",
        "latitude": 41.9778795,
        "longitude": -91.6656232,
        "state": "Iowa"
    },
    {
        "name": "Charleston",
        "latitude": 32.7764749,
        "longitude": -79.93105120000001,
        "state": "South Carolina"
    },
    {
        "name": "Visalia",
        "latitude": 36.3302284,
        "longitude": -119.2920585,
        "state": "California"
    },
    {
        "name": "Topeka",
        "latitude": 39.0558235,
        "longitude": -95.68901849999999,
        "state": "Kansas"
    },
    {
        "name": "Elizabeth",
        "latitude": 40.6639916,
        "longitude": -74.2107006,
        "state": "New Jersey"
    },
    {
        "name": "Gainesville",
        "latitude": 29.6516344,
        "longitude": -82.32482619999999,
        "state": "Florida"
    },
    {
        "name": "Thornton",
        "latitude": 39.8680412,
        "longitude": -104.9719243,
        "state": "Colorado"
    },
    {
        "name": "Roseville",
        "latitude": 38.7521235,
        "longitude": -121.2880059,
        "state": "California"
    },
    {
        "name": "Carrollton",
        "latitude": 32.9756415,
        "longitude": -96.8899636,
        "state": "Texas"
    },
    {
        "name": "Coral Springs",
        "latitude": 26.271192,
        "longitude": -80.2706044,
        "state": "Florida"
    },
    {
        "name": "Stamford",
        "latitude": 41.0534302,
        "longitude": -73.5387341,
        "state": "Connecticut"
    },
    {
        "name": "Simi Valley",
        "latitude": 34.2694474,
        "longitude": -118.781482,
        "state": "California"
    },
    {
        "name": "Concord",
        "latitude": 37.9779776,
        "longitude": -122.0310733,
        "state": "California"
    },
    {
        "name": "Hartford",
        "latitude": 41.76371109999999,
        "longitude": -72.6850932,
        "state": "Connecticut"
    },
    {
        "name": "Kent",
        "latitude": 47.3809335,
        "longitude": -122.2348431,
        "state": "Washington"
    },
    {
        "name": "Lafayette",
        "latitude": 30.2240897,
        "longitude": -92.0198427,
        "state": "Louisiana"
    },
    {
        "name": "Midland",
        "latitude": 31.9973456,
        "longitude": -102.0779146,
        "state": "Texas"
    },
    {
        "name": "Surprise",
        "latitude": 33.6292337,
        "longitude": -112.3679279,
        "state": "Arizona"
    },
    {
        "name": "Denton",
        "latitude": 33.2148412,
        "longitude": -97.13306829999999,
        "state": "Texas"
    },
    {
        "name": "Victorville",
        "latitude": 34.5362184,
        "longitude": -117.2927641,
        "state": "California"
    },
    {
        "name": "Evansville",
        "latitude": 37.9715592,
        "longitude": -87.5710898,
        "state": "Indiana"
    },
    {
        "name": "Santa Clara",
        "latitude": 37.3541079,
        "longitude": -121.9552356,
        "state": "California"
    },
    {
        "name": "Abilene",
        "latitude": 32.4487364,
        "longitude": -99.73314390000002,
        "state": "Texas"
    },
    {
        "name": "Athens-Clarke County",
        "latitude": 33.9519347,
        "longitude": -83.357567,
        "state": "Georgia"
    },
    {
        "name": "Vallejo",
        "latitude": 38.1040864,
        "longitude": -122.2566367,
        "state": "California"
    },
    {
        "name": "Allentown",
        "latitude": 40.6084305,
        "longitude": -75.4901833,
        "state": "Pennsylvania"
    },
    {
        "name": "Norman",
        "latitude": 35.2225668,
        "longitude": -97.4394777,
        "state": "Oklahoma"
    },
    {
        "name": "Beaumont",
        "latitude": 30.080174,
        "longitude": -94.1265562,
        "state": "Texas"
    },
    {
        "name": "Independence",
        "latitude": 39.0911161,
        "longitude": -94.41550679999999,
        "state": "Missouri"
    },
    {
        "name": "Murfreesboro",
        "latitude": 35.8456213,
        "longitude": -86.39027,
        "state": "Tennessee"
    },
    {
        "name": "Ann Arbor",
        "latitude": 42.2808256,
        "longitude": -83.7430378,
        "state": "Michigan"
    },
    {
        "name": "Springfield",
        "latitude": 39.78172130000001,
        "longitude": -89.6501481,
        "state": "Illinois"
    },
    {
        "name": "Berkeley",
        "latitude": 37.8715926,
        "longitude": -122.272747,
        "state": "California"
    },
    {
        "name": "Peoria",
        "latitude": 40.6936488,
        "longitude": -89.5889864,
        "state": "Illinois"
    },
    {
        "name": "Provo",
        "latitude": 40.2338438,
        "longitude": -111.6585337,
        "state": "Utah"
    },
    {
        "name": "El Monte",
        "latitude": 34.0686206,
        "longitude": -118.0275667,
        "state": "California"
    },
    {
        "name": "Columbia",
        "latitude": 38.9517053,
        "longitude": -92.3340724,
        "state": "Missouri"
    },
    {
        "name": "Lansing",
        "latitude": 42.732535,
        "longitude": -84.5555347,
        "state": "Michigan"
    },
    {
        "name": "Fargo",
        "latitude": 46.8771863,
        "longitude": -96.7898034,
        "state": "North Dakota"
    },
    {
        "name": "Downey",
        "latitude": 33.9401088,
        "longitude": -118.1331593,
        "state": "California"
    },
    {
        "name": "Costa Mesa",
        "latitude": 33.6411316,
        "longitude": -117.9186689,
        "state": "California"
    },
    {
        "name": "Wilmington",
        "latitude": 34.2257255,
        "longitude": -77.9447102,
        "state": "North Carolina"
    },
    {
        "name": "Arvada",
        "latitude": 39.8027644,
        "longitude": -105.0874842,
        "state": "Colorado"
    },
    {
        "name": "Inglewood",
        "latitude": 33.9616801,
        "longitude": -118.3531311,
        "state": "California"
    },
    {
        "name": "Miami Gardens",
        "latitude": 25.9420377,
        "longitude": -80.2456045,
        "state": "Florida"
    },
    {
        "name": "Carlsbad",
        "latitude": 33.1580933,
        "longitude": -117.3505939,
        "state": "California"
    },
    {
        "name": "Westminster",
        "latitude": 39.8366528,
        "longitude": -105.0372046,
        "state": "Colorado"
    },
    {
        "name": "Rochester",
        "latitude": 44.0121221,
        "longitude": -92.4801989,
        "state": "Minnesota"
    },
    {
        "name": "Odessa",
        "latitude": 31.8456816,
        "longitude": -102.3676431,
        "state": "Texas"
    },
    {
        "name": "Manchester",
        "latitude": 42.9956397,
        "longitude": -71.4547891,
        "state": "New Hampshire"
    },
    {
        "name": "Elgin",
        "latitude": 42.0354084,
        "longitude": -88.2825668,
        "state": "Illinois"
    },
    {
        "name": "West Jordan",
        "latitude": 40.6096698,
        "longitude": -111.9391031,
        "state": "Utah"
    },
    {
        "name": "Round Rock",
        "latitude": 30.5082551,
        "longitude": -97.678896,
        "state": "Texas"
    },
    {
        "name": "Clearwater",
        "latitude": 27.9658533,
        "longitude": -82.8001026,
        "state": "Florida"
    },
    {
        "name": "Waterbury",
        "latitude": 41.5581525,
        "longitude": -73.0514965,
        "state": "Connecticut"
    },
    {
        "name": "Gresham",
        "latitude": 45.5001357,
        "longitude": -122.4302013,
        "state": "Oregon"
    },
    {
        "name": "Fairfield",
        "latitude": 38.24935809999999,
        "longitude": -122.0399663,
        "state": "California"
    },
    {
        "name": "Billings",
        "latitude": 45.7832856,
        "longitude": -108.5006904,
        "state": "Montana"
    },
    {
        "name": "Lowell",
        "latitude": 42.6334247,
        "longitude": -71.31617179999999,
        "state": "Massachusetts"
    },
    {
        "name": "San Buenaventura (Ventura)",
        "latitude": 34.274646,
        "longitude": -119.2290316,
        "state": "California"
    },
    {
        "name": "Pueblo",
        "latitude": 38.2544472,
        "longitude": -104.6091409,
        "state": "Colorado"
    },
    {
        "name": "High Point",
        "latitude": 35.9556923,
        "longitude": -80.0053176,
        "state": "North Carolina"
    },
    {
        "name": "West Covina",
        "latitude": 34.0686208,
        "longitude": -117.9389526,
        "state": "California"
    },
    {
        "name": "Richmond",
        "latitude": 37.9357576,
        "longitude": -122.3477486,
        "state": "California"
    },
    {
        "name": "Murrieta",
        "latitude": 33.5539143,
        "longitude": -117.2139232,
        "state": "California"
    },
    {
        "name": "Cambridge",
        "latitude": 42.3736158,
        "longitude": -71.10973349999999,
        "state": "Massachusetts"
    },
    {
        "name": "Antioch",
        "latitude": 38.0049214,
        "longitude": -121.805789,
        "state": "California"
    },
    {
        "name": "Temecula",
        "latitude": 33.4936391,
        "longitude": -117.1483648,
        "state": "California"
    },
    {
        "name": "Norwalk",
        "latitude": 33.9022367,
        "longitude": -118.081733,
        "state": "California"
    },
    {
        "name": "Centennial",
        "latitude": 39.5807452,
        "longitude": -104.8771726,
        "state": "Colorado"
    },
    {
        "name": "Everett",
        "latitude": 47.9789848,
        "longitude": -122.2020794,
        "state": "Washington"
    },
    {
        "name": "Palm Bay",
        "latitude": 28.0344621,
        "longitude": -80.5886646,
        "state": "Florida"
    },
    {
        "name": "Wichita Falls",
        "latitude": 33.9137085,
        "longitude": -98.4933873,
        "state": "Texas"
    },
    {
        "name": "Green Bay",
        "latitude": 44.51915899999999,
        "longitude": -88.019826,
        "state": "Wisconsin"
    },
    {
        "name": "Daly",
        "latitude": 37.6879241,
        "longitude": -122.4702079,
        "state": "California"
    },
    {
        "name": "Burbank",
        "latitude": 34.1808392,
        "longitude": -118.3089661,
        "state": "California"
    },
    {
        "name": "Richardson",
        "latitude": 32.9483335,
        "longitude": -96.7298519,
        "state": "Texas"
    },
    {
        "name": "Pompano Beach",
        "latitude": 26.2378597,
        "longitude": -80.1247667,
        "state": "Florida"
    },
    {
        "name": "North Charleston",
        "latitude": 32.8546197,
        "longitude": -79.9748103,
        "state": "South Carolina"
    },
    {
        "name": "Broken Arrow",
        "latitude": 36.060949,
        "longitude": -95.7974526,
        "state": "Oklahoma"
    },
    {
        "name": "Boulder",
        "latitude": 40.0149856,
        "longitude": -105.2705456,
        "state": "Colorado"
    },
    {
        "name": "West Palm Beach",
        "latitude": 26.7153424,
        "longitude": -80.0533746,
        "state": "Florida"
    },
    {
        "name": "Santa Maria",
        "latitude": 34.9530337,
        "longitude": -120.4357191,
        "state": "California"
    },
    {
        "name": "El Cajon",
        "latitude": 32.7947731,
        "longitude": -116.9625269,
        "state": "California"
    },
    {
        "name": "Davenport",
        "latitude": 41.5236437,
        "longitude": -90.5776367,
        "state": "Iowa"
    },
    {
        "name": "Rialto",
        "latitude": 34.1064001,
        "longitude": -117.3703235,
        "state": "California"
    },
    {
        "name": "Las Cruces",
        "latitude": 32.3199396,
        "longitude": -106.7636538,
        "state": "New Mexico"
    },
    {
        "name": "San Mateo",
        "latitude": 37.5629917,
        "longitude": -122.3255254,
        "state": "California"
    },
    {
        "name": "Lewisville",
        "latitude": 33.046233,
        "longitude": -96.994174,
        "state": "Texas"
    },
    {
        "name": "South Bend",
        "latitude": 41.6763545,
        "longitude": -86.25198979999999,
        "state": "Indiana"
    },
    {
        "name": "Lakeland",
        "latitude": 28.0394654,
        "longitude": -81.9498042,
        "state": "Florida"
    },
    {
        "name": "Erie",
        "latitude": 42.12922409999999,
        "longitude": -80.085059,
        "state": "Pennsylvania"
    },
    {
        "name": "Tyler",
        "latitude": 32.3512601,
        "longitude": -95.30106239999999,
        "state": "Texas"
    },
    {
        "name": "Pearland",
        "latitude": 29.5635666,
        "longitude": -95.2860474,
        "state": "Texas"
    },
    {
        "name": "College Station",
        "latitude": 30.627977,
        "longitude": -96.3344068,
        "state": "Texas"
    },
    {
        "name": "Kenosha",
        "latitude": 42.5847425,
        "longitude": -87.82118539999999,
        "state": "Wisconsin"
    },
    {
        "name": "Sandy Springs",
        "latitude": 33.9304352,
        "longitude": -84.3733147,
        "state": "Georgia"
    },
    {
        "name": "Clovis",
        "latitude": 36.8252277,
        "longitude": -119.7029194,
        "state": "California"
    },
    {
        "name": "Flint",
        "latitude": 43.0125274,
        "longitude": -83.6874562,
        "state": "Michigan"
    },
    {
        "name": "Roanoke",
        "latitude": 37.2709704,
        "longitude": -79.9414266,
        "state": "Virginia"
    },
    {
        "name": "Albany",
        "latitude": 42.6525793,
        "longitude": -73.7562317,
        "state": "New York"
    },
    {
        "name": "Jurupa Valley",
        "latitude": 33.9971974,
        "longitude": -117.4854802,
        "state": "California"
    },
    {
        "name": "Compton",
        "latitude": 33.8958492,
        "longitude": -118.2200712,
        "state": "California"
    },
    {
        "name": "San Angelo",
        "latitude": 31.4637723,
        "longitude": -100.4370375,
        "state": "Texas"
    },
    {
        "name": "Hillsboro",
        "latitude": 45.5228939,
        "longitude": -122.989827,
        "state": "Oregon"
    },
    {
        "name": "Lawton",
        "latitude": 34.6035669,
        "longitude": -98.39592909999999,
        "state": "Oklahoma"
    },
    {
        "name": "Renton",
        "latitude": 47.48287759999999,
        "longitude": -122.2170661,
        "state": "Washington"
    },
    {
        "name": "Vista",
        "latitude": 33.2000368,
        "longitude": -117.2425355,
        "state": "California"
    },
    {
        "name": "Davie",
        "latitude": 26.0764783,
        "longitude": -80.25211569999999,
        "state": "Florida"
    },
    {
        "name": "Greeley",
        "latitude": 40.4233142,
        "longitude": -104.7091322,
        "state": "Colorado"
    },
    {
        "name": "Mission Viejo",
        "latitude": 33.6000232,
        "longitude": -117.6719953,
        "state": "California"
    },
    {
        "name": "Portsmouth",
        "latitude": 36.8354258,
        "longitude": -76.2982742,
        "state": "Virginia"
    },
    {
        "name": "Dearborn",
        "latitude": 42.3222599,
        "longitude": -83.17631449999999,
        "state": "Michigan"
    },
    {
        "name": "South Gate",
        "latitude": 33.954737,
        "longitude": -118.2120161,
        "state": "California"
    },
    {
        "name": "Tuscaloosa",
        "latitude": 33.2098407,
        "longitude": -87.56917349999999,
        "state": "Alabama"
    },
    {
        "name": "Livonia",
        "latitude": 42.36837,
        "longitude": -83.35270969999999,
        "state": "Michigan"
    },
    {
        "name": "New Bedford",
        "latitude": 41.6362152,
        "longitude": -70.93420499999999,
        "state": "Massachusetts"
    },
    {
        "name": "Vacaville",
        "latitude": 38.3565773,
        "longitude": -121.9877444,
        "state": "California"
    },
    {
        "name": "Brockton",
        "latitude": 42.0834335,
        "longitude": -71.0183787,
        "state": "Massachusetts"
    },
    {
        "name": "Roswell",
        "latitude": 34.0232431,
        "longitude": -84.3615555,
        "state": "Georgia"
    },
    {
        "name": "Beaverton",
        "latitude": 45.48706199999999,
        "longitude": -122.8037102,
        "state": "Oregon"
    },
    {
        "name": "Quincy",
        "latitude": 42.2528772,
        "longitude": -71.0022705,
        "state": "Massachusetts"
    },
    {
        "name": "Sparks",
        "latitude": 39.5349112,
        "longitude": -119.7526886,
        "state": "Nevada"
    },
    {
        "name": "Yakima",
        "latitude": 46.6020711,
        "longitude": -120.5058987,
        "state": "Washington"
    },
    {
        "name": "Lee's Summit",
        "latitude": 38.9108408,
        "longitude": -94.3821724,
        "state": "Missouri"
    },
    {
        "name": "Federal Way",
        "latitude": 47.3223221,
        "longitude": -122.3126222,
        "state": "Washington"
    },
    {
        "name": "Carson",
        "latitude": 33.8316745,
        "longitude": -118.281693,
        "state": "California"
    },
    {
        "name": "Santa Monica",
        "latitude": 34.0194543,
        "longitude": -118.4911912,
        "state": "California"
    },
    {
        "name": "Hesperia",
        "latitude": 34.4263886,
        "longitude": -117.3008784,
        "state": "California"
    },
    {
        "name": "Allen",
        "latitude": 33.1031744,
        "longitude": -96.67055030000002,
        "state": "Texas"
    },
    {
        "name": "Rio Rancho",
        "latitude": 35.2327544,
        "longitude": -106.6630437,
        "state": "New Mexico"
    },
    {
        "name": "Yuma",
        "latitude": 32.6926512,
        "longitude": -114.6276916,
        "state": "Arizona"
    },
    {
        "name": "Westminster",
        "latitude": 33.7513419,
        "longitude": -117.9939921,
        "state": "California"
    },
    {
        "name": "Orem",
        "latitude": 40.2968979,
        "longitude": -111.6946475,
        "state": "Utah"
    },
    {
        "name": "Lynn",
        "latitude": 42.46676300000001,
        "longitude": -70.9494938,
        "state": "Massachusetts"
    },
    {
        "name": "Redding",
        "latitude": 40.5865396,
        "longitude": -122.3916754,
        "state": "California"
    },
    {
        "name": "Spokane Valley",
        "latitude": 47.6732281,
        "longitude": -117.2393748,
        "state": "Washington"
    },
    {
        "name": "Miami Beach",
        "latitude": 25.790654,
        "longitude": -80.1300455,
        "state": "Florida"
    },
    {
        "name": "League",
        "latitude": 29.5074538,
        "longitude": -95.0949303,
        "state": "Texas"
    },
    {
        "name": "Lawrence",
        "latitude": 38.9716689,
        "longitude": -95.2352501,
        "state": "Kansas"
    },
    {
        "name": "Santa Barbara",
        "latitude": 34.4208305,
        "longitude": -119.6981901,
        "state": "California"
    },
    {
        "name": "Plantation",
        "latitude": 26.1275862,
        "longitude": -80.23310359999999,
        "state": "Florida"
    },
    {
        "name": "Sandy",
        "latitude": 40.5649781,
        "longitude": -111.8389726,
        "state": "Utah"
    },
    {
        "name": "Sunrise",
        "latitude": 26.1669711,
        "longitude": -80.25659499999999,
        "state": "Florida"
    },
    {
        "name": "Macon",
        "latitude": 32.8406946,
        "longitude": -83.6324022,
        "state": "Georgia"
    },
    {
        "name": "Longmont",
        "latitude": 40.1672068,
        "longitude": -105.1019275,
        "state": "Colorado"
    },
    {
        "name": "Boca Raton",
        "latitude": 26.3683064,
        "longitude": -80.1289321,
        "state": "Florida"
    },
    {
        "name": "San Marcos",
        "latitude": 33.1433723,
        "longitude": -117.1661449,
        "state": "California"
    },
    {
        "name": "Greenville",
        "latitude": 35.612661,
        "longitude": -77.3663538,
        "state": "North Carolina"
    },
    {
        "name": "Waukegan",
        "latitude": 42.3636331,
        "longitude": -87.84479379999999,
        "state": "Illinois"
    },
    {
        "name": "Fall River",
        "latitude": 41.7014912,
        "longitude": -71.1550451,
        "state": "Massachusetts"
    },
    {
        "name": "Chico",
        "latitude": 39.7284944,
        "longitude": -121.8374777,
        "state": "California"
    },
    {
        "name": "Newton",
        "latitude": 42.3370413,
        "longitude": -71.20922139999999,
        "state": "Massachusetts"
    },
    {
        "name": "San Leandro",
        "latitude": 37.7249296,
        "longitude": -122.1560768,
        "state": "California"
    },
    {
        "name": "Reading",
        "latitude": 40.3356483,
        "longitude": -75.9268747,
        "state": "Pennsylvania"
    },
    {
        "name": "Norwalk",
        "latitude": 41.11774399999999,
        "longitude": -73.4081575,
        "state": "Connecticut"
    },
    {
        "name": "Fort Smith",
        "latitude": 35.3859242,
        "longitude": -94.39854749999999,
        "state": "Arkansas"
    },
    {
        "name": "Newport Beach",
        "latitude": 33.6189101,
        "longitude": -117.9289469,
        "state": "California"
    },
    {
        "name": "Asheville",
        "latitude": 35.5950581,
        "longitude": -82.5514869,
        "state": "North Carolina"
    },
    {
        "name": "Nashua",
        "latitude": 42.7653662,
        "longitude": -71.46756599999999,
        "state": "New Hampshire"
    },
    {
        "name": "Edmond",
        "latitude": 35.6528323,
        "longitude": -97.47809540000002,
        "state": "Oklahoma"
    },
    {
        "name": "Whittier",
        "latitude": 33.9791793,
        "longitude": -118.032844,
        "state": "California"
    },
    {
        "name": "Nampa",
        "latitude": 43.5407172,
        "longitude": -116.5634624,
        "state": "Idaho"
    },
    {
        "name": "Bloomington",
        "latitude": 44.840798,
        "longitude": -93.2982799,
        "state": "Minnesota"
    },
    {
        "name": "Deltona",
        "latitude": 28.9005446,
        "longitude": -81.26367379999999,
        "state": "Florida"
    },
    {
        "name": "Hawthorne",
        "latitude": 33.9164032,
        "longitude": -118.3525748,
        "state": "California"
    },
    {
        "name": "Duluth",
        "latitude": 46.78667189999999,
        "longitude": -92.1004852,
        "state": "Minnesota"
    },
    {
        "name": "Carmel",
        "latitude": 39.978371,
        "longitude": -86.1180435,
        "state": "Indiana"
    },
    {
        "name": "Suffolk",
        "latitude": 36.7282054,
        "longitude": -76.5835621,
        "state": "Virginia"
    },
    {
        "name": "Clifton",
        "latitude": 40.8584328,
        "longitude": -74.16375529999999,
        "state": "New Jersey"
    },
    {
        "name": "Citrus Heights",
        "latitude": 38.7071247,
        "longitude": -121.2810611,
        "state": "California"
    },
    {
        "name": "Livermore",
        "latitude": 37.6818745,
        "longitude": -121.7680088,
        "state": "California"
    },
    {
        "name": "Tracy",
        "latitude": 37.7396513,
        "longitude": -121.4252227,
        "state": "California"
    },
    {
        "name": "Alhambra",
        "latitude": 34.095287,
        "longitude": -118.1270146,
        "state": "California"
    },
    {
        "name": "Kirkland",
        "latitude": 47.6814875,
        "longitude": -122.2087353,
        "state": "Washington"
    },
    {
        "name": "Trenton",
        "latitude": 40.2170534,
        "longitude": -74.7429384,
        "state": "New Jersey"
    },
    {
        "name": "Ogden",
        "latitude": 41.223,
        "longitude": -111.9738304,
        "state": "Utah"
    },
    {
        "name": "Hoover",
        "latitude": 33.4053867,
        "longitude": -86.8113781,
        "state": "Alabama"
    },
    {
        "name": "Cicero",
        "latitude": 41.8455877,
        "longitude": -87.7539448,
        "state": "Illinois"
    },
    {
        "name": "Fishers",
        "latitude": 39.9567548,
        "longitude": -86.01335,
        "state": "Indiana"
    },
    {
        "name": "Sugar Land",
        "latitude": 29.6196787,
        "longitude": -95.6349463,
        "state": "Texas"
    },
    {
        "name": "Danbury",
        "latitude": 41.394817,
        "longitude": -73.4540111,
        "state": "Connecticut"
    },
    {
        "name": "Meridian",
        "latitude": 43.6121087,
        "longitude": -116.3915131,
        "state": "Idaho"
    },
    {
        "name": "Indio",
        "latitude": 33.7205771,
        "longitude": -116.2155619,
        "state": "California"
    },
    {
        "name": "Concord",
        "latitude": 35.4087517,
        "longitude": -80.579511,
        "state": "North Carolina"
    },
    {
        "name": "Menifee",
        "latitude": 33.6971468,
        "longitude": -117.185294,
        "state": "California"
    },
    {
        "name": "Champaign",
        "latitude": 40.1164204,
        "longitude": -88.2433829,
        "state": "Illinois"
    },
    {
        "name": "Buena Park",
        "latitude": 33.8675143,
        "longitude": -117.9981181,
        "state": "California"
    },
    {
        "name": "Troy",
        "latitude": 42.6064095,
        "longitude": -83.1497751,
        "state": "Michigan"
    },
    {
        "name": "O'Fallon",
        "latitude": 38.8106075,
        "longitude": -90.69984769999999,
        "state": "Missouri"
    },
    {
        "name": "Johns Creek",
        "latitude": 34.0289259,
        "longitude": -84.198579,
        "state": "Georgia"
    },
    {
        "name": "Bellingham",
        "latitude": 48.74908,
        "longitude": -122.4781473,
        "state": "Washington"
    },
    {
        "name": "Westland",
        "latitude": 42.32420399999999,
        "longitude": -83.400211,
        "state": "Michigan"
    },
    {
        "name": "Bloomington",
        "latitude": 39.165325,
        "longitude": -86.52638569999999,
        "state": "Indiana"
    },
    {
        "name": "Sioux",
        "latitude": 42.4999942,
        "longitude": -96.40030689999999,
        "state": "Iowa"
    },
    {
        "name": "Warwick",
        "latitude": 41.7001009,
        "longitude": -71.4161671,
        "state": "Rhode Island"
    },
    {
        "name": "Hemet",
        "latitude": 33.7475203,
        "longitude": -116.9719684,
        "state": "California"
    },
    {
        "name": "Longview",
        "latitude": 32.5007037,
        "longitude": -94.74048909999999,
        "state": "Texas"
    },
    {
        "name": "Farmington Hills",
        "latitude": 42.4989936,
        "longitude": -83.3677168,
        "state": "Michigan"
    },
    {
        "name": "Bend",
        "latitude": 44.0581728,
        "longitude": -121.3153096,
        "state": "Oregon"
    },
    {
        "name": "Lakewood",
        "latitude": 33.8536269,
        "longitude": -118.1339563,
        "state": "California"
    },
    {
        "name": "Merced",
        "latitude": 37.3021632,
        "longitude": -120.4829677,
        "state": "California"
    },
    {
        "name": "Mission",
        "latitude": 26.2159066,
        "longitude": -98.32529319999999,
        "state": "Texas"
    },
    {
        "name": "Chino",
        "latitude": 34.0122346,
        "longitude": -117.688944,
        "state": "California"
    },
    {
        "name": "Redwood",
        "latitude": 37.48521520000001,
        "longitude": -122.2363548,
        "state": "California"
    },
    {
        "name": "Edinburg",
        "latitude": 26.3017374,
        "longitude": -98.1633432,
        "state": "Texas"
    },
    {
        "name": "Cranston",
        "latitude": 41.7798226,
        "longitude": -71.4372796,
        "state": "Rhode Island"
    },
    {
        "name": "Parma",
        "latitude": 41.4047742,
        "longitude": -81.7229086,
        "state": "Ohio"
    },
    {
        "name": "New Rochelle",
        "latitude": 40.9114882,
        "longitude": -73.7823549,
        "state": "New York"
    },
    {
        "name": "Lake Forest",
        "latitude": 33.6469661,
        "longitude": -117.689218,
        "state": "California"
    },
    {
        "name": "Napa",
        "latitude": 38.2975381,
        "longitude": -122.286865,
        "state": "California"
    },
    {
        "name": "Hammond",
        "latitude": 41.5833688,
        "longitude": -87.5000412,
        "state": "Indiana"
    },
    {
        "name": "Fayetteville",
        "latitude": 36.0625795,
        "longitude": -94.1574263,
        "state": "Arkansas"
    },
    {
        "name": "Bloomington",
        "latitude": 40.4842027,
        "longitude": -88.99368729999999,
        "state": "Illinois"
    },
    {
        "name": "Avondale",
        "latitude": 33.4355977,
        "longitude": -112.3496021,
        "state": "Arizona"
    },
    {
        "name": "Somerville",
        "latitude": 42.3875968,
        "longitude": -71.0994968,
        "state": "Massachusetts"
    },
    {
        "name": "Palm Coast",
        "latitude": 29.5844524,
        "longitude": -81.20786989999999,
        "state": "Florida"
    },
    {
        "name": "Bryan",
        "latitude": 30.6743643,
        "longitude": -96.3699632,
        "state": "Texas"
    },
    {
        "name": "Gary",
        "latitude": 41.5933696,
        "longitude": -87.3464271,
        "state": "Indiana"
    },
    {
        "name": "Largo",
        "latitude": 27.9094665,
        "longitude": -82.7873244,
        "state": "Florida"
    },
    {
        "name": "Brooklyn Park",
        "latitude": 45.0941315,
        "longitude": -93.3563405,
        "state": "Minnesota"
    },
    {
        "name": "Tustin",
        "latitude": 33.7458511,
        "longitude": -117.826166,
        "state": "California"
    },
    {
        "name": "Racine",
        "latitude": 42.7261309,
        "longitude": -87.78285230000002,
        "state": "Wisconsin"
    },
    {
        "name": "Deerfield Beach",
        "latitude": 26.3184123,
        "longitude": -80.09976569999999,
        "state": "Florida"
    },
    {
        "name": "Lynchburg",
        "latitude": 37.4137536,
        "longitude": -79.14224639999999,
        "state": "Virginia"
    },
    {
        "name": "Mountain View",
        "latitude": 37.3860517,
        "longitude": -122.0838511,
        "state": "California"
    },
    {
        "name": "Medford",
        "latitude": 42.3265152,
        "longitude": -122.8755949,
        "state": "Oregon"
    },
    {
        "name": "Lawrence",
        "latitude": 42.7070354,
        "longitude": -71.1631137,
        "state": "Massachusetts"
    },
    {
        "name": "Bellflower",
        "latitude": 33.8816818,
        "longitude": -118.1170117,
        "state": "California"
    },
    {
        "name": "Melbourne",
        "latitude": 28.0836269,
        "longitude": -80.60810889999999,
        "state": "Florida"
    },
    {
        "name": "St. Joseph",
        "latitude": 39.7674578,
        "longitude": -94.84668099999999,
        "state": "Missouri"
    },
    {
        "name": "Camden",
        "latitude": 39.9259463,
        "longitude": -75.1196199,
        "state": "New Jersey"
    },
    {
        "name": "St. George",
        "latitude": 37.0965278,
        "longitude": -113.5684164,
        "state": "Utah"
    },
    {
        "name": "Kennewick",
        "latitude": 46.2112458,
        "longitude": -119.1372338,
        "state": "Washington"
    },
    {
        "name": "Baldwin Park",
        "latitude": 34.0852868,
        "longitude": -117.9608978,
        "state": "California"
    },
    {
        "name": "Chino Hills",
        "latitude": 33.9898188,
        "longitude": -117.7325848,
        "state": "California"
    },
    {
        "name": "Alameda",
        "latitude": 37.7652065,
        "longitude": -122.2416355,
        "state": "California"
    },
    {
        "name": "Albany",
        "latitude": 31.5785074,
        "longitude": -84.15574099999999,
        "state": "Georgia"
    },
    {
        "name": "Arlington Heights",
        "latitude": 42.0883603,
        "longitude": -87.98062650000001,
        "state": "Illinois"
    },
    {
        "name": "Scranton",
        "latitude": 41.408969,
        "longitude": -75.66241219999999,
        "state": "Pennsylvania"
    },
    {
        "name": "Evanston",
        "latitude": 42.0450722,
        "longitude": -87.68769689999999,
        "state": "Illinois"
    },
    {
        "name": "Kalamazoo",
        "latitude": 42.2917069,
        "longitude": -85.5872286,
        "state": "Michigan"
    },
    {
        "name": "Baytown",
        "latitude": 29.7355047,
        "longitude": -94.97742740000001,
        "state": "Texas"
    },
    {
        "name": "Upland",
        "latitude": 34.09751,
        "longitude": -117.6483876,
        "state": "California"
    },
    {
        "name": "Springdale",
        "latitude": 36.18674420000001,
        "longitude": -94.1288141,
        "state": "Arkansas"
    },
    {
        "name": "Bethlehem",
        "latitude": 40.6259316,
        "longitude": -75.37045789999999,
        "state": "Pennsylvania"
    },
    {
        "name": "Schaumburg",
        "latitude": 42.0333607,
        "longitude": -88.0834059,
        "state": "Illinois"
    },
    {
        "name": "Mount Pleasant",
        "latitude": 32.8323225,
        "longitude": -79.82842579999999,
        "state": "South Carolina"
    },
    {
        "name": "Auburn",
        "latitude": 47.30732279999999,
        "longitude": -122.2284532,
        "state": "Washington"
    },
    {
        "name": "Decatur",
        "latitude": 39.8403147,
        "longitude": -88.9548001,
        "state": "Illinois"
    },
    {
        "name": "San Ramon",
        "latitude": 37.7799273,
        "longitude": -121.9780153,
        "state": "California"
    },
    {
        "name": "Pleasanton",
        "latitude": 37.6624312,
        "longitude": -121.8746789,
        "state": "California"
    },
    {
        "name": "Wyoming",
        "latitude": 42.9133602,
        "longitude": -85.7053085,
        "state": "Michigan"
    },
    {
        "name": "Lake Charles",
        "latitude": 30.2265949,
        "longitude": -93.2173758,
        "state": "Louisiana"
    },
    {
        "name": "Plymouth",
        "latitude": 45.0105194,
        "longitude": -93.4555093,
        "state": "Minnesota"
    },
    {
        "name": "Bolingbrook",
        "latitude": 41.69864159999999,
        "longitude": -88.0683955,
        "state": "Illinois"
    },
    {
        "name": "Pharr",
        "latitude": 26.1947962,
        "longitude": -98.1836216,
        "state": "Texas"
    },
    {
        "name": "Appleton",
        "latitude": 44.2619309,
        "longitude": -88.41538469999999,
        "state": "Wisconsin"
    },
    {
        "name": "Gastonia",
        "latitude": 35.262082,
        "longitude": -81.18730049999999,
        "state": "North Carolina"
    },
    {
        "name": "Folsom",
        "latitude": 38.6779591,
        "longitude": -121.1760583,
        "state": "California"
    },
    {
        "name": "Southfield",
        "latitude": 42.4733688,
        "longitude": -83.2218731,
        "state": "Michigan"
    },
    {
        "name": "Rochester Hills",
        "latitude": 42.65836609999999,
        "longitude": -83.1499322,
        "state": "Michigan"
    },
    {
        "name": "New Britain",
        "latitude": 41.6612104,
        "longitude": -72.7795419,
        "state": "Connecticut"
    },
    {
        "name": "Goodyear",
        "latitude": 33.4353394,
        "longitude": -112.3576567,
        "state": "Arizona"
    },
    {
        "name": "Canton",
        "latitude": 40.79894729999999,
        "longitude": -81.378447,
        "state": "Ohio"
    },
    {
        "name": "Warner Robins",
        "latitude": 32.6130007,
        "longitude": -83.624201,
        "state": "Georgia"
    },
    {
        "name": "Union",
        "latitude": 37.5933918,
        "longitude": -122.0438298,
        "state": "California"
    },
    {
        "name": "Perris",
        "latitude": 33.7825194,
        "longitude": -117.2286478,
        "state": "California"
    },
    {
        "name": "Manteca",
        "latitude": 37.7974273,
        "longitude": -121.2160526,
        "state": "California"
    },
    {
        "name": "Iowa",
        "latitude": 41.6611277,
        "longitude": -91.5301683,
        "state": "Iowa"
    },
    {
        "name": "Jonesboro",
        "latitude": 35.84229670000001,
        "longitude": -90.704279,
        "state": "Arkansas"
    },
    {
        "name": "Wilmington",
        "latitude": 39.7390721,
        "longitude": -75.5397878,
        "state": "Delaware"
    },
    {
        "name": "Lynwood",
        "latitude": 33.930293,
        "longitude": -118.2114603,
        "state": "California"
    },
    {
        "name": "Loveland",
        "latitude": 40.3977612,
        "longitude": -105.0749801,
        "state": "Colorado"
    },
    {
        "name": "Pawtucket",
        "latitude": 41.878711,
        "longitude": -71.38255579999999,
        "state": "Rhode Island"
    },
    {
        "name": "Boynton Beach",
        "latitude": 26.5317866,
        "longitude": -80.0905465,
        "state": "Florida"
    },
    {
        "name": "Waukesha",
        "latitude": 43.0116784,
        "longitude": -88.2314813,
        "state": "Wisconsin"
    },
    {
        "name": "Gulfport",
        "latitude": 30.3674198,
        "longitude": -89.0928155,
        "state": "Mississippi"
    },
    {
        "name": "Apple Valley",
        "latitude": 34.5008311,
        "longitude": -117.1858759,
        "state": "California"
    },
    {
        "name": "Passaic",
        "latitude": 40.8567662,
        "longitude": -74.1284764,
        "state": "New Jersey"
    },
    {
        "name": "Rapid",
        "latitude": 44.0805434,
        "longitude": -103.2310149,
        "state": "South Dakota"
    },
    {
        "name": "Layton",
        "latitude": 41.0602216,
        "longitude": -111.9710529,
        "state": "Utah"
    },
    {
        "name": "Lafayette",
        "latitude": 40.4167022,
        "longitude": -86.87528689999999,
        "state": "Indiana"
    },
    {
        "name": "Turlock",
        "latitude": 37.4946568,
        "longitude": -120.8465941,
        "state": "California"
    },
    {
        "name": "Muncie",
        "latitude": 40.1933767,
        "longitude": -85.3863599,
        "state": "Indiana"
    },
    {
        "name": "Temple",
        "latitude": 31.0982344,
        "longitude": -97.342782,
        "state": "Texas"
    },
    {
        "name": "Missouri",
        "latitude": 29.6185669,
        "longitude": -95.5377215,
        "state": "Texas"
    },
    {
        "name": "Redlands",
        "latitude": 34.0555693,
        "longitude": -117.1825381,
        "state": "California"
    },
    {
        "name": "Santa Fe",
        "latitude": 35.6869752,
        "longitude": -105.937799,
        "state": "New Mexico"
    },
    {
        "name": "Lauderhill",
        "latitude": 26.1403635,
        "longitude": -80.2133808,
        "state": "Florida"
    },
    {
        "name": "Milpitas",
        "latitude": 37.4323341,
        "longitude": -121.8995741,
        "state": "California"
    },
    {
        "name": "Palatine",
        "latitude": 42.1103041,
        "longitude": -88.03424000000001,
        "state": "Illinois"
    },
    {
        "name": "Missoula",
        "latitude": 46.87871759999999,
        "longitude": -113.996586,
        "state": "Montana"
    },
    {
        "name": "Rock Hill",
        "latitude": 34.9248667,
        "longitude": -81.02507840000001,
        "state": "South Carolina"
    },
    {
        "name": "Jacksonville",
        "latitude": 34.7540524,
        "longitude": -77.4302414,
        "state": "North Carolina"
    },
    {
        "name": "Franklin",
        "latitude": 35.9250637,
        "longitude": -86.8688899,
        "state": "Tennessee"
    },
    {
        "name": "Flagstaff",
        "latitude": 35.1982836,
        "longitude": -111.651302,
        "state": "Arizona"
    },
    {
        "name": "Flower Mound",
        "latitude": 33.0145673,
        "longitude": -97.0969552,
        "state": "Texas"
    },
    {
        "name": "Weston",
        "latitude": 26.1003654,
        "longitude": -80.3997748,
        "state": "Florida"
    },
    {
        "name": "Waterloo",
        "latitude": 42.492786,
        "longitude": -92.34257749999999,
        "state": "Iowa"
    },
    {
        "name": "Union",
        "latitude": 40.6975898,
        "longitude": -74.26316349999999,
        "state": "New Jersey"
    },
    {
        "name": "Mount Vernon",
        "latitude": 40.9125992,
        "longitude": -73.8370786,
        "state": "New York"
    },
    {
        "name": "Fort Myers",
        "latitude": 26.640628,
        "longitude": -81.8723084,
        "state": "Florida"
    },
    {
        "name": "Dothan",
        "latitude": 31.2232313,
        "longitude": -85.3904888,
        "state": "Alabama"
    },
    {
        "name": "Rancho Cordova",
        "latitude": 38.5890723,
        "longitude": -121.302728,
        "state": "California"
    },
    {
        "name": "Redondo Beach",
        "latitude": 33.8491816,
        "longitude": -118.3884078,
        "state": "California"
    },
    {
        "name": "Jackson",
        "latitude": 35.6145169,
        "longitude": -88.81394689999999,
        "state": "Tennessee"
    },
    {
        "name": "Pasco",
        "latitude": 46.2395793,
        "longitude": -119.1005657,
        "state": "Washington"
    },
    {
        "name": "St. Charles",
        "latitude": 38.7881062,
        "longitude": -90.4974359,
        "state": "Missouri"
    },
    {
        "name": "Eau Claire",
        "latitude": 44.811349,
        "longitude": -91.4984941,
        "state": "Wisconsin"
    },
    {
        "name": "North Richland Hills",
        "latitude": 32.8342952,
        "longitude": -97.2289029,
        "state": "Texas"
    },
    {
        "name": "Bismarck",
        "latitude": 46.8083268,
        "longitude": -100.7837392,
        "state": "North Dakota"
    },
    {
        "name": "Yorba Linda",
        "latitude": 33.8886259,
        "longitude": -117.8131125,
        "state": "California"
    },
    {
        "name": "Kenner",
        "latitude": 29.9940924,
        "longitude": -90.2417434,
        "state": "Louisiana"
    },
    {
        "name": "Walnut Creek",
        "latitude": 37.9100783,
        "longitude": -122.0651819,
        "state": "California"
    },
    {
        "name": "Frederick",
        "latitude": 39.41426879999999,
        "longitude": -77.4105409,
        "state": "Maryland"
    },
    {
        "name": "Oshkosh",
        "latitude": 44.0247062,
        "longitude": -88.5426136,
        "state": "Wisconsin"
    },
    {
        "name": "Pittsburg",
        "latitude": 38.0279762,
        "longitude": -121.8846806,
        "state": "California"
    },
    {
        "name": "Palo Alto",
        "latitude": 37.4418834,
        "longitude": -122.1430195,
        "state": "California"
    },
    {
        "name": "Bossier",
        "latitude": 32.5159852,
        "longitude": -93.7321228,
        "state": "Louisiana"
    },
    {
        "name": "Portland",
        "latitude": 43.66147100000001,
        "longitude": -70.2553259,
        "state": "Maine"
    },
    {
        "name": "St. Cloud",
        "latitude": 45.5579451,
        "longitude": -94.16324039999999,
        "state": "Minnesota"
    },
    {
        "name": "Davis",
        "latitude": 38.5449065,
        "longitude": -121.7405167,
        "state": "California"
    },
    {
        "name": "South San Francisco",
        "latitude": 37.654656,
        "longitude": -122.4077498,
        "state": "California"
    },
    {
        "name": "Camarillo",
        "latitude": 34.2163937,
        "longitude": -119.0376023,
        "state": "California"
    },
    {
        "name": "North Little Rock",
        "latitude": 34.769536,
        "longitude": -92.2670941,
        "state": "Arkansas"
    },
    {
        "name": "Schenectady",
        "latitude": 42.8142432,
        "longitude": -73.9395687,
        "state": "New York"
    },
    {
        "name": "Gaithersburg",
        "latitude": 39.1434406,
        "longitude": -77.2013705,
        "state": "Maryland"
    },
    {
        "name": "Harlingen",
        "latitude": 26.1906306,
        "longitude": -97.69610259999999,
        "state": "Texas"
    },
    {
        "name": "Woodbury",
        "latitude": 44.9238552,
        "longitude": -92.9593797,
        "state": "Minnesota"
    },
    {
        "name": "Eagan",
        "latitude": 44.8041322,
        "longitude": -93.1668858,
        "state": "Minnesota"
    },
    {
        "name": "Yuba",
        "latitude": 39.1404477,
        "longitude": -121.6169108,
        "state": "California"
    },
    {
        "name": "Maple Grove",
        "latitude": 45.0724642,
        "longitude": -93.4557877,
        "state": "Minnesota"
    },
    {
        "name": "Youngstown",
        "latitude": 41.0997803,
        "longitude": -80.6495194,
        "state": "Ohio"
    },
    {
        "name": "Skokie",
        "latitude": 42.0324025,
        "longitude": -87.7416246,
        "state": "Illinois"
    },
    {
        "name": "Kissimmee",
        "latitude": 28.2919557,
        "longitude": -81.40757099999999,
        "state": "Florida"
    },
    {
        "name": "Johnson",
        "latitude": 36.3134397,
        "longitude": -82.3534727,
        "state": "Tennessee"
    },
    {
        "name": "Victoria",
        "latitude": 28.8052674,
        "longitude": -97.0035982,
        "state": "Texas"
    },
    {
        "name": "San Clemente",
        "latitude": 33.4269728,
        "longitude": -117.6119925,
        "state": "California"
    },
    {
        "name": "Bayonne",
        "latitude": 40.6687141,
        "longitude": -74.1143091,
        "state": "New Jersey"
    },
    {
        "name": "Laguna Niguel",
        "latitude": 33.5225261,
        "longitude": -117.7075526,
        "state": "California"
    },
    {
        "name": "East Orange",
        "latitude": 40.767323,
        "longitude": -74.2048677,
        "state": "New Jersey"
    },
    {
        "name": "Shawnee",
        "latitude": 39.02284849999999,
        "longitude": -94.7151865,
        "state": "Kansas"
    },
    {
        "name": "Homestead",
        "latitude": 25.4687224,
        "longitude": -80.4775569,
        "state": "Florida"
    },
    {
        "name": "Rockville",
        "latitude": 39.0839973,
        "longitude": -77.1527578,
        "state": "Maryland"
    },
    {
        "name": "Delray Beach",
        "latitude": 26.4614625,
        "longitude": -80.0728201,
        "state": "Florida"
    },
    {
        "name": "Janesville",
        "latitude": 42.6827885,
        "longitude": -89.0187222,
        "state": "Wisconsin"
    },
    {
        "name": "Conway",
        "latitude": 35.0886963,
        "longitude": -92.4421011,
        "state": "Arkansas"
    },
    {
        "name": "Pico Rivera",
        "latitude": 33.9830688,
        "longitude": -118.096735,
        "state": "California"
    },
    {
        "name": "Lorain",
        "latitude": 41.452819,
        "longitude": -82.1823746,
        "state": "Ohio"
    },
    {
        "name": "Montebello",
        "latitude": 34.0165053,
        "longitude": -118.1137535,
        "state": "California"
    },
    {
        "name": "Lodi",
        "latitude": 38.1341477,
        "longitude": -121.2722194,
        "state": "California"
    },
    {
        "name": "New Braunfels",
        "latitude": 29.7030024,
        "longitude": -98.1244531,
        "state": "Texas"
    },
    {
        "name": "Marysville",
        "latitude": 48.0517637,
        "longitude": -122.1770818,
        "state": "Washington"
    },
    {
        "name": "Tamarac",
        "latitude": 26.2128609,
        "longitude": -80.2497707,
        "state": "Florida"
    },
    {
        "name": "Madera",
        "latitude": 36.9613356,
        "longitude": -120.0607176,
        "state": "California"
    },
    {
        "name": "Conroe",
        "latitude": 30.3118769,
        "longitude": -95.45605119999999,
        "state": "Texas"
    },
    {
        "name": "Santa Cruz",
        "latitude": 36.9741171,
        "longitude": -122.0307963,
        "state": "California"
    },
    {
        "name": "Eden Prairie",
        "latitude": 44.8546856,
        "longitude": -93.47078599999999,
        "state": "Minnesota"
    },
    {
        "name": "Cheyenne",
        "latitude": 41.1399814,
        "longitude": -104.8202462,
        "state": "Wyoming"
    },
    {
        "name": "Daytona Beach",
        "latitude": 29.2108147,
        "longitude": -81.0228331,
        "state": "Florida"
    },
    {
        "name": "Alpharetta",
        "latitude": 34.0753762,
        "longitude": -84.2940899,
        "state": "Georgia"
    },
    {
        "name": "Hamilton",
        "latitude": 39.3995008,
        "longitude": -84.5613355,
        "state": "Ohio"
    },
    {
        "name": "Waltham",
        "latitude": 42.3764852,
        "longitude": -71.2356113,
        "state": "Massachusetts"
    },
    {
        "name": "Coon Rapids",
        "latitude": 45.1732394,
        "longitude": -93.30300629999999,
        "state": "Minnesota"
    },
    {
        "name": "Haverhill",
        "latitude": 42.7762015,
        "longitude": -71.0772796,
        "state": "Massachusetts"
    },
    {
        "name": "Council Bluffs",
        "latitude": 41.2619444,
        "longitude": -95.8608333,
        "state": "Iowa"
    },
    {
        "name": "Taylor",
        "latitude": 42.240872,
        "longitude": -83.2696509,
        "state": "Michigan"
    },
    {
        "name": "Utica",
        "latitude": 43.100903,
        "longitude": -75.232664,
        "state": "New York"
    },
    {
        "name": "Ames",
        "latitude": 42.034722,
        "longitude": -93.61999999999999,
        "state": "Iowa"
    },
    {
        "name": "La Habra",
        "latitude": 33.9319578,
        "longitude": -117.9461734,
        "state": "California"
    },
    {
        "name": "Encinitas",
        "latitude": 33.0369867,
        "longitude": -117.2919818,
        "state": "California"
    },
    {
        "name": "Bowling Green",
        "latitude": 36.9685219,
        "longitude": -86.4808043,
        "state": "Kentucky"
    },
    {
        "name": "Burnsville",
        "latitude": 44.7677424,
        "longitude": -93.27772259999999,
        "state": "Minnesota"
    },
    {
        "name": "Greenville",
        "latitude": 34.85261759999999,
        "longitude": -82.3940104,
        "state": "South Carolina"
    },
    {
        "name": "West Des Moines",
        "latitude": 41.5772115,
        "longitude": -93.711332,
        "state": "Iowa"
    },
    {
        "name": "Cedar Park",
        "latitude": 30.505198,
        "longitude": -97.8202888,
        "state": "Texas"
    },
    {
        "name": "Tulare",
        "latitude": 36.2077288,
        "longitude": -119.3473379,
        "state": "California"
    },
    {
        "name": "Monterey Park",
        "latitude": 34.0625106,
        "longitude": -118.1228476,
        "state": "California"
    },
    {
        "name": "Vineland",
        "latitude": 39.4863773,
        "longitude": -75.02596369999999,
        "state": "New Jersey"
    },
    {
        "name": "Terre Haute",
        "latitude": 39.4667034,
        "longitude": -87.41390919999999,
        "state": "Indiana"
    },
    {
        "name": "North Miami",
        "latitude": 25.8900949,
        "longitude": -80.1867138,
        "state": "Florida"
    },
    {
        "name": "Mansfield",
        "latitude": 32.5631924,
        "longitude": -97.1416768,
        "state": "Texas"
    },
    {
        "name": "West Allis",
        "latitude": 43.0166806,
        "longitude": -88.0070315,
        "state": "Wisconsin"
    },
    {
        "name": "Bristol",
        "latitude": 41.67176480000001,
        "longitude": -72.9492703,
        "state": "Connecticut"
    },
    {
        "name": "Taylorsville",
        "latitude": 40.66772479999999,
        "longitude": -111.9388258,
        "state": "Utah"
    },
    {
        "name": "Malden",
        "latitude": 42.4250964,
        "longitude": -71.066163,
        "state": "Massachusetts"
    },
    {
        "name": "Meriden",
        "latitude": 41.5381535,
        "longitude": -72.80704349999999,
        "state": "Connecticut"
    },
    {
        "name": "Blaine",
        "latitude": 45.1607987,
        "longitude": -93.23494889999999,
        "state": "Minnesota"
    },
    {
        "name": "Wellington",
        "latitude": 26.6617635,
        "longitude": -80.2683571,
        "state": "Florida"
    },
    {
        "name": "Cupertino",
        "latitude": 37.3229978,
        "longitude": -122.0321823,
        "state": "California"
    },
    {
        "name": "Springfield",
        "latitude": 44.0462362,
        "longitude": -123.0220289,
        "state": "Oregon"
    },
    {
        "name": "Rogers",
        "latitude": 36.3320196,
        "longitude": -94.1185366,
        "state": "Arkansas"
    },
    {
        "name": "St. Clair Shores",
        "latitude": 42.4974085,
        "longitude": -82.89636039999999,
        "state": "Michigan"
    },
    {
        "name": "Gardena",
        "latitude": 33.8883487,
        "longitude": -118.3089624,
        "state": "California"
    },
    {
        "name": "Pontiac",
        "latitude": 42.6389216,
        "longitude": -83.29104679999999,
        "state": "Michigan"
    },
    {
        "name": "National",
        "latitude": 32.6781085,
        "longitude": -117.0991967,
        "state": "California"
    },
    {
        "name": "Grand Junction",
        "latitude": 39.0638705,
        "longitude": -108.5506486,
        "state": "Colorado"
    },
    {
        "name": "Rocklin",
        "latitude": 38.7907339,
        "longitude": -121.2357828,
        "state": "California"
    },
    {
        "name": "Chapel Hill",
        "latitude": 35.9131996,
        "longitude": -79.0558445,
        "state": "North Carolina"
    },
    {
        "name": "Casper",
        "latitude": 42.866632,
        "longitude": -106.313081,
        "state": "Wyoming"
    },
    {
        "name": "Broomfield",
        "latitude": 39.9205411,
        "longitude": -105.0866504,
        "state": "Colorado"
    },
    {
        "name": "Petaluma",
        "latitude": 38.232417,
        "longitude": -122.6366524,
        "state": "California"
    },
    {
        "name": "South Jordan",
        "latitude": 40.5621704,
        "longitude": -111.929658,
        "state": "Utah"
    },
    {
        "name": "Springfield",
        "latitude": 39.9242266,
        "longitude": -83.8088171,
        "state": "Ohio"
    },
    {
        "name": "Great Falls",
        "latitude": 47.4941836,
        "longitude": -111.2833449,
        "state": "Montana"
    },
    {
        "name": "Lancaster",
        "latitude": 40.0378755,
        "longitude": -76.3055144,
        "state": "Pennsylvania"
    },
    {
        "name": "North Port",
        "latitude": 27.044224,
        "longitude": -82.2359254,
        "state": "Florida"
    },
    {
        "name": "Lakewood",
        "latitude": 47.1717649,
        "longitude": -122.518458,
        "state": "Washington"
    },
    {
        "name": "Marietta",
        "latitude": 33.95260200000001,
        "longitude": -84.5499327,
        "state": "Georgia"
    },
    {
        "name": "San Rafael",
        "latitude": 37.9735346,
        "longitude": -122.5310874,
        "state": "California"
    },
    {
        "name": "Royal Oak",
        "latitude": 42.4894801,
        "longitude": -83.1446485,
        "state": "Michigan"
    },
    {
        "name": "Des Plaines",
        "latitude": 42.0333623,
        "longitude": -87.88339909999999,
        "state": "Illinois"
    },
    {
        "name": "Huntington Park",
        "latitude": 33.9816812,
        "longitude": -118.2250725,
        "state": "California"
    },
    {
        "name": "La Mesa",
        "latitude": 32.7678287,
        "longitude": -117.0230839,
        "state": "California"
    },
    {
        "name": "Orland Park",
        "latitude": 41.6303103,
        "longitude": -87.85394250000002,
        "state": "Illinois"
    },
    {
        "name": "Auburn",
        "latitude": 32.6098566,
        "longitude": -85.48078249999999,
        "state": "Alabama"
    },
    {
        "name": "Lakeville",
        "latitude": 44.6496868,
        "longitude": -93.24271999999999,
        "state": "Minnesota"
    },
    {
        "name": "Owensboro",
        "latitude": 37.7719074,
        "longitude": -87.1111676,
        "state": "Kentucky"
    },
    {
        "name": "Moore",
        "latitude": 35.3395079,
        "longitude": -97.48670279999999,
        "state": "Oklahoma"
    },
    {
        "name": "Jupiter",
        "latitude": 26.9342246,
        "longitude": -80.0942087,
        "state": "Florida"
    },
    {
        "name": "Idaho Falls",
        "latitude": 43.49165139999999,
        "longitude": -112.0339645,
        "state": "Idaho"
    },
    {
        "name": "Dubuque",
        "latitude": 42.5005583,
        "longitude": -90.66457179999999,
        "state": "Iowa"
    },
    {
        "name": "Bartlett",
        "latitude": 35.2045328,
        "longitude": -89.8739753,
        "state": "Tennessee"
    },
    {
        "name": "Rowlett",
        "latitude": 32.9029017,
        "longitude": -96.56388,
        "state": "Texas"
    },
    {
        "name": "Novi",
        "latitude": 42.48059,
        "longitude": -83.4754913,
        "state": "Michigan"
    },
    {
        "name": "White Plains",
        "latitude": 41.03398620000001,
        "longitude": -73.7629097,
        "state": "New York"
    },
    {
        "name": "Arcadia",
        "latitude": 34.1397292,
        "longitude": -118.0353449,
        "state": "California"
    },
    {
        "name": "Redmond",
        "latitude": 47.6739881,
        "longitude": -122.121512,
        "state": "Washington"
    },
    {
        "name": "Lake Elsinore",
        "latitude": 33.6680772,
        "longitude": -117.3272615,
        "state": "California"
    },
    {
        "name": "Ocala",
        "latitude": 29.1871986,
        "longitude": -82.14009229999999,
        "state": "Florida"
    },
    {
        "name": "Tinley Park",
        "latitude": 41.5731442,
        "longitude": -87.7932939,
        "state": "Illinois"
    },
    {
        "name": "Port Orange",
        "latitude": 29.1383165,
        "longitude": -80.9956105,
        "state": "Florida"
    },
    {
        "name": "Medford",
        "latitude": 42.4184296,
        "longitude": -71.1061639,
        "state": "Massachusetts"
    },
    {
        "name": "Oak Lawn",
        "latitude": 41.719978,
        "longitude": -87.7479528,
        "state": "Illinois"
    },
    {
        "name": "Rocky Mount",
        "latitude": 35.9382103,
        "longitude": -77.7905339,
        "state": "North Carolina"
    },
    {
        "name": "Kokomo",
        "latitude": 40.486427,
        "longitude": -86.13360329999999,
        "state": "Indiana"
    },
    {
        "name": "Coconut Creek",
        "latitude": 26.2517482,
        "longitude": -80.17893509999999,
        "state": "Florida"
    },
    {
        "name": "Bowie",
        "latitude": 39.0067768,
        "longitude": -76.77913649999999,
        "state": "Maryland"
    },
    {
        "name": "Berwyn",
        "latitude": 41.85058739999999,
        "longitude": -87.7936685,
        "state": "Illinois"
    },
    {
        "name": "Midwest",
        "latitude": 35.4495065,
        "longitude": -97.3967019,
        "state": "Oklahoma"
    },
    {
        "name": "Fountain Valley",
        "latitude": 33.7091847,
        "longitude": -117.9536697,
        "state": "California"
    },
    {
        "name": "Buckeye",
        "latitude": 33.3703197,
        "longitude": -112.5837766,
        "state": "Arizona"
    },
    {
        "name": "Dearborn Heights",
        "latitude": 42.3369816,
        "longitude": -83.27326269999999,
        "state": "Michigan"
    },
    {
        "name": "Woodland",
        "latitude": 38.67851570000001,
        "longitude": -121.7732971,
        "state": "California"
    },
    {
        "name": "Noblesville",
        "latitude": 40.0455917,
        "longitude": -86.0085955,
        "state": "Indiana"
    },
    {
        "name": "Valdosta",
        "latitude": 30.8327022,
        "longitude": -83.2784851,
        "state": "Georgia"
    },
    {
        "name": "Diamond Bar",
        "latitude": 34.0286226,
        "longitude": -117.8103367,
        "state": "California"
    },
    {
        "name": "Manhattan",
        "latitude": 39.18360819999999,
        "longitude": -96.57166939999999,
        "state": "Kansas"
    },
    {
        "name": "Santee",
        "latitude": 32.8383828,
        "longitude": -116.9739167,
        "state": "California"
    },
    {
        "name": "Taunton",
        "latitude": 41.900101,
        "longitude": -71.0897674,
        "state": "Massachusetts"
    },
    {
        "name": "Sanford",
        "latitude": 28.8028612,
        "longitude": -81.269453,
        "state": "Florida"
    },
    {
        "name": "Kettering",
        "latitude": 39.68950359999999,
        "longitude": -84.1688274,
        "state": "Ohio"
    },
    {
        "name": "New Brunswick",
        "latitude": 40.4862157,
        "longitude": -74.4518188,
        "state": "New Jersey"
    },
    {
        "name": "Decatur",
        "latitude": 34.6059253,
        "longitude": -86.9833417,
        "state": "Alabama"
    },
    {
        "name": "Chicopee",
        "latitude": 42.1487043,
        "longitude": -72.6078672,
        "state": "Massachusetts"
    },
    {
        "name": "Anderson",
        "latitude": 40.1053196,
        "longitude": -85.6802541,
        "state": "Indiana"
    },
    {
        "name": "Margate",
        "latitude": 26.2445263,
        "longitude": -80.206436,
        "state": "Florida"
    },
    {
        "name": "Weymouth Town",
        "latitude": 42.2180724,
        "longitude": -70.94103559999999,
        "state": "Massachusetts"
    },
    {
        "name": "Hempstead",
        "latitude": 40.7062128,
        "longitude": -73.6187397,
        "state": "New York"
    },
    {
        "name": "Corvallis",
        "latitude": 44.5645659,
        "longitude": -123.2620435,
        "state": "Oregon"
    },
    {
        "name": "Eastvale",
        "latitude": 33.952463,
        "longitude": -117.5848025,
        "state": "California"
    },
    {
        "name": "Porterville",
        "latitude": 36.06523,
        "longitude": -119.0167679,
        "state": "California"
    },
    {
        "name": "West Haven",
        "latitude": 41.2705484,
        "longitude": -72.9469711,
        "state": "Connecticut"
    },
    {
        "name": "Brentwood",
        "latitude": 37.931868,
        "longitude": -121.6957863,
        "state": "California"
    },
    {
        "name": "Paramount",
        "latitude": 33.8894598,
        "longitude": -118.1597911,
        "state": "California"
    },
    {
        "name": "Grand Forks",
        "latitude": 47.9252568,
        "longitude": -97.0328547,
        "state": "North Dakota"
    },
    {
        "name": "Georgetown",
        "latitude": 30.6332618,
        "longitude": -97.6779842,
        "state": "Texas"
    },
    {
        "name": "St. Peters",
        "latitude": 38.7874699,
        "longitude": -90.6298922,
        "state": "Missouri"
    },
    {
        "name": "Shoreline",
        "latitude": 47.7556531,
        "longitude": -122.3415178,
        "state": "Washington"
    },
    {
        "name": "Mount Prospect",
        "latitude": 42.0664167,
        "longitude": -87.9372908,
        "state": "Illinois"
    },
    {
        "name": "Hanford",
        "latitude": 36.3274502,
        "longitude": -119.6456844,
        "state": "California"
    },
    {
        "name": "Normal",
        "latitude": 40.5142026,
        "longitude": -88.9906312,
        "state": "Illinois"
    },
    {
        "name": "Rosemead",
        "latitude": 34.0805651,
        "longitude": -118.072846,
        "state": "California"
    },
    {
        "name": "Lehi",
        "latitude": 40.3916172,
        "longitude": -111.8507662,
        "state": "Utah"
    },
    {
        "name": "Pocatello",
        "latitude": 42.8713032,
        "longitude": -112.4455344,
        "state": "Idaho"
    },
    {
        "name": "Highland",
        "latitude": 34.1283442,
        "longitude": -117.2086513,
        "state": "California"
    },
    {
        "name": "Novato",
        "latitude": 38.1074198,
        "longitude": -122.5697032,
        "state": "California"
    },
    {
        "name": "Port Arthur",
        "latitude": 29.8849504,
        "longitude": -93.93994699999999,
        "state": "Texas"
    },
    {
        "name": "Carson",
        "latitude": 39.1637984,
        "longitude": -119.7674034,
        "state": "Nevada"
    },
    {
        "name": "San Marcos",
        "latitude": 29.8832749,
        "longitude": -97.9413941,
        "state": "Texas"
    },
    {
        "name": "Hendersonville",
        "latitude": 36.3047735,
        "longitude": -86.6199957,
        "state": "Tennessee"
    },
    {
        "name": "Elyria",
        "latitude": 41.3683798,
        "longitude": -82.10764859999999,
        "state": "Ohio"
    },
    {
        "name": "Revere",
        "latitude": 42.4084302,
        "longitude": -71.0119948,
        "state": "Massachusetts"
    },
    {
        "name": "Pflugerville",
        "latitude": 30.4393696,
        "longitude": -97.62000429999999,
        "state": "Texas"
    },
    {
        "name": "Greenwood",
        "latitude": 39.6136578,
        "longitude": -86.10665259999999,
        "state": "Indiana"
    },
    {
        "name": "Bellevue",
        "latitude": 41.1543623,
        "longitude": -95.9145568,
        "state": "Nebraska"
    },
    {
        "name": "Wheaton",
        "latitude": 41.8661403,
        "longitude": -88.1070127,
        "state": "Illinois"
    },
    {
        "name": "Smyrna",
        "latitude": 33.8839926,
        "longitude": -84.51437609999999,
        "state": "Georgia"
    },
    {
        "name": "Sarasota",
        "latitude": 27.3364347,
        "longitude": -82.53065269999999,
        "state": "Florida"
    },
    {
        "name": "Blue Springs",
        "latitude": 39.0169509,
        "longitude": -94.2816148,
        "state": "Missouri"
    },
    {
        "name": "Colton",
        "latitude": 34.0739016,
        "longitude": -117.3136547,
        "state": "California"
    },
    {
        "name": "Euless",
        "latitude": 32.8370727,
        "longitude": -97.08195409999999,
        "state": "Texas"
    },
    {
        "name": "Castle Rock",
        "latitude": 39.3722121,
        "longitude": -104.8560902,
        "state": "Colorado"
    },
    {
        "name": "Cathedral",
        "latitude": 33.7805388,
        "longitude": -116.4668036,
        "state": "California"
    },
    {
        "name": "Kingsport",
        "latitude": 36.548434,
        "longitude": -82.5618186,
        "state": "Tennessee"
    },
    {
        "name": "Lake Havasu",
        "latitude": 34.483901,
        "longitude": -114.3224548,
        "state": "Arizona"
    },
    {
        "name": "Pensacola",
        "latitude": 30.42130899999999,
        "longitude": -87.2169149,
        "state": "Florida"
    },
    {
        "name": "Hoboken",
        "latitude": 40.7439905,
        "longitude": -74.0323626,
        "state": "New Jersey"
    },
    {
        "name": "Yucaipa",
        "latitude": 34.033625,
        "longitude": -117.0430865,
        "state": "California"
    },
    {
        "name": "Watsonville",
        "latitude": 36.910231,
        "longitude": -121.7568946,
        "state": "California"
    },
    {
        "name": "Richland",
        "latitude": 46.2856907,
        "longitude": -119.2844621,
        "state": "Washington"
    },
    {
        "name": "Delano",
        "latitude": 35.7688425,
        "longitude": -119.2470536,
        "state": "California"
    },
    {
        "name": "Hoffman Estates",
        "latitude": 42.0629915,
        "longitude": -88.12271989999999,
        "state": "Illinois"
    },
    {
        "name": "Florissant",
        "latitude": 38.789217,
        "longitude": -90.322614,
        "state": "Missouri"
    },
    {
        "name": "Placentia",
        "latitude": 33.8722371,
        "longitude": -117.8703363,
        "state": "California"
    },
    {
        "name": "West New York",
        "latitude": 40.7878788,
        "longitude": -74.0143064,
        "state": "New Jersey"
    },
    {
        "name": "Dublin",
        "latitude": 37.7021521,
        "longitude": -121.9357918,
        "state": "California"
    },
    {
        "name": "Oak Park",
        "latitude": 41.8850317,
        "longitude": -87.7845025,
        "state": "Illinois"
    },
    {
        "name": "Peabody",
        "latitude": 42.5278731,
        "longitude": -70.9286609,
        "state": "Massachusetts"
    },
    {
        "name": "Perth Amboy",
        "latitude": 40.5067723,
        "longitude": -74.2654234,
        "state": "New Jersey"
    },
    {
        "name": "Battle Creek",
        "latitude": 42.3211522,
        "longitude": -85.17971419999999,
        "state": "Michigan"
    },
    {
        "name": "Bradenton",
        "latitude": 27.4989278,
        "longitude": -82.5748194,
        "state": "Florida"
    },
    {
        "name": "Gilroy",
        "latitude": 37.0057816,
        "longitude": -121.5682751,
        "state": "California"
    },
    {
        "name": "Milford",
        "latitude": 41.2306979,
        "longitude": -73.064036,
        "state": "Connecticut"
    },
    {
        "name": "Albany",
        "latitude": 44.6365107,
        "longitude": -123.1059282,
        "state": "Oregon"
    },
    {
        "name": "Ankeny",
        "latitude": 41.7317884,
        "longitude": -93.6001278,
        "state": "Iowa"
    },
    {
        "name": "La Crosse",
        "latitude": 43.8013556,
        "longitude": -91.23958069999999,
        "state": "Wisconsin"
    },
    {
        "name": "Burlington",
        "latitude": 36.0956918,
        "longitude": -79.43779909999999,
        "state": "North Carolina"
    },
    {
        "name": "DeSoto",
        "latitude": 32.5896998,
        "longitude": -96.8570738,
        "state": "Texas"
    },
    {
        "name": "Harrisonburg",
        "latitude": 38.4495688,
        "longitude": -78.8689155,
        "state": "Virginia"
    },
    {
        "name": "Minnetonka",
        "latitude": 44.9211836,
        "longitude": -93.4687489,
        "state": "Minnesota"
    },
    {
        "name": "Elkhart",
        "latitude": 41.6819935,
        "longitude": -85.9766671,
        "state": "Indiana"
    },
    {
        "name": "Lakewood",
        "latitude": 41.4819932,
        "longitude": -81.7981908,
        "state": "Ohio"
    },
    {
        "name": "Glendora",
        "latitude": 34.1361187,
        "longitude": -117.865339,
        "state": "California"
    },
    {
        "name": "Southaven",
        "latitude": 34.9889818,
        "longitude": -90.0125913,
        "state": "Mississippi"
    },
    {
        "name": "Charleston",
        "latitude": 38.3498195,
        "longitude": -81.6326234,
        "state": "West Virginia"
    },
    {
        "name": "Joplin",
        "latitude": 37.08422710000001,
        "longitude": -94.51328099999999,
        "state": "Missouri"
    },
    {
        "name": "Enid",
        "latitude": 36.3955891,
        "longitude": -97.8783911,
        "state": "Oklahoma"
    },
    {
        "name": "Palm Beach Gardens",
        "latitude": 26.8233946,
        "longitude": -80.13865469999999,
        "state": "Florida"
    },
    {
        "name": "Brookhaven",
        "latitude": 33.8651033,
        "longitude": -84.3365917,
        "state": "Georgia"
    },
    {
        "name": "Plainfield",
        "latitude": 40.6337136,
        "longitude": -74.4073736,
        "state": "New Jersey"
    },
    {
        "name": "Grand Island",
        "latitude": 40.9263957,
        "longitude": -98.3420118,
        "state": "Nebraska"
    },
    {
        "name": "Palm Desert",
        "latitude": 33.7222445,
        "longitude": -116.3744556,
        "state": "California"
    },
    {
        "name": "Huntersville",
        "latitude": 35.410694,
        "longitude": -80.84285040000002,
        "state": "North Carolina"
    },
    {
        "name": "Tigard",
        "latitude": 45.4312294,
        "longitude": -122.7714861,
        "state": "Oregon"
    },
    {
        "name": "Lenexa",
        "latitude": 38.9536174,
        "longitude": -94.73357089999999,
        "state": "Kansas"
    },
    {
        "name": "Saginaw",
        "latitude": 43.4194699,
        "longitude": -83.9508068,
        "state": "Michigan"
    },
    {
        "name": "Kentwood",
        "latitude": 42.8694731,
        "longitude": -85.64474919999999,
        "state": "Michigan"
    },
    {
        "name": "Doral",
        "latitude": 25.8195424,
        "longitude": -80.3553302,
        "state": "Florida"
    },
    {
        "name": "Apple Valley",
        "latitude": 44.7319094,
        "longitude": -93.21772000000001,
        "state": "Minnesota"
    },
    {
        "name": "Grapevine",
        "latitude": 32.9342919,
        "longitude": -97.0780654,
        "state": "Texas"
    },
    {
        "name": "Aliso Viejo",
        "latitude": 33.5676842,
        "longitude": -117.7256083,
        "state": "California"
    },
    {
        "name": "Sammamish",
        "latitude": 47.61626829999999,
        "longitude": -122.0355736,
        "state": "Washington"
    },
    {
        "name": "Casa Grande",
        "latitude": 32.8795022,
        "longitude": -111.7573521,
        "state": "Arizona"
    },
    {
        "name": "Pinellas Park",
        "latitude": 27.8428025,
        "longitude": -82.6995443,
        "state": "Florida"
    },
    {
        "name": "Troy",
        "latitude": 42.7284117,
        "longitude": -73.69178509999999,
        "state": "New York"
    },
    {
        "name": "West Sacramento",
        "latitude": 38.5804609,
        "longitude": -121.530234,
        "state": "California"
    },
    {
        "name": "Burien",
        "latitude": 47.4703767,
        "longitude": -122.3467918,
        "state": "Washington"
    },
    {
        "name": "Commerce",
        "latitude": 39.8083196,
        "longitude": -104.9338675,
        "state": "Colorado"
    },
    {
        "name": "Monroe",
        "latitude": 32.5093109,
        "longitude": -92.1193012,
        "state": "Louisiana"
    },
    {
        "name": "Cerritos",
        "latitude": 33.8583483,
        "longitude": -118.0647871,
        "state": "California"
    },
    {
        "name": "Downers Grove",
        "latitude": 41.8089191,
        "longitude": -88.01117459999999,
        "state": "Illinois"
    },
    {
        "name": "Coral Gables",
        "latitude": 25.72149,
        "longitude": -80.2683838,
        "state": "Florida"
    },
    {
        "name": "Wilson",
        "latitude": 35.7212689,
        "longitude": -77.9155395,
        "state": "North Carolina"
    },
    {
        "name": "Niagara Falls",
        "latitude": 43.0962143,
        "longitude": -79.0377388,
        "state": "New York"
    },
    {
        "name": "Poway",
        "latitude": 32.9628232,
        "longitude": -117.0358646,
        "state": "California"
    },
    {
        "name": "Edina",
        "latitude": 44.8896866,
        "longitude": -93.3499489,
        "state": "Minnesota"
    },
    {
        "name": "Cuyahoga Falls",
        "latitude": 41.1339449,
        "longitude": -81.48455849999999,
        "state": "Ohio"
    },
    {
        "name": "Rancho Santa Margarita",
        "latitude": 33.640855,
        "longitude": -117.603104,
        "state": "California"
    },
    {
        "name": "Harrisburg",
        "latitude": 40.2731911,
        "longitude": -76.8867008,
        "state": "Pennsylvania"
    },
    {
        "name": "Huntington",
        "latitude": 38.4192496,
        "longitude": -82.44515400000002,
        "state": "West Virginia"
    },
    {
        "name": "La Mirada",
        "latitude": 33.9172357,
        "longitude": -118.0120086,
        "state": "California"
    },
    {
        "name": "Cypress",
        "latitude": 33.8169599,
        "longitude": -118.0372852,
        "state": "California"
    },
    {
        "name": "Caldwell",
        "latitude": 43.66293839999999,
        "longitude": -116.6873596,
        "state": "Idaho"
    },
    {
        "name": "Logan",
        "latitude": 41.7369803,
        "longitude": -111.8338359,
        "state": "Utah"
    },
    {
        "name": "Galveston",
        "latitude": 29.3013479,
        "longitude": -94.7976958,
        "state": "Texas"
    },
    {
        "name": "Sheboygan",
        "latitude": 43.7508284,
        "longitude": -87.71453,
        "state": "Wisconsin"
    },
    {
        "name": "Middletown",
        "latitude": 39.5150576,
        "longitude": -84.39827629999999,
        "state": "Ohio"
    },
    {
        "name": "Murray",
        "latitude": 40.6668916,
        "longitude": -111.8879909,
        "state": "Utah"
    },
    {
        "name": "Roswell",
        "latitude": 33.3942655,
        "longitude": -104.5230242,
        "state": "New Mexico"
    },
    {
        "name": "Parker",
        "latitude": 39.5186002,
        "longitude": -104.7613633,
        "state": "Colorado"
    },
    {
        "name": "Bedford",
        "latitude": 32.844017,
        "longitude": -97.1430671,
        "state": "Texas"
    },
    {
        "name": "East Lansing",
        "latitude": 42.7369792,
        "longitude": -84.48386540000001,
        "state": "Michigan"
    },
    {
        "name": "Methuen",
        "latitude": 42.7262016,
        "longitude": -71.1908924,
        "state": "Massachusetts"
    },
    {
        "name": "Covina",
        "latitude": 34.0900091,
        "longitude": -117.8903397,
        "state": "California"
    },
    {
        "name": "Alexandria",
        "latitude": 31.3112936,
        "longitude": -92.4451371,
        "state": "Louisiana"
    },
    {
        "name": "Olympia",
        "latitude": 47.0378741,
        "longitude": -122.9006951,
        "state": "Washington"
    },
    {
        "name": "Euclid",
        "latitude": 41.5931049,
        "longitude": -81.5267873,
        "state": "Ohio"
    },
    {
        "name": "Mishawaka",
        "latitude": 41.6619927,
        "longitude": -86.15861559999999,
        "state": "Indiana"
    },
    {
        "name": "Salina",
        "latitude": 38.8402805,
        "longitude": -97.61142369999999,
        "state": "Kansas"
    },
    {
        "name": "Azusa",
        "latitude": 34.1336186,
        "longitude": -117.9075627,
        "state": "California"
    },
    {
        "name": "Newark",
        "latitude": 40.0581205,
        "longitude": -82.4012642,
        "state": "Ohio"
    },
    {
        "name": "Chesterfield",
        "latitude": 38.6631083,
        "longitude": -90.5770675,
        "state": "Missouri"
    },
    {
        "name": "Leesburg",
        "latitude": 39.1156615,
        "longitude": -77.56360149999999,
        "state": "Virginia"
    },
    {
        "name": "Dunwoody",
        "latitude": 33.9462125,
        "longitude": -84.3346473,
        "state": "Georgia"
    },
    {
        "name": "Hattiesburg",
        "latitude": 31.3271189,
        "longitude": -89.29033919999999,
        "state": "Mississippi"
    },
    {
        "name": "Roseville",
        "latitude": 42.4972583,
        "longitude": -82.9371409,
        "state": "Michigan"
    },
    {
        "name": "Bonita Springs",
        "latitude": 26.339806,
        "longitude": -81.7786972,
        "state": "Florida"
    },
    {
        "name": "Portage",
        "latitude": 42.2011538,
        "longitude": -85.5800022,
        "state": "Michigan"
    },
    {
        "name": "St. Louis Park",
        "latitude": 44.9597376,
        "longitude": -93.3702186,
        "state": "Minnesota"
    },
    {
        "name": "Collierville",
        "latitude": 35.042036,
        "longitude": -89.6645266,
        "state": "Tennessee"
    },
    {
        "name": "Middletown",
        "latitude": 41.5623209,
        "longitude": -72.6506488,
        "state": "Connecticut"
    },
    {
        "name": "Stillwater",
        "latitude": 36.1156071,
        "longitude": -97.0583681,
        "state": "Oklahoma"
    },
    {
        "name": "East Providence",
        "latitude": 41.8137116,
        "longitude": -71.3700545,
        "state": "Rhode Island"
    },
    {
        "name": "Lawrence",
        "latitude": 39.8386516,
        "longitude": -86.0252612,
        "state": "Indiana"
    },
    {
        "name": "Wauwatosa",
        "latitude": 43.0494572,
        "longitude": -88.0075875,
        "state": "Wisconsin"
    },
    {
        "name": "Mentor",
        "latitude": 41.6661573,
        "longitude": -81.339552,
        "state": "Ohio"
    },
    {
        "name": "Ceres",
        "latitude": 37.5949316,
        "longitude": -120.9577098,
        "state": "California"
    },
    {
        "name": "Cedar Hill",
        "latitude": 32.5884689,
        "longitude": -96.9561152,
        "state": "Texas"
    },
    {
        "name": "Mansfield",
        "latitude": 40.75839,
        "longitude": -82.5154471,
        "state": "Ohio"
    },
    {
        "name": "Binghamton",
        "latitude": 42.09868669999999,
        "longitude": -75.91797380000001,
        "state": "New York"
    },
    {
        "name": "Coeur d'Alene",
        "latitude": 47.6776832,
        "longitude": -116.7804664,
        "state": "Idaho"
    },
    {
        "name": "San Luis Obispo",
        "latitude": 35.2827524,
        "longitude": -120.6596156,
        "state": "California"
    },
    {
        "name": "Minot",
        "latitude": 48.2329668,
        "longitude": -101.2922906,
        "state": "North Dakota"
    },
    {
        "name": "Palm Springs",
        "latitude": 33.8302961,
        "longitude": -116.5452921,
        "state": "California"
    },
    {
        "name": "Pine Bluff",
        "latitude": 34.2284312,
        "longitude": -92.00319549999999,
        "state": "Arkansas"
    },
    {
        "name": "Texas",
        "latitude": 29.383845,
        "longitude": -94.9027002,
        "state": "Texas"
    },
    {
        "name": "Summerville",
        "latitude": 33.0185039,
        "longitude": -80.17564809999999,
        "state": "South Carolina"
    },
    {
        "name": "Twin Falls",
        "latitude": 42.5629668,
        "longitude": -114.4608711,
        "state": "Idaho"
    },
    {
        "name": "Jeffersonville",
        "latitude": 38.2775702,
        "longitude": -85.7371847,
        "state": "Indiana"
    },
    {
        "name": "San Jacinto",
        "latitude": 33.7839084,
        "longitude": -116.958635,
        "state": "California"
    },
    {
        "name": "Madison",
        "latitude": 34.6992579,
        "longitude": -86.74833180000002,
        "state": "Alabama"
    },
    {
        "name": "Altoona",
        "latitude": 40.5186809,
        "longitude": -78.3947359,
        "state": "Pennsylvania"
    },
    {
        "name": "Columbus",
        "latitude": 39.2014404,
        "longitude": -85.9213796,
        "state": "Indiana"
    },
    {
        "name": "Beavercreek",
        "latitude": 39.7092262,
        "longitude": -84.06326849999999,
        "state": "Ohio"
    },
    {
        "name": "Apopka",
        "latitude": 28.6934076,
        "longitude": -81.5322149,
        "state": "Florida"
    },
    {
        "name": "Elmhurst",
        "latitude": 41.8994744,
        "longitude": -87.9403418,
        "state": "Illinois"
    },
    {
        "name": "Maricopa",
        "latitude": 33.0581063,
        "longitude": -112.0476423,
        "state": "Arizona"
    },
    {
        "name": "Farmington",
        "latitude": 36.72805830000001,
        "longitude": -108.2186856,
        "state": "New Mexico"
    },
    {
        "name": "Glenview",
        "latitude": 42.0697509,
        "longitude": -87.7878408,
        "state": "Illinois"
    },
    {
        "name": "Cleveland Heights",
        "latitude": 41.5200518,
        "longitude": -81.556235,
        "state": "Ohio"
    },
    {
        "name": "Draper",
        "latitude": 40.5246711,
        "longitude": -111.8638226,
        "state": "Utah"
    },
    {
        "name": "Lincoln",
        "latitude": 38.891565,
        "longitude": -121.2930079,
        "state": "California"
    },
    {
        "name": "Sierra Vista",
        "latitude": 31.5455001,
        "longitude": -110.2772856,
        "state": "Arizona"
    },
    {
        "name": "Lacey",
        "latitude": 47.03426289999999,
        "longitude": -122.8231915,
        "state": "Washington"
    },
    {
        "name": "Biloxi",
        "latitude": 30.3960318,
        "longitude": -88.88530779999999,
        "state": "Mississippi"
    },
    {
        "name": "Strongsville",
        "latitude": 41.3144966,
        "longitude": -81.83569,
        "state": "Ohio"
    },
    {
        "name": "Barnstable Town",
        "latitude": 41.7003208,
        "longitude": -70.3002024,
        "state": "Massachusetts"
    },
    {
        "name": "Wylie",
        "latitude": 33.0151201,
        "longitude": -96.5388789,
        "state": "Texas"
    },
    {
        "name": "Sayreville",
        "latitude": 40.45940210000001,
        "longitude": -74.360846,
        "state": "New Jersey"
    },
    {
        "name": "Kannapolis",
        "latitude": 35.4873613,
        "longitude": -80.6217341,
        "state": "North Carolina"
    },
    {
        "name": "Charlottesville",
        "latitude": 38.0293059,
        "longitude": -78.47667810000002,
        "state": "Virginia"
    },
    {
        "name": "Littleton",
        "latitude": 39.613321,
        "longitude": -105.0166498,
        "state": "Colorado"
    },
    {
        "name": "Titusville",
        "latitude": 28.6122187,
        "longitude": -80.8075537,
        "state": "Florida"
    },
    {
        "name": "Hackensack",
        "latitude": 40.8859325,
        "longitude": -74.0434736,
        "state": "New Jersey"
    },
    {
        "name": "Newark",
        "latitude": 37.5296593,
        "longitude": -122.0402399,
        "state": "California"
    },
    {
        "name": "Pittsfield",
        "latitude": 42.4500845,
        "longitude": -73.2453824,
        "state": "Massachusetts"
    },
    {
        "name": "York",
        "latitude": 39.9625984,
        "longitude": -76.727745,
        "state": "Pennsylvania"
    },
    {
        "name": "Lombard",
        "latitude": 41.8800296,
        "longitude": -88.00784349999999,
        "state": "Illinois"
    },
    {
        "name": "Attleboro",
        "latitude": 41.94454409999999,
        "longitude": -71.2856082,
        "state": "Massachusetts"
    },
    {
        "name": "DeKalb",
        "latitude": 41.9294736,
        "longitude": -88.75036469999999,
        "state": "Illinois"
    },
    {
        "name": "Blacksburg",
        "latitude": 37.2295733,
        "longitude": -80.4139393,
        "state": "Virginia"
    },
    {
        "name": "Dublin",
        "latitude": 40.0992294,
        "longitude": -83.1140771,
        "state": "Ohio"
    },
    {
        "name": "Haltom",
        "latitude": 32.7995738,
        "longitude": -97.26918169999999,
        "state": "Texas"
    },
    {
        "name": "Lompoc",
        "latitude": 34.6391501,
        "longitude": -120.4579409,
        "state": "California"
    },
    {
        "name": "El Centro",
        "latitude": 32.792,
        "longitude": -115.5630514,
        "state": "California"
    },
    {
        "name": "Danville",
        "latitude": 37.8215929,
        "longitude": -121.9999606,
        "state": "California"
    },
    {
        "name": "Jefferson",
        "latitude": 38.57670170000001,
        "longitude": -92.1735164,
        "state": "Missouri"
    },
    {
        "name": "Cutler Bay",
        "latitude": 25.5808323,
        "longitude": -80.34685929999999,
        "state": "Florida"
    },
    {
        "name": "Oakland Park",
        "latitude": 26.1723065,
        "longitude": -80.1319893,
        "state": "Florida"
    },
    {
        "name": "North Miami Beach",
        "latitude": 25.9331488,
        "longitude": -80.1625463,
        "state": "Florida"
    },
    {
        "name": "Freeport",
        "latitude": 40.6576022,
        "longitude": -73.58318349999999,
        "state": "New York"
    },
    {
        "name": "Moline",
        "latitude": 41.5067003,
        "longitude": -90.51513419999999,
        "state": "Illinois"
    },
    {
        "name": "Coachella",
        "latitude": 33.6803003,
        "longitude": -116.173894,
        "state": "California"
    },
    {
        "name": "Fort Pierce",
        "latitude": 27.4467056,
        "longitude": -80.3256056,
        "state": "Florida"
    },
    {
        "name": "Smyrna",
        "latitude": 35.9828412,
        "longitude": -86.5186045,
        "state": "Tennessee"
    },
    {
        "name": "Bountiful",
        "latitude": 40.8893895,
        "longitude": -111.880771,
        "state": "Utah"
    },
    {
        "name": "Fond du Lac",
        "latitude": 43.7730448,
        "longitude": -88.4470508,
        "state": "Wisconsin"
    },
    {
        "name": "Everett",
        "latitude": 42.40843,
        "longitude": -71.0536625,
        "state": "Massachusetts"
    },
    {
        "name": "Danville",
        "latitude": 36.5859718,
        "longitude": -79.39502279999999,
        "state": "Virginia"
    },
    {
        "name": "Keller",
        "latitude": 32.9341893,
        "longitude": -97.229298,
        "state": "Texas"
    },
    {
        "name": "Belleville",
        "latitude": 38.5200504,
        "longitude": -89.9839935,
        "state": "Illinois"
    },
    {
        "name": "Bell Gardens",
        "latitude": 33.9652918,
        "longitude": -118.1514588,
        "state": "California"
    },
    {
        "name": "Cleveland",
        "latitude": 35.1595182,
        "longitude": -84.8766115,
        "state": "Tennessee"
    },
    {
        "name": "North Lauderdale",
        "latitude": 26.217305,
        "longitude": -80.2258811,
        "state": "Florida"
    },
    {
        "name": "Fairfield",
        "latitude": 39.3454673,
        "longitude": -84.5603187,
        "state": "Ohio"
    },
    {
        "name": "Salem",
        "latitude": 42.51954,
        "longitude": -70.8967155,
        "state": "Massachusetts"
    },
    {
        "name": "Rancho Palos Verdes",
        "latitude": 33.7444613,
        "longitude": -118.3870173,
        "state": "California"
    },
    {
        "name": "San Bruno",
        "latitude": 37.6304904,
        "longitude": -122.4110835,
        "state": "California"
    },
    {
        "name": "Concord",
        "latitude": 43.2081366,
        "longitude": -71.5375718,
        "state": "New Hampshire"
    },
    {
        "name": "Burlington",
        "latitude": 44.4758825,
        "longitude": -73.21207199999999,
        "state": "Vermont"
    },
    {
        "name": "Apex",
        "latitude": 35.732652,
        "longitude": -78.85028559999999,
        "state": "North Carolina"
    },
    {
        "name": "Midland",
        "latitude": 43.6155825,
        "longitude": -84.2472116,
        "state": "Michigan"
    },
    {
        "name": "Altamonte Springs",
        "latitude": 28.6611089,
        "longitude": -81.3656242,
        "state": "Florida"
    },
    {
        "name": "Hutchinson",
        "latitude": 38.0608445,
        "longitude": -97.92977429999999,
        "state": "Kansas"
    },
    {
        "name": "Buffalo Grove",
        "latitude": 42.1662831,
        "longitude": -87.9631308,
        "state": "Illinois"
    },
    {
        "name": "Urbandale",
        "latitude": 41.6266555,
        "longitude": -93.71216559999999,
        "state": "Iowa"
    },
    {
        "name": "State College",
        "latitude": 40.7933949,
        "longitude": -77.8600012,
        "state": "Pennsylvania"
    },
    {
        "name": "Urbana",
        "latitude": 40.1105875,
        "longitude": -88.2072697,
        "state": "Illinois"
    },
    {
        "name": "Plainfield",
        "latitude": 41.632223,
        "longitude": -88.2120315,
        "state": "Illinois"
    },
    {
        "name": "Manassas",
        "latitude": 38.7509488,
        "longitude": -77.47526669999999,
        "state": "Virginia"
    },
    {
        "name": "Bartlett",
        "latitude": 41.9950276,
        "longitude": -88.1856301,
        "state": "Illinois"
    },
    {
        "name": "Kearny",
        "latitude": 40.7684342,
        "longitude": -74.1454214,
        "state": "New Jersey"
    },
    {
        "name": "Oro Valley",
        "latitude": 32.3909071,
        "longitude": -110.966488,
        "state": "Arizona"
    },
    {
        "name": "Findlay",
        "latitude": 41.04422,
        "longitude": -83.6499321,
        "state": "Ohio"
    },
    {
        "name": "Rohnert Park",
        "latitude": 38.3396367,
        "longitude": -122.7010984,
        "state": "California"
    },
    {
        "name": "Westfield",
        "latitude": 42.1250929,
        "longitude": -72.749538,
        "state": "Massachusetts"
    },
    {
        "name": "Linden",
        "latitude": 40.6220478,
        "longitude": -74.24459019999999,
        "state": "New Jersey"
    },
    {
        "name": "Sumter",
        "latitude": 33.9204354,
        "longitude": -80.3414693,
        "state": "South Carolina"
    },
    {
        "name": "Wilkes-Barre",
        "latitude": 41.2459149,
        "longitude": -75.88130749999999,
        "state": "Pennsylvania"
    },
    {
        "name": "Woonsocket",
        "latitude": 42.00287609999999,
        "longitude": -71.51478390000001,
        "state": "Rhode Island"
    },
    {
        "name": "Leominster",
        "latitude": 42.5250906,
        "longitude": -71.759794,
        "state": "Massachusetts"
    },
    {
        "name": "Shelton",
        "latitude": 41.3164856,
        "longitude": -73.0931641,
        "state": "Connecticut"
    },
    {
        "name": "Brea",
        "latitude": 33.9166805,
        "longitude": -117.9000604,
        "state": "California"
    },
    {
        "name": "Covington",
        "latitude": 39.0836712,
        "longitude": -84.5085536,
        "state": "Kentucky"
    },
    {
        "name": "Rockwall",
        "latitude": 32.93123360000001,
        "longitude": -96.4597089,
        "state": "Texas"
    },
    {
        "name": "Meridian",
        "latitude": 32.3643098,
        "longitude": -88.703656,
        "state": "Mississippi"
    },
    {
        "name": "Riverton",
        "latitude": 40.521893,
        "longitude": -111.9391023,
        "state": "Utah"
    },
    {
        "name": "St. Cloud",
        "latitude": 28.2489016,
        "longitude": -81.2811801,
        "state": "Florida"
    },
    {
        "name": "Quincy",
        "latitude": 39.9356016,
        "longitude": -91.4098726,
        "state": "Illinois"
    },
    {
        "name": "Morgan Hill",
        "latitude": 37.1305012,
        "longitude": -121.6543901,
        "state": "California"
    },
    {
        "name": "Warren",
        "latitude": 41.2375569,
        "longitude": -80.81841659999999,
        "state": "Ohio"
    },
    {
        "name": "Edmonds",
        "latitude": 47.8106521,
        "longitude": -122.3773552,
        "state": "Washington"
    },
    {
        "name": "Burleson",
        "latitude": 32.5420821,
        "longitude": -97.3208492,
        "state": "Texas"
    },
    {
        "name": "Beverly",
        "latitude": 42.5584283,
        "longitude": -70.880049,
        "state": "Massachusetts"
    },
    {
        "name": "Mankato",
        "latitude": 44.1635775,
        "longitude": -93.99939959999999,
        "state": "Minnesota"
    },
    {
        "name": "Hagerstown",
        "latitude": 39.6417629,
        "longitude": -77.71999319999999,
        "state": "Maryland"
    },
    {
        "name": "Prescott",
        "latitude": 34.5400242,
        "longitude": -112.4685025,
        "state": "Arizona"
    },
    {
        "name": "Campbell",
        "latitude": 37.2871651,
        "longitude": -121.9499568,
        "state": "California"
    },
    {
        "name": "Cedar Falls",
        "latitude": 42.5348993,
        "longitude": -92.4453161,
        "state": "Iowa"
    },
    {
        "name": "Beaumont",
        "latitude": 33.9294606,
        "longitude": -116.977248,
        "state": "California"
    },
    {
        "name": "La Puente",
        "latitude": 34.0200114,
        "longitude": -117.9495083,
        "state": "California"
    },
    {
        "name": "Crystal Lake",
        "latitude": 42.2411344,
        "longitude": -88.31619649999999,
        "state": "Illinois"
    },
    {
        "name": "Fitchburg",
        "latitude": 42.5834228,
        "longitude": -71.8022955,
        "state": "Massachusetts"
    },
    {
        "name": "Carol Stream",
        "latitude": 41.91252859999999,
        "longitude": -88.13479269999999,
        "state": "Illinois"
    },
    {
        "name": "Hickory",
        "latitude": 35.7344538,
        "longitude": -81.3444573,
        "state": "North Carolina"
    },
    {
        "name": "Streamwood",
        "latitude": 42.0255827,
        "longitude": -88.17840849999999,
        "state": "Illinois"
    },
    {
        "name": "Norwich",
        "latitude": 41.5242649,
        "longitude": -72.07591049999999,
        "state": "Connecticut"
    },
    {
        "name": "Coppell",
        "latitude": 32.9545687,
        "longitude": -97.01500779999999,
        "state": "Texas"
    },
    {
        "name": "San Gabriel",
        "latitude": 34.09611110000001,
        "longitude": -118.1058333,
        "state": "California"
    },
    {
        "name": "Holyoke",
        "latitude": 42.2042586,
        "longitude": -72.6162009,
        "state": "Massachusetts"
    },
    {
        "name": "Bentonville",
        "latitude": 36.3728538,
        "longitude": -94.2088172,
        "state": "Arkansas"
    },
    {
        "name": "Florence",
        "latitude": 34.79981,
        "longitude": -87.677251,
        "state": "Alabama"
    },
    {
        "name": "Peachtree Corners",
        "latitude": 33.9698929,
        "longitude": -84.2214551,
        "state": "Georgia"
    },
    {
        "name": "Brentwood",
        "latitude": 36.0331164,
        "longitude": -86.78277720000001,
        "state": "Tennessee"
    },
    {
        "name": "Bozeman",
        "latitude": 45.6769979,
        "longitude": -111.0429339,
        "state": "Montana"
    },
    {
        "name": "New Berlin",
        "latitude": 42.9764027,
        "longitude": -88.1084224,
        "state": "Wisconsin"
    },
    {
        "name": "Goose Creek",
        "latitude": 32.9810059,
        "longitude": -80.03258670000001,
        "state": "South Carolina"
    },
    {
        "name": "Huntsville",
        "latitude": 30.7235263,
        "longitude": -95.55077709999999,
        "state": "Texas"
    },
    {
        "name": "Prescott Valley",
        "latitude": 34.6100243,
        "longitude": -112.315721,
        "state": "Arizona"
    },
    {
        "name": "Maplewood",
        "latitude": 44.9530215,
        "longitude": -92.9952153,
        "state": "Minnesota"
    },
    {
        "name": "Romeoville",
        "latitude": 41.6475306,
        "longitude": -88.0895061,
        "state": "Illinois"
    },
    {
        "name": "Duncanville",
        "latitude": 32.6518004,
        "longitude": -96.9083366,
        "state": "Texas"
    },
    {
        "name": "Atlantic",
        "latitude": 39.3642834,
        "longitude": -74.4229266,
        "state": "New Jersey"
    },
    {
        "name": "Clovis",
        "latitude": 34.4047987,
        "longitude": -103.2052272,
        "state": "New Mexico"
    },
    {
        "name": "The Colony",
        "latitude": 33.0806083,
        "longitude": -96.89283089999999,
        "state": "Texas"
    },
    {
        "name": "Culver",
        "latitude": 34.0211224,
        "longitude": -118.3964665,
        "state": "California"
    },
    {
        "name": "Marlborough",
        "latitude": 42.3459271,
        "longitude": -71.5522874,
        "state": "Massachusetts"
    },
    {
        "name": "Hilton Head Island",
        "latitude": 32.216316,
        "longitude": -80.752608,
        "state": "South Carolina"
    },
    {
        "name": "Moorhead",
        "latitude": 46.8737648,
        "longitude": -96.76780389999999,
        "state": "Minnesota"
    },
    {
        "name": "Calexico",
        "latitude": 32.6789476,
        "longitude": -115.4988834,
        "state": "California"
    },
    {
        "name": "Bullhead",
        "latitude": 35.1359386,
        "longitude": -114.5285981,
        "state": "Arizona"
    },
    {
        "name": "Germantown",
        "latitude": 35.0867577,
        "longitude": -89.8100858,
        "state": "Tennessee"
    },
    {
        "name": "La Quinta",
        "latitude": 33.6633573,
        "longitude": -116.3100095,
        "state": "California"
    },
    {
        "name": "Lancaster",
        "latitude": 39.7136754,
        "longitude": -82.5993294,
        "state": "Ohio"
    },
    {
        "name": "Wausau",
        "latitude": 44.9591352,
        "longitude": -89.6301221,
        "state": "Wisconsin"
    },
    {
        "name": "Sherman",
        "latitude": 33.6356618,
        "longitude": -96.6088805,
        "state": "Texas"
    },
    {
        "name": "Ocoee",
        "latitude": 28.5691677,
        "longitude": -81.5439619,
        "state": "Florida"
    },
    {
        "name": "Shakopee",
        "latitude": 44.7973962,
        "longitude": -93.5272861,
        "state": "Minnesota"
    },
    {
        "name": "Woburn",
        "latitude": 42.4792618,
        "longitude": -71.1522765,
        "state": "Massachusetts"
    },
    {
        "name": "Bremerton",
        "latitude": 47.5673202,
        "longitude": -122.6329356,
        "state": "Washington"
    },
    {
        "name": "Rock Island",
        "latitude": 41.5094771,
        "longitude": -90.5787476,
        "state": "Illinois"
    },
    {
        "name": "Muskogee",
        "latitude": 35.7478769,
        "longitude": -95.3696909,
        "state": "Oklahoma"
    },
    {
        "name": "Cape Girardeau",
        "latitude": 37.3058839,
        "longitude": -89.51814759999999,
        "state": "Missouri"
    },
    {
        "name": "Annapolis",
        "latitude": 38.9784453,
        "longitude": -76.4921829,
        "state": "Maryland"
    },
    {
        "name": "Greenacres",
        "latitude": 26.6276276,
        "longitude": -80.1353896,
        "state": "Florida"
    },
    {
        "name": "Ormond Beach",
        "latitude": 29.2858129,
        "longitude": -81.0558894,
        "state": "Florida"
    },
    {
        "name": "Hallandale Beach",
        "latitude": 25.9812024,
        "longitude": -80.14837899999999,
        "state": "Florida"
    },
    {
        "name": "Stanton",
        "latitude": 33.8025155,
        "longitude": -117.9931165,
        "state": "California"
    },
    {
        "name": "Puyallup",
        "latitude": 47.1853785,
        "longitude": -122.2928974,
        "state": "Washington"
    },
    {
        "name": "Pacifica",
        "latitude": 37.6138253,
        "longitude": -122.4869194,
        "state": "California"
    },
    {
        "name": "Hanover Park",
        "latitude": 41.9994722,
        "longitude": -88.1450735,
        "state": "Illinois"
    },
    {
        "name": "Hurst",
        "latitude": 32.8234621,
        "longitude": -97.1705678,
        "state": "Texas"
    },
    {
        "name": "Lima",
        "latitude": 40.742551,
        "longitude": -84.1052256,
        "state": "Ohio"
    },
    {
        "name": "Marana",
        "latitude": 32.436381,
        "longitude": -111.2224422,
        "state": "Arizona"
    },
    {
        "name": "Carpentersville",
        "latitude": 42.1211364,
        "longitude": -88.2578582,
        "state": "Illinois"
    },
    {
        "name": "Oakley",
        "latitude": 37.9974219,
        "longitude": -121.7124536,
        "state": "California"
    },
    {
        "name": "Huber Heights",
        "latitude": 39.843947,
        "longitude": -84.12466080000002,
        "state": "Ohio"
    },
    {
        "name": "Lancaster",
        "latitude": 32.5920798,
        "longitude": -96.7561082,
        "state": "Texas"
    },
    {
        "name": "Montclair",
        "latitude": 34.0775104,
        "longitude": -117.6897776,
        "state": "California"
    },
    {
        "name": "Wheeling",
        "latitude": 42.1391927,
        "longitude": -87.9289591,
        "state": "Illinois"
    },
    {
        "name": "Brookfield",
        "latitude": 43.0605671,
        "longitude": -88.1064787,
        "state": "Wisconsin"
    },
    {
        "name": "Park Ridge",
        "latitude": 42.0111412,
        "longitude": -87.84061919999999,
        "state": "Illinois"
    },
    {
        "name": "Florence",
        "latitude": 34.1954331,
        "longitude": -79.7625625,
        "state": "South Carolina"
    },
    {
        "name": "Roy",
        "latitude": 41.1616108,
        "longitude": -112.0263313,
        "state": "Utah"
    },
    {
        "name": "Winter Garden",
        "latitude": 28.5652787,
        "longitude": -81.58618469999999,
        "state": "Florida"
    },
    {
        "name": "Chelsea",
        "latitude": 42.3917638,
        "longitude": -71.0328284,
        "state": "Massachusetts"
    },
    {
        "name": "Valley Stream",
        "latitude": 40.6642699,
        "longitude": -73.70846449999999,
        "state": "New York"
    },
    {
        "name": "Spartanburg",
        "latitude": 34.9495672,
        "longitude": -81.9320482,
        "state": "South Carolina"
    },
    {
        "name": "Lake Oswego",
        "latitude": 45.42067489999999,
        "longitude": -122.6706498,
        "state": "Oregon"
    },
    {
        "name": "Friendswood",
        "latitude": 29.5293998,
        "longitude": -95.2010447,
        "state": "Texas"
    },
    {
        "name": "Westerville",
        "latitude": 40.1261743,
        "longitude": -82.92906959999999,
        "state": "Ohio"
    },
    {
        "name": "Northglenn",
        "latitude": 39.8961821,
        "longitude": -104.9811468,
        "state": "Colorado"
    },
    {
        "name": "Phenix",
        "latitude": 32.4709761,
        "longitude": -85.0007653,
        "state": "Alabama"
    },
    {
        "name": "Grove",
        "latitude": 39.88145189999999,
        "longitude": -83.0929644,
        "state": "Ohio"
    },
    {
        "name": "Texarkana",
        "latitude": 33.425125,
        "longitude": -94.04768820000001,
        "state": "Texas"
    },
    {
        "name": "Addison",
        "latitude": 41.931696,
        "longitude": -87.9889556,
        "state": "Illinois"
    },
    {
        "name": "Dover",
        "latitude": 39.158168,
        "longitude": -75.5243682,
        "state": "Delaware"
    },
    {
        "name": "Lincoln Park",
        "latitude": 42.2505943,
        "longitude": -83.1785361,
        "state": "Michigan"
    },
    {
        "name": "Calumet",
        "latitude": 41.6155909,
        "longitude": -87.5294871,
        "state": "Illinois"
    },
    {
        "name": "Muskegon",
        "latitude": 43.2341813,
        "longitude": -86.24839209999999,
        "state": "Michigan"
    },
    {
        "name": "Aventura",
        "latitude": 25.9564812,
        "longitude": -80.1392121,
        "state": "Florida"
    },
    {
        "name": "Martinez",
        "latitude": 38.0193657,
        "longitude": -122.1341321,
        "state": "California"
    },
    {
        "name": "Greenfield",
        "latitude": 42.9614039,
        "longitude": -88.0125865,
        "state": "Wisconsin"
    },
    {
        "name": "Apache Junction",
        "latitude": 33.4150485,
        "longitude": -111.5495777,
        "state": "Arizona"
    },
    {
        "name": "Monrovia",
        "latitude": 34.1442616,
        "longitude": -118.0019482,
        "state": "California"
    },
    {
        "name": "Weslaco",
        "latitude": 26.1595194,
        "longitude": -97.9908366,
        "state": "Texas"
    },
    {
        "name": "Keizer",
        "latitude": 44.9901194,
        "longitude": -123.0262077,
        "state": "Oregon"
    },
    {
        "name": "Spanish Fork",
        "latitude": 40.114955,
        "longitude": -111.654923,
        "state": "Utah"
    },
    {
        "name": "Beloit",
        "latitude": 42.5083482,
        "longitude": -89.03177649999999,
        "state": "Wisconsin"
    },
    {
        "name": "Panama",
        "latitude": 30.1588129,
        "longitude": -85.6602058,
        "state": "Florida"
    }
]

