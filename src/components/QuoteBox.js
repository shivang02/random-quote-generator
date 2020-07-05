import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

class QuoteBox extends Component {

    render() { 
            return (
                /*The outer box */
                <div className="quote-box">
                {/*The quote*/}
                    <div className="main-quote" id="text">
                        <h1>
                            {this.props.myQuote.text}
                        </h1>
                    </div>
                {/*The author of the quote*/}
                    <div className="author" id="author">
                        <p>
                            {this.props.myQuote.author}
                        </p>
                    </div>

                    <div className="button-box">
                        {/*Tweet button*/}
                        <div className="social-button-box">
                            <a href="" id="tweet-quote" target="_blank" className="social-button" onClick={this.props.tweetMe} title="Post on Twitter!">
                                <FontAwesomeIcon icon={faTwitterSquare} id="twitter-icon"/>
                            </a>
                        </div>
                        {/*New quote button*/}
                        <div className="new-quote-button-box">
                            <button onClick={this.props.newQuote} title="Generate a new quote" id="new-quote">New Quote</button>
                        </div>
                    </div>
                </div>
        )}
    }

export default QuoteBox
