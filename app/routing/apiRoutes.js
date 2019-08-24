var friends = require("../data/friends")

module.exports =function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })
    app.post("api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: Infinity
        }
        var userData = req.body;
        var userScores = userData.scores;

        var totalDiff;
        [1,4,3,2,3] //ahmed
        [2,3,1,4,5] //user
        for(var i=0; i<friends.length; i++){
            var currentFriend = friends[i];
            totalDiff = 0;
            for(var j=0; j< currentFriend.scores.length; j++){
                var currentFriendScore = currentFriend.scores[j]; //1 //4 //3
                var currentUserScore = userScores[j]; //2 //3 //1
                //currentUserScores = "2" // currentUserScores = 2
                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore)); //(2 -1) // 1 +(3-4) //2+(1-3)
                    //1 //2 //4
            }
            if(totalDiff <=betMatch.friendDiff){
                
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                friendDiff = totalDiff;
            }
        }
        friends.push(userData);
        res.json(bestMatch);
    })
};

