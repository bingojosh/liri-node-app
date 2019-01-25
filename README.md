# Liri Node Application

## Downloading Liri And Preparing Her To Run
If Liri is already installed on your computer skip ahead to "How to use Liri" section.
1. You must have Node.js installed on your computer.
2. Clone this repository down to your computer
3. In the command line in liri-node-app, run  "npm install" - This will automatically install the necessary components to run Liri
4. Create a file called .env in the same folder as liri with the following code"
    ```
    # Spotify API keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret
    ```
    Where "your-spotify-id" and "your-spotify-secret" are key acquired from developer.spotify.com. For more information on how to acquire api keys for spotify check out https://developer.spotify.com/documentation/web-api/quick-start/
## How to use Liri
<ul>
<h3>Step 1
<ul><li>In the command line, change directory into the folder you've stored liri in.

[![Image from Gyazo](https://i.gyazo.com/e774912ce315eb570364d2c0176045ab.gif)](https://gyazo.com/e774912ce315eb570364d2c0176045ab) </li></ul>

<h3>Step 2
<ul><li>Run one of the 5 available commands. These commands are:
<ul><li>concert-this</li><li>spotify-this-song</li><li>movie-this</li><li>do-what-it-says</li><li>clear-log</li></ul>
These commands are explained and demonstrated in greater detail below. </ul>

<h3>Step 3
<ul><li>Watch the Magic power of Liri</ul></li></ul>

## Commands
<p>Here we will go in-depth on what each command allows you to do so you can unlock the full potential of Liri.</p>
<p>Firstly, as with all commands being run in node, the first two commands you give must be "node" and file you wish to run - in this case liri. Ex. node liri concert-this Blink-182</p>

<br>

### <strong>concert-this</strong>
The concert-this command allows you to look up any band and instantly be informed about all of the concerts your band has upcoming. Complete with the name of the venue, the location, and the date that your band will be playing there.

Format: concert-this "your band here" <br>

[![Image from Gyazo](https://i.gyazo.com/ca567eaeda5a086953c24060e40e480c.gif)](https://gyazo.com/ca567eaeda5a086953c24060e40e480c)

<br>

### <strong>spotify-this-song</strong>
The spotify-this-song command allows you to search spotify database for any song or song/artist pair and get back information about the song, artist, album and even recieve a preview link to listen to the song on spotify web player.

Format: spotify-this-song "song - artist"

[![Image from Gyazo](https://i.gyazo.com/d136991ab0acbe3b9612f27da36760fd.gif)](https://gyazo.com/d136991ab0acbe3b9612f27da36760fd)

### <strong>movie-this</strong>
The movie-this command takes any movie title and searched OMDB for informations about that movie. Receive a full breakdown on any movie you search with the following data:

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
Format: movie-this "movie title"

[![Image from Gyazo](https://i.gyazo.com/0252461ccfab3c05230964e1b83bf90c.gif)](https://gyazo.com/0252461ccfab3c05230964e1b83bf90c)

### <strong>do-what-it-says</strong>
This command allows you to read a command from a text file titled random.txt. 

### Sample File

[![Image from Gyazo](https://i.gyazo.com/b256be15ab6c3a656297f5f7077a4e64.png)](https://gyazo.com/b256be15ab6c3a656297f5f7077a4e64)
Here we see the random.txt file will execute the concert-this command with the search for Sum 41. This file may contain any of the four other commands, separated by only a comma from the search query.

Format: do-what-it-says

[![Image from Gyazo](https://i.gyazo.com/7e7b2c94532338ca96767fd2f61f147e.gif)](https://gyazo.com/7e7b2c94532338ca96767fd2f61f147e)

*NOTE: There MUST be a file random.txt in the same directory as Liri with correctly formatted command within in order for this command to function.

### <strong>clear-log</strong>
Liri comes equipped with a logging function which records every command you give it and saves that in raw format in a file log.txt, found in the same directory as Liri. The clear-log function simply resets that log file to its original state - empty. This is primarily for developer purposes.
