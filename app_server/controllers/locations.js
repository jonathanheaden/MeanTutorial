var request = require('request');

var apiOptions = {
    server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://herokuprodpath.herokuapp.com";
}

/* GET 'home' page */
module.exports.homelist = function (req, res) {
    var requestOptions, path;
    path = '/api/locations';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        qs : {
            lng : 3.9690884,
            lat : -1.9690884,
            maxdistance : 20
        }
    };
    request(
        requestOptions,
        function(err,response,body){
            var i, data;
            data = body;
            if (response.statusCode === 200 && data.length) {
                for (i = 0; i < data.length; i++) {
                    data[i].distance = _formatDistance(data[i].distance);
                }
            }
            renderHomepage(req, res, body);
        }
    )
    
};

var _formatDistance = function (distance){
    var numDistance, unit;
    if (distance > 1) {
        numDistance = parseFloat(distance).toFixed(1);
        unit = 'km'
    } else {
        numDistance = parseInt(distance * 1000,10);
        unit = 'm'
    }
    return numDistance + unit;
};

var renderHomepage = function (req, res, responseBody) {
    var message;
    if (!(responseBody instanceof Array)){
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No nearby place found"
        }
    }
    res.render('locations-list', {
            title: 'Loc8tr - find a place with wifi',
            pageHeader: {
            title: 'Loc8tr',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for a suitable place to work with wifi? Perhaps with coffee and a cake? Loc8tr helps you work smarter when out and about",
        locations: responseBody,
        message: message
        });
};

/* GET 'Location Info' page */
module.exports.locationInfo = function (req, res) {
    var requestOptions, path;
    path = "/api/locations/" + req.params.locationid;
    requestOptions = {
        url: apiOptions.server + path,
        method: "Get",
        json: {}
    };
    request (
        requestOptions,
        function(err, response, body) {
            console.log('get the body')
            console.log(body)
            var data = body;
            data.coords = {
                lng: body.coords[0],
                lat: body.coords[1]
            };
            renderDetailPage(req, res, data);
        }
    );
};

var renderDetailPage = function(req,res, locDetail){
    res.render('location-info', {
        title: locDetail.name,
        pageHeader: {
            title: locDetail.name
        },
        sidebar: {
            context: 'is on Loc8tr because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.' 
        },
        location : locDetail                    
    });
};



/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
    res.render('location-review-form', {title: 'Add Review'});
};

