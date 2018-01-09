var dotenv = require("dotenv").config();
var keys = require('./keys');

var fs = require('fs');
var newCommand;
var dataArr;

var command = process.argv[2];
var details = process.argv[3];

var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var params = {screen_name: 'SelgaMuiznieks'};

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var searchSong;

var request = require('request');
var searchMovie;


function liri() {
	if (command === 'my-tweets') {
		myTweets();
	} else if (command === 'spotify-this-song') {
		spotifyThisSong();
	} else if (command === 'movie-this') {
		movieThis();
	} else if (command === 'do-what-it-says') {
		fs.readFile('random.txt', 'utf8', function (error, data) {
     		if (!error) {
     			newCommand = data;
     			console.log('I received the following command: ' + newCommand);
     			txtCommand();
     		}
     	});
	} else {
		console.log('I\'m sorry, please try another command.');
	}
};

liri();

function myTweets() {
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			console.log('----------');
			for (i = 0; i < tweets.length; i++) {
				console.log(tweets[i].text + '\n' + tweets[i].created_at + '\n----------');
			}
  		}
	});
};

function spotifyThisSong() {
	if (details) {
		searchSong = details;
	} else {
		searchSong = 'The Sign Ace of Base';
	}

	spotify.search({ type: 'track', query: searchSong, limit: 1 }, function(error, data) {
  		if (!error) {
  			var song = data.tracks.items[0];
  			console.log('----------\nSong: ' + song.name + '\nArtist: ' + song.artists[0].name + '\nAlbum: ' + song.album.name + '\nHere is a link to the song on Spotify: \n' + song.preview_url + '\n----------');
  		}
  	});
};

function movieThis() {
	if (details) {
		searchMovie = 'http://www.omdbapi.com/?apikey=86b64888&t=' + details;
	} else {
		searchMovie = 'http://www.omdbapi.com/?apikey=86b64888&t=mr+nobody';
	}

	request(searchMovie, function (error, response, body) {
		if (!error) {
			var movieInfo = JSON.parse(body);
			console.log('----------\nMovie: ' + movieInfo.Title + '\nYear: ' + movieInfo.Year + '\nIMDB Rating: ' + movieInfo.imdbRating + '\nRotten Tomatoes Rating: ' + movieInfo.Ratings[1].Value + '\nPlot: ' + movieInfo.Plot + '\nStarring: ' + movieInfo.Actors + '\nLanguage: ' + movieInfo.Language + '\nProduced in ' + movieInfo.Country + '.\n----------');
		}
	});
};

function txtCommand() {
	dataArr = newCommand.split(',');
	command = dataArr[0];
	details = dataArr[1];
	liri();
};