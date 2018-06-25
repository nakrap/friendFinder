// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

var friends = require("../data/friends");


// ROUTING
// ===============================================================================

module.exports = function(app) {
  
// API GET Requests
// ---------------------------------------------------------------------------

app.get("/api/friends", function(req, res) {
    res.json(friends);
});



// API POST Requests
// ---------------------------------------------------------------------------

app.post("/api/friends", function(req, res) {

    if (friends.length < 5) {
        friends.push(req.body);
        res.json(true);
    }
    else {
        waitListData.push(req.body);
        res.json(false);
    }
});

 

app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];

    console.log(friends);
});
};
