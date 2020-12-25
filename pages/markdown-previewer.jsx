<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.7/marked.min.js" integrity="sha512-Sl04EWeJ0QgILm83WoubQbZqh71aWLJP8xnswnKSBI37S+ZtrWVtSHmd1YaYYdC1g9PWN1siY7KO2jU3HtCVHA==" crossorigin="anonymous"></script>;
import '../styles/markdownpreviewer.scss'
import '../styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";

const marked = require("marked");

marked.setOptions({
    breaks: true
  });

  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  };

class MarkdownPreviewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: defaultText,
            window: 'windowDefault' //maxEditor, maxPreview, 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMaxPreview = this.handleMaxPreview.bind(this);
        this.handleMaxEditor = this.handleMaxEditor.bind(this);
        this.handleCompress = this.handleCompress.bind(this);
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        });
    }
    handleMaxPreview(){
        this.setState({
            window: 'maxPreview'
        });
    }
    handleMaxEditor(){
        this.setState({
            window: 'maxEditor'
        });
    }
    handleCompress(){
        this.setState({
            window: 'windowDefault'
        });
    }
    render(){
        let windowsProps = [];
        switch(this.state.window){
            case 'maxEditor': 
                windowsProps = ['editorWrapper maximized', 'previewWrapper hide', faCompress, 
                                [this.handleCompress, this.handleCompress]];
                break;
            case 'maxPreview': 
                windowsProps = ['editorWrapper hide', 'previewWrapper maximized', faCompress,
                               [this.handleCompress, this.handleCompress]];
                break;
            default: 
                windowsProps = ['editorWrapper', 'previewWrapper', faExpand,
                                [this.handleMaxEditor, this.handleMaxPreview]];
        }
        return(
            <div id="app">
                <div className={windowsProps[0]}>
                    <Toolbar icon={windowsProps[2]} onClick={windowsProps[3][0]} text="Editor"/>
                    <Editor input={this.state.input} onChange={this.handleChange}/>
                </div>
                <div className={windowsProps[1]}>
                    <Toolbar icon={windowsProps[2]} onClick={windowsProps[3][1]} text="Preview"/>
                    <Previewer input={this.state.input}/>
                </div>
            </div>
        )
    }
}
const Toolbar = props => {
    return (
        <div className="toolbar">
            <FontAwesomeIcon icon={faMarkdown}/>
            {props.text}
            <FontAwesomeIcon className="icon" icon={props.icon} onClick={props.onClick} />
        </div>
    )
}
const Editor = props => {
    return (
        <textarea id="editor" onChange={props.onChange} value={props.input}/>
    )
}
const Previewer = props => {
    return (
        <div id="preview"
            dangerouslySetInnerHTML={{
                __html: marked(props.input, { renderer: renderer })
            }}
        />
    )
}
export default function App(){
    return (
        <MarkdownPreviewer id="teste"/>
    )
}

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://raddevon.com/wp-content/uploads/2018/10/react.jpg)
`;