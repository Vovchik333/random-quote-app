import React from 'react';
import './QuoteBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const quotes = [
    {
        text: 'The only limit to our realization of tomorrow is our doubts of today.',
        author: 'Franklin D. Roosevelt'
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: 'Robert Frost'
    },
    {
        text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston Churchill'
    },
    {
        text: 'The future belongs to those who believe in the beauty of their dreams.',
        author: 'Eleanor Roosevelt'
    },
    {
        text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
        author: 'Ralph Waldo Emerson'
    }
];

const colors = [
    '#F08080', '#87CEEB', '#3CB371', '#DAA520', '#6A5ACD'
];

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: quotes[0]
        }
        this.handleGetNewQuote = this.handleGetNewQuote.bind(this);
    }

    handleGetNewQuote() {
        const expression = Math.floor(Math.random() * 4);
        this.setState({
            quote: quotes[expression]
        });
        document.documentElement.style.setProperty('--main-color', colors[expression]);
    }

    render() {
        return (
            <div id="quote-box" className='quote-box'>
                <blockquote className='quote-box__content'>
                    <p id="text" className='quote-box__text'>{this.state.quote.text}</p>
                    <footer id="author" className='quote-box__author'><em>{this.state.quote.author}</em></footer>
                </blockquote>
                <section className='quote-box__buttons'>
                    <a 
                        id="tweet-quote" 
                        className='button' 
                        rel="noreferrer"
                        href={`https://twitter.com/intent/tweet?text="${this.state.quote.text}"@${this.state.quote.author}`} 
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <button id="new-quote" className='button' onClick={this.handleGetNewQuote}>New Quote</button>
                </section>
            </div>
        );
    }
}

export { QuoteBox };
