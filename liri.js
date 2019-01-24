require("dotenv").config();

var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var query = process.argv[3];

switch(process.argv[2]){
    
    case "spotify-this-song" : 
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
                console.log("\nSong Info:\n" + track + " BY " + artist.join(" and ") + " ON ALBUM " + album + "\n\nPreview here: " + prev);
            }
            else{
                console.log("That's not a real thing.")
            } 
        });
        break;

    case "concert-this" :
        

        break;

    case "movie-this" :

        break;
}