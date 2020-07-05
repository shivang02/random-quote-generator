# Random Quote Generator
This is web app was made using React.js and CSS, The basic code was bootstrapped using `npx create-react-app \[filename\]`
The app fetches the quotes from API at "https://type.fit/api/quotes" and displays a random quote from it.
## App.js
The App component exported from this file renders in the DOM. The App Class component fetches the data from the mentioned API and passes it to QuoteBox Component as props. 
## QuoteBox.js
This file's component gets the quote and author name as well as functions for new quote generation and tweeting the quote as props from the parent App component at App.js
## App.css
This file cotains the styling for all the components in the app.