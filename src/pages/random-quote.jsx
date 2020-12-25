//RANDOM QUOTE #1//
import '../styles/randomquotes.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

class QuoteBox extends React.Component{     
        constructor(props){
            super(props);
            this.state = {
                text: "",
                author: "",
                img: "",
                color: ""          
            }
            this.newQuote = this.newQuote.bind(this)
        }
    componentDidMount(){
        this.newQuote();
    }
    componentDidUpdate(){
        document.body.style.backgroundColor = this.state.color;
    }
    newQuote(){
        const random = {...quotes[Math.round(Math.random()*(quotes.length-1))]}
        this.setState(()=>({
            text: random.text,
            author: random.author,
            img: random.img,
            color: random.color
        }));
    }
    render(){
        return(
            <div className="wallpaper" style={{backgroundImage:`url(${this.state.img})`}}>
                <div id="quote-box">
                <p id="text">
                    <FontAwesomeIcon icon={faQuoteLeft} id="quoteIcon" className="icon" style={{color:this.state.color}}/>
                    {this.state.text}
                </p>

                <div id="author">- {this.state.author}</div>

                {/* <hr></hr> */}
                
                <div className="clickables" style={{borderColor:this.state.color}}>
                    <a href="http://www.twitter.com/intent/tweet" target="_blank" id="tweet-quote" >
                        <FontAwesomeIcon icon={faTwitterSquare} id="ttIcon" className="icon" style={{color:this.state.color}}/>
                    </a>
                    <button id="new-quote" onClick={this.newQuote} style={{backgroundColor:this.state.color}}>
                        Nova frase
                    </button>
                </div>           
             </div>

            </div>           
        )
    }
}

export default function App(){
    return(
        <div id="random-quote-app" className="app">
            <QuoteBox />
        </div>
    )
} 

const quotes = [
    {
        text: "Você vai sentir falta do meu abraço",
        author: "Cassiopeia",
        img: "https://lolwp.com/wp-content/uploads/2014/09/Cassiopeia-Classic.jpg",
        color: "green"
    },
    {
        text: "Quem não controla os peões, é um deles.",
        author: "Cassiopeia",
        img: "https://lolwp.com/wp-content/uploads/Jade-Fang-Cassiopeia.jpg",
        color: "#00c0a6"
    },
    {
        text: "Sinta o poder do verdadeiro gelo",
        author: "Anivia",
        img: "https://lolwp.com/wp-content/uploads/2012/02/Anivia-Classic.jpg",
        color: "#74ffff"
    },
    {
        text: "É isso que você chama de Ser civilizado?!",
        author: "Nidalee",
        img: "https://lolwp.com/wp-content/uploads/Nidalee-Classic.jpg",
        color: "#008f18"
    },
    {
        text: "De volta a estaca 7...",
        author: "Ekko",
        img: "https://lolwp.com/wp-content/uploads/2015/05/Ekko-Classic-Wallpaper.jpg",
        color: "white"
    },
    {
        text: "De volta a estaca 7...",
        author: "Ekko",
        img: "https://lolwp.com/wp-content/uploads/2015/05/Ekko-Classic-Wallpaper.jpg",
        color: "white"
    },
    {
        text: "Não importa quanto tempo você tem, mas como você usa.",
        author: "Ekko",
        img: "https://lolwp.com/wp-content/uploads/2015/05/Sandstorm-Ekko.jpg",
        color: "goldenrod"
    },
    {
        text: "A dor é temporária, a vitória é eterna.",
        author: "Aatrox",
        img: "https://lolwp.com/wp-content/uploads/2013/05/Aatrox-Classic.jpg",
        color: "#d80000"
    },
    {
        text: "Com garras ou lanças, seu fim será o mesmo.",
        author: "Nidalee",
        img: "https://lolwp.com/wp-content/uploads/2012/02/Warring-Kingdoms-Nidalee.jpg",
        color: "crimson"
    },
    {
        text: "Eu sou o seu pior pesadelo!",
        author: "Tryndamere",
        img: "https://lolwp.com/wp-content/uploads/Demonblade-Tryndamere.jpg",
        color: "#eb4a00"
    },
    {
        text: "Essa sede me consome.",
        author: "Tryndamere",
        img: "https://lolwp.com/wp-content/uploads/Tryndamere-Classic-Reworked.jpg",
        color: "#474747"
    }
]