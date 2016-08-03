/* GET 'home' page */
module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8tr - find a  place to work with wifi',
        pageHeader: {
            title: 'Loc8tr',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for a suitable place to work with wifi? Perhaps with coffee and a cake? Loc8tr helps you work smarter when out and about",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '200m'
        },{
            name: 'Cafe Paris',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium Wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location Info' page */
module.exports.locationInfo = function (req, res) {
    res.render('location-info', {
        title: 'Starcups!',
        pageHeader: {
            title: 'Starcups'
        },
        sidebar: {
            context: 'is on Loc8tr because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.' 
        },
        location : {
            name: 'Starcups!',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00 AM',
                closing: '7:00 PM',
                closed: false
             }, { 
                days: 'Monday - Friday',
                opening: '8:00 AM',
                closing: '5:00 PM',
                closed: false
             }, {
                 days: 'Sunday',
                 closed: true
            }],
            reviews : [{
                author: 'Jonathan Headen',
                rating: 4,
                timestamp: '1st August 2016',
                reviewText: 'Nice and quiet'
             }, {
                author: 'Charlie Chaplin',
                rating: 2,
                timestamp: '14th July 2015',
                reviewText: 'It was too noisy'
            }]
        }  
    });
};

/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
    res.render('location-review-form', {title: 'Add Review'});
};

