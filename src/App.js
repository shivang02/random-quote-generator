import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';

class App extends Component {
  constructor(props) {
    super(props)

      this.state = {
        allQuotes: [],
        quote: {},
        isLoading: true,
        error: null
      }
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then( data => {
        console.log('your data', [data]);
        this.setState({
          allQuotes: data,
          quote: data[Math.floor(Math.random() * 100)],
          isLoading: false,
          error: null
        })
      })
      .catch(error => {
        this.setState({ error: error })
        console.log(error)
      })
  }

  GenerateNewQuote = () => {
    this.setState({
      quote: this.state.allQuotes[Math.floor(Math.random() * 100)],
      error: null,
      isLoading: false
    })
  }

  TweetCode =() => {
    document.getElementById("tweet-quote").href =`https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + this.state.quote.text + '" ' + this.state.quote.author)}`;
  }

  render () {
    if(this.state.isLoading) {
      return (
        <div className="App">
          <QuoteBox myQuote={{text:"Loading", author:"Loading"}} newQuote={null} tweetMe={null} />
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <QuoteBox myQuote={this.state.quote} newQuote={this.GenerateNewQuote} tweetMe={this.TweetCode}/>
        </div>
      );
    }
  }
}

export default App;
