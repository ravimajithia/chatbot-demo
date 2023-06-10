# sample-chatbot

## Background
This project is for demo purpose, it is build with webcomponents + webpack + javascript. Simple chat application that matches user's input message with pre defined constants and reply accordingly. Sample video - https://app.screencast.com/uEY0cMuqMfjxX
NOTE: there is no submit button press enter to send the message

## Getting started
Install dependencies
`npm install`

Run project in browser
`npm run serve`

## Directory Structure

`src` - Entire code is in this file

`src > components` - Contains different components at the moment has only one component which is `chat`

`utils > helper` - Contains helper function to find the response of the user's message

`utils > responses` - Constant file of the messages for the user's input

`app.js` - Loads the web components

`index.html` - add chat tags here

# TODOs
1. We can add more features for accessibility
2. We can imporve styling
3. We can optimize webcomponent code more efficiently
4. Add more validation for input field
5. We can connect with third party bot or our own.
6. Add production mod where we can cache and minify js css and html
7. Many more :)
