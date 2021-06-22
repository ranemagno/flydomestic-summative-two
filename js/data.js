var accommodationData = {
  hostel: {
    minGroupSize: 1,
    maxGroupSize: 1,
    priceperNight: 30,
    minNights: 1,
    maxNights: 10,
    mealsProvided: ['Breakfast']
  },
  hotel: {
    minGroupSize: 1,
    maxGroupSize: 2,
    pricePerNight: 157,
    minNights: 1,
    maxNights: 10,
    mealsProvided: ['Breakfast', 'Lunch', 'Dinner']
  },
  motel: {
    minGroupSize: 2,
    maxGroupSize: 4,
    pricePerNight: 90,
    minNights: 3,
    maxNights: 10,
    mealsProvided: ['Breakfast', 'Lunch']
  },
  house: {
    minGroupSize: 1,
    maxGroupSize: 4,
    pricePerNight: 240,
    minNights: 2,
    maxNights: 15,
    mealsProvided: ['Stove Available']
  }
};

var userDetails = {
  fullName: '',
  email: '',
  phoneNum: ''
};

var userPreference = {
  nights: 0,
  people: 0,
  maxPrice: 300
};
