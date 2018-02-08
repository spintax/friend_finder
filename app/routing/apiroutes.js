
// linking our routes to a series of "data" sources.
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
  
console.log("api/friends works");
console.log(req.body);
//your new best friends info
    var bff = {
      friendname: "",
      friendphoto: "",
      friendDifference: 1
    };

    // your survery results
    var newFriend=req.body;
    var userName= newFriend.name;
    var userPhoto= newFriend.photo;
    var userScores= newFriend.scores.split("");

    var totalDifference=0;

    console.log("newFriend");
    console.log(JSON.stringify(newFriend,null,2));
    //iterate thru all friend data
    for (let i = 0; i < friendsData.length; i++) {
      console.log("i: "+i);
      totalDifference=0;

      for (let b = 0; b < friendsData[i].scores[b]; b++) {
        console.log("b: "+b);

        console.log("userScores[b]");
        console.log(userScores);
        console.log("friendsData[i].scores[b]");
        console.log(friendsData[i].scores[b]);
        totalDifference +=Math.abs(parseInt(userScores[b]) - parseInt(friendsData[i].scores[b]));
        
        console.log("totalDifference: "+totalDifference);
        console.log("bff.friendDifference: "+bff.friendDifference);
        if (totalDifference <= bff.friendDifference){
          console.log("friendsData: ");
          console.log(friendsData[i]);
          bff.friendname=friendsData[i].friendname;
          bff.friendphoto=friendsData[i].friendphoto;
          bff.friendDifference=totalDifference;
        
        }
        else {console.log("you are here");}
      }
      
    }
    console.log("bff");
    console.log(bff);

    friendsData.push(newFriend);
    res.json(bff);

    // console.log("friendsdata: "+friendsData);
    // if (friendsData.length < 5) {
    //   friendsData.push(req.body);
    //   res.json(true);
    // }
    // else {
    // //   waitListData.push(req.body);
    // //   res.json(false);
    // }
  });
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];
//     console.log(tableData);
//   });
};