# liri-node-app

A distant relative of Siri, Liri is a *Language* Interpretation and Recognition Interface app that uses Node.js to respond to command line requests for data.

## Getting Started

Create a file named **.env** with the following information and your API keys:

    Spotify API keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    Twitter API keys

    TWITTER_CONSUMER_KEY=your-twitter-consumer-key
    TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
    TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
    TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

## Using Liri

Liri responds to the following commands:

#### my-tweets
 The my-tweets command will return the 20 most recent tweets from a twitter account. The code is written to pull from my Twitter account, but can easily be changed on line 13 of liri.js.
 
 #### movie-this 'movie name'
The movie-this command requires a movie name to be entered as a parameter (use quotes if more than one word).

#### spotify-this-song 'song name'
The spotify-this-song command requires a song name to be entered as a parameter (use quotes if more than one word).

#### do-what-it-says
The do-what-it-says command reads the command from random.txt. If you choose to alter the text in thr random.txt file, it must follow the same format (no spaces between the command and second parameter).
- e.g. movie-this,"The Breakfast Club"

## Built With

- [Twitter npm] (https://www.npmjs.com/package/twitter)
- [Node Spotify API npm] (https://www.npmjs.com/package/node-spotify-api)
- [Request npm] (https://www.npmjs.com/package/request)
- [OMDB API] (http://www.omdbapi.com/)
- [dotenv npm] (https://www.npmjs.com/package/dotenv)


### Author

- Selga Muiznieks (2018)

