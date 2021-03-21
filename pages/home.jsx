import React from 'react'
import Image from 'next/image'
import '../styles/home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons"

function Description(){
    return(
        <p className="description">
            The pages below were initially made to complete the challenges of the
            platform <a href="https://www.freecodecamp.org/" target="_blank" className="text-link">FreeCodeCamp</a>.<br/>
            Checkout these and others projects in <a href="http://github.com/marcosvmds" target="_blank" className="text-link">my full portfolio</a>.
        </p>                
    )
}                
class Projects extends React.Component {
    constructor(props){
        super(props)
    }
    render(){        
        const projetinhos = this.props.projects.map((p,i)=>{
            return (<a href={p.path} className="project project-tile" key={i} target="_blank">
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
                <span className="descWrapper">
                    <Description/>
                </span> 
                <div className="projects-grid">
                   {projetinhos}                  
                </div>
            </section>           
        )
    }
}
const projetos = [
    {
        path: "random-quote",
        title: "random champion quotes",
        preview: "/randomquote.jpg",
        technologies: ["React", "Next"]
    },
    {
        path: "markdown-previewer",
        title: "markdown previewer",
        preview: "/markdownpreviewer.jpg",
        technologies: ["React", "Next"]
    },
    {
        path: "drum-machine",
        title: "drum machine",
        preview: "/drummachine.jpg",
        technologies: ["React", "Next", "React Hooks"]
    },
    {
        path: "calculator",
        title: "formula calculator",
        preview: "/calculator.jpg",
        technologies: ["React", "Next", "Styled Components"]
    }
]
function Home(props) {
    return (
        <>
            <Projects projects={projetos} />
        </>        
    )
}
export default Home