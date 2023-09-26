const path = require('path');

module.exports = {
  entry: {
	'arxiki' : './javascript/arxiki.js',
	'Sing_up' : './javascript/Sing_up.js',
	'user_details' : './javascript/user_details.js',
	'Passenger_profile' : './javascript/Passenger_profile.js',
	'Driver_profile' : './javascript/Driver_profile.js',
	'Payment' : './javascript/Payment.js',
	'Publish_your_ride' : './javascript/Publish_your_ride.js',
	'Find_your_ride' : './javascript/Find_your_ride.js',
	'Who_we_are' : './javascript/Who_we_are.js',
	'How_it_works' : './javascript/How_it_works.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};