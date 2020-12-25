import React from 'react'
import Image from 'next/image'
import '../styles/home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
//  VER PQ OS INCONES RENDERIZAM ANTES SCARY, 

function Navigation(){
    return(
        <nav id="navbar">
            <ul className="nav-list">
                <li><a href="#welcome-section">Welcome</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
        </nav>
    )
}

function Description(props){
    if(props.descLang){
        return(
                <p className="description">
                    The pages in this portfolio were initially made to complete the challenges of the
                    platform <a href="https://www.freecodecamp.org/" target="_blank" className="text-link">FreeCodeCamp</a>.<br/>
                    Now I modify and improve them, studying and practicing the technologies already implemented or that I intend to add. <br/>
                    The all source code it is open in <a href="http://github.com/marcosvmds" target="_blank" className="text-link">my GitHub</a>.
                </p>                
        )
    } else return (
                <p className="description">
                    As páginas neste portfólio inicialmente foram feitas para conclusão dos desafios da
                    plataforma <a href="https://www.freecodecamp.org/" target="_blank" className="text-link">FreeCodeCamp</a>.<br/>   
                    Agora eu às modifico e melhoro, estudando e praticando as tecnologias já implementadas ou que pretendo adicionar.<br/>
                    Todo o código está disponível no <a href="http://github.com/marcosvmds" target="_blank" className="text-link">meu GitHub</a>.                          
                </p>   
                
    )
}
class Welcome extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            lang: false
        }
        this.langChange = this.langChange.bind(this)
    }  
    titles(){
        return (
            <div className="titles">               
                <hr/>
                <h1>Marcos Mazzei</h1>
                <h2>FCC Front-end dev portfolio</h2>
            </div>   
        )
    }
    langChange(){
        this.setState(prevState=>({
            lang: !prevState.lang
        }))
    }
    render(){
        if(this.state.lang){
            return (
                <section id="welcome-section">
                    <this.titles/>
                    <span className="descWrapper">
                        <Description descLang={this.state.lang}/>
                        <div className="langBtn" onClick={this.langChange}>Para português</div>  
                    </span>                    
                </section>                           
            )
        } else {
            return(
                <section id="welcome-section">
                    <this.titles/>
                    <span className="descWrapper">
                        <Description descLang={this.state.lang}/>
                        <div className="langBtn" onClick={this.langChange}>To english</div> 
                    </span>        
                </section>
            )
        }         
    }    
}

class Projects extends React.Component {
    constructor(props){
        super(props)
    }
 
    render(){        
        const projetinhos = this.props.projects.map((p,i)=>{
            return (<a href={p.path} className="project project-tile" key={i}>
                        <span className="img-container">
                            <FontAwesomeIcon className="icon" icon={faEye}/>
                            <Image src={p.preview} width="auto" height="auto" 
                                className="project-img"  layout="responsive" alt="Project preview img" />
                        </span>                       
                        <p className="project-title">{p.title}</p>
                    </a>)
        })
        return(
            <section id="projects">
                <h2>projects</h2>
                <div className="projects-grid">
                   {projetinhos}                  
                </div>
                <a href="#projects" className="btn">
                Return to top</a>
            </section>           
        )
    }
}

function Contacts(props){

    return(
        <section id="contact">
        <h2>contacts and social networks</h2>
        <p className="contact-sub">Cellphone: +55 11 {props.phone}</p>
            <ul>
                <li className="contact">
                    <a className="contact-link" href={"mailto:"+props.email}>
                    <p><FontAwesomeIcon icon={faEnvelopeSquare} className="icon"/> E-mail</p>
                    </a>                  
                </li>
                <li className="contact">
                    <a className="contact-link" id="profile-link" 
                    href="http://github.com/marcosvmds" target="_blank">
                        <p><FontAwesomeIcon icon={faGithubSquare}/> GitHub</p>
                    </a>                  
                </li>
                <li className="contact">
                    <a className="contact-link" 
                    href="https://www.linkedin.com/in/marcosvmds/"  target="_blank">
                        <p><FontAwesomeIcon icon={faLinkedin} className="icon"/> Linkedin</p>
                    </a>                  
                </li>
            </ul>
        </section>
    )
}
const projetos = [
    {
        path: "random-quote",
        title: "random champion quotes",
        preview: "/static/randomquote.png",
        frameworks: ["React", "Next"]
    },
    {
        path: "markdown-previewer",
        title: "markdown previewer",
        preview: "/static/markdownpreviewer.png",
        frameworks: ["React", "Next"]
    }
]
function Home(props) {
    return (
        <>
            <Navigation />
            <Welcome />
            <Projects projects={projetos} />
            <Contacts phone="973382281" email="mazzeimarcosv@gmail.com" />   
        </>        
    )
}
export default Home