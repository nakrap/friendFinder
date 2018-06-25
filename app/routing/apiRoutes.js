
// Requirement:
// ---------------------------------------------------------------------------
var userData = require("../data/friends");


// ROUTING
// ===============================================================================

module.exports = function(app) {
  
    // API GET Requests
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function(req, res) {
        res.json(userData);
    });

    // Variables set up for our logic
    var comparisonScore = 0;
    var friendScores = [];


    // API POST Requests
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res) {

        // Store current user scores in array.
        var currentUserScores = req.body.scores;
        
            // Loop through all userData, and calculate differences in scores.
            for (var i = 0; i < userData.length; i++) {

            var otherUserScore = userData[i].scores;

            comparisonScore = calculation(currentUserScores, otherUserScore);
            friendScores.push(comparisonScore);

            }


    var index = 0;
    var value = friendScores[0];

        for (var i = 0; i < friendScores.length; i++) {
            
            if (friendScores[i] < value) {

                value = friendScores[i];

                index = i;
            }
        }

    // Choose the comparison scores with the least difference between scores.
    console.log("Best friend name: " + userData[index].name);

    // Send best friend as a response so we can display in modal.
    res.send(userData[index]);

    // Push new user to user array.
    userData.push(req.body);

  });
};
// ===============================================================================


    var difference = 0;

// Find total difference between current user and other user.
function calculation(currentUserScores, otherUserScore) {
  
    // Reset the difference total whenever function called.
    difference = 0;
    
    for (var i = 0; i < currentUserScores.length; i++) {

        difference += Math.abs(currentUserScores[i] - otherUserScore[i]);
        
    }

    return difference;
 

app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];

    console.log(friends);
});
};
