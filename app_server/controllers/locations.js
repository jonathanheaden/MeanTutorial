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
    res.render('location-info', {title: 'Location Info'});
};

/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
    res.render('location-review-form', {title: 'Add Review'});
};

