require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");

var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var search = process.argv[3];

try{
    fs.appendFileSync("./log.txt", process.argv)
    console.log("All commands are logged in log.txt for \"debugging\" purposes.");
} catch (err) {
    console.log(err)
}

for(i=4;i<process.argv.length;i++){
    search = search + " " + process.argv[i];
}

handler(process.argv[2], search);

function handler(command, query){
    switch(command){
        
        case "spotify-this-song" : 
            song(query);
            break;

        case "concert-this" :
            concert(query);
            break;

        case "movie-this" :
            movie(query);
            break;

        case "do-what-it-says" :
            
            fs.readFile("./random.txt", "UTF8", (err, data) => {
                if(err) throw err;
                var temp = data.split(",")
                handler(temp[0], temp[1])
            })

        break;

        case "clear-log" :
            fs.writeFile("./log.txt", "", (err) => {
                if(err) throw err;
                console.log("Except this one.")
            })

        break;
    }
}

function song(query){
    spotify.search({ type: 'track', query: query || 'The Sign - Ace of Base', limit: 1 }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
        var artist = [], track,  prev, album; 
            

        if(data.tracks.items.length > 0){
    
            for(i=0;i<data.tracks.items[0].artists.length; i++){
                artist.push(data.tracks.items[0].artists[i].name);
            }
            track = data.tracks.items[0].name;
            prev = data.tracks.items[0].external_urls.spotify;
            album = data.tracks.items[0].album.name
            console.log("\n*Song Info:\n*" + track + " BY " + artist.join(" and ") + " ON ALBUM " + album + "\n*\n*Preview here: " + prev);
        }
        else{
            console.log("That's not a real thing.")
        } 
    });
}

function concert(query){
    axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp")
            .then(data => {
                if(!data.data.errorMessage && data.data.length > 0){
                    console.log("\n*Here are all the venues " + query + " is playing at:")
                    // console.log(data.data)
                    for(i=0;i<data.data.length;i++){
                        var date = data.data[i].datetime.split("T");
                        date = moment(date[0], "YYYY-MM-DD").format("MM/DD/YYYY")
                        console.log("\n*Venue: " + data.data[i].venue.name + "\n*Location: " + data.data[i].venue.city + ", " + data.data[i].venue.country + "\n*Date: " + date)
                    }
                }
                else{
                    console.log("No results found.")
                }
                // console.log(data.data);
            })
            .catch(error => {
                console.log("Error occurred: " + error);
            })
}

function movie(query){
    if(!query){
        query = "Mr.+Nobody"
    }
        axios.get("http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy")
        .then(data => {
            // console.log(data)
            console.log("\n*Title: " + data.data.Title + "\n*Released in " + data.data.Year + "\n*Ratings: \n    - IMDB:            " + data.data.imdbRating + "\n    - Rotten Tomatoes: " + data.data.Ratings[2].Value + "\n*Country: " + data.data.Country + "\n*Language: " + data.data.Language + "\n*Plot: " + data.data.Plot + "\n*Actors: " + data.data.Actors);
        })
        .catch(error => {
            console.log("Error occurred: " + error)
        })

}