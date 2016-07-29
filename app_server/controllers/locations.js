/* GET 'home' page */
module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8tr - find a  place to work with wifi',
        pageHeader: {
            title: 'Loc8tr',
            strapline: 'Find places to work with wifi near you!'
        }
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

