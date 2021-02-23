export default (request) => {
    const db = require("kvstore");
    const pubnub = require("pubnub");
    var json = JSON.parse(request.message);
    console.log(json);
    let { username, score } = json;
    //let { username, score } = request.message;
    var scorearrayprevious = [];
    var scorearraynew = [];
    var usernamearraynew = [];
    var usernamearrayprevious = [];

   // db.removeItem("data"); //reset the block
    db.get("data").then((value) => {
        if(value){
            console.log("value", value);
            let i = 0;
            value.score.some(item => {
                console.log("hello", item, score);
                if(parseInt(item) < parseInt(score)){ //Parse into int since variables are currently strings
                    //Score
                    scorearraynew = value.score.slice(0, i);
                    scorearrayprevious = value.score.slice(i, value.score.length);
                    console.log("values", scorearraynew, scorearrayprevious);
                    scorearraynew.push(score);
                    var newScoreList = scorearraynew.concat(scorearrayprevious);
                    newScoreList.splice(-1,1);
                    
                    //Username
                    usernamearrayprevious = value.username.slice(0, i);
                    usernamearraynew = value.username.slice(i, value.score.length);
                    console.log("values", usernamearrayprevious, usernamearraynew);
                    usernamearrayprevious.push(username);
                    var newUsername = usernamearrayprevious.concat(usernamearraynew);
                    newUsername.splice(-1,1);
                    
                    value.score = newScoreList;
                    value.username = newUsername;

                    db.set("data", value);
                    
                    return true; //break out of the loop using Array.prototype.some by returning true
               }
                i++;
            });
            pubnub.publish({
                "channel": "leaderboard_scores",
                "message": value
            }).then((publishResponse) => {
                console.log("publish response", publishResponse);
            });
        } else {
            db.set("data", {
                "username":["unset","unset","unset","unset","unset"], 
                "score":["0","0","0","0","0"]});
        }
    });
    return request.ok();
};