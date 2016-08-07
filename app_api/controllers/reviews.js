var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function (res,status, content) {
    res.status(status);
    res.json(content);
};

module.exports.reviewsCreate = function (req, res) { 
    var locationid = req.params.locationid;
    if (locationid) {
        Loc
            .findById(locationid)
            .select('reviews')
            .exec(
                function(err, location) {
                    if (err) {
                        sendJsonResponse (res, 400, err);
                    } else {
                        doAddReview(req, res, location);
                    }
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message" : "Not found, locationid required"
        });
    }
};

module.exports.reviewsReadOne = function (req, res) { 
    if (req.params && req.params.locationid && req.params.reviewid) {
        Loc
            .findById(req.params.locationid)
            .select('name reviews')
            .exec(function(err, location){
                var response, review
                if (!location) {
                    sendJsonResponse(res, 404, {
                        message: "locationid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                if (location.reviews && location.reviews.length > 0) {
                    review = location.reviews//.id(req.params.reviewid);
                    /* 
                    Getting error in Node
                    POST /api/locations/57a10828ae5fb5b9ec358c86/reviews 200 7.933 ms - 20
/Users/jonathan/Documents/20-29 Personal Projects/26 Coding/26.14 loc8tr/loc8tr/app_api/controllers/reviews.js:30
                    review = location.reviews.id(req.params.reviewid);
                                              ^

TypeError: location.reviews.id is not a function
                    */
                    if (!review) {
                        sendJsonResponse(res,404,{
                            "message": "reviewid not found"
                        });
                    } else {
                        response = {
                            location : {
                                name: location.name,
                                id: req.params.locationid
                            },
                            review : review
                        };
                        sendJsonResponse(res, 200, response);
                    }
                } else {
                    sendJsonResponse(res, 404, {
                        "message" : "No reviews found"
                    });
                } 
            }      
        );
    } else {
        sendJsonResponse(res,404, {
            "message": "No locationid specified in the request"
        });
    }   
};

module.exports.reviewsUpdateOne = function (req, res) { 
    if (!req.params.locationid || !req.params.reviewid) {
        sendJsonResponse(rew, 404, {
            "message" : "Not found, locationif and reviewid are both required"
        });
        return;
    }
    Loc
        .findById(req.params.locationid)
        .select('reviews')
        .exec(
            function(err, location) {
                var thisReview;
                if (!location) {
                    sendJsonResponse(res,404,{
                        "message": "locationid not found"
                    });
                    return
                } else if (err) {
                    sendJsonResponse(res,400,err);
                    return;
                }
                if (location.review && location.reviews.length > 0) {
                    thisReview = location.reviews.id(req.params.reviewid);
                    if (!thisReview) {
                        sendJsonResponse(res,404, {
                            "message" : "Reviewid not found"
                        });
                    } else {
                        thisReview.author = req.body.author;
                        thisReview.rating = req.body.rating;
                        thisReview.reviewtext = req.body.reviewtext;
                        location.save(function(err, location){
                            if (err) {
                                sendJsonResponse(ress,404, err);
                            } else {
                                updateAverageRating(location._id);
                                sendJsonResponse(res,200, thisReview);
                            }
                        });
                    }
                } else {
                    sendJsonResponse(res, 404, {
                        "message" : "no review to update"
                    });
                }
            }
        )  
};

module.exports.reviewsDeleteOne = function (req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};

/* other functions */
var doAddReview = function(req, res, location){
    if (!location) {
        sendJsonResponse(res, 404, {
            "message": "locationid not found"
        });
    } else {
        location.reviews.push({
            author: req.body.author,
            rating: req.body.rating,
            reviewtext:req.body.reviewText
        });
        location.save(function(err, location){
            var thisReview;
            if (err) {
                sendJsonResponse(res,400,err);
            } else {
                updateAverageRating(location._id);
                thisReview = location.reviews[location.reviews.length - 1];
                sendJsonResponse(res,201, thisReview);
            }
        });
    }
};

var updateAverageRating = function(locationid){
    Loc
        .findById(locationid)
        .select('rating reviews')
        .exec(
            function(err, location) {
                if (!err) {
                    doSetAverageRating(location);
                }
            });
};

var doSetAverageRating = function(location) {
    var i, reviewCount,ratingAverage,ratingTotal;
    if (location.reviews && location.reviews.length > 0) {
        reviewCount = location.reviews.length;
        ratingTotal = 0;
        for (i=0; i < reviewCount; i++) {
            ratingTotal= ratingTotal + locations.reviews[i].rating;
        }
        ratingAverage = parseInt(ratingTotal / reviewCount, 10);
        location.rating = ratingAverage;
        location.save(function(err){
            if(err) {
                console.log(err);
            } else {
                console.log("Average rating updated to ", ratingAverage);
            }
        });
    }
};